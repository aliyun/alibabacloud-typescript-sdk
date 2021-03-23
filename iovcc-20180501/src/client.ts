// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUploadedFunctionFileInfoRequest extends $tea.Model {
  projectId?: string;
  objectKey?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      objectKey: 'ObjectKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      objectKey: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadedFunctionFileInfoResponseBody extends $tea.Model {
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

export class AddUploadedFunctionFileInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUploadedFunctionFileInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUploadedFunctionFileInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionBlackDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  deviceIdType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      deviceIdType: 'DeviceIdType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      deviceIdType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionBlackDevicesResponseBody extends $tea.Model {
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

export class AddVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionGroupDevicesRequest extends $tea.Model {
  deviceIdType?: string;
  projectId?: string;
  deviceIds?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIdType: 'DeviceIdType',
      projectId: 'ProjectId',
      deviceIds: 'DeviceIds',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIdType: 'string',
      projectId: 'string',
      deviceIds: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionGroupDevicesResponseBody extends $tea.Model {
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

export class AddVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  deviceIdType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      deviceIdType: 'DeviceIdType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      deviceIdType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesResponseBody extends $tea.Model {
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

export class AddVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  groupIds?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      groupIds: 'GroupIds',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      groupIds: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionWhiteDevicesByDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionWhiteDevicesByDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectAssistDeviceRequest extends $tea.Model {
  hardwareId?: string;
  allowCommandExtension?: boolean;
  deviceId?: string;
  serialNumber?: string;
  VIN?: string;
  UUID?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      hardwareId: 'HardwareId',
      allowCommandExtension: 'AllowCommandExtension',
      deviceId: 'DeviceId',
      serialNumber: 'SerialNumber',
      VIN: 'VIN',
      UUID: 'UUID',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardwareId: 'string',
      allowCommandExtension: 'boolean',
      deviceId: 'string',
      serialNumber: 'string',
      VIN: 'string',
      UUID: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectAssistDeviceResponseBody extends $tea.Model {
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

export class ConnectAssistDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConnectAssistDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConnectAssistDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceRequest extends $tea.Model {
  projectId?: string;
  deviceType?: string;
  deviceBrandId?: string;
  deviceBrand?: string;
  deviceModelId?: string;
  deviceModel?: string;
  deviceCountStatType?: string;
  isQueryNewRegistrationDevice?: string;
  startTime?: string;
  endTime?: string;
  isQueryYearlyActivate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceType: 'DeviceType',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      deviceCountStatType: 'DeviceCountStatType',
      isQueryNewRegistrationDevice: 'IsQueryNewRegistrationDevice',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isQueryYearlyActivate: 'IsQueryYearlyActivate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceType: 'string',
      deviceBrandId: 'string',
      deviceBrand: 'string',
      deviceModelId: 'string',
      deviceModel: 'string',
      deviceCountStatType: 'string',
      isQueryNewRegistrationDevice: 'string',
      startTime: 'string',
      endTime: 'string',
      isQueryYearlyActivate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: CountActivatedOrNewRegistrationDeviceResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: CountActivatedOrNewRegistrationDeviceResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountActivatedOrNewRegistrationDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountActivatedOrNewRegistrationDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsRequest extends $tea.Model {
  deviceBrandId?: number;
  deviceBrand?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      deviceBrand: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsResponseBody extends $tea.Model {
  requestId?: string;
  brandCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      brandCount: 'BrandCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      brandCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDeviceBrandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDeviceBrandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsResponseBody extends $tea.Model {
  requestId?: string;
  modelCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modelCount: 'ModelCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modelCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountProjectsResponseBody extends $tea.Model {
  requestId?: string;
  projectCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectCount: 'ProjectCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponseBody extends $tea.Model {
  requestId?: string;
  yunIdInfo?: CountYunIdInfoResponseBodyYunIdInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      yunIdInfo: 'YunIdInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      yunIdInfo: { 'type': 'array', 'itemType': CountYunIdInfoResponseBodyYunIdInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountYunIdInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountYunIdInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionRequest extends $tea.Model {
  isForceUpgrade?: string;
  isAllowNewInstall?: string;
  projectId?: string;
  appId?: string;
  appVersion?: string;
  versionCode?: string;
  installType?: string;
  remark?: string;
  releaseNote?: string;
  isSilentUpgrade?: string;
  packageUrl?: string;
  isNeedRestart?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  deviceAdapterList?: string;
  apkMd5?: string;
  static names(): { [key: string]: string } {
    return {
      isForceUpgrade: 'IsForceUpgrade',
      isAllowNewInstall: 'IsAllowNewInstall',
      projectId: 'ProjectId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      versionCode: 'VersionCode',
      installType: 'InstallType',
      remark: 'Remark',
      releaseNote: 'ReleaseNote',
      isSilentUpgrade: 'IsSilentUpgrade',
      packageUrl: 'PackageUrl',
      isNeedRestart: 'IsNeedRestart',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      deviceAdapterList: 'DeviceAdapterList',
      apkMd5: 'ApkMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isForceUpgrade: 'string',
      isAllowNewInstall: 'string',
      projectId: 'string',
      appId: 'string',
      appVersion: 'string',
      versionCode: 'string',
      installType: 'string',
      remark: 'string',
      releaseNote: 'string',
      isSilentUpgrade: 'string',
      packageUrl: 'string',
      isNeedRestart: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      deviceAdapterList: 'string',
      apkMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBody extends $tea.Model {
  requestId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterRequest extends $tea.Model {
  versionType?: string;
  blackWhiteType?: string;
  value?: string;
  projectId?: string;
  valueCompareType?: string;
  name?: string;
  valueType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionType: 'VersionType',
      blackWhiteType: 'BlackWhiteType',
      value: 'Value',
      projectId: 'ProjectId',
      valueCompareType: 'ValueCompareType',
      name: 'Name',
      valueType: 'ValueType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionType: 'string',
      blackWhiteType: 'string',
      value: 'string',
      projectId: 'string',
      valueCompareType: 'string',
      name: 'string',
      valueType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterResponseBody extends $tea.Model {
  requestId?: string;
  customizedFilterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedFilterId: 'CustomizedFilterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedFilterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyRequest extends $tea.Model {
  versionId?: string;
  projectId?: string;
  name?: string;
  value?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      projectId: 'ProjectId',
      name: 'Name',
      value: 'Value',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      projectId: 'string',
      name: 'string',
      value: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyResponseBody extends $tea.Model {
  requestId?: string;
  customizedPropertyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedPropertyId: 'CustomizedPropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedPropertyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomizedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomizedPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  modelName?: string;
  projectId?: string;
  hardwareId?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      projectId: 'ProjectId',
      hardwareId: 'HardwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      projectId: 'string',
      hardwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  requestId?: string;
  deviceId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'number',
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

export class CreateDeviceBrandRequest extends $tea.Model {
  projectId?: string;
  brandName?: string;
  manufacture?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      brandName: 'BrandName',
      manufacture: 'Manufacture',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      brandName: 'string',
      manufacture: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceBrandResponseBody extends $tea.Model {
  requestId?: string;
  brandId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      brandId: 'BrandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      brandId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceBrandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceBrandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceBrandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelRequest extends $tea.Model {
  initUsageType?: string;
  canCreateDeviceId?: string;
  modelName?: string;
  hardwareType?: string;
  brandName?: string;
  description?: string;
  deviceType?: string;
  projectId?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      initUsageType: 'InitUsageType',
      canCreateDeviceId: 'CanCreateDeviceId',
      modelName: 'ModelName',
      hardwareType: 'HardwareType',
      brandName: 'BrandName',
      description: 'Description',
      deviceType: 'DeviceType',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initUsageType: 'string',
      canCreateDeviceId: 'string',
      modelName: 'string',
      hardwareType: 'string',
      brandName: 'string',
      description: 'string',
      deviceType: 'string',
      projectId: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelResponseBody extends $tea.Model {
  requestId?: string;
  deviceModelId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceModelId: 'DeviceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceModelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicRequest extends $tea.Model {
  appKey?: string;
  rootTopic?: string;
  projectId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      rootTopic: 'RootTopic',
      projectId: 'ProjectId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      rootTopic: 'string',
      projectId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicResponseBody extends $tea.Model {
  requestId?: string;
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMqttRootTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMqttRootTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  projectId?: string;
  authType?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      authType: 'AuthType',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      authType: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionRequest extends $tea.Model {
  isForceNightUpgrade?: string;
  maxClientVersion?: string;
  projectId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  releaseNote?: string;
  remark?: string;
  blackVersionList?: string;
  isMilestone?: string;
  minClientVersion?: string;
  whiteVersionList?: string;
  isForceUpgrade?: string;
  nightUpgradeDownloadType?: string;
  nightUpgradeIsShowTip?: string;
  nightUpgradeIsAllowedCancel?: string;
  romList?: string;
  enableMobileDownload?: string;
  mobileDownloadMaxSize?: string;
  static names(): { [key: string]: string } {
    return {
      isForceNightUpgrade: 'IsForceNightUpgrade',
      maxClientVersion: 'MaxClientVersion',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      blackVersionList: 'BlackVersionList',
      isMilestone: 'IsMilestone',
      minClientVersion: 'MinClientVersion',
      whiteVersionList: 'WhiteVersionList',
      isForceUpgrade: 'IsForceUpgrade',
      nightUpgradeDownloadType: 'NightUpgradeDownloadType',
      nightUpgradeIsShowTip: 'NightUpgradeIsShowTip',
      nightUpgradeIsAllowedCancel: 'NightUpgradeIsAllowedCancel',
      romList: 'RomList',
      enableMobileDownload: 'EnableMobileDownload',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isForceNightUpgrade: 'string',
      maxClientVersion: 'string',
      projectId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      releaseNote: 'string',
      remark: 'string',
      blackVersionList: 'string',
      isMilestone: 'string',
      minClientVersion: 'string',
      whiteVersionList: 'string',
      isForceUpgrade: 'string',
      nightUpgradeDownloadType: 'string',
      nightUpgradeIsShowTip: 'string',
      nightUpgradeIsAllowedCancel: 'string',
      romList: 'string',
      enableMobileDownload: 'string',
      mobileDownloadMaxSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  projectName?: string;
  projectDesc?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      projectDesc: 'ProjectDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
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

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectAppRequest extends $tea.Model {
  projectId?: string;
  appName?: string;
  appPkgName?: string;
  osType?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appName: 'AppName',
      appPkgName: 'AppPkgName',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appName: 'string',
      appPkgName: 'string',
      osType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectAppResponseBody extends $tea.Model {
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

export class CreateProjectAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceRequest extends $tea.Model {
  projectId?: string;
  appKey?: string;
  interfaceName?: string;
  invokeType?: string;
  params?: string;
  groupName?: string;
  methodName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appKey: 'AppKey',
      interfaceName: 'InterfaceName',
      invokeType: 'InvokeType',
      params: 'Params',
      groupName: 'GroupName',
      methodName: 'MethodName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appKey: 'string',
      interfaceName: 'string',
      invokeType: 'string',
      params: 'string',
      groupName: 'string',
      methodName: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRpcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRpcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemaSubscribeRequest extends $tea.Model {
  deviceModel?: string;
  subscribeList?: string;
  projectId?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      subscribeList: 'SubscribeList',
      projectId: 'ProjectId',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      subscribeList: 'string',
      projectId: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemaSubscribeResponseBody extends $tea.Model {
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

export class CreateSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShadowSchemaRequest extends $tea.Model {
  deviceModelId?: string;
  authType?: string;
  namespace?: string;
  projectId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      authType: 'AuthType',
      namespace: 'Namespace',
      projectId: 'ProjectId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'string',
      authType: 'string',
      namespace: 'string',
      projectId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShadowSchemaResponseBody extends $tea.Model {
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

export class CreateShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  source?: string;
  fileIds?: string;
  functionIds?: string;
  invocationMode?: number;
  sandbox?: number;
  production?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      source: 'Source',
      fileIds: 'FileIds',
      functionIds: 'FunctionIds',
      invocationMode: 'InvocationMode',
      sandbox: 'Sandbox',
      production: 'Production',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      source: 'string',
      fileIds: 'string',
      functionIds: 'string',
      invocationMode: 'number',
      sandbox: 'number',
      production: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponseBody extends $tea.Model {
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

export class CreateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationRequest extends $tea.Model {
  appKey?: string;
  PAppKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      PAppKey: 'PAppKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      PAppKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppKeyRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppKeyRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationsRequest extends $tea.Model {
  appKeys?: string;
  appServerId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      appServerId: 'AppServerId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: 'string',
      appServerId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationsResponseBody extends $tea.Model {
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

export class CreateUpstreamAppKeyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppKeyRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppKeyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupRequest extends $tea.Model {
  maxCount?: string;
  projectId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishRequest extends $tea.Model {
  isTotalPrepublish?: string;
  versionId?: string;
  versionType?: string;
  name?: string;
  projectId?: string;
  barrierCount?: string;
  static names(): { [key: string]: string } {
    return {
      isTotalPrepublish: 'IsTotalPrepublish',
      versionId: 'VersionId',
      versionType: 'VersionType',
      name: 'Name',
      projectId: 'ProjectId',
      barrierCount: 'BarrierCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTotalPrepublish: 'string',
      versionId: 'string',
      versionType: 'string',
      name: 'string',
      projectId: 'string',
      barrierCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishResponseBody extends $tea.Model {
  requestId?: string;
  prepublishId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishId: 'PrepublishId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionPrepublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionPrepublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestRequest extends $tea.Model {
  deviceGroupId?: string;
  description?: string;
  versionId?: string;
  versionType?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      description: 'Description',
      versionId: 'VersionId',
      versionType: 'VersionType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      description: 'string',
      versionId: 'string',
      versionType: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestResponseBody extends $tea.Model {
  requestId?: string;
  testId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      testId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayPublishOsVersionRequest extends $tea.Model {
  versionId?: string;
  projectId?: string;
  prepubTime?: number;
  publishTime?: number;
  downTime?: number;
  email?: string;
  description?: string;
  sendMessage?: string;
  prepublishCount?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      projectId: 'ProjectId',
      prepubTime: 'PrepubTime',
      publishTime: 'PublishTime',
      downTime: 'DownTime',
      email: 'Email',
      description: 'Description',
      sendMessage: 'SendMessage',
      prepublishCount: 'PrepublishCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      projectId: 'string',
      prepubTime: 'number',
      publishTime: 'number',
      downTime: 'number',
      email: 'string',
      description: 'string',
      sendMessage: 'string',
      prepublishCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayPublishOsVersionResponseBody extends $tea.Model {
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

export class DelayPublishOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DelayPublishOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DelayPublishOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllCustomizedFiltersRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllCustomizedFiltersResponseBody extends $tea.Model {
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

export class DeleteAllCustomizedFiltersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAllCustomizedFiltersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAllCustomizedFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllVersionGroupDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllVersionGroupDevicesResponseBody extends $tea.Model {
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

export class DeleteAllVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAllVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAllVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedFilterRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedFilterResponseBody extends $tea.Model {
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

export class DeleteCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedPropertyRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedPropertyResponseBody extends $tea.Model {
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

export class DeleteCustomizedPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomizedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomizedPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  deviceId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      projectId: 'string',
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

export class DeleteFunctionFileRequest extends $tea.Model {
  projectId?: string;
  fileName?: string;
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileName: 'string',
      fileType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionFileResponseBody extends $tea.Model {
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

export class DeleteFunctionFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFunctionFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFunctionFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMqttRootTopicRequest extends $tea.Model {
  appKey?: string;
  rootTopic?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      rootTopic: 'RootTopic',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      rootTopic: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMqttRootTopicResponseBody extends $tea.Model {
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

export class DeleteMqttRootTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMqttRootTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMqttRootTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
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

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOpenAccountRequest extends $tea.Model {
  identityId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOpenAccountResponseBody extends $tea.Model {
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

export class DeleteOpenAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOpenAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOpenAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectAppRequest extends $tea.Model {
  projectId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectAppResponseBody extends $tea.Model {
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

export class DeleteProjectAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRpcServiceRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRpcServiceResponseBody extends $tea.Model {
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

export class DeleteRpcServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRpcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRpcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemaSubscribeRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemaSubscribeResponseBody extends $tea.Model {
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

export class DeleteSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShadowSchemaRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShadowSchemaResponseBody extends $tea.Model {
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

export class DeleteShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponseBody extends $tea.Model {
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

export class DeleteTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppKeyRelationRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppKeyRelationResponseBody extends $tea.Model {
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

export class DeleteUpstreamAppKeyRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUpstreamAppKeyRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUpstreamAppKeyRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppServerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppServerResponseBody extends $tea.Model {
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

export class DeleteUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllBlackDevicesRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllBlackDevicesResponseBody extends $tea.Model {
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

export class DeleteVersionAllBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionAllBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionAllBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllWhiteDevicesRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllWhiteDevicesResponseBody extends $tea.Model {
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

export class DeleteVersionAllWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionAllWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionAllWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesResponseBody extends $tea.Model {
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

export class DeleteVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesByIdRequest extends $tea.Model {
  ids?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesByIdResponseBody extends $tea.Model {
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

export class DeleteVersionBlackDevicesByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionBlackDevicesByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionBlackDevicesByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionDeviceGroupResponseBody extends $tea.Model {
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

export class DeleteVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  deviceGroupId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      deviceGroupId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceResponseBody extends $tea.Model {
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

export class DeleteVersionGroupDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionGroupDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionGroupDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceByIdRequest extends $tea.Model {
  projectId?: string;
  deviceGroupId?: string;
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceGroupId: 'string',
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceByIdResponseBody extends $tea.Model {
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

export class DeleteVersionGroupDeviceByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionGroupDeviceByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionGroupDeviceByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionTestRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionTestResponseBody extends $tea.Model {
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

export class DeleteVersionTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesResponseBody extends $tea.Model {
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

export class DeleteVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesByIdRequest extends $tea.Model {
  ids?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesByIdResponseBody extends $tea.Model {
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

export class DeleteVersionWhiteDevicesByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionWhiteDevicesByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionWhiteDevicesByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionFileRequest extends $tea.Model {
  projectId?: string;
  fileId?: string;
  deployEnv?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      deployEnv: 'DeployEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'string',
      deployEnv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionFileResponseBody extends $tea.Model {
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

export class DeployFunctionFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployFunctionFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployFunctionFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityRequest extends $tea.Model {
  projectId?: string;
  gatewayAppId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gatewayAppId: 'GatewayAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gatewayAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponseBody extends $tea.Model {
  requestId?: string;
  apiGatewayAppSecurity?: DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apiGatewayAppSecurity: 'ApiGatewayAppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apiGatewayAppSecurity: DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiGatewayAppSecurityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiGatewayAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBody extends $tea.Model {
  requestId?: string;
  appVersion?: DescribeAppVersionResponseBodyAppVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appVersion: DescribeAppVersionResponseBodyAppVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportResponseBody extends $tea.Model {
  requestId?: string;
  assistId?: string;
  assistDescription?: string;
  assistResult?: string;
  assistReason?: string;
  assistTag?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assistId: 'AssistId',
      assistDescription: 'AssistDescription',
      assistResult: 'AssistResult',
      assistReason: 'AssistReason',
      assistTag: 'AssistTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assistId: 'string',
      assistDescription: 'string',
      assistResult: 'string',
      assistReason: 'string',
      assistTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressResponseBody extends $tea.Model {
  requestId?: string;
  RTMPServer?: string;
  OTP?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      RTMPServer: 'RTMPServer',
      OTP: 'OTP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      RTMPServer: 'string',
      OTP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistRTMPServerAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistRTMPServerAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressResponseBody extends $tea.Model {
  requestId?: string;
  wsServer?: string;
  OTP?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wsServer: 'WsServer',
      OTP: 'OTP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wsServer: 'string',
      OTP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistWSServerAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistWSServerAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponseBody extends $tea.Model {
  requestId?: string;
  customizedFilter?: DescribeCustomizedFilterResponseBodyCustomizedFilter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedFilter: 'CustomizedFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedFilter: DescribeCustomizedFilterResponseBodyCustomizedFilter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaResponseBody extends $tea.Model {
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDefaultSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDefaultSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBody extends $tea.Model {
  requestId?: string;
  deviceInfo?: DescribeDeviceResponseBodyDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: DescribeDeviceResponseBodyDeviceInfo,
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

export class DescribeDeviceBrandRequest extends $tea.Model {
  projectId?: string;
  deviceBrandId?: number;
  deviceBrand?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceBrandId: 'number',
      deviceBrand: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponseBody extends $tea.Model {
  requestId?: string;
  deviceBrand?: DescribeDeviceBrandResponseBodyDeviceBrand;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceBrand: DescribeDeviceBrandResponseBodyDeviceBrand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceBrandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceBrandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoRequest extends $tea.Model {
  projectId?: string;
  queryType?: string;
  queryValue?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      queryType: 'string',
      queryValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoResponseBody extends $tea.Model {
  requestId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceIdByOuterInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceIdByOuterInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoRequest extends $tea.Model {
  deviceId?: string;
  deviceToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceToken: 'DeviceToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $tea.Model {
  requestId?: string;
  deviceInfo?: DescribeDeviceInfoResponseBodyDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: DescribeDeviceInfoResponseBodyDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelRequest extends $tea.Model {
  deviceModelId?: number;
  deviceModel?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceModel: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponseBody extends $tea.Model {
  requestId?: string;
  deviceModel?: DescribeDeviceModelResponseBodyDeviceModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceModel: 'DeviceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceModel: DescribeDeviceModelResponseBodyDeviceModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoRequest extends $tea.Model {
  projectId?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponseBody extends $tea.Model {
  requestId?: string;
  devices?: DescribeDeviceOnlineInfoResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      devices: { 'type': 'array', 'itemType': DescribeDeviceOnlineInfoResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceOnlineInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceOnlineInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  deviceModel?: string;
  path?: string;
  viewSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      deviceModel: 'DeviceModel',
      path: 'Path',
      viewSubscribed: 'ViewSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
      deviceModel: 'string',
      path: 'string',
      viewSubscribed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponseBody extends $tea.Model {
  requestId?: string;
  deviceShadow?: DescribeDeviceShadowResponseBodyDeviceShadow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceShadow: 'DeviceShadow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceShadow: DescribeDeviceShadowResponseBodyDeviceShadow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceShadowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceShadowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaRequest extends $tea.Model {
  deviceModel?: string;
  schemaVersion?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      schemaVersion: 'SchemaVersion',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      schemaVersion: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponseBody extends $tea.Model {
  requestId?: string;
  itemList?: DescribeDeviceValiditySchemaResponseBodyItemList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      itemList: { 'type': 'array', 'itemType': DescribeDeviceValiditySchemaResponseBodyItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceValiditySchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceValiditySchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageRequest extends $tea.Model {
  projectId?: string;
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponseBody extends $tea.Model {
  requestId?: string;
  message?: DescribeMessageResponseBodyMessage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: DescribeMessageResponseBodyMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusRequest extends $tea.Model {
  appKey?: string;
  clientId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientId: 'ClientId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      clientId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponseBody extends $tea.Model {
  requestId?: string;
  clientStatus?: DescribeMqttClientStatusResponseBodyClientStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientStatus: 'ClientStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientStatus: DescribeMqttClientStatusResponseBodyClientStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttClientStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttClientStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageRequest extends $tea.Model {
  appKey?: string;
  mid?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      mid: 'Mid',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      mid: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponseBody extends $tea.Model {
  requestId?: string;
  message?: DescribeMqttMessageResponseBodyMessage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: DescribeMqttMessageResponseBodyMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionRequest extends $tea.Model {
  appKey?: string;
  topic?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      topic: 'Topic',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      topic: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponseBody extends $tea.Model {
  requestId?: string;
  subscription?: DescribeMqttTopicSubscriptionResponseBodySubscription;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscription: 'Subscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscription: DescribeMqttTopicSubscriptionResponseBodySubscription,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttTopicSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttTopicSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountRequest extends $tea.Model {
  projectId?: string;
  identityId?: string;
  idp?: string;
  idToken?: string;
  openId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      identityId: 'IdentityId',
      idp: 'Idp',
      idToken: 'IdToken',
      openId: 'OpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      identityId: 'string',
      idp: 'string',
      idToken: 'string',
      openId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponseBody extends $tea.Model {
  requestId?: string;
  openAccount?: DescribeOpenAccountResponseBodyOpenAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openAccount: 'OpenAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openAccount: DescribeOpenAccountResponseBodyOpenAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOpenAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOpenAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  osVersion?: DescribeOsVersionResponseBodyOsVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersion: DescribeOsVersionResponseBodyOsVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBody extends $tea.Model {
  requestId?: string;
  project?: DescribeProjectResponseBodyProject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      project: DescribeProjectResponseBodyProject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityRequest extends $tea.Model {
  projectId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponseBody extends $tea.Model {
  requestId?: string;
  projectAppSecurity?: DescribeProjectAppSecurityResponseBodyProjectAppSecurity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectAppSecurity: 'ProjectAppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectAppSecurity: DescribeProjectAppSecurityResponseBodyProjectAppSecurity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectAppSecurityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaRequest extends $tea.Model {
  deviceModel?: string;
  isSimple?: boolean;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      isSimple: 'IsSimple',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      isSimple: 'boolean',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaResponseBody extends $tea.Model {
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroup?: DescribeVersionDeviceGroupResponseBodyDeviceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroup: DescribeVersionDeviceGroupResponseBodyDeviceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionRequest extends $tea.Model {
  originalId?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  idType?: string;
  diagnoseStyle?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      originalId: 'OriginalId',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      idType: 'IdType',
      diagnoseStyle: 'DiagnoseStyle',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalId: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      idType: 'string',
      diagnoseStyle: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionResponseBody extends $tea.Model {
  requestId?: string;
  diagnosisResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      diagnosisResult: 'DiagnosisResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      diagnosisResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiagnosisVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiagnosisVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsRequest extends $tea.Model {
  status?: string;
  projectId?: string;
  pageSize?: number;
  versionId?: string;
  deviceModelId?: string;
  pageIndex?: number;
  appId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      deviceModelId: 'DeviceModelId',
      pageIndex: 'PageIndex',
      appId: 'AppId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      pageSize: 'number',
      versionId: 'string',
      deviceModelId: 'string',
      pageIndex: 'number',
      appId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBody extends $tea.Model {
  requestId?: string;
  appVersionList?: FindAppVersionsResponseBodyAppVersionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appVersionList: 'AppVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appVersionList: FindAppVersionsResponseBodyAppVersionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindAppVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBody extends $tea.Model {
  requestId?: string;
  customizedFilterList?: FindCustomizedFiltersResponseBodyCustomizedFilterList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedFilterList: 'CustomizedFilterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedFilterList: FindCustomizedFiltersResponseBodyCustomizedFilterList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindCustomizedFiltersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindCustomizedFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBody extends $tea.Model {
  requestId?: string;
  customizedPropertyList?: FindCustomizedPropertiesResponseBodyCustomizedPropertyList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedPropertyList: 'CustomizedPropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedPropertyList: FindCustomizedPropertiesResponseBodyCustomizedPropertyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindCustomizedPropertiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindCustomizedPropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  versionId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  status?: string;
  isMilestone?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      status: 'Status',
      isMilestone: 'IsMilestone',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      versionId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      status: 'string',
      isMilestone: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBody extends $tea.Model {
  requestId?: string;
  osVersionList?: FindOsVersionsResponseBodyOsVersionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersionList: 'OsVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersionList: FindOsVersionsResponseBodyOsVersionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindOsVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindOsVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdRequest extends $tea.Model {
  projectId?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBody extends $tea.Model {
  requestId?: string;
  prepublishList?: FindPrepublishesByParentIdResponseBodyPrepublishList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishList: 'PrepublishList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishList: FindPrepublishesByParentIdResponseBodyPrepublishList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishesByParentIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishesByParentIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdRequest extends $tea.Model {
  projectId?: string;
  versionId?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'number',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponseBody extends $tea.Model {
  requestId?: string;
  prepublishList?: FindPrepublishesByVersionIdResponseBodyPrepublishList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishList: 'PrepublishList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishList: { 'type': 'array', 'itemType': FindPrepublishesByVersionIdResponseBodyPrepublishList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishesByVersionIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishesByVersionIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesRequest extends $tea.Model {
  prepublishId?: string;
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      prepublishId: 'PrepublishId',
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepublishId: 'string',
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindPrepublishPassedDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindPrepublishPassedDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishPassedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishPassedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindVersionBlackDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindVersionBlackDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsRequest extends $tea.Model {
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupList?: FindVersionDeviceGroupsResponseBodyDeviceGroupList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupList: 'DeviceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupList: FindVersionDeviceGroupsResponseBodyDeviceGroupList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesRequest extends $tea.Model {
  projectId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  deviceGroupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      deviceGroupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBody extends $tea.Model {
  requestId?: string;
  groupDeviceList?: FindVersionGroupDevicesResponseBodyGroupDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupDeviceList: 'GroupDeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupDeviceList: FindVersionGroupDevicesResponseBodyGroupDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  messageType?: string;
  testId?: string;
  versionId?: string;
  sendRecordId?: string;
  deviceId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      messageType: 'MessageType',
      testId: 'TestId',
      versionId: 'VersionId',
      sendRecordId: 'SendRecordId',
      deviceId: 'DeviceId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      messageType: 'string',
      testId: 'string',
      versionId: 'string',
      sendRecordId: 'string',
      deviceId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBody extends $tea.Model {
  requestId?: string;
  messageList?: FindVersionMessagesResponseBodyMessageList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageList: 'MessageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageList: FindVersionMessagesResponseBodyMessageList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsRequest extends $tea.Model {
  versionType?: string;
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  messageType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionType: 'VersionType',
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      messageType: 'MessageType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionType: 'string',
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      messageType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBody extends $tea.Model {
  requestId?: string;
  messageSendRecordList?: FindVersionMessageSendRecordsResponseBodyMessageSendRecordList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageSendRecordList: 'MessageSendRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageSendRecordList: FindVersionMessageSendRecordsResponseBodyMessageSendRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionMessageSendRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionMessageSendRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBody extends $tea.Model {
  requestId?: string;
  versionTestList?: FindVersionTestsResponseBodyVersionTestList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionTestList: 'VersionTestList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionTestList: FindVersionTestsResponseBodyVersionTestList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionTestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionTestsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindVersionWhiteDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindVersionWhiteDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlRequest extends $tea.Model {
  filename?: string;
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlResponseBody extends $tea.Model {
  requestId?: string;
  fileKey?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fileKey: 'FileKey',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fileKey: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAssistFileUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAssistFileUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaRequest extends $tea.Model {
  projectId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  uploadMeta?: GenerateFunctionFileUploadMetaResponseBodyUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadMeta: 'UploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadMeta: GenerateFunctionFileUploadMetaResponseBodyUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateFunctionFileUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateFunctionFileUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  accessId?: string;
  accessKey?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
      accessId: 'AccessId',
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
      accessId: 'string',
      accessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponseBody extends $tea.Model {
  requestId?: string;
  ossPostPolicy?: GenerateOssPostPolicyResponseBodyOssPostPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossPostPolicy: 'OssPostPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossPostPolicy: GenerateOssPostPolicyResponseBodyOssPostPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateOssPostPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateOssPostPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  ossUploadMeta?: GenerateOssUploadMetaResponseBodyOssUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadMeta: 'OssUploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadMeta: GenerateOssUploadMetaResponseBodyOssUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateOssUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateOssUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoRequest extends $tea.Model {
  sdks?: string;
  appId?: string;
  osType?: number;
  pkgName?: string;
  projectId?: string;
  certFileObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      sdks: 'Sdks',
      appId: 'AppId',
      osType: 'OsType',
      pkgName: 'PkgName',
      projectId: 'ProjectId',
      certFileObjectKey: 'CertFileObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdks: 'string',
      appId: 'string',
      osType: 'number',
      pkgName: 'string',
      projectId: 'string',
      certFileObjectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponseBody extends $tea.Model {
  requestId?: string;
  sdkDownloadInfo?: GenerateSdkDownloadInfoResponseBodySdkDownloadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkDownloadInfo: 'SdkDownloadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkDownloadInfo: GenerateSdkDownloadInfoResponseBodySdkDownloadInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateSdkDownloadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateSdkDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoRequest extends $tea.Model {
  plugins?: string;
  signMode?: string;
  osType?: number;
  pkgName?: string;
  projectId?: string;
  certFileObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      plugins: 'Plugins',
      signMode: 'SignMode',
      osType: 'OsType',
      pkgName: 'PkgName',
      projectId: 'ProjectId',
      certFileObjectKey: 'CertFileObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plugins: 'string',
      signMode: 'string',
      osType: 'number',
      pkgName: 'string',
      projectId: 'string',
      certFileObjectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponseBody extends $tea.Model {
  requestId?: string;
  sysAppDownloadInfo?: GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sysAppDownloadInfo: 'SysAppDownloadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sysAppDownloadInfo: GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateSysAppDownloadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateSysAppDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsRequest extends $tea.Model {
  packageName?: string;
  projectId?: string;
  targetVersionCode?: string;
  idType?: string;
  originalId?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      projectId: 'ProjectId',
      targetVersionCode: 'TargetVersionCode',
      idType: 'IdType',
      originalId: 'OriginalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      projectId: 'string',
      targetVersionCode: 'string',
      idType: 'string',
      originalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponseBody extends $tea.Model {
  requestId?: string;
  eventList?: GetDeviceAppUpdateFunnelEventsResponseBodyEventList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventList: { 'type': 'array', 'itemType': GetDeviceAppUpdateFunnelEventsResponseBodyEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceAppUpdateFunnelEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceAppUpdateFunnelEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsRequest extends $tea.Model {
  originalId?: string;
  projectId?: string;
  targetVersion?: string;
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      originalId: 'OriginalId',
      projectId: 'ProjectId',
      targetVersion: 'TargetVersion',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalId: 'string',
      projectId: 'string',
      targetVersion: 'string',
      idType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponseBody extends $tea.Model {
  requestId?: string;
  eventList?: GetDeviceSystemUpdateFunnelEventsResponseBodyEventList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventList: { 'type': 'array', 'itemType': GetDeviceSystemUpdateFunnelEventsResponseBodyEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceSystemUpdateFunnelEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceSystemUpdateFunnelEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  authType?: string;
  deviceIdType?: string;
  deviceId?: string;
  accountType?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      authType: 'AuthType',
      deviceIdType: 'DeviceIdType',
      deviceId: 'DeviceId',
      accountType: 'AccountType',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      authType: 'string',
      deviceIdType: 'string',
      deviceId: 'string',
      accountType: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNamespaceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNamespaceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  dimensionType?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      dimensionType: 'DimensionType',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      dimensionType: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: GetNamespaceStatisticsDataResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: GetNamespaceStatisticsDataResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNamespaceStatisticsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNamespaceStatisticsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  ossUploadMeta?: GetOssUploadMetaResponseBodyOssUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadMeta: 'OssUploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadMeta: GetOssUploadMetaResponseBodyOssUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  functionName?: string;
  env?: number;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      functionName: 'FunctionName',
      env: 'Env',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
      functionName: 'string',
      env: 'number',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponseBody extends $tea.Model {
  requestId?: string;
  result?: InvokeFunctionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InvokeFunctionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponseBody extends $tea.Model {
  requestId?: string;
  apiGatewayApps?: ListApiGatewayAppsResponseBodyApiGatewayApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apiGatewayApps: 'ApiGatewayApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apiGatewayApps: { 'type': 'array', 'itemType': ListApiGatewayAppsResponseBodyApiGatewayApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApiGatewayAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApiGatewayAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  requestId?: string;
  apps?: ListAppsResponseBodyApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apps: 'Apps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apps: { 'type': 'array', 'itemType': ListAppsResponseBodyApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsRequest extends $tea.Model {
  actionTimestamp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      actionTimestamp: 'ActionTimestamp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTimestamp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponseBody extends $tea.Model {
  requestId?: string;
  results?: ListAssistActionDetailsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ListAssistActionDetailsResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistActionDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistActionDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  condition?: string;
  perPage?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      condition: 'Condition',
      perPage: 'PerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      condition: 'string',
      perPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponseBody extends $tea.Model {
  requestId?: string;
  pageIndex?: number;
  perPage?: number;
  totalCount?: number;
  devices?: ListAssistDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageIndex: 'PageIndex',
      perPage: 'PerPage',
      totalCount: 'TotalCount',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageIndex: 'number',
      perPage: 'number',
      totalCount: 'number',
      devices: { 'type': 'array', 'itemType': ListAssistDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesRequest extends $tea.Model {
  perPage?: number;
  pageIndex?: number;
  condition?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      perPage: 'PerPage',
      pageIndex: 'PageIndex',
      condition: 'Condition',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perPage: 'number',
      pageIndex: 'number',
      condition: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponseBody extends $tea.Model {
  requestId?: string;
  pageIndex?: number;
  perPage?: number;
  totalCount?: number;
  histories?: ListAssistHistoriesResponseBodyHistories[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageIndex: 'PageIndex',
      perPage: 'PerPage',
      totalCount: 'TotalCount',
      histories: 'Histories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageIndex: 'number',
      perPage: 'number',
      totalCount: 'number',
      histories: { 'type': 'array', 'itemType': ListAssistHistoriesResponseBodyHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponseBody extends $tea.Model {
  requestId?: string;
  actions?: ListAssistHistoryDetailsResponseBodyActions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      actions: 'Actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      actions: { 'type': 'array', 'itemType': ListAssistHistoryDetailsResponseBodyActions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistHistoryDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistHistoryDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsRequest extends $tea.Model {
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponseBody extends $tea.Model {
  requestId?: string;
  clientPlugins?: ListClientPluginsResponseBodyClientPlugins[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientPlugins: 'ClientPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientPlugins: { 'type': 'array', 'itemType': ListClientPluginsResponseBodyClientPlugins },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsRequest extends $tea.Model {
  osType?: string;
  pkgName?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      pkgName: 'PkgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
      pkgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponseBody extends $tea.Model {
  requestId?: string;
  clientPluginVersions?: ListClientPluginVersionsResponseBodyClientPluginVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientPluginVersions: 'ClientPluginVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientPluginVersions: { 'type': 'array', 'itemType': ListClientPluginVersionsResponseBodyClientPluginVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientPluginVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientPluginVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksRequest extends $tea.Model {
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponseBody extends $tea.Model {
  requestId?: string;
  clientSdks?: ListClientSdksResponseBodyClientSdks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientSdks: 'ClientSdks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientSdks: { 'type': 'array', 'itemType': ListClientSdksResponseBodyClientSdks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientSdksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientSdksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  deviceId?: string;
  startTime?: number;
  endTime?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      deviceId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBody extends $tea.Model {
  requestId?: string;
  logs?: ListConnectLogsResponseBodyLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logs: ListConnectLogsResponseBodyLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponseBody extends $tea.Model {
  requestId?: string;
  functions?: ListDeployedFunctionsResponseBodyFunctions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      functions: { 'type': 'array', 'itemType': ListDeployedFunctionsResponseBodyFunctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployedFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployedFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsRequest extends $tea.Model {
  projectId?: string;
  deviceBrandId?: number;
  deviceBrand?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceBrandId: 'number',
      deviceBrand: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponseBody extends $tea.Model {
  requestId?: string;
  deviceBrands?: ListDeviceBrandsResponseBodyDeviceBrands[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceBrands: 'DeviceBrands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceBrands: { 'type': 'array', 'itemType': ListDeviceBrandsResponseBodyDeviceBrands },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceBrandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceBrandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponseBody extends $tea.Model {
  requestId?: string;
  modelList?: ListDeviceModelResponseBodyModelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modelList: 'ModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modelList: { 'type': 'array', 'itemType': ListDeviceModelResponseBodyModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsRequest extends $tea.Model {
  deviceModelId?: number;
  length?: string;
  deviceModel?: string;
  deviceBrand?: string;
  start?: string;
  projectId?: string;
  deviceBrandId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      length: 'Length',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      length: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      start: 'string',
      projectId: 'string',
      deviceBrandId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponseBody extends $tea.Model {
  requestId?: string;
  deviceModels?: ListDeviceModelsResponseBodyDeviceModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceModels: 'DeviceModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceModels: { 'type': 'array', 'itemType': ListDeviceModelsResponseBodyDeviceModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  requestId?: string;
  devices?: ListDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      devices: { 'type': 'array', 'itemType': ListDevicesResponseBodyDevices },
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

export class ListDeviceTypesRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponseBody extends $tea.Model {
  requestId?: string;
  deviceTypes?: ListDeviceTypesResponseBodyDeviceTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceTypes: 'DeviceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceTypes: { 'type': 'array', 'itemType': ListDeviceTypesResponseBodyDeviceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  functionName?: string;
  env?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      functionName: 'FunctionName',
      env: 'Env',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
      functionName: 'string',
      env: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBody extends $tea.Model {
  requestId?: string;
  logList?: ListFunctionExecuteLogResponseBodyLogList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logList: ListFunctionExecuteLogResponseBodyLogList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionExecuteLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionExecuteLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesRequest extends $tea.Model {
  projectId?: string;
  fileType?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileType: 'FileType',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileType: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBody extends $tea.Model {
  requestId?: string;
  fileList?: ListFunctionFilesResponseBodyFileList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fileList: 'FileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fileList: ListFunctionFilesResponseBodyFileList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponseBody extends $tea.Model {
  requestId?: string;
  files?: ListFunctionFilesByProjectIdResponseBodyFiles[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      files: { 'type': 'array', 'itemType': ListFunctionFilesByProjectIdResponseBodyFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionFilesByProjectIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionFilesByProjectIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  deviceId?: string;
  messageId?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      messageId: 'MessageId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      deviceId: 'string',
      messageId: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBody extends $tea.Model {
  requestId?: string;
  messageAcks?: ListMessageAcksResponseBodyMessageAcks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageAcks: 'MessageAcks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageAcks: ListMessageAcksResponseBodyMessageAcks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessageAcksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessageAcksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversRequest extends $tea.Model {
  projectId?: string;
  messageId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      messageId: 'MessageId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      messageId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBody extends $tea.Model {
  requestId?: string;
  messageReceivers?: ListMessageReceiversResponseBodyMessageReceivers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageReceivers: 'MessageReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageReceivers: ListMessageReceiversResponseBodyMessageReceivers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessageReceiversResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessageReceiversResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsRequest extends $tea.Model {
  appKey?: string;
  clientId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientId: 'ClientId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      clientId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBody extends $tea.Model {
  requestId?: string;
  clientSubscriptions?: ListMqttClientSubscriptionsResponseBodyClientSubscriptions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientSubscriptions: 'ClientSubscriptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientSubscriptions: ListMqttClientSubscriptionsResponseBodyClientSubscriptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttClientSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttClientSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsRequest extends $tea.Model {
  appKey?: string;
  projectId?: string;
  topic?: string;
  mid?: string;
  clientId?: string;
  startTime?: number;
  endTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      projectId: 'ProjectId',
      topic: 'Topic',
      mid: 'Mid',
      clientId: 'ClientId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      projectId: 'string',
      topic: 'string',
      mid: 'string',
      clientId: 'string',
      startTime: 'number',
      endTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBody extends $tea.Model {
  requestId?: string;
  traces?: ListMqttMessageLogsResponseBodyTraces;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traces: ListMqttMessageLogsResponseBodyTraces,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttMessageLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttMessageLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsRequest extends $tea.Model {
  appKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBody extends $tea.Model {
  requestId?: string;
  rootTopics?: ListMqttRootTopicsResponseBodyRootTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rootTopics: 'RootTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rootTopics: ListMqttRootTopicsResponseBodyRootTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttRootTopicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttRootTopicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesRequest extends $tea.Model {
  projectId?: string;
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      authType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  requestId?: string;
  namespaces?: ListNamespacesResponseBodyNamespaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyNamespaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  type?: string;
  value?: string;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
      value: 'Value',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
      value: 'string',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBody extends $tea.Model {
  requestId?: string;
  offlineMessages?: ListOfflineMessagesResponseBodyOfflineMessages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      offlineMessages: 'OfflineMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      offlineMessages: ListOfflineMessagesResponseBodyOfflineMessages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOfflineMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfflineMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksRequest extends $tea.Model {
  projectId?: string;
  identityId?: string;
  idp?: string;
  openId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      identityId: 'IdentityId',
      idp: 'Idp',
      openId: 'OpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      identityId: 'string',
      idp: 'string',
      openId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponseBody extends $tea.Model {
  requestId?: string;
  openAccounts?: ListOpenAccountLinksResponseBodyOpenAccounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openAccounts: 'OpenAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openAccounts: { 'type': 'array', 'itemType': ListOpenAccountLinksResponseBodyOpenAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenAccountLinksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenAccountLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsRequest extends $tea.Model {
  length?: number;
  start?: number;
  mobile?: string;
  email?: string;
  displayName?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      start: 'Start',
      mobile: 'Mobile',
      email: 'Email',
      displayName: 'DisplayName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      start: 'number',
      mobile: 'string',
      email: 'string',
      displayName: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponseBody extends $tea.Model {
  requestId?: string;
  openAccounts?: ListOpenAccountsResponseBodyOpenAccounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openAccounts: 'OpenAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openAccounts: { 'type': 'array', 'itemType': ListOpenAccountsResponseBodyOpenAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponseBody extends $tea.Model {
  requestId?: string;
  preChecks?: ListPreChecksResponseBodyPreChecks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      preChecks: 'PreChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      preChecks: { 'type': 'array', 'itemType': ListPreChecksResponseBodyPreChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPreChecksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPreChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  keywords?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      keywords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListProjectAppsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListProjectAppsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  requestId?: string;
  projects?: ListProjectsResponseBodyProjects[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBody extends $tea.Model {
  requestId?: string;
  rpcServices?: ListRpcServicesResponseBodyRpcServices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rpcServices: 'RpcServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rpcServices: ListRpcServicesResponseBodyRpcServices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRpcServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRpcServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesRequest extends $tea.Model {
  projectId?: string;
  deviceModel?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModel: 'DeviceModel',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModel: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBody extends $tea.Model {
  requestId?: string;
  pageList?: ListSchemaSubscribesResponseBodyPageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageList: 'PageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageList: { 'type': 'array', 'itemType': ListSchemaSubscribesResponseBodyPageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSchemaSubscribesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSchemaSubscribesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  requestId?: string;
  serviceList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceList: 'ServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponseBody extends $tea.Model {
  requestId?: string;
  modelList?: ListShadowSchemaDeviceModelsResponseBodyModelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modelList: 'ModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modelList: { 'type': 'array', 'itemType': ListShadowSchemaDeviceModelsResponseBodyModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListShadowSchemaDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListShadowSchemaDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasRequest extends $tea.Model {
  projectId?: string;
  queryType?: string;
  queryValue?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      queryType: 'string',
      queryValue: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBody extends $tea.Model {
  requestId?: string;
  pageList?: ListShadowSchemasResponseBodyPageList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageList: 'PageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageList: ListShadowSchemasResponseBodyPageList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListShadowSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListShadowSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponseBody extends $tea.Model {
  requestId?: string;
  supportFeatures?: ListSupportFeaturesResponseBodySupportFeatures[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportFeatures: 'SupportFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportFeatures: { 'type': 'array', 'itemType': ListSupportFeaturesResponseBodySupportFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSupportFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSupportFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBody extends $tea.Model {
  requestId?: string;
  triggerList?: ListTriggersResponseBodyTriggerList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggerList: 'TriggerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerList: ListTriggersResponseBodyTriggerList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  appServerId?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      appServerId: 'AppServerId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      appServerId: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBody extends $tea.Model {
  requestId?: string;
  relationList?: ListUpstreamAppKeyRelationsResponseBodyRelationList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      relationList: 'RelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      relationList: ListUpstreamAppKeyRelationsResponseBodyRelationList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUpstreamAppKeyRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUpstreamAppKeyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBody extends $tea.Model {
  requestId?: string;
  appServers?: ListUpstreamAppServersResponseBodyAppServers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appServers: 'AppServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appServers: ListUpstreamAppServersResponseBodyAppServers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUpstreamAppServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUpstreamAppServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupList?: ListVersionDeviceGroupsResponseBodyDeviceGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupList: 'DeviceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupList: { 'type': 'array', 'itemType': ListVersionDeviceGroupsResponseBodyDeviceGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVersionDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVersionDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAppVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  sendMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      sendMessage: 'SendMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      sendMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAppVersionResponseBody extends $tea.Model {
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

export class PublishAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageRequest extends $tea.Model {
  appKey?: string;
  topic?: string;
  projectId?: string;
  message?: string;
  qoS?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      topic: 'Topic',
      projectId: 'ProjectId',
      message: 'Message',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      topic: 'string',
      projectId: 'string',
      message: 'string',
      qoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageResponseBody extends $tea.Model {
  requestId?: string;
  mid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishMqttMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishMqttMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishOsVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  sendMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      sendMessage: 'SendMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      sendMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishOsVersionResponseBody extends $tea.Model {
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

export class PublishOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageRequest extends $tea.Model {
  appPackage?: string;
  desc?: string;
  act?: string;
  uri?: string;
  pkgContent?: string;
  customContent?: string;
  receiverType?: string;
  receiverValues?: string;
  expiredTime?: number;
  title?: string;
  projectId?: string;
  appKey?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appPackage: 'AppPackage',
      desc: 'Desc',
      act: 'Act',
      uri: 'Uri',
      pkgContent: 'PkgContent',
      customContent: 'CustomContent',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
      expiredTime: 'ExpiredTime',
      title: 'Title',
      projectId: 'ProjectId',
      appKey: 'AppKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPackage: 'string',
      desc: 'string',
      act: 'string',
      uri: 'string',
      pkgContent: 'string',
      customContent: 'string',
      receiverType: 'string',
      receiverValues: 'string',
      expiredTime: 'number',
      title: 'string',
      projectId: 'string',
      appKey: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageResponseBody extends $tea.Model {
  requestId?: string;
  mid?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVersionMessageRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVersionMessageResponseBody extends $tea.Model {
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

export class PushVersionMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushVersionMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushVersionMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountRequest extends $tea.Model {
  projectId?: string;
  prepublishId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      prepublishId: 'PrepublishId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      prepublishId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountResponseBody extends $tea.Model {
  requestId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPrepublishPassedDeviceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPrepublishPassedDeviceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssistReportRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  assistDescription?: string;
  assistResult?: string;
  assistTag?: string;
  assistReason?: string;
  deviceModel?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
      assistDescription: 'AssistDescription',
      assistResult: 'AssistResult',
      assistTag: 'AssistTag',
      assistReason: 'AssistReason',
      deviceModel: 'DeviceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
      assistDescription: 'string',
      assistResult: 'string',
      assistTag: 'string',
      assistReason: 'string',
      deviceModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssistReportResponseBody extends $tea.Model {
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

export class SubmitAssistReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAssistReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAssistReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiGatewayAppStatusRequest extends $tea.Model {
  projectId?: string;
  gatewayAppId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gatewayAppId: 'GatewayAppId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gatewayAppId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiGatewayAppStatusResponseBody extends $tea.Model {
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

export class UpdateApiGatewayAppStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApiGatewayAppStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApiGatewayAppStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppBlackWhiteVersionsRequest extends $tea.Model {
  whiteAppVersions?: string;
  projectId?: string;
  versionId?: string;
  blackAppVersions?: string;
  static names(): { [key: string]: string } {
    return {
      whiteAppVersions: 'WhiteAppVersions',
      projectId: 'ProjectId',
      versionId: 'VersionId',
      blackAppVersions: 'BlackAppVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteAppVersions: 'string',
      projectId: 'string',
      versionId: 'string',
      blackAppVersions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppBlackWhiteVersionsResponseBody extends $tea.Model {
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

export class UpdateAppBlackWhiteVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppBlackWhiteVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppBlackWhiteVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRequest extends $tea.Model {
  blackVersionList?: string;
  isAllowNewInstall?: string;
  projectId?: string;
  appId?: string;
  appVersion?: string;
  versionCode?: string;
  installType?: string;
  remark?: string;
  isForceUpgrade?: string;
  isSilentUpgrade?: string;
  isNeedRestart?: string;
  packageUrl?: string;
  releaseNote?: string;
  whiteVersionList?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  deviceAdapterList?: string;
  versionId?: string;
  apkMd5?: string;
  static names(): { [key: string]: string } {
    return {
      blackVersionList: 'BlackVersionList',
      isAllowNewInstall: 'IsAllowNewInstall',
      projectId: 'ProjectId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      versionCode: 'VersionCode',
      installType: 'InstallType',
      remark: 'Remark',
      isForceUpgrade: 'IsForceUpgrade',
      isSilentUpgrade: 'IsSilentUpgrade',
      isNeedRestart: 'IsNeedRestart',
      packageUrl: 'PackageUrl',
      releaseNote: 'ReleaseNote',
      whiteVersionList: 'WhiteVersionList',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      deviceAdapterList: 'DeviceAdapterList',
      versionId: 'VersionId',
      apkMd5: 'ApkMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackVersionList: 'string',
      isAllowNewInstall: 'string',
      projectId: 'string',
      appId: 'string',
      appVersion: 'string',
      versionCode: 'string',
      installType: 'string',
      remark: 'string',
      isForceUpgrade: 'string',
      isSilentUpgrade: 'string',
      isNeedRestart: 'string',
      packageUrl: 'string',
      releaseNote: 'string',
      whiteVersionList: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      deviceAdapterList: 'string',
      versionId: 'string',
      apkMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponseBody extends $tea.Model {
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

export class UpdateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionReleaseNoteRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      releaseNote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionReleaseNoteResponseBody extends $tea.Model {
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

export class UpdateAppVersionReleaseNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionReleaseNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionReleaseNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRemarkRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRemarkResponseBody extends $tea.Model {
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

export class UpdateAppVersionRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionStatusRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionStatusResponseBody extends $tea.Model {
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

export class UpdateAppVersionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomizedFilterRequest extends $tea.Model {
  blackWhiteType?: string;
  projectId?: string;
  name?: string;
  value?: string;
  valueType?: string;
  valueCompareType?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      blackWhiteType: 'BlackWhiteType',
      projectId: 'ProjectId',
      name: 'Name',
      value: 'Value',
      valueType: 'ValueType',
      valueCompareType: 'ValueCompareType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackWhiteType: 'string',
      projectId: 'string',
      name: 'string',
      value: 'string',
      valueType: 'string',
      valueCompareType: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomizedFilterResponseBody extends $tea.Model {
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

export class UpdateCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceModelRequest extends $tea.Model {
  initUsageType?: string;
  modelName?: string;
  id?: string;
  brandName?: string;
  description?: string;
  deviceType?: string;
  canCreateDeviceId?: string;
  projectId?: string;
  hardwareType?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      initUsageType: 'InitUsageType',
      modelName: 'ModelName',
      id: 'Id',
      brandName: 'BrandName',
      description: 'Description',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      hardwareType: 'HardwareType',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initUsageType: 'string',
      modelName: 'string',
      id: 'string',
      brandName: 'string',
      description: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'string',
      projectId: 'string',
      hardwareType: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceModelResponseBody extends $tea.Model {
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

export class UpdateDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  authType?: string;
  deviceIdType?: string;
  deviceId?: string;
  accountType?: string;
  accountId?: string;
  path?: string;
  oldData?: string;
  newData?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      authType: 'AuthType',
      deviceIdType: 'DeviceIdType',
      deviceId: 'DeviceId',
      accountType: 'AccountType',
      accountId: 'AccountId',
      path: 'Path',
      oldData: 'OldData',
      newData: 'NewData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      authType: 'string',
      deviceIdType: 'string',
      deviceId: 'string',
      accountType: 'string',
      accountId: 'string',
      path: 'string',
      oldData: 'string',
      newData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceDataResponseBody extends $tea.Model {
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

export class UpdateNamespaceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNamespaceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsBlackWhiteVersionsRequest extends $tea.Model {
  whiteVersions?: string;
  projectId?: string;
  versionId?: string;
  blackVersions?: string;
  static names(): { [key: string]: string } {
    return {
      whiteVersions: 'WhiteVersions',
      projectId: 'ProjectId',
      versionId: 'VersionId',
      blackVersions: 'BlackVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteVersions: 'string',
      projectId: 'string',
      versionId: 'string',
      blackVersions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsBlackWhiteVersionsResponseBody extends $tea.Model {
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

export class UpdateOsBlackWhiteVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsBlackWhiteVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsBlackWhiteVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRequest extends $tea.Model {
  isMilestone?: string;
  isForceNightUpgrade?: string;
  projectId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  releaseNote?: string;
  remark?: string;
  isForceUpgrade?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  maxClientVersion?: string;
  minClientVersion?: string;
  nightUpgradeDownloadType?: string;
  nightUpgradeIsShowTip?: string;
  nightUpgradeIsAllowedCancel?: string;
  romList?: string;
  id?: string;
  enableMobileDownload?: string;
  mobileDownloadMaxSize?: string;
  static names(): { [key: string]: string } {
    return {
      isMilestone: 'IsMilestone',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      isForceUpgrade: 'IsForceUpgrade',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      maxClientVersion: 'MaxClientVersion',
      minClientVersion: 'MinClientVersion',
      nightUpgradeDownloadType: 'NightUpgradeDownloadType',
      nightUpgradeIsShowTip: 'NightUpgradeIsShowTip',
      nightUpgradeIsAllowedCancel: 'NightUpgradeIsAllowedCancel',
      romList: 'RomList',
      id: 'Id',
      enableMobileDownload: 'EnableMobileDownload',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMilestone: 'string',
      isForceNightUpgrade: 'string',
      projectId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      releaseNote: 'string',
      remark: 'string',
      isForceUpgrade: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      maxClientVersion: 'string',
      minClientVersion: 'string',
      nightUpgradeDownloadType: 'string',
      nightUpgradeIsShowTip: 'string',
      nightUpgradeIsAllowedCancel: 'string',
      romList: 'string',
      id: 'string',
      enableMobileDownload: 'string',
      mobileDownloadMaxSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionResponseBody extends $tea.Model {
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

export class UpdateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionReleaseNoteRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      releaseNote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionReleaseNoteResponseBody extends $tea.Model {
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

export class UpdateOsVersionReleaseNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionReleaseNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionReleaseNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRemarkRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRemarkResponseBody extends $tea.Model {
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

export class UpdateOsVersionRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionStatusRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionStatusResponseBody extends $tea.Model {
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

export class UpdateOsVersionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
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

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemaSubscribeRequest extends $tea.Model {
  deviceModel?: string;
  subscribeList?: string;
  projectId?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      subscribeList: 'SubscribeList',
      projectId: 'ProjectId',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      subscribeList: 'string',
      projectId: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemaSubscribeResponseBody extends $tea.Model {
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

export class UpdateSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShadowSchemaRequest extends $tea.Model {
  deviceModelId?: string;
  authType?: string;
  namespace?: string;
  projectId?: string;
  schema?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      authType: 'AuthType',
      namespace: 'Namespace',
      projectId: 'ProjectId',
      schema: 'Schema',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'string',
      authType: 'string',
      namespace: 'string',
      projectId: 'string',
      schema: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShadowSchemaResponseBody extends $tea.Model {
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

export class UpdateShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  sandbox?: number;
  production?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      sandbox: 'Sandbox',
      production: 'Production',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
      sandbox: 'number',
      production: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponseBody extends $tea.Model {
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

export class UpdateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUpstreamAppServerRequest extends $tea.Model {
  id?: number;
  name?: string;
  tags?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      tags: 'Tags',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      tags: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUpstreamAppServerResponseBody extends $tea.Model {
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

export class UpdateUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  description?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      description: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionDeviceGroupResponseBody extends $tea.Model {
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

export class UpdateVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionPrepublishActiveStatusRequest extends $tea.Model {
  projectId?: string;
  prepublishId?: string;
  isActive?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      prepublishId: 'PrepublishId',
      isActive: 'IsActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      prepublishId: 'string',
      isActive: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionPrepublishActiveStatusResponseBody extends $tea.Model {
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

export class UpdateVersionPrepublishActiveStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVersionPrepublishActiveStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVersionPrepublishActiveStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries extends $tea.Model {
  name?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBodyStatistics extends $tea.Model {
  categories?: string[];
  series?: CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      series: { 'type': 'array', 'itemType': CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponseBodyYunIdInfo extends $tea.Model {
  totalBrandCount?: number;
  totalDeviceModelCount?: number;
  totalDeviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalBrandCount: 'TotalBrandCount',
      totalDeviceModelCount: 'TotalDeviceModelCount',
      totalDeviceCount: 'TotalDeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBrandCount: 'number',
      totalDeviceModelCount: 'number',
      totalDeviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity extends $tea.Model {
  gatewayAppId?: string;
  gatewayAppKey?: string;
  gatewayAppSecret?: string;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayAppId: 'GatewayAppId',
      gatewayAppKey: 'GatewayAppKey',
      gatewayAppSecret: 'GatewayAppSecret',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayAppId: 'string',
      gatewayAppKey: 'string',
      gatewayAppSecret: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBodyAppVersionAdapters extends $tea.Model {
  id?: number;
  versionId?: number;
  deviceModelId?: string;
  minOsVersion?: string;
  maxOsVersion?: string;
  deviceModelName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      versionId: 'VersionId',
      deviceModelId: 'DeviceModelId',
      minOsVersion: 'MinOsVersion',
      maxOsVersion: 'MaxOsVersion',
      deviceModelName: 'DeviceModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      versionId: 'number',
      deviceModelId: 'string',
      minOsVersion: 'string',
      maxOsVersion: 'string',
      deviceModelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBodyAppVersion extends $tea.Model {
  id?: number;
  appId?: string;
  versionCode?: number;
  releaseNote?: string;
  remark?: string;
  status?: string;
  appVersion?: string;
  downloadUrl?: string;
  originalUrl?: string;
  isForceUpgrade?: string;
  isSilentUpgrade?: string;
  md5?: string;
  apkMd5?: string;
  size?: string;
  gmtCreate?: string;
  gmtModify?: string;
  isNeedRestart?: string;
  isAllowNewInstall?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  installType?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  appName?: string;
  statusName?: string;
  packageName?: string;
  adapters?: DescribeAppVersionResponseBodyAppVersionAdapters[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appId: 'AppId',
      versionCode: 'VersionCode',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      status: 'Status',
      appVersion: 'AppVersion',
      downloadUrl: 'DownloadUrl',
      originalUrl: 'OriginalUrl',
      isForceUpgrade: 'IsForceUpgrade',
      isSilentUpgrade: 'IsSilentUpgrade',
      md5: 'Md5',
      apkMd5: 'ApkMd5',
      size: 'Size',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      isNeedRestart: 'IsNeedRestart',
      isAllowNewInstall: 'IsAllowNewInstall',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      installType: 'InstallType',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      appName: 'AppName',
      statusName: 'StatusName',
      packageName: 'PackageName',
      adapters: 'Adapters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appId: 'string',
      versionCode: 'number',
      releaseNote: 'string',
      remark: 'string',
      status: 'string',
      appVersion: 'string',
      downloadUrl: 'string',
      originalUrl: 'string',
      isForceUpgrade: 'string',
      isSilentUpgrade: 'string',
      md5: 'string',
      apkMd5: 'string',
      size: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      isNeedRestart: 'string',
      isAllowNewInstall: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      installType: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      appName: 'string',
      statusName: 'string',
      packageName: 'string',
      adapters: { 'type': 'array', 'itemType': DescribeAppVersionResponseBodyAppVersionAdapters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponseBodyCustomizedFilter extends $tea.Model {
  id?: number;
  versionType?: string;
  versionId?: number;
  name?: string;
  value?: string;
  valueCompareType?: string;
  blackWhiteType?: string;
  gmtCreate?: string;
  gmtModify?: string;
  valueType?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      versionType: 'VersionType',
      versionId: 'VersionId',
      name: 'Name',
      value: 'Value',
      valueCompareType: 'ValueCompareType',
      blackWhiteType: 'BlackWhiteType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      valueType: 'ValueType',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      versionType: 'string',
      versionId: 'number',
      name: 'string',
      value: 'string',
      valueCompareType: 'string',
      blackWhiteType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      valueType: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyDeviceInfo extends $tea.Model {
  deviceId?: string;
  deviceType?: string;
  usageType?: number;
  usageTypeDesc?: string;
  deviceModel?: string;
  deviceModelId?: number;
  deviceProduct?: string;
  deviceBrandId?: number;
  deviceBrand?: string;
  uuid?: string;
  vin?: string;
  serialNumber?: string;
  macAddress?: string;
  hardwareId?: string;
  softwareId?: string;
  region?: string;
  name?: string;
  attributes?: string;
  projectId?: string;
  osPlatform?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      usageType: 'UsageType',
      usageTypeDesc: 'UsageTypeDesc',
      deviceModel: 'DeviceModel',
      deviceModelId: 'DeviceModelId',
      deviceProduct: 'DeviceProduct',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      uuid: 'Uuid',
      vin: 'Vin',
      serialNumber: 'SerialNumber',
      macAddress: 'MacAddress',
      hardwareId: 'HardwareId',
      softwareId: 'SoftwareId',
      region: 'Region',
      name: 'Name',
      attributes: 'Attributes',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceType: 'string',
      usageType: 'number',
      usageTypeDesc: 'string',
      deviceModel: 'string',
      deviceModelId: 'number',
      deviceProduct: 'string',
      deviceBrandId: 'number',
      deviceBrand: 'string',
      uuid: 'string',
      vin: 'string',
      serialNumber: 'string',
      macAddress: 'string',
      hardwareId: 'string',
      softwareId: 'string',
      region: 'string',
      name: 'string',
      attributes: 'string',
      projectId: 'string',
      osPlatform: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponseBodyDeviceBrand extends $tea.Model {
  deviceBrandId?: number;
  deviceBrand?: string;
  projectId?: string;
  manufacture?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      projectId: 'ProjectId',
      manufacture: 'Manufacture',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      deviceBrand: 'string',
      projectId: 'string',
      manufacture: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfo extends $tea.Model {
  deviceId?: string;
  deviceType?: string;
  usageType?: number;
  usageTypeDesc?: string;
  deviceModel?: string;
  deviceModelId?: number;
  deviceBrand?: string;
  uuid?: string;
  vin?: string;
  serialNumber?: string;
  macAddress?: string;
  hardwareId?: string;
  softwareId?: string;
  region?: string;
  name?: string;
  projectId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      usageType: 'UsageType',
      usageTypeDesc: 'UsageTypeDesc',
      deviceModel: 'DeviceModel',
      deviceModelId: 'DeviceModelId',
      deviceBrand: 'DeviceBrand',
      uuid: 'Uuid',
      vin: 'Vin',
      serialNumber: 'SerialNumber',
      macAddress: 'MacAddress',
      hardwareId: 'HardwareId',
      softwareId: 'SoftwareId',
      region: 'Region',
      name: 'Name',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceType: 'string',
      usageType: 'number',
      usageTypeDesc: 'string',
      deviceModel: 'string',
      deviceModelId: 'number',
      deviceBrand: 'string',
      uuid: 'string',
      vin: 'string',
      serialNumber: 'string',
      macAddress: 'string',
      hardwareId: 'string',
      softwareId: 'string',
      region: 'string',
      name: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponseBodyDeviceModel extends $tea.Model {
  deviceModelId?: number;
  deviceType?: string;
  hardwareType?: string;
  deviceModel?: string;
  deviceBrand?: string;
  canCreateDeviceId?: number;
  initUsageType?: number;
  initUsageTypeDesc?: string;
  description?: string;
  projectId?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceLogoUrl?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceType: 'DeviceType',
      hardwareType: 'HardwareType',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      canCreateDeviceId: 'CanCreateDeviceId',
      initUsageType: 'InitUsageType',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      description: 'Description',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceLogoUrl: 'DeviceLogoUrl',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceType: 'string',
      hardwareType: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      canCreateDeviceId: 'number',
      initUsageType: 'number',
      initUsageTypeDesc: 'string',
      description: 'string',
      projectId: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceLogoUrl: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponseBodyDevices extends $tea.Model {
  projectId?: string;
  terminal?: string;
  iasId?: string;
  deviceId?: string;
  clientVersion?: string;
  systemVersion?: string;
  online?: number;
  loginTime?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      terminal: 'Terminal',
      iasId: 'IasId',
      deviceId: 'DeviceId',
      clientVersion: 'ClientVersion',
      systemVersion: 'SystemVersion',
      online: 'Online',
      loginTime: 'LoginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      terminal: 'string',
      iasId: 'string',
      deviceId: 'string',
      clientVersion: 'string',
      systemVersion: 'string',
      online: 'number',
      loginTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponseBodyDeviceShadow extends $tea.Model {
  deviceInfo?: string;
  deviceShadow?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      deviceShadow: 'DeviceShadow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: 'string',
      deviceShadow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponseBodyItemList extends $tea.Model {
  path?: string;
  type?: string;
  itemType?: string;
  description?: string;
  required?: string;
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  enumListStr?: string;
  maxLength?: number;
  minLength?: number;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
      itemType: 'ItemType',
      description: 'Description',
      required: 'Required',
      maximum: 'Maximum',
      minimum: 'Minimum',
      exclusiveMaximum: 'ExclusiveMaximum',
      exclusiveMinimum: 'ExclusiveMinimum',
      enumListStr: 'EnumListStr',
      maxLength: 'MaxLength',
      minLength: 'MinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
      itemType: 'string',
      description: 'string',
      required: 'string',
      maximum: 'number',
      minimum: 'number',
      exclusiveMaximum: 'boolean',
      exclusiveMinimum: 'boolean',
      enumListStr: 'string',
      maxLength: 'number',
      minLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponseBodyMessage extends $tea.Model {
  id?: number;
  projectId?: string;
  appName?: string;
  appKey?: string;
  type?: number;
  sendStatus?: number;
  title?: string;
  desc?: string;
  action?: string;
  uri?: string;
  parameter?: string;
  predictSendCnt?: number;
  ackCnt?: number;
  gmtCreateTime?: number;
  exipiredTime?: number;
  audit?: number;
  auditMsg?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      appName: 'AppName',
      appKey: 'AppKey',
      type: 'Type',
      sendStatus: 'SendStatus',
      title: 'Title',
      desc: 'Desc',
      action: 'Action',
      uri: 'Uri',
      parameter: 'Parameter',
      predictSendCnt: 'PredictSendCnt',
      ackCnt: 'AckCnt',
      gmtCreateTime: 'GmtCreateTime',
      exipiredTime: 'ExipiredTime',
      audit: 'Audit',
      auditMsg: 'AuditMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'string',
      appName: 'string',
      appKey: 'string',
      type: 'number',
      sendStatus: 'number',
      title: 'string',
      desc: 'string',
      action: 'string',
      uri: 'string',
      parameter: 'string',
      predictSendCnt: 'number',
      ackCnt: 'number',
      gmtCreateTime: 'number',
      exipiredTime: 'number',
      audit: 'number',
      auditMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponseBodyClientStatus extends $tea.Model {
  status?: number;
  lastUpdate?: number;
  cleanSession?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastUpdate: 'LastUpdate',
      cleanSession: 'CleanSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      lastUpdate: 'number',
      cleanSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponseBodyMessage extends $tea.Model {
  mid?: string;
  appKey?: string;
  topic?: string;
  qoS?: number;
  payload?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      mid: 'Mid',
      appKey: 'AppKey',
      topic: 'Topic',
      qoS: 'QoS',
      payload: 'Payload',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mid: 'string',
      appKey: 'string',
      topic: 'string',
      qoS: 'number',
      payload: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponseBodySubscription extends $tea.Model {
  topic?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponseBodyOpenAccount extends $tea.Model {
  identityId?: string;
  aliyunId?: string;
  displayName?: string;
  loginId?: string;
  idp?: string;
  openId?: string;
  mobile?: string;
  type?: number;
  status?: number;
  region?: string;
  createAccessKey?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      aliyunId: 'AliyunId',
      displayName: 'DisplayName',
      loginId: 'LoginId',
      idp: 'Idp',
      openId: 'OpenId',
      mobile: 'Mobile',
      type: 'Type',
      status: 'Status',
      region: 'Region',
      createAccessKey: 'CreateAccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      aliyunId: 'string',
      displayName: 'string',
      loginId: 'string',
      idp: 'string',
      openId: 'string',
      mobile: 'string',
      type: 'number',
      status: 'number',
      region: 'string',
      createAccessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersionRomList extends $tea.Model {
  id?: number;
  versionId?: number;
  baseVersion?: string;
  downloadUrl?: string;
  originalUrl?: string;
  md5?: string;
  size?: string;
  splitNum?: string;
  gmtCreate?: string;
  gmtModify?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      versionId: 'VersionId',
      baseVersion: 'BaseVersion',
      downloadUrl: 'DownloadUrl',
      originalUrl: 'OriginalUrl',
      md5: 'Md5',
      size: 'Size',
      splitNum: 'SplitNum',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      versionId: 'number',
      baseVersion: 'string',
      downloadUrl: 'string',
      originalUrl: 'string',
      md5: 'string',
      size: 'string',
      splitNum: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersionNightUpgradeOption extends $tea.Model {
  downloadType?: string;
  isShowTip?: string;
  isAllowedCancel?: string;
  static names(): { [key: string]: string } {
    return {
      downloadType: 'DownloadType',
      isShowTip: 'IsShowTip',
      isAllowedCancel: 'IsAllowedCancel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadType: 'string',
      isShowTip: 'string',
      isAllowedCancel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersion extends $tea.Model {
  id?: number;
  deviceModelId?: string;
  systemVersion?: string;
  releaseNote?: string;
  remark?: string;
  status?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  minClientVersion?: string;
  maxClientVersion?: string;
  isMilestone?: string;
  isForceUpgrade?: string;
  isForceNightUpgrade?: string;
  gmtCreate?: string;
  gmtModify?: string;
  statusName?: string;
  deviceModelName?: string;
  enableMobileDownload?: string;
  mobileDownloadMaxSize?: string;
  romList?: DescribeOsVersionResponseBodyOsVersionRomList[];
  nightUpgradeOption?: DescribeOsVersionResponseBodyOsVersionNightUpgradeOption;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      status: 'Status',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      minClientVersion: 'MinClientVersion',
      maxClientVersion: 'MaxClientVersion',
      isMilestone: 'IsMilestone',
      isForceUpgrade: 'IsForceUpgrade',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      statusName: 'StatusName',
      deviceModelName: 'DeviceModelName',
      enableMobileDownload: 'EnableMobileDownload',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
      romList: 'RomList',
      nightUpgradeOption: 'NightUpgradeOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      deviceModelId: 'string',
      systemVersion: 'string',
      releaseNote: 'string',
      remark: 'string',
      status: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      minClientVersion: 'string',
      maxClientVersion: 'string',
      isMilestone: 'string',
      isForceUpgrade: 'string',
      isForceNightUpgrade: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      statusName: 'string',
      deviceModelName: 'string',
      enableMobileDownload: 'string',
      mobileDownloadMaxSize: 'string',
      romList: { 'type': 'array', 'itemType': DescribeOsVersionResponseBodyOsVersionRomList },
      nightUpgradeOption: DescribeOsVersionResponseBodyOsVersionNightUpgradeOption,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyProject extends $tea.Model {
  id?: number;
  projectId?: string;
  userId?: string;
  name?: string;
  status?: number;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      userId: 'UserId',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'string',
      userId: 'string',
      name: 'string',
      status: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponseBodyProjectAppSecurity extends $tea.Model {
  id?: number;
  appId?: string;
  appKey?: string;
  appSecret?: string;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appId: 'AppId',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appId: 'string',
      appKey: 'string',
      appSecret: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponseBodyDeviceGroup extends $tea.Model {
  id?: number;
  name?: string;
  description?: string;
  gmtCreate?: string;
  gmtModify?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBodyAppVersionListItems extends $tea.Model {
  id?: number;
  appId?: string;
  versionCode?: string;
  status?: string;
  gmtCreate?: string;
  gmtModify?: string;
  appVersion?: string;
  isNeedRestart?: string;
  isForceUpgrade?: string;
  isSilentUpgrade?: string;
  isAllowNewInstall?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  installType?: string;
  appName?: string;
  appPackageName?: string;
  statusName?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appId: 'AppId',
      versionCode: 'VersionCode',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      appVersion: 'AppVersion',
      isNeedRestart: 'IsNeedRestart',
      isForceUpgrade: 'IsForceUpgrade',
      isSilentUpgrade: 'IsSilentUpgrade',
      isAllowNewInstall: 'IsAllowNewInstall',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      installType: 'InstallType',
      appName: 'AppName',
      appPackageName: 'AppPackageName',
      statusName: 'StatusName',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appId: 'string',
      versionCode: 'string',
      status: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      appVersion: 'string',
      isNeedRestart: 'string',
      isForceUpgrade: 'string',
      isSilentUpgrade: 'string',
      isAllowNewInstall: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      installType: 'string',
      appName: 'string',
      appPackageName: 'string',
      statusName: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBodyAppVersionList extends $tea.Model {
  totalCount?: number;
  items?: FindAppVersionsResponseBodyAppVersionListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindAppVersionsResponseBodyAppVersionListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBodyCustomizedFilterListItems extends $tea.Model {
  id?: number;
  name?: string;
  value?: string;
  valueCompareType?: string;
  blackWhiteType?: string;
  gmtCreate?: string;
  gmtModify?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      value: 'Value',
      valueCompareType: 'ValueCompareType',
      blackWhiteType: 'BlackWhiteType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      value: 'string',
      valueCompareType: 'string',
      blackWhiteType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBodyCustomizedFilterList extends $tea.Model {
  totalCount?: number;
  items?: FindCustomizedFiltersResponseBodyCustomizedFilterListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindCustomizedFiltersResponseBodyCustomizedFilterListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems extends $tea.Model {
  id?: number;
  name?: string;
  value?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      value: 'Value',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      value: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBodyCustomizedPropertyList extends $tea.Model {
  totalCount?: number;
  items?: FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBodyOsVersionListItems extends $tea.Model {
  id?: number;
  deviceModelId?: string;
  systemVersion?: string;
  status?: string;
  isMilestone?: string;
  isForceUpgrade?: string;
  isSilentUpgrade?: string;
  isForceReboot?: string;
  isForceNightUpgrade?: string;
  gmtCreate?: string;
  gmtModify?: string;
  remark?: string;
  statusName?: string;
  deviceModelName?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      status: 'Status',
      isMilestone: 'IsMilestone',
      isForceUpgrade: 'IsForceUpgrade',
      isSilentUpgrade: 'IsSilentUpgrade',
      isForceReboot: 'IsForceReboot',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      remark: 'Remark',
      statusName: 'StatusName',
      deviceModelName: 'DeviceModelName',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      deviceModelId: 'string',
      systemVersion: 'string',
      status: 'string',
      isMilestone: 'string',
      isForceUpgrade: 'string',
      isSilentUpgrade: 'string',
      isForceReboot: 'string',
      isForceNightUpgrade: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      remark: 'string',
      statusName: 'string',
      deviceModelName: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBodyOsVersionList extends $tea.Model {
  totalCount?: number;
  items?: FindOsVersionsResponseBodyOsVersionListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindOsVersionsResponseBodyOsVersionListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBodyPrepublishListItems extends $tea.Model {
  id?: number;
  name?: string;
  versionType?: string;
  versionId?: string;
  barrierCount?: string;
  deviceModelId?: string;
  parentId?: string;
  isActive?: string;
  isTotalPrepublish?: string;
  gmtCreate?: string;
  gmtModify?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      versionType: 'VersionType',
      versionId: 'VersionId',
      barrierCount: 'BarrierCount',
      deviceModelId: 'DeviceModelId',
      parentId: 'ParentId',
      isActive: 'IsActive',
      isTotalPrepublish: 'IsTotalPrepublish',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      versionType: 'string',
      versionId: 'string',
      barrierCount: 'string',
      deviceModelId: 'string',
      parentId: 'string',
      isActive: 'string',
      isTotalPrepublish: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBodyPrepublishList extends $tea.Model {
  totalCount?: number;
  items?: FindPrepublishesByParentIdResponseBodyPrepublishListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindPrepublishesByParentIdResponseBodyPrepublishListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponseBodyPrepublishList extends $tea.Model {
  id?: string;
  name?: string;
  versionType?: string;
  versionId?: string;
  barrierCount?: string;
  deviceModelId?: string;
  parentId?: string;
  isActive?: string;
  isTotalPrepublish?: string;
  gmtCreate?: string;
  gmtModify?: string;
  deviceModelName?: string;
  passedCount?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      versionType: 'VersionType',
      versionId: 'VersionId',
      barrierCount: 'BarrierCount',
      deviceModelId: 'DeviceModelId',
      parentId: 'ParentId',
      isActive: 'IsActive',
      isTotalPrepublish: 'IsTotalPrepublish',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      deviceModelName: 'DeviceModelName',
      passedCount: 'PassedCount',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      versionType: 'string',
      versionId: 'string',
      barrierCount: 'string',
      deviceModelId: 'string',
      parentId: 'string',
      isActive: 'string',
      isTotalPrepublish: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      deviceModelName: 'string',
      passedCount: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBodyDeviceListItems extends $tea.Model {
  deviceId?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBodyDeviceList extends $tea.Model {
  totalCount?: number;
  items?: FindPrepublishPassedDevicesResponseBodyDeviceListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindPrepublishPassedDevicesResponseBodyDeviceListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBodyDeviceListItems extends $tea.Model {
  id?: number;
  deviceId?: string;
  originalId?: string;
  idType?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      idType: 'IdType',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      deviceId: 'string',
      originalId: 'string',
      idType: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBodyDeviceList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionBlackDevicesResponseBodyDeviceListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionBlackDevicesResponseBodyDeviceListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBodyDeviceGroupListItems extends $tea.Model {
  id?: number;
  name?: string;
  gmtCreate?: string;
  gmtModify?: string;
  description?: string;
  maxCount?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      description: 'Description',
      maxCount: 'MaxCount',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      description: 'string',
      maxCount: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBodyDeviceGroupList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionDeviceGroupsResponseBodyDeviceGroupListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionDeviceGroupsResponseBodyDeviceGroupListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBodyGroupDeviceListItems extends $tea.Model {
  id?: string;
  deviceId?: string;
  idType?: string;
  originalId?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      deviceId: 'DeviceId',
      idType: 'IdType',
      originalId: 'OriginalId',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      deviceId: 'string',
      idType: 'string',
      originalId: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBodyGroupDeviceList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionGroupDevicesResponseBodyGroupDeviceListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionGroupDevicesResponseBodyGroupDeviceListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBodyMessageListItems extends $tea.Model {
  id?: number;
  messageId?: string;
  versionId?: string;
  testId?: string;
  status?: string;
  statusDesc?: string;
  deviceId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      messageId: 'MessageId',
      versionId: 'VersionId',
      testId: 'TestId',
      status: 'Status',
      statusDesc: 'StatusDesc',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      messageId: 'string',
      versionId: 'string',
      testId: 'string',
      status: 'string',
      statusDesc: 'string',
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBodyMessageList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionMessagesResponseBodyMessageListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionMessagesResponseBodyMessageListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems extends $tea.Model {
  id?: number;
  messageType?: string;
  versionId?: string;
  targetId?: string;
  result?: string;
  resultDesc?: string;
  succeededCount?: string;
  failedCount?: string;
  skippedCount?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      messageType: 'MessageType',
      versionId: 'VersionId',
      targetId: 'TargetId',
      result: 'Result',
      resultDesc: 'ResultDesc',
      succeededCount: 'SucceededCount',
      failedCount: 'FailedCount',
      skippedCount: 'SkippedCount',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      messageType: 'string',
      versionId: 'string',
      targetId: 'string',
      result: 'string',
      resultDesc: 'string',
      succeededCount: 'string',
      failedCount: 'string',
      skippedCount: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBodyMessageSendRecordList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBodyVersionTestListItems extends $tea.Model {
  id?: number;
  versionId?: string;
  versionType?: string;
  name?: string;
  description?: string;
  gmtCreate?: string;
  gmtModify?: string;
  deviceGroupId?: string;
  deviceGroupName?: string;
  succeededCount?: string;
  failedCount?: string;
  skippedCount?: string;
  gmtCreateTimestamp?: number;
  gmtModifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      versionId: 'VersionId',
      versionType: 'VersionType',
      name: 'Name',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      succeededCount: 'SucceededCount',
      failedCount: 'FailedCount',
      skippedCount: 'SkippedCount',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      versionId: 'string',
      versionType: 'string',
      name: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      succeededCount: 'string',
      failedCount: 'string',
      skippedCount: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifyTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBodyVersionTestList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionTestsResponseBodyVersionTestListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionTestsResponseBodyVersionTestListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBodyDeviceListItems extends $tea.Model {
  id?: number;
  deviceId?: string;
  originalId?: string;
  idType?: string;
  gmtCreate?: string;
  gmtCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      idType: 'IdType',
      gmtCreate: 'GmtCreate',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      deviceId: 'string',
      originalId: 'string',
      idType: 'string',
      gmtCreate: 'string',
      gmtCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBodyDeviceList extends $tea.Model {
  totalCount?: number;
  items?: FindVersionWhiteDevicesResponseBodyDeviceListItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': FindVersionWhiteDevicesResponseBodyDeviceListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy extends $tea.Model {
  accessId?: string;
  expire?: string;
  policy?: string;
  signature?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      policy: 'Policy',
      signature: 'Signature',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'string',
      policy: 'string',
      signature: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBodyUploadMeta extends $tea.Model {
  securityToken?: string;
  objectKey?: string;
  postObjectPolicy?: GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      objectKey: 'ObjectKey',
      postObjectPolicy: 'PostObjectPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      objectKey: 'string',
      postObjectPolicy: GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponseBodyOssPostPolicy extends $tea.Model {
  accessId?: string;
  policy?: string;
  signature?: string;
  host?: string;
  expire?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      policy: 'Policy',
      signature: 'Signature',
      host: 'Host',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      policy: 'string',
      signature: 'string',
      host: 'string',
      expire: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponseBodyOssUploadMeta extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  securityToken?: string;
  bucket?: string;
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      securityToken: 'SecurityToken',
      bucket: 'Bucket',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      securityToken: 'string',
      bucket: 'string',
      objectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponseBodySdkDownloadInfo extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponseBodyEventList extends $tea.Model {
  tenantId?: string;
  deviceId?: string;
  targetVersionCode?: string;
  event?: string;
  reportTime?: string;
  packageName?: string;
  reportTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      deviceId: 'DeviceId',
      targetVersionCode: 'TargetVersionCode',
      event: 'Event',
      reportTime: 'ReportTime',
      packageName: 'PackageName',
      reportTimestamp: 'ReportTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      deviceId: 'string',
      targetVersionCode: 'string',
      event: 'string',
      reportTime: 'string',
      packageName: 'string',
      reportTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponseBodyEventList extends $tea.Model {
  tenantId?: string;
  deviceId?: string;
  targetVersion?: string;
  event?: string;
  reportTime?: string;
  reportTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      deviceId: 'DeviceId',
      targetVersion: 'TargetVersion',
      event: 'Event',
      reportTime: 'ReportTime',
      reportTimestamp: 'ReportTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      deviceId: 'string',
      targetVersion: 'string',
      event: 'string',
      reportTime: 'string',
      reportTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBodyStatisticsSeries extends $tea.Model {
  name?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBodyStatistics extends $tea.Model {
  categories?: string[];
  series?: GetNamespaceStatisticsDataResponseBodyStatisticsSeries[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      series: { 'type': 'array', 'itemType': GetNamespaceStatisticsDataResponseBodyStatisticsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponseBodyOssUploadMeta extends $tea.Model {
  objectKey?: string;
  accessKey?: string;
  policy?: string;
  signature?: string;
  securityToken?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      objectKey: 'ObjectKey',
      accessKey: 'AccessKey',
      policy: 'Policy',
      signature: 'Signature',
      securityToken: 'SecurityToken',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectKey: 'string',
      accessKey: 'string',
      policy: 'string',
      signature: 'string',
      securityToken: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponseBodyResult extends $tea.Model {
  backEndRequestId?: string;
  output?: string;
  static names(): { [key: string]: string } {
    return {
      backEndRequestId: 'BackEndRequestId',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backEndRequestId: 'string',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponseBodyApiGatewayApps extends $tea.Model {
  id?: number;
  projectId?: string;
  userId?: string;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  gatewayAppKey?: string;
  gatewayAppSecret?: string;
  gatewayAppId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      userId: 'UserId',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gatewayAppKey: 'GatewayAppKey',
      gatewayAppSecret: 'GatewayAppSecret',
      gatewayAppId: 'GatewayAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'string',
      userId: 'string',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      gatewayAppKey: 'string',
      gatewayAppSecret: 'string',
      gatewayAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyApps extends $tea.Model {
  appKey?: string;
  appName?: string;
  appPackage?: string;
  osType?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appPackage: 'AppPackage',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appPackage: 'string',
      osType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponseBodyResults extends $tea.Model {
  deviceId?: string;
  action?: string;
  timestamp?: string;
  type?: string;
  data?: string;
  ID?: string;
  createdAt?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      action: 'Action',
      timestamp: 'Timestamp',
      type: 'Type',
      data: 'Data',
      ID: 'ID',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      action: 'string',
      timestamp: 'string',
      type: 'string',
      data: 'string',
      ID: 'string',
      createdAt: 'number',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponseBodyDevices extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  serialNumber?: string;
  hardwareId?: string;
  UUID?: string;
  VIN?: string;
  accessTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      serialNumber: 'SerialNumber',
      hardwareId: 'HardwareId',
      UUID: 'UUID',
      VIN: 'VIN',
      accessTime: 'AccessTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      serialNumber: 'string',
      hardwareId: 'string',
      UUID: 'string',
      VIN: 'string',
      accessTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponseBodyHistories extends $tea.Model {
  ID?: string;
  deviceName?: string;
  startTime?: number;
  endTime?: number;
  deviceId?: string;
  serialNumber?: string;
  hardwareId?: string;
  UUID?: string;
  VIN?: string;
  UID?: string;
  UNAME?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      deviceId: 'DeviceId',
      serialNumber: 'SerialNumber',
      hardwareId: 'HardwareId',
      UUID: 'UUID',
      VIN: 'VIN',
      UID: 'UID',
      UNAME: 'UNAME',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'string',
      deviceName: 'string',
      startTime: 'number',
      endTime: 'number',
      deviceId: 'string',
      serialNumber: 'string',
      hardwareId: 'string',
      UUID: 'string',
      VIN: 'string',
      UID: 'string',
      UNAME: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponseBodyActions extends $tea.Model {
  assistId?: string;
  action?: string;
  timestamp?: string;
  createdAt?: number;
  updatedAt?: number;
  ID?: string;
  static names(): { [key: string]: string } {
    return {
      assistId: 'AssistId',
      action: 'Action',
      timestamp: 'Timestamp',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistId: 'string',
      action: 'string',
      timestamp: 'string',
      createdAt: 'number',
      updatedAt: 'number',
      ID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponseBodyClientPlugins extends $tea.Model {
  name?: string;
  pkgName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pkgName: 'PkgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pkgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponseBodyClientPluginVersions extends $tea.Model {
  pkgName?: string;
  versionCode?: number;
  version?: string;
  size?: number;
  id?: number;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      pkgName: 'PkgName',
      versionCode: 'VersionCode',
      version: 'Version',
      size: 'Size',
      id: 'Id',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgName: 'string',
      versionCode: 'number',
      version: 'string',
      size: 'number',
      id: 'number',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponseBodyClientSdks extends $tea.Model {
  id?: number;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  pkgName?: string;
  pkgType?: number;
  osType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      pkgName: 'PkgName',
      pkgType: 'PkgType',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      pkgName: 'string',
      pkgType: 'number',
      osType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogsList extends $tea.Model {
  deviceId?: string;
  systemVersion?: string;
  terminal?: string;
  ip?: string;
  netWorking?: string;
  time?: number;
  status?: string;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      systemVersion: 'SystemVersion',
      terminal: 'Terminal',
      ip: 'Ip',
      netWorking: 'NetWorking',
      time: 'Time',
      status: 'Status',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      systemVersion: 'string',
      terminal: 'string',
      ip: 'string',
      netWorking: 'string',
      time: 'number',
      status: 'string',
      sid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogsPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogs extends $tea.Model {
  list?: ListConnectLogsResponseBodyLogsList[];
  pagination?: ListConnectLogsResponseBodyLogsPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListConnectLogsResponseBodyLogsList },
      pagination: ListConnectLogsResponseBodyLogsPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponseBodyFunctions extends $tea.Model {
  id?: number;
  projectId?: string;
  name?: string;
  fileId?: number;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      name: 'Name',
      fileId: 'FileId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'string',
      name: 'string',
      fileId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponseBodyDeviceBrands extends $tea.Model {
  deviceBrandId?: number;
  deviceBrand?: string;
  projectId?: string;
  manufacture?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      projectId: 'ProjectId',
      manufacture: 'Manufacture',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      deviceBrand: 'string',
      projectId: 'string',
      manufacture: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponseBodyModelList extends $tea.Model {
  deviceModelId?: number;
  deviceType?: string;
  hardwareType?: string;
  deviceModel?: string;
  deviceBrand?: string;
  canCreateDeviceId?: number;
  initUsageType?: number;
  initUsageTypeDesc?: string;
  description?: string;
  projectId?: string;
  securityChip?: string;
  osPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceType: 'DeviceType',
      hardwareType: 'HardwareType',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      canCreateDeviceId: 'CanCreateDeviceId',
      initUsageType: 'InitUsageType',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      description: 'Description',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceType: 'string',
      hardwareType: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      canCreateDeviceId: 'number',
      initUsageType: 'number',
      initUsageTypeDesc: 'string',
      description: 'string',
      projectId: 'string',
      securityChip: 'string',
      osPlatform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponseBodyDeviceModels extends $tea.Model {
  deviceModelId?: number;
  deviceType?: string;
  hardwareType?: string;
  deviceModel?: string;
  deviceBrand?: string;
  canCreateDeviceId?: number;
  initUsageType?: number;
  initUsageTypeDesc?: string;
  description?: string;
  projectId?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceLogoUrl?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceType: 'DeviceType',
      hardwareType: 'HardwareType',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      canCreateDeviceId: 'CanCreateDeviceId',
      initUsageType: 'InitUsageType',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      description: 'Description',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceLogoUrl: 'DeviceLogoUrl',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceType: 'string',
      hardwareType: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      canCreateDeviceId: 'number',
      initUsageType: 'number',
      initUsageTypeDesc: 'string',
      description: 'string',
      projectId: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceLogoUrl: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDevices extends $tea.Model {
  deviceId?: string;
  deviceType?: string;
  usageType?: number;
  usageTypeDesc?: string;
  deviceModel?: string;
  deviceModelId?: number;
  deviceBrand?: string;
  uuid?: string;
  vin?: string;
  serialNumber?: string;
  macAddress?: string;
  hardwareId?: string;
  softwareId?: string;
  region?: string;
  name?: string;
  projectId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      usageType: 'UsageType',
      usageTypeDesc: 'UsageTypeDesc',
      deviceModel: 'DeviceModel',
      deviceModelId: 'DeviceModelId',
      deviceBrand: 'DeviceBrand',
      uuid: 'Uuid',
      vin: 'Vin',
      serialNumber: 'SerialNumber',
      macAddress: 'MacAddress',
      hardwareId: 'HardwareId',
      softwareId: 'SoftwareId',
      region: 'Region',
      name: 'Name',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceType: 'string',
      usageType: 'number',
      usageTypeDesc: 'string',
      deviceModel: 'string',
      deviceModelId: 'number',
      deviceBrand: 'string',
      uuid: 'string',
      vin: 'string',
      serialNumber: 'string',
      macAddress: 'string',
      hardwareId: 'string',
      softwareId: 'string',
      region: 'string',
      name: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponseBodyDeviceTypes extends $tea.Model {
  deviceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogListLogs extends $tea.Model {
  message?: string;
  backEndRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      backEndRequestId: 'BackEndRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      backEndRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogListPagination extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogList extends $tea.Model {
  logs?: ListFunctionExecuteLogResponseBodyLogListLogs[];
  pagination?: ListFunctionExecuteLogResponseBodyLogListPagination;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListFunctionExecuteLogResponseBodyLogListLogs },
      pagination: ListFunctionExecuteLogResponseBodyLogListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileListFiles extends $tea.Model {
  id?: number;
  name?: string;
  contentId?: number;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  description?: string;
  sandboxDeployTime?: number;
  productionDeployTime?: number;
  sandboxDeployStatus?: number;
  productionDeployStatus?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      contentId: 'ContentId',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      description: 'Description',
      sandboxDeployTime: 'SandboxDeployTime',
      productionDeployTime: 'ProductionDeployTime',
      sandboxDeployStatus: 'SandboxDeployStatus',
      productionDeployStatus: 'ProductionDeployStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      contentId: 'number',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      description: 'string',
      sandboxDeployTime: 'number',
      productionDeployTime: 'number',
      sandboxDeployStatus: 'number',
      productionDeployStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileListPagination extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  totalCount?: number;
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileList extends $tea.Model {
  files?: ListFunctionFilesResponseBodyFileListFiles[];
  pagination?: ListFunctionFilesResponseBodyFileListPagination;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListFunctionFilesResponseBodyFileListFiles },
      pagination: ListFunctionFilesResponseBodyFileListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponseBodyFiles extends $tea.Model {
  id?: number;
  name?: string;
  type?: number;
  contentId?: number;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
      contentId: 'ContentId',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      type: 'number',
      contentId: 'number',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcksList extends $tea.Model {
  mid?: number;
  deviceId?: string;
  ackTime?: number;
  static names(): { [key: string]: string } {
    return {
      mid: 'Mid',
      deviceId: 'DeviceId',
      ackTime: 'AckTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mid: 'number',
      deviceId: 'string',
      ackTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcksPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcks extends $tea.Model {
  list?: ListMessageAcksResponseBodyMessageAcksList[];
  pagination?: ListMessageAcksResponseBodyMessageAcksPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMessageAcksResponseBodyMessageAcksList },
      pagination: ListMessageAcksResponseBodyMessageAcksPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceiversList extends $tea.Model {
  mid?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      mid: 'Mid',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mid: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceiversPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceivers extends $tea.Model {
  list?: ListMessageReceiversResponseBodyMessageReceiversList[];
  pagination?: ListMessageReceiversResponseBodyMessageReceiversPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMessageReceiversResponseBodyMessageReceiversList },
      pagination: ListMessageReceiversResponseBodyMessageReceiversPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList extends $tea.Model {
  topic?: string;
  qoS?: number;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      qoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptions extends $tea.Model {
  list?: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList[];
  pagination?: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList },
      pagination: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTracesList extends $tea.Model {
  time?: number;
  topic?: string;
  type?: string;
  action?: string;
  mid?: string;
  clientId?: string;
  clientMid?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      topic: 'Topic',
      type: 'Type',
      action: 'Action',
      mid: 'Mid',
      clientId: 'ClientId',
      clientMid: 'ClientMid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      topic: 'string',
      type: 'string',
      action: 'string',
      mid: 'string',
      clientId: 'string',
      clientMid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTracesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTraces extends $tea.Model {
  list?: ListMqttMessageLogsResponseBodyTracesList[];
  pagination?: ListMqttMessageLogsResponseBodyTracesPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMqttMessageLogsResponseBodyTracesList },
      pagination: ListMqttMessageLogsResponseBodyTracesPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopicsList extends $tea.Model {
  createTime?: number;
  rootTopic?: string;
  type?: string;
  queueName?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      rootTopic: 'RootTopic',
      type: 'Type',
      queueName: 'QueueName',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      rootTopic: 'string',
      type: 'string',
      queueName: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopicsPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopics extends $tea.Model {
  list?: ListMqttRootTopicsResponseBodyRootTopicsList[];
  pagination?: ListMqttRootTopicsResponseBodyRootTopicsPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMqttRootTopicsResponseBodyRootTopicsList },
      pagination: ListMqttRootTopicsResponseBodyRootTopicsPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyNamespaces extends $tea.Model {
  namespace?: string;
  name?: string;
  userId?: string;
  projectId?: string;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  authType?: number;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      name: 'Name',
      userId: 'UserId',
      projectId: 'ProjectId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      name: 'string',
      userId: 'string',
      projectId: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      authType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessagesList extends $tea.Model {
  mid?: number;
  gmtCreate?: number;
  expiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      mid: 'Mid',
      gmtCreate: 'GmtCreate',
      expiredTime: 'ExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mid: 'number',
      gmtCreate: 'number',
      expiredTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessagesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessages extends $tea.Model {
  list?: ListOfflineMessagesResponseBodyOfflineMessagesList[];
  pagination?: ListOfflineMessagesResponseBodyOfflineMessagesPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListOfflineMessagesResponseBodyOfflineMessagesList },
      pagination: ListOfflineMessagesResponseBodyOfflineMessagesPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponseBodyOpenAccounts extends $tea.Model {
  identityId?: string;
  aliyunId?: string;
  displayName?: string;
  loginId?: string;
  idp?: string;
  openId?: string;
  mobile?: string;
  type?: number;
  status?: number;
  region?: string;
  createAccessKey?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      aliyunId: 'AliyunId',
      displayName: 'DisplayName',
      loginId: 'LoginId',
      idp: 'Idp',
      openId: 'OpenId',
      mobile: 'Mobile',
      type: 'Type',
      status: 'Status',
      region: 'Region',
      createAccessKey: 'CreateAccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      aliyunId: 'string',
      displayName: 'string',
      loginId: 'string',
      idp: 'string',
      openId: 'string',
      mobile: 'string',
      type: 'number',
      status: 'number',
      region: 'string',
      createAccessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponseBodyOpenAccounts extends $tea.Model {
  identityId?: string;
  aliyunId?: string;
  displayName?: string;
  loginId?: string;
  idp?: string;
  openId?: string;
  mobile?: string;
  type?: number;
  status?: number;
  region?: string;
  createAccessKey?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      aliyunId: 'AliyunId',
      displayName: 'DisplayName',
      loginId: 'LoginId',
      idp: 'Idp',
      openId: 'OpenId',
      mobile: 'Mobile',
      type: 'Type',
      status: 'Status',
      region: 'Region',
      createAccessKey: 'CreateAccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      aliyunId: 'string',
      displayName: 'string',
      loginId: 'string',
      idp: 'string',
      openId: 'string',
      mobile: 'string',
      type: 'number',
      status: 'number',
      region: 'string',
      createAccessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponseBodyPreChecks extends $tea.Model {
  key?: string;
  link?: string;
  price?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      link: 'Link',
      price: 'Price',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      link: 'string',
      price: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBodyResultProjectApps extends $tea.Model {
  id?: number;
  appId?: string;
  userId?: string;
  projectId?: string;
  appName?: string;
  appKey?: string;
  appSecret?: string;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  appPkgName?: string;
  osType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appId: 'AppId',
      userId: 'UserId',
      projectId: 'ProjectId',
      appName: 'AppName',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      appPkgName: 'AppPkgName',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appId: 'string',
      userId: 'string',
      projectId: 'string',
      appName: 'string',
      appKey: 'string',
      appSecret: 'string',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      appPkgName: 'string',
      osType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBodyResult extends $tea.Model {
  totalCount?: number;
  totalPage?: number;
  projectApps?: ListProjectAppsResponseBodyResultProjectApps[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      projectApps: 'ProjectApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPage: 'number',
      projectApps: { 'type': 'array', 'itemType': ListProjectAppsResponseBodyResultProjectApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  id?: number;
  projectId?: string;
  userId?: string;
  name?: string;
  status?: number;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      userId: 'UserId',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'string',
      userId: 'string',
      name: 'string',
      status: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServicesList extends $tea.Model {
  id?: number;
  appKey?: string;
  interfaceName?: string;
  groupName?: string;
  type?: string;
  params?: string;
  isDelete?: string;
  gmtCreate?: number;
  gmtModified?: number;
  methodName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appKey: 'AppKey',
      interfaceName: 'InterfaceName',
      groupName: 'GroupName',
      type: 'Type',
      params: 'Params',
      isDelete: 'IsDelete',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      methodName: 'MethodName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appKey: 'string',
      interfaceName: 'string',
      groupName: 'string',
      type: 'string',
      params: 'string',
      isDelete: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      methodName: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServicesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServices extends $tea.Model {
  list?: ListRpcServicesResponseBodyRpcServicesList[];
  pagination?: ListRpcServicesResponseBodyRpcServicesPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListRpcServicesResponseBodyRpcServicesList },
      pagination: ListRpcServicesResponseBodyRpcServicesPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageListList extends $tea.Model {
  id?: number;
  version?: string;
  validitySchema?: string;
  namespace?: string;
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      version: 'Version',
      validitySchema: 'ValiditySchema',
      namespace: 'Namespace',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      version: 'string',
      validitySchema: 'string',
      namespace: 'string',
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageListPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  simpleSign?: boolean;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      simpleSign: 'SimpleSign',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      simpleSign: 'boolean',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageList extends $tea.Model {
  list?: ListSchemaSubscribesResponseBodyPageListList[];
  pagination?: ListSchemaSubscribesResponseBodyPageListPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListSchemaSubscribesResponseBodyPageListList },
      pagination: ListSchemaSubscribesResponseBodyPageListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponseBodyModelList extends $tea.Model {
  deviceModelId?: number;
  deviceType?: string;
  hardwareType?: string;
  deviceModel?: string;
  deviceBrand?: string;
  canCreateDeviceId?: number;
  initUsageType?: number;
  initUsageTypeDesc?: string;
  description?: string;
  projectId?: string;
  securityChip?: number;
  osPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceType: 'DeviceType',
      hardwareType: 'HardwareType',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      canCreateDeviceId: 'CanCreateDeviceId',
      initUsageType: 'InitUsageType',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      description: 'Description',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceType: 'string',
      hardwareType: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      canCreateDeviceId: 'number',
      initUsageType: 'number',
      initUsageTypeDesc: 'string',
      description: 'string',
      projectId: 'string',
      securityChip: 'number',
      osPlatform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageListList extends $tea.Model {
  authTypeDesc?: string;
  id?: number;
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  moduleSchema?: string;
  namespace?: string;
  authType?: number;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      authTypeDesc: 'AuthTypeDesc',
      id: 'Id',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      moduleSchema: 'ModuleSchema',
      namespace: 'Namespace',
      authType: 'AuthType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTypeDesc: 'string',
      id: 'number',
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      moduleSchema: 'string',
      namespace: 'string',
      authType: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageListPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  simpleSign?: boolean;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      simpleSign: 'SimpleSign',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      simpleSign: 'boolean',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageList extends $tea.Model {
  list?: ListShadowSchemasResponseBodyPageListList[];
  pagination?: ListShadowSchemasResponseBodyPageListPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListShadowSchemasResponseBodyPageListList },
      pagination: ListShadowSchemasResponseBodyPageListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponseBodySupportFeatures extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListTriggersFunctions extends $tea.Model {
  id?: number;
  name?: string;
  fileId?: number;
  fileName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      fileId: 'FileId',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      fileId: 'number',
      fileName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListTriggers extends $tea.Model {
  id?: number;
  namespace?: string;
  source?: string;
  gmtCreate?: number;
  gmtModified?: number;
  chainedFunctionIds?: string;
  type?: number;
  status?: number;
  invocationMode?: number;
  sandbox?: number;
  production?: number;
  functions?: ListTriggersResponseBodyTriggerListTriggersFunctions[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      namespace: 'Namespace',
      source: 'Source',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      chainedFunctionIds: 'ChainedFunctionIds',
      type: 'Type',
      status: 'Status',
      invocationMode: 'InvocationMode',
      sandbox: 'Sandbox',
      production: 'Production',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      namespace: 'string',
      source: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      chainedFunctionIds: 'string',
      type: 'number',
      status: 'number',
      invocationMode: 'number',
      sandbox: 'number',
      production: 'number',
      functions: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggerListTriggersFunctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListPagination extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  totalCount?: number;
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerList extends $tea.Model {
  triggers?: ListTriggersResponseBodyTriggerListTriggers[];
  pagination?: ListTriggersResponseBodyTriggerListPagination;
  static names(): { [key: string]: string } {
    return {
      triggers: 'Triggers',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggers: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggerListTriggers },
      pagination: ListTriggersResponseBodyTriggerListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationListList extends $tea.Model {
  id?: number;
  appKey?: string;
  PAppKey?: string;
  projectId?: string;
  gmtCreate?: number;
  appName?: string;
  appPackage?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appKey: 'AppKey',
      PAppKey: 'PAppKey',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      appName: 'AppName',
      appPackage: 'AppPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      appKey: 'string',
      PAppKey: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      appName: 'string',
      appPackage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationListPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationList extends $tea.Model {
  list?: ListUpstreamAppKeyRelationsResponseBodyRelationListList[];
  pagination?: ListUpstreamAppKeyRelationsResponseBodyRelationListPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUpstreamAppKeyRelationsResponseBodyRelationListList },
      pagination: ListUpstreamAppKeyRelationsResponseBodyRelationListPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServersList extends $tea.Model {
  id?: number;
  PAppKey?: string;
  projectId?: string;
  name?: string;
  tags?: string;
  gmtCreate?: number;
  gmtModified?: number;
  queueNameList?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      PAppKey: 'PAppKey',
      projectId: 'ProjectId',
      name: 'Name',
      tags: 'Tags',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      queueNameList: 'QueueNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      PAppKey: 'string',
      projectId: 'string',
      name: 'string',
      tags: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      queueNameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServersPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServers extends $tea.Model {
  list?: ListUpstreamAppServersResponseBodyAppServersList[];
  pagination?: ListUpstreamAppServersResponseBodyAppServersPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUpstreamAppServersResponseBodyAppServersList },
      pagination: ListUpstreamAppServersResponseBodyAppServersPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponseBodyDeviceGroupList extends $tea.Model {
  id?: string;
  name?: string;
  description?: string;
  gmtCreate?: string;
  gmtModify?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
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
    this._endpoint = this.getEndpoint("iovcc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addUploadedFunctionFileInfoWithOptions(request: AddUploadedFunctionFileInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddUploadedFunctionFileInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUploadedFunctionFileInfoResponse>(await this.doRPCRequest("AddUploadedFunctionFileInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddUploadedFunctionFileInfoResponse({}));
  }

  async addUploadedFunctionFileInfo(request: AddUploadedFunctionFileInfoRequest): Promise<AddUploadedFunctionFileInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUploadedFunctionFileInfoWithOptions(request, runtime);
  }

  async addVersionBlackDevicesWithOptions(request: AddVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionBlackDevicesResponse>(await this.doRPCRequest("AddVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionBlackDevicesResponse({}));
  }

  async addVersionBlackDevices(request: AddVersionBlackDevicesRequest): Promise<AddVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionBlackDevicesWithOptions(request, runtime);
  }

  async addVersionGroupDevicesWithOptions(request: AddVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionGroupDevicesResponse>(await this.doRPCRequest("AddVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionGroupDevicesResponse({}));
  }

  async addVersionGroupDevices(request: AddVersionGroupDevicesRequest): Promise<AddVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionGroupDevicesWithOptions(request, runtime);
  }

  async addVersionWhiteDevicesWithOptions(request: AddVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionWhiteDevicesResponse>(await this.doRPCRequest("AddVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionWhiteDevicesResponse({}));
  }

  async addVersionWhiteDevices(request: AddVersionWhiteDevicesRequest): Promise<AddVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionWhiteDevicesWithOptions(request, runtime);
  }

  async addVersionWhiteDevicesByDeviceGroupsWithOptions(request: AddVersionWhiteDevicesByDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionWhiteDevicesByDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionWhiteDevicesByDeviceGroupsResponse>(await this.doRPCRequest("AddVersionWhiteDevicesByDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionWhiteDevicesByDeviceGroupsResponse({}));
  }

  async addVersionWhiteDevicesByDeviceGroups(request: AddVersionWhiteDevicesByDeviceGroupsRequest): Promise<AddVersionWhiteDevicesByDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionWhiteDevicesByDeviceGroupsWithOptions(request, runtime);
  }

  async connectAssistDeviceWithOptions(request: ConnectAssistDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectAssistDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConnectAssistDeviceResponse>(await this.doRPCRequest("ConnectAssistDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConnectAssistDeviceResponse({}));
  }

  async connectAssistDevice(request: ConnectAssistDeviceRequest): Promise<ConnectAssistDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectAssistDeviceWithOptions(request, runtime);
  }

  async countActivatedOrNewRegistrationDeviceWithOptions(request: CountActivatedOrNewRegistrationDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CountActivatedOrNewRegistrationDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CountActivatedOrNewRegistrationDeviceResponse>(await this.doRPCRequest("CountActivatedOrNewRegistrationDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountActivatedOrNewRegistrationDeviceResponse({}));
  }

  async countActivatedOrNewRegistrationDevice(request: CountActivatedOrNewRegistrationDeviceRequest): Promise<CountActivatedOrNewRegistrationDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countActivatedOrNewRegistrationDeviceWithOptions(request, runtime);
  }

  async countDeviceBrandsWithOptions(request: CountDeviceBrandsRequest, runtime: $Util.RuntimeOptions): Promise<CountDeviceBrandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDeviceBrandsResponse>(await this.doRPCRequest("CountDeviceBrands", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDeviceBrandsResponse({}));
  }

  async countDeviceBrands(request: CountDeviceBrandsRequest): Promise<CountDeviceBrandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDeviceBrandsWithOptions(request, runtime);
  }

  async countDeviceModelsWithOptions(request: CountDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<CountDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDeviceModelsResponse>(await this.doRPCRequest("CountDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDeviceModelsResponse({}));
  }

  async countDeviceModels(request: CountDeviceModelsRequest): Promise<CountDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDeviceModelsWithOptions(request, runtime);
  }

  async countDevicesWithOptions(request: CountDevicesRequest, runtime: $Util.RuntimeOptions): Promise<CountDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDevicesResponse>(await this.doRPCRequest("CountDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDevicesResponse({}));
  }

  async countDevices(request: CountDevicesRequest): Promise<CountDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDevicesWithOptions(request, runtime);
  }

  async countProjectsWithOptions(runtime: $Util.RuntimeOptions): Promise<CountProjectsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CountProjectsResponse>(await this.doRPCRequest("CountProjects", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountProjectsResponse({}));
  }

  async countProjects(): Promise<CountProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countProjectsWithOptions(runtime);
  }

  async countYunIdInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<CountYunIdInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CountYunIdInfoResponse>(await this.doRPCRequest("CountYunIdInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountYunIdInfoResponse({}));
  }

  async countYunIdInfo(): Promise<CountYunIdInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countYunIdInfoWithOptions(runtime);
  }

  async createAppVersionWithOptions(request: CreateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppVersionResponse>(await this.doRPCRequest("CreateAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppVersionResponse({}));
  }

  async createAppVersion(request: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionWithOptions(request, runtime);
  }

  async createCustomizedFilterWithOptions(request: CreateCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomizedFilterResponse>(await this.doRPCRequest("CreateCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomizedFilterResponse({}));
  }

  async createCustomizedFilter(request: CreateCustomizedFilterRequest): Promise<CreateCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedFilterWithOptions(request, runtime);
  }

  async createCustomizedPropertyWithOptions(request: CreateCustomizedPropertyRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomizedPropertyResponse>(await this.doRPCRequest("CreateCustomizedProperty", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomizedPropertyResponse({}));
  }

  async createCustomizedProperty(request: CreateCustomizedPropertyRequest): Promise<CreateCustomizedPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedPropertyWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceResponse>(await this.doRPCRequest("CreateDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async createDeviceBrandWithOptions(request: CreateDeviceBrandRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceBrandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceBrandResponse>(await this.doRPCRequest("CreateDeviceBrand", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceBrandResponse({}));
  }

  async createDeviceBrand(request: CreateDeviceBrandRequest): Promise<CreateDeviceBrandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceBrandWithOptions(request, runtime);
  }

  async createDeviceModelWithOptions(request: CreateDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceModelResponse>(await this.doRPCRequest("CreateDeviceModel", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceModelResponse({}));
  }

  async createDeviceModel(request: CreateDeviceModelRequest): Promise<CreateDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceModelWithOptions(request, runtime);
  }

  async createMqttRootTopicWithOptions(request: CreateMqttRootTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateMqttRootTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMqttRootTopicResponse>(await this.doRPCRequest("CreateMqttRootTopic", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMqttRootTopicResponse({}));
  }

  async createMqttRootTopic(request: CreateMqttRootTopicRequest): Promise<CreateMqttRootTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMqttRootTopicWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNamespaceResponse>(await this.doRPCRequest("CreateNamespace", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async createOsVersionWithOptions(request: CreateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOsVersionResponse>(await this.doRPCRequest("CreateOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOsVersionResponse({}));
  }

  async createOsVersion(request: CreateOsVersionRequest): Promise<CreateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOsVersionWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async createProjectAppWithOptions(request: CreateProjectAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectAppResponse>(await this.doRPCRequest("CreateProjectApp", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectAppResponse({}));
  }

  async createProjectApp(request: CreateProjectAppRequest): Promise<CreateProjectAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectAppWithOptions(request, runtime);
  }

  async createRpcServiceWithOptions(request: CreateRpcServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRpcServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRpcServiceResponse>(await this.doRPCRequest("CreateRpcService", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRpcServiceResponse({}));
  }

  async createRpcService(request: CreateRpcServiceRequest): Promise<CreateRpcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRpcServiceWithOptions(request, runtime);
  }

  async createSchemaSubscribeWithOptions(request: CreateSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSchemaSubscribeResponse>(await this.doRPCRequest("CreateSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSchemaSubscribeResponse({}));
  }

  async createSchemaSubscribe(request: CreateSchemaSubscribeRequest): Promise<CreateSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchemaSubscribeWithOptions(request, runtime);
  }

  async createShadowSchemaWithOptions(request: CreateShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<CreateShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateShadowSchemaResponse>(await this.doRPCRequest("CreateShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateShadowSchemaResponse({}));
  }

  async createShadowSchema(request: CreateShadowSchemaRequest): Promise<CreateShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShadowSchemaWithOptions(request, runtime);
  }

  async createTriggerWithOptions(request: CreateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTriggerResponse>(await this.doRPCRequest("CreateTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTriggerResponse({}));
  }

  async createTrigger(request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTriggerWithOptions(request, runtime);
  }

  async createUpstreamAppKeyRelationWithOptions(request: CreateUpstreamAppKeyRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppKeyRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppKeyRelationResponse>(await this.doRPCRequest("CreateUpstreamAppKeyRelation", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppKeyRelationResponse({}));
  }

  async createUpstreamAppKeyRelation(request: CreateUpstreamAppKeyRelationRequest): Promise<CreateUpstreamAppKeyRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppKeyRelationWithOptions(request, runtime);
  }

  async createUpstreamAppKeyRelationsWithOptions(request: CreateUpstreamAppKeyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppKeyRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppKeyRelationsResponse>(await this.doRPCRequest("CreateUpstreamAppKeyRelations", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppKeyRelationsResponse({}));
  }

  async createUpstreamAppKeyRelations(request: CreateUpstreamAppKeyRelationsRequest): Promise<CreateUpstreamAppKeyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppKeyRelationsWithOptions(request, runtime);
  }

  async createUpstreamAppServerWithOptions(request: CreateUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppServerResponse>(await this.doRPCRequest("CreateUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppServerResponse({}));
  }

  async createUpstreamAppServer(request: CreateUpstreamAppServerRequest): Promise<CreateUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppServerWithOptions(request, runtime);
  }

  async createVersionDeviceGroupWithOptions(request: CreateVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionDeviceGroupResponse>(await this.doRPCRequest("CreateVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionDeviceGroupResponse({}));
  }

  async createVersionDeviceGroup(request: CreateVersionDeviceGroupRequest): Promise<CreateVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionDeviceGroupWithOptions(request, runtime);
  }

  async createVersionPrepublishWithOptions(request: CreateVersionPrepublishRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionPrepublishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionPrepublishResponse>(await this.doRPCRequest("CreateVersionPrepublish", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionPrepublishResponse({}));
  }

  async createVersionPrepublish(request: CreateVersionPrepublishRequest): Promise<CreateVersionPrepublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionPrepublishWithOptions(request, runtime);
  }

  async createVersionTestWithOptions(request: CreateVersionTestRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionTestResponse>(await this.doRPCRequest("CreateVersionTest", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionTestResponse({}));
  }

  async createVersionTest(request: CreateVersionTestRequest): Promise<CreateVersionTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionTestWithOptions(request, runtime);
  }

  async delayPublishOsVersionWithOptions(request: DelayPublishOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DelayPublishOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DelayPublishOsVersionResponse>(await this.doRPCRequest("DelayPublishOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DelayPublishOsVersionResponse({}));
  }

  async delayPublishOsVersion(request: DelayPublishOsVersionRequest): Promise<DelayPublishOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delayPublishOsVersionWithOptions(request, runtime);
  }

  async deleteAllCustomizedFiltersWithOptions(request: DeleteAllCustomizedFiltersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllCustomizedFiltersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAllCustomizedFiltersResponse>(await this.doRPCRequest("DeleteAllCustomizedFilters", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAllCustomizedFiltersResponse({}));
  }

  async deleteAllCustomizedFilters(request: DeleteAllCustomizedFiltersRequest): Promise<DeleteAllCustomizedFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllCustomizedFiltersWithOptions(request, runtime);
  }

  async deleteAllVersionGroupDevicesWithOptions(request: DeleteAllVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAllVersionGroupDevicesResponse>(await this.doRPCRequest("DeleteAllVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAllVersionGroupDevicesResponse({}));
  }

  async deleteAllVersionGroupDevices(request: DeleteAllVersionGroupDevicesRequest): Promise<DeleteAllVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllVersionGroupDevicesWithOptions(request, runtime);
  }

  async deleteCustomizedFilterWithOptions(request: DeleteCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomizedFilterResponse>(await this.doRPCRequest("DeleteCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomizedFilterResponse({}));
  }

  async deleteCustomizedFilter(request: DeleteCustomizedFilterRequest): Promise<DeleteCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizedFilterWithOptions(request, runtime);
  }

  async deleteCustomizedPropertyWithOptions(request: DeleteCustomizedPropertyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizedPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomizedPropertyResponse>(await this.doRPCRequest("DeleteCustomizedProperty", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomizedPropertyResponse({}));
  }

  async deleteCustomizedProperty(request: DeleteCustomizedPropertyRequest): Promise<DeleteCustomizedPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizedPropertyWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteFunctionFileWithOptions(request: DeleteFunctionFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFunctionFileResponse>(await this.doRPCRequest("DeleteFunctionFile", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFunctionFileResponse({}));
  }

  async deleteFunctionFile(request: DeleteFunctionFileRequest): Promise<DeleteFunctionFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionFileWithOptions(request, runtime);
  }

  async deleteMqttRootTopicWithOptions(request: DeleteMqttRootTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMqttRootTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMqttRootTopicResponse>(await this.doRPCRequest("DeleteMqttRootTopic", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMqttRootTopicResponse({}));
  }

  async deleteMqttRootTopic(request: DeleteMqttRootTopicRequest): Promise<DeleteMqttRootTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMqttRootTopicWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.doRPCRequest("DeleteNamespace", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async deleteOpenAccountWithOptions(request: DeleteOpenAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOpenAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteOpenAccountResponse>(await this.doRPCRequest("DeleteOpenAccount", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteOpenAccountResponse({}));
  }

  async deleteOpenAccount(request: DeleteOpenAccountRequest): Promise<DeleteOpenAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOpenAccountWithOptions(request, runtime);
  }

  async deleteProjectAppWithOptions(request: DeleteProjectAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectAppResponse>(await this.doRPCRequest("DeleteProjectApp", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectAppResponse({}));
  }

  async deleteProjectApp(request: DeleteProjectAppRequest): Promise<DeleteProjectAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectAppWithOptions(request, runtime);
  }

  async deleteRpcServiceWithOptions(request: DeleteRpcServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRpcServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRpcServiceResponse>(await this.doRPCRequest("DeleteRpcService", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRpcServiceResponse({}));
  }

  async deleteRpcService(request: DeleteRpcServiceRequest): Promise<DeleteRpcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRpcServiceWithOptions(request, runtime);
  }

  async deleteSchemaSubscribeWithOptions(request: DeleteSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSchemaSubscribeResponse>(await this.doRPCRequest("DeleteSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSchemaSubscribeResponse({}));
  }

  async deleteSchemaSubscribe(request: DeleteSchemaSubscribeRequest): Promise<DeleteSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchemaSubscribeWithOptions(request, runtime);
  }

  async deleteShadowSchemaWithOptions(request: DeleteShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteShadowSchemaResponse>(await this.doRPCRequest("DeleteShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteShadowSchemaResponse({}));
  }

  async deleteShadowSchema(request: DeleteShadowSchemaRequest): Promise<DeleteShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteShadowSchemaWithOptions(request, runtime);
  }

  async deleteTriggerWithOptions(request: DeleteTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTriggerResponse>(await this.doRPCRequest("DeleteTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTriggerResponse({}));
  }

  async deleteTrigger(request: DeleteTriggerRequest): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTriggerWithOptions(request, runtime);
  }

  async deleteUpstreamAppKeyRelationWithOptions(request: DeleteUpstreamAppKeyRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUpstreamAppKeyRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUpstreamAppKeyRelationResponse>(await this.doRPCRequest("DeleteUpstreamAppKeyRelation", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUpstreamAppKeyRelationResponse({}));
  }

  async deleteUpstreamAppKeyRelation(request: DeleteUpstreamAppKeyRelationRequest): Promise<DeleteUpstreamAppKeyRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUpstreamAppKeyRelationWithOptions(request, runtime);
  }

  async deleteUpstreamAppServerWithOptions(request: DeleteUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUpstreamAppServerResponse>(await this.doRPCRequest("DeleteUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUpstreamAppServerResponse({}));
  }

  async deleteUpstreamAppServer(request: DeleteUpstreamAppServerRequest): Promise<DeleteUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUpstreamAppServerWithOptions(request, runtime);
  }

  async deleteVersionAllBlackDevicesWithOptions(request: DeleteVersionAllBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionAllBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionAllBlackDevicesResponse>(await this.doRPCRequest("DeleteVersionAllBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionAllBlackDevicesResponse({}));
  }

  async deleteVersionAllBlackDevices(request: DeleteVersionAllBlackDevicesRequest): Promise<DeleteVersionAllBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionAllBlackDevicesWithOptions(request, runtime);
  }

  async deleteVersionAllWhiteDevicesWithOptions(request: DeleteVersionAllWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionAllWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionAllWhiteDevicesResponse>(await this.doRPCRequest("DeleteVersionAllWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionAllWhiteDevicesResponse({}));
  }

  async deleteVersionAllWhiteDevices(request: DeleteVersionAllWhiteDevicesRequest): Promise<DeleteVersionAllWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionAllWhiteDevicesWithOptions(request, runtime);
  }

  async deleteVersionBlackDevicesWithOptions(request: DeleteVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionBlackDevicesResponse>(await this.doRPCRequest("DeleteVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionBlackDevicesResponse({}));
  }

  async deleteVersionBlackDevices(request: DeleteVersionBlackDevicesRequest): Promise<DeleteVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionBlackDevicesWithOptions(request, runtime);
  }

  async deleteVersionBlackDevicesByIdWithOptions(request: DeleteVersionBlackDevicesByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionBlackDevicesByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionBlackDevicesByIdResponse>(await this.doRPCRequest("DeleteVersionBlackDevicesById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionBlackDevicesByIdResponse({}));
  }

  async deleteVersionBlackDevicesById(request: DeleteVersionBlackDevicesByIdRequest): Promise<DeleteVersionBlackDevicesByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionBlackDevicesByIdWithOptions(request, runtime);
  }

  async deleteVersionDeviceGroupWithOptions(request: DeleteVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionDeviceGroupResponse>(await this.doRPCRequest("DeleteVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionDeviceGroupResponse({}));
  }

  async deleteVersionDeviceGroup(request: DeleteVersionDeviceGroupRequest): Promise<DeleteVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionDeviceGroupWithOptions(request, runtime);
  }

  async deleteVersionGroupDeviceWithOptions(request: DeleteVersionGroupDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionGroupDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionGroupDeviceResponse>(await this.doRPCRequest("DeleteVersionGroupDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionGroupDeviceResponse({}));
  }

  async deleteVersionGroupDevice(request: DeleteVersionGroupDeviceRequest): Promise<DeleteVersionGroupDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionGroupDeviceWithOptions(request, runtime);
  }

  async deleteVersionGroupDeviceByIdWithOptions(request: DeleteVersionGroupDeviceByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionGroupDeviceByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionGroupDeviceByIdResponse>(await this.doRPCRequest("DeleteVersionGroupDeviceById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionGroupDeviceByIdResponse({}));
  }

  async deleteVersionGroupDeviceById(request: DeleteVersionGroupDeviceByIdRequest): Promise<DeleteVersionGroupDeviceByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionGroupDeviceByIdWithOptions(request, runtime);
  }

  async deleteVersionTestWithOptions(request: DeleteVersionTestRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionTestResponse>(await this.doRPCRequest("DeleteVersionTest", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionTestResponse({}));
  }

  async deleteVersionTest(request: DeleteVersionTestRequest): Promise<DeleteVersionTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionTestWithOptions(request, runtime);
  }

  async deleteVersionWhiteDevicesWithOptions(request: DeleteVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionWhiteDevicesResponse>(await this.doRPCRequest("DeleteVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionWhiteDevicesResponse({}));
  }

  async deleteVersionWhiteDevices(request: DeleteVersionWhiteDevicesRequest): Promise<DeleteVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionWhiteDevicesWithOptions(request, runtime);
  }

  async deleteVersionWhiteDevicesByIdWithOptions(request: DeleteVersionWhiteDevicesByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionWhiteDevicesByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionWhiteDevicesByIdResponse>(await this.doRPCRequest("DeleteVersionWhiteDevicesById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionWhiteDevicesByIdResponse({}));
  }

  async deleteVersionWhiteDevicesById(request: DeleteVersionWhiteDevicesByIdRequest): Promise<DeleteVersionWhiteDevicesByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionWhiteDevicesByIdWithOptions(request, runtime);
  }

  async deployFunctionFileWithOptions(request: DeployFunctionFileRequest, runtime: $Util.RuntimeOptions): Promise<DeployFunctionFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployFunctionFileResponse>(await this.doRPCRequest("DeployFunctionFile", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeployFunctionFileResponse({}));
  }

  async deployFunctionFile(request: DeployFunctionFileRequest): Promise<DeployFunctionFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFunctionFileWithOptions(request, runtime);
  }

  async describeApiGatewayAppSecurityWithOptions(request: DescribeApiGatewayAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGatewayAppSecurityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiGatewayAppSecurityResponse>(await this.doRPCRequest("DescribeApiGatewayAppSecurity", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiGatewayAppSecurityResponse({}));
  }

  async describeApiGatewayAppSecurity(request: DescribeApiGatewayAppSecurityRequest): Promise<DescribeApiGatewayAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGatewayAppSecurityWithOptions(request, runtime);
  }

  async describeAppVersionWithOptions(request: DescribeAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppVersionResponse>(await this.doRPCRequest("DescribeAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppVersionResponse({}));
  }

  async describeAppVersion(request: DescribeAppVersionRequest): Promise<DescribeAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppVersionWithOptions(request, runtime);
  }

  async describeAssistReportWithOptions(request: DescribeAssistReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistReportResponse>(await this.doRPCRequest("DescribeAssistReport", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistReportResponse({}));
  }

  async describeAssistReport(request: DescribeAssistReportRequest): Promise<DescribeAssistReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistReportWithOptions(request, runtime);
  }

  async describeAssistRTMPServerAddressWithOptions(request: DescribeAssistRTMPServerAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistRTMPServerAddressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistRTMPServerAddressResponse>(await this.doRPCRequest("DescribeAssistRTMPServerAddress", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistRTMPServerAddressResponse({}));
  }

  async describeAssistRTMPServerAddress(request: DescribeAssistRTMPServerAddressRequest): Promise<DescribeAssistRTMPServerAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistRTMPServerAddressWithOptions(request, runtime);
  }

  async describeAssistWSServerAddressWithOptions(request: DescribeAssistWSServerAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistWSServerAddressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistWSServerAddressResponse>(await this.doRPCRequest("DescribeAssistWSServerAddress", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistWSServerAddressResponse({}));
  }

  async describeAssistWSServerAddress(request: DescribeAssistWSServerAddressRequest): Promise<DescribeAssistWSServerAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistWSServerAddressWithOptions(request, runtime);
  }

  async describeCustomizedFilterWithOptions(request: DescribeCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomizedFilterResponse>(await this.doRPCRequest("DescribeCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomizedFilterResponse({}));
  }

  async describeCustomizedFilter(request: DescribeCustomizedFilterRequest): Promise<DescribeCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizedFilterWithOptions(request, runtime);
  }

  async describeDefaultSchemaWithOptions(request: DescribeDefaultSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefaultSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDefaultSchemaResponse>(await this.doRPCRequest("DescribeDefaultSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDefaultSchemaResponse({}));
  }

  async describeDefaultSchema(request: DescribeDefaultSchemaRequest): Promise<DescribeDefaultSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefaultSchemaWithOptions(request, runtime);
  }

  async describeDeviceWithOptions(request: DescribeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceResponse>(await this.doRPCRequest("DescribeDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceResponse({}));
  }

  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  async describeDeviceBrandWithOptions(request: DescribeDeviceBrandRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceBrandResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceBrandResponse>(await this.doRPCRequest("DescribeDeviceBrand", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceBrandResponse({}));
  }

  async describeDeviceBrand(request: DescribeDeviceBrandRequest): Promise<DescribeDeviceBrandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceBrandWithOptions(request, runtime);
  }

  async describeDeviceIdByOuterInfoWithOptions(request: DescribeDeviceIdByOuterInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceIdByOuterInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceIdByOuterInfoResponse>(await this.doRPCRequest("DescribeDeviceIdByOuterInfo", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceIdByOuterInfoResponse({}));
  }

  async describeDeviceIdByOuterInfo(request: DescribeDeviceIdByOuterInfoRequest): Promise<DescribeDeviceIdByOuterInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceIdByOuterInfoWithOptions(request, runtime);
  }

  async describeDeviceInfoWithOptions(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceInfoResponse>(await this.doRPCRequest("DescribeDeviceInfo", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceInfoResponse({}));
  }

  async describeDeviceInfo(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  async describeDeviceModelWithOptions(request: DescribeDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceModelResponse>(await this.doRPCRequest("DescribeDeviceModel", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceModelResponse({}));
  }

  async describeDeviceModel(request: DescribeDeviceModelRequest): Promise<DescribeDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceModelWithOptions(request, runtime);
  }

  async describeDeviceOnlineInfoWithOptions(request: DescribeDeviceOnlineInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceOnlineInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceOnlineInfoResponse>(await this.doRPCRequest("DescribeDeviceOnlineInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceOnlineInfoResponse({}));
  }

  async describeDeviceOnlineInfo(request: DescribeDeviceOnlineInfoRequest): Promise<DescribeDeviceOnlineInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceOnlineInfoWithOptions(request, runtime);
  }

  async describeDeviceShadowWithOptions(request: DescribeDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceShadowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceShadowResponse>(await this.doRPCRequest("DescribeDeviceShadow", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceShadowResponse({}));
  }

  async describeDeviceShadow(request: DescribeDeviceShadowRequest): Promise<DescribeDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceShadowWithOptions(request, runtime);
  }

  async describeDeviceValiditySchemaWithOptions(request: DescribeDeviceValiditySchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceValiditySchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceValiditySchemaResponse>(await this.doRPCRequest("DescribeDeviceValiditySchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceValiditySchemaResponse({}));
  }

  async describeDeviceValiditySchema(request: DescribeDeviceValiditySchemaRequest): Promise<DescribeDeviceValiditySchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceValiditySchemaWithOptions(request, runtime);
  }

  async describeMessageWithOptions(request: DescribeMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMessageResponse>(await this.doRPCRequest("DescribeMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMessageResponse({}));
  }

  async describeMessage(request: DescribeMessageRequest): Promise<DescribeMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMessageWithOptions(request, runtime);
  }

  async describeMqttClientStatusWithOptions(request: DescribeMqttClientStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttClientStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttClientStatusResponse>(await this.doRPCRequest("DescribeMqttClientStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttClientStatusResponse({}));
  }

  async describeMqttClientStatus(request: DescribeMqttClientStatusRequest): Promise<DescribeMqttClientStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttClientStatusWithOptions(request, runtime);
  }

  async describeMqttMessageWithOptions(request: DescribeMqttMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttMessageResponse>(await this.doRPCRequest("DescribeMqttMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttMessageResponse({}));
  }

  async describeMqttMessage(request: DescribeMqttMessageRequest): Promise<DescribeMqttMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttMessageWithOptions(request, runtime);
  }

  async describeMqttTopicSubscriptionWithOptions(request: DescribeMqttTopicSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttTopicSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttTopicSubscriptionResponse>(await this.doRPCRequest("DescribeMqttTopicSubscription", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttTopicSubscriptionResponse({}));
  }

  async describeMqttTopicSubscription(request: DescribeMqttTopicSubscriptionRequest): Promise<DescribeMqttTopicSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttTopicSubscriptionWithOptions(request, runtime);
  }

  async describeOpenAccountWithOptions(request: DescribeOpenAccountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpenAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeOpenAccountResponse>(await this.doRPCRequest("DescribeOpenAccount", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeOpenAccountResponse({}));
  }

  async describeOpenAccount(request: DescribeOpenAccountRequest): Promise<DescribeOpenAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpenAccountWithOptions(request, runtime);
  }

  async describeOsVersionWithOptions(request: DescribeOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOsVersionResponse>(await this.doRPCRequest("DescribeOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOsVersionResponse({}));
  }

  async describeOsVersion(request: DescribeOsVersionRequest): Promise<DescribeOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOsVersionWithOptions(request, runtime);
  }

  async describeProjectWithOptions(request: DescribeProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectResponse>(await this.doRPCRequest("DescribeProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectResponse({}));
  }

  async describeProject(request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

  async describeProjectAppSecurityWithOptions(request: DescribeProjectAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectAppSecurityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectAppSecurityResponse>(await this.doRPCRequest("DescribeProjectAppSecurity", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectAppSecurityResponse({}));
  }

  async describeProjectAppSecurity(request: DescribeProjectAppSecurityRequest): Promise<DescribeProjectAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectAppSecurityWithOptions(request, runtime);
  }

  async describeShadowSchemaWithOptions(request: DescribeShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeShadowSchemaResponse>(await this.doRPCRequest("DescribeShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeShadowSchemaResponse({}));
  }

  async describeShadowSchema(request: DescribeShadowSchemaRequest): Promise<DescribeShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShadowSchemaWithOptions(request, runtime);
  }

  async describeVersionDeviceGroupWithOptions(request: DescribeVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVersionDeviceGroupResponse>(await this.doRPCRequest("DescribeVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVersionDeviceGroupResponse({}));
  }

  async describeVersionDeviceGroup(request: DescribeVersionDeviceGroupRequest): Promise<DescribeVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVersionDeviceGroupWithOptions(request, runtime);
  }

  async diagnosisVersionWithOptions(request: DiagnosisVersionRequest, runtime: $Util.RuntimeOptions): Promise<DiagnosisVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DiagnosisVersionResponse>(await this.doRPCRequest("DiagnosisVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DiagnosisVersionResponse({}));
  }

  async diagnosisVersion(request: DiagnosisVersionRequest): Promise<DiagnosisVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.diagnosisVersionWithOptions(request, runtime);
  }

  async findAppVersionsWithOptions(request: FindAppVersionsRequest, runtime: $Util.RuntimeOptions): Promise<FindAppVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindAppVersionsResponse>(await this.doRPCRequest("FindAppVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindAppVersionsResponse({}));
  }

  async findAppVersions(request: FindAppVersionsRequest): Promise<FindAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findAppVersionsWithOptions(request, runtime);
  }

  async findCustomizedFiltersWithOptions(request: FindCustomizedFiltersRequest, runtime: $Util.RuntimeOptions): Promise<FindCustomizedFiltersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindCustomizedFiltersResponse>(await this.doRPCRequest("FindCustomizedFilters", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindCustomizedFiltersResponse({}));
  }

  async findCustomizedFilters(request: FindCustomizedFiltersRequest): Promise<FindCustomizedFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findCustomizedFiltersWithOptions(request, runtime);
  }

  async findCustomizedPropertiesWithOptions(request: FindCustomizedPropertiesRequest, runtime: $Util.RuntimeOptions): Promise<FindCustomizedPropertiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindCustomizedPropertiesResponse>(await this.doRPCRequest("FindCustomizedProperties", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindCustomizedPropertiesResponse({}));
  }

  async findCustomizedProperties(request: FindCustomizedPropertiesRequest): Promise<FindCustomizedPropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findCustomizedPropertiesWithOptions(request, runtime);
  }

  async findOsVersionsWithOptions(request: FindOsVersionsRequest, runtime: $Util.RuntimeOptions): Promise<FindOsVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindOsVersionsResponse>(await this.doRPCRequest("FindOsVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindOsVersionsResponse({}));
  }

  async findOsVersions(request: FindOsVersionsRequest): Promise<FindOsVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findOsVersionsWithOptions(request, runtime);
  }

  async findPrepublishesByParentIdWithOptions(request: FindPrepublishesByParentIdRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishesByParentIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishesByParentIdResponse>(await this.doRPCRequest("FindPrepublishesByParentId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishesByParentIdResponse({}));
  }

  async findPrepublishesByParentId(request: FindPrepublishesByParentIdRequest): Promise<FindPrepublishesByParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishesByParentIdWithOptions(request, runtime);
  }

  async findPrepublishesByVersionIdWithOptions(request: FindPrepublishesByVersionIdRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishesByVersionIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishesByVersionIdResponse>(await this.doRPCRequest("FindPrepublishesByVersionId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishesByVersionIdResponse({}));
  }

  async findPrepublishesByVersionId(request: FindPrepublishesByVersionIdRequest): Promise<FindPrepublishesByVersionIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishesByVersionIdWithOptions(request, runtime);
  }

  async findPrepublishPassedDevicesWithOptions(request: FindPrepublishPassedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishPassedDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishPassedDevicesResponse>(await this.doRPCRequest("FindPrepublishPassedDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishPassedDevicesResponse({}));
  }

  async findPrepublishPassedDevices(request: FindPrepublishPassedDevicesRequest): Promise<FindPrepublishPassedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishPassedDevicesWithOptions(request, runtime);
  }

  async findVersionBlackDevicesWithOptions(request: FindVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionBlackDevicesResponse>(await this.doRPCRequest("FindVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionBlackDevicesResponse({}));
  }

  async findVersionBlackDevices(request: FindVersionBlackDevicesRequest): Promise<FindVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionBlackDevicesWithOptions(request, runtime);
  }

  async findVersionDeviceGroupsWithOptions(request: FindVersionDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionDeviceGroupsResponse>(await this.doRPCRequest("FindVersionDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionDeviceGroupsResponse({}));
  }

  async findVersionDeviceGroups(request: FindVersionDeviceGroupsRequest): Promise<FindVersionDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionDeviceGroupsWithOptions(request, runtime);
  }

  async findVersionGroupDevicesWithOptions(request: FindVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionGroupDevicesResponse>(await this.doRPCRequest("FindVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionGroupDevicesResponse({}));
  }

  async findVersionGroupDevices(request: FindVersionGroupDevicesRequest): Promise<FindVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionGroupDevicesWithOptions(request, runtime);
  }

  async findVersionMessagesWithOptions(request: FindVersionMessagesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionMessagesResponse>(await this.doRPCRequest("FindVersionMessages", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionMessagesResponse({}));
  }

  async findVersionMessages(request: FindVersionMessagesRequest): Promise<FindVersionMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionMessagesWithOptions(request, runtime);
  }

  async findVersionMessageSendRecordsWithOptions(request: FindVersionMessageSendRecordsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionMessageSendRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionMessageSendRecordsResponse>(await this.doRPCRequest("FindVersionMessageSendRecords", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionMessageSendRecordsResponse({}));
  }

  async findVersionMessageSendRecords(request: FindVersionMessageSendRecordsRequest): Promise<FindVersionMessageSendRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionMessageSendRecordsWithOptions(request, runtime);
  }

  async findVersionTestsWithOptions(request: FindVersionTestsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionTestsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionTestsResponse>(await this.doRPCRequest("FindVersionTests", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionTestsResponse({}));
  }

  async findVersionTests(request: FindVersionTestsRequest): Promise<FindVersionTestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionTestsWithOptions(request, runtime);
  }

  async findVersionWhiteDevicesWithOptions(request: FindVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionWhiteDevicesResponse>(await this.doRPCRequest("FindVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionWhiteDevicesResponse({}));
  }

  async findVersionWhiteDevices(request: FindVersionWhiteDevicesRequest): Promise<FindVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionWhiteDevicesWithOptions(request, runtime);
  }

  async generateAssistFileUploadUrlWithOptions(request: GenerateAssistFileUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAssistFileUploadUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAssistFileUploadUrlResponse>(await this.doRPCRequest("GenerateAssistFileUploadUrl", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAssistFileUploadUrlResponse({}));
  }

  async generateAssistFileUploadUrl(request: GenerateAssistFileUploadUrlRequest): Promise<GenerateAssistFileUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAssistFileUploadUrlWithOptions(request, runtime);
  }

  async generateFunctionFileUploadMetaWithOptions(request: GenerateFunctionFileUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFunctionFileUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateFunctionFileUploadMetaResponse>(await this.doRPCRequest("GenerateFunctionFileUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateFunctionFileUploadMetaResponse({}));
  }

  async generateFunctionFileUploadMeta(request: GenerateFunctionFileUploadMetaRequest): Promise<GenerateFunctionFileUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFunctionFileUploadMetaWithOptions(request, runtime);
  }

  async generateOssPostPolicyWithOptions(request: GenerateOssPostPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOssPostPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateOssPostPolicyResponse>(await this.doRPCRequest("GenerateOssPostPolicy", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateOssPostPolicyResponse({}));
  }

  async generateOssPostPolicy(request: GenerateOssPostPolicyRequest): Promise<GenerateOssPostPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOssPostPolicyWithOptions(request, runtime);
  }

  async generateOssUploadMetaWithOptions(request: GenerateOssUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOssUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateOssUploadMetaResponse>(await this.doRPCRequest("GenerateOssUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateOssUploadMetaResponse({}));
  }

  async generateOssUploadMeta(request: GenerateOssUploadMetaRequest): Promise<GenerateOssUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOssUploadMetaWithOptions(request, runtime);
  }

  async generateSdkDownloadInfoWithOptions(request: GenerateSdkDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateSdkDownloadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateSdkDownloadInfoResponse>(await this.doRPCRequest("GenerateSdkDownloadInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateSdkDownloadInfoResponse({}));
  }

  async generateSdkDownloadInfo(request: GenerateSdkDownloadInfoRequest): Promise<GenerateSdkDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateSdkDownloadInfoWithOptions(request, runtime);
  }

  async generateSysAppDownloadInfoWithOptions(request: GenerateSysAppDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateSysAppDownloadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateSysAppDownloadInfoResponse>(await this.doRPCRequest("GenerateSysAppDownloadInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateSysAppDownloadInfoResponse({}));
  }

  async generateSysAppDownloadInfo(request: GenerateSysAppDownloadInfoRequest): Promise<GenerateSysAppDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateSysAppDownloadInfoWithOptions(request, runtime);
  }

  async getDeviceAppUpdateFunnelEventsWithOptions(request: GetDeviceAppUpdateFunnelEventsRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceAppUpdateFunnelEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceAppUpdateFunnelEventsResponse>(await this.doRPCRequest("GetDeviceAppUpdateFunnelEvents", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceAppUpdateFunnelEventsResponse({}));
  }

  async getDeviceAppUpdateFunnelEvents(request: GetDeviceAppUpdateFunnelEventsRequest): Promise<GetDeviceAppUpdateFunnelEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceAppUpdateFunnelEventsWithOptions(request, runtime);
  }

  async getDeviceSystemUpdateFunnelEventsWithOptions(request: GetDeviceSystemUpdateFunnelEventsRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceSystemUpdateFunnelEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceSystemUpdateFunnelEventsResponse>(await this.doRPCRequest("GetDeviceSystemUpdateFunnelEvents", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceSystemUpdateFunnelEventsResponse({}));
  }

  async getDeviceSystemUpdateFunnelEvents(request: GetDeviceSystemUpdateFunnelEventsRequest): Promise<GetDeviceSystemUpdateFunnelEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceSystemUpdateFunnelEventsWithOptions(request, runtime);
  }

  async getNamespaceDataWithOptions(request: GetNamespaceDataRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNamespaceDataResponse>(await this.doRPCRequest("GetNamespaceData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNamespaceDataResponse({}));
  }

  async getNamespaceData(request: GetNamespaceDataRequest): Promise<GetNamespaceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceDataWithOptions(request, runtime);
  }

  async getNamespaceStatisticsDataWithOptions(request: GetNamespaceStatisticsDataRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceStatisticsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNamespaceStatisticsDataResponse>(await this.doRPCRequest("GetNamespaceStatisticsData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNamespaceStatisticsDataResponse({}));
  }

  async getNamespaceStatisticsData(request: GetNamespaceStatisticsDataRequest): Promise<GetNamespaceStatisticsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceStatisticsDataWithOptions(request, runtime);
  }

  async getOssUploadMetaWithOptions(request: GetOssUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetOssUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOssUploadMetaResponse>(await this.doRPCRequest("GetOssUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOssUploadMetaResponse({}));
  }

  async getOssUploadMeta(request: GetOssUploadMetaRequest): Promise<GetOssUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssUploadMetaWithOptions(request, runtime);
  }

  async invokeFunctionWithOptions(request: InvokeFunctionRequest, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeFunctionResponse>(await this.doRPCRequest("InvokeFunction", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeFunctionResponse({}));
  }

  async invokeFunction(request: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeFunctionWithOptions(request, runtime);
  }

  async listApiGatewayAppsWithOptions(request: ListApiGatewayAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListApiGatewayAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApiGatewayAppsResponse>(await this.doRPCRequest("ListApiGatewayApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListApiGatewayAppsResponse({}));
  }

  async listApiGatewayApps(request: ListApiGatewayAppsRequest): Promise<ListApiGatewayAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiGatewayAppsWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppsResponse>(await this.doRPCRequest("ListApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listAssistActionDetailsWithOptions(request: ListAssistActionDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistActionDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistActionDetailsResponse>(await this.doRPCRequest("ListAssistActionDetails", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistActionDetailsResponse({}));
  }

  async listAssistActionDetails(request: ListAssistActionDetailsRequest): Promise<ListAssistActionDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistActionDetailsWithOptions(request, runtime);
  }

  async listAssistDevicesWithOptions(request: ListAssistDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistDevicesResponse>(await this.doRPCRequest("ListAssistDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistDevicesResponse({}));
  }

  async listAssistDevices(request: ListAssistDevicesRequest): Promise<ListAssistDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistDevicesWithOptions(request, runtime);
  }

  async listAssistHistoriesWithOptions(request: ListAssistHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistHistoriesResponse>(await this.doRPCRequest("ListAssistHistories", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistHistoriesResponse({}));
  }

  async listAssistHistories(request: ListAssistHistoriesRequest): Promise<ListAssistHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistHistoriesWithOptions(request, runtime);
  }

  async listAssistHistoryDetailsWithOptions(request: ListAssistHistoryDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistHistoryDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistHistoryDetailsResponse>(await this.doRPCRequest("ListAssistHistoryDetails", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistHistoryDetailsResponse({}));
  }

  async listAssistHistoryDetails(request: ListAssistHistoryDetailsRequest): Promise<ListAssistHistoryDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistHistoryDetailsWithOptions(request, runtime);
  }

  async listClientPluginsWithOptions(request: ListClientPluginsRequest, runtime: $Util.RuntimeOptions): Promise<ListClientPluginsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientPluginsResponse>(await this.doRPCRequest("ListClientPlugins", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientPluginsResponse({}));
  }

  async listClientPlugins(request: ListClientPluginsRequest): Promise<ListClientPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientPluginsWithOptions(request, runtime);
  }

  async listClientPluginVersionsWithOptions(request: ListClientPluginVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListClientPluginVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientPluginVersionsResponse>(await this.doRPCRequest("ListClientPluginVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientPluginVersionsResponse({}));
  }

  async listClientPluginVersions(request: ListClientPluginVersionsRequest): Promise<ListClientPluginVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientPluginVersionsWithOptions(request, runtime);
  }

  async listClientSdksWithOptions(request: ListClientSdksRequest, runtime: $Util.RuntimeOptions): Promise<ListClientSdksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientSdksResponse>(await this.doRPCRequest("ListClientSdks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientSdksResponse({}));
  }

  async listClientSdks(request: ListClientSdksRequest): Promise<ListClientSdksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientSdksWithOptions(request, runtime);
  }

  async listConnectLogsWithOptions(request: ListConnectLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectLogsResponse>(await this.doRPCRequest("ListConnectLogs", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectLogsResponse({}));
  }

  async listConnectLogs(request: ListConnectLogsRequest): Promise<ListConnectLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectLogsWithOptions(request, runtime);
  }

  async listDeployedFunctionsWithOptions(request: ListDeployedFunctionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployedFunctionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeployedFunctionsResponse>(await this.doRPCRequest("ListDeployedFunctions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeployedFunctionsResponse({}));
  }

  async listDeployedFunctions(request: ListDeployedFunctionsRequest): Promise<ListDeployedFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployedFunctionsWithOptions(request, runtime);
  }

  async listDeviceBrandsWithOptions(request: ListDeviceBrandsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceBrandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceBrandsResponse>(await this.doRPCRequest("ListDeviceBrands", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceBrandsResponse({}));
  }

  async listDeviceBrands(request: ListDeviceBrandsRequest): Promise<ListDeviceBrandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceBrandsWithOptions(request, runtime);
  }

  async listDeviceModelWithOptions(request: ListDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceModelResponse>(await this.doRPCRequest("ListDeviceModel", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceModelResponse({}));
  }

  async listDeviceModel(request: ListDeviceModelRequest): Promise<ListDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceModelWithOptions(request, runtime);
  }

  async listDeviceModelsWithOptions(request: ListDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceModelsResponse>(await this.doRPCRequest("ListDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceModelsResponse({}));
  }

  async listDeviceModels(request: ListDeviceModelsRequest): Promise<ListDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceModelsWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDevicesResponse>(await this.doRPCRequest("ListDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async listDeviceTypesWithOptions(request: ListDeviceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceTypesResponse>(await this.doRPCRequest("ListDeviceTypes", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceTypesResponse({}));
  }

  async listDeviceTypes(request: ListDeviceTypesRequest): Promise<ListDeviceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceTypesWithOptions(request, runtime);
  }

  async listFunctionExecuteLogWithOptions(request: ListFunctionExecuteLogRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionExecuteLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionExecuteLogResponse>(await this.doRPCRequest("ListFunctionExecuteLog", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionExecuteLogResponse({}));
  }

  async listFunctionExecuteLog(request: ListFunctionExecuteLogRequest): Promise<ListFunctionExecuteLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionExecuteLogWithOptions(request, runtime);
  }

  async listFunctionFilesWithOptions(request: ListFunctionFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionFilesResponse>(await this.doRPCRequest("ListFunctionFiles", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionFilesResponse({}));
  }

  async listFunctionFiles(request: ListFunctionFilesRequest): Promise<ListFunctionFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionFilesWithOptions(request, runtime);
  }

  async listFunctionFilesByProjectIdWithOptions(request: ListFunctionFilesByProjectIdRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionFilesByProjectIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionFilesByProjectIdResponse>(await this.doRPCRequest("ListFunctionFilesByProjectId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionFilesByProjectIdResponse({}));
  }

  async listFunctionFilesByProjectId(request: ListFunctionFilesByProjectIdRequest): Promise<ListFunctionFilesByProjectIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionFilesByProjectIdWithOptions(request, runtime);
  }

  async listMessageAcksWithOptions(request: ListMessageAcksRequest, runtime: $Util.RuntimeOptions): Promise<ListMessageAcksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMessageAcksResponse>(await this.doRPCRequest("ListMessageAcks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMessageAcksResponse({}));
  }

  async listMessageAcks(request: ListMessageAcksRequest): Promise<ListMessageAcksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMessageAcksWithOptions(request, runtime);
  }

  async listMessageReceiversWithOptions(request: ListMessageReceiversRequest, runtime: $Util.RuntimeOptions): Promise<ListMessageReceiversResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMessageReceiversResponse>(await this.doRPCRequest("ListMessageReceivers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMessageReceiversResponse({}));
  }

  async listMessageReceivers(request: ListMessageReceiversRequest): Promise<ListMessageReceiversResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMessageReceiversWithOptions(request, runtime);
  }

  async listMqttClientSubscriptionsWithOptions(request: ListMqttClientSubscriptionsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttClientSubscriptionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttClientSubscriptionsResponse>(await this.doRPCRequest("ListMqttClientSubscriptions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttClientSubscriptionsResponse({}));
  }

  async listMqttClientSubscriptions(request: ListMqttClientSubscriptionsRequest): Promise<ListMqttClientSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttClientSubscriptionsWithOptions(request, runtime);
  }

  async listMqttMessageLogsWithOptions(request: ListMqttMessageLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttMessageLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttMessageLogsResponse>(await this.doRPCRequest("ListMqttMessageLogs", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttMessageLogsResponse({}));
  }

  async listMqttMessageLogs(request: ListMqttMessageLogsRequest): Promise<ListMqttMessageLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttMessageLogsWithOptions(request, runtime);
  }

  async listMqttRootTopicsWithOptions(request: ListMqttRootTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttRootTopicsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttRootTopicsResponse>(await this.doRPCRequest("ListMqttRootTopics", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttRootTopicsResponse({}));
  }

  async listMqttRootTopics(request: ListMqttRootTopicsRequest): Promise<ListMqttRootTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttRootTopicsWithOptions(request, runtime);
  }

  async listNamespacesWithOptions(request: ListNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNamespacesResponse>(await this.doRPCRequest("ListNamespaces", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListNamespacesResponse({}));
  }

  async listNamespaces(request: ListNamespacesRequest): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  async listOfflineMessagesWithOptions(request: ListOfflineMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListOfflineMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOfflineMessagesResponse>(await this.doRPCRequest("ListOfflineMessages", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListOfflineMessagesResponse({}));
  }

  async listOfflineMessages(request: ListOfflineMessagesRequest): Promise<ListOfflineMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfflineMessagesWithOptions(request, runtime);
  }

  async listOpenAccountLinksWithOptions(request: ListOpenAccountLinksRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenAccountLinksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOpenAccountLinksResponse>(await this.doRPCRequest("ListOpenAccountLinks", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListOpenAccountLinksResponse({}));
  }

  async listOpenAccountLinks(request: ListOpenAccountLinksRequest): Promise<ListOpenAccountLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenAccountLinksWithOptions(request, runtime);
  }

  async listOpenAccountsWithOptions(request: ListOpenAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenAccountsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOpenAccountsResponse>(await this.doRPCRequest("ListOpenAccounts", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListOpenAccountsResponse({}));
  }

  async listOpenAccounts(request: ListOpenAccountsRequest): Promise<ListOpenAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenAccountsWithOptions(request, runtime);
  }

  async listPreChecksWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPreChecksResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListPreChecksResponse>(await this.doRPCRequest("ListPreChecks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPreChecksResponse({}));
  }

  async listPreChecks(): Promise<ListPreChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreChecksWithOptions(runtime);
  }

  async listProjectAppsWithOptions(request: ListProjectAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectAppsResponse>(await this.doRPCRequest("ListProjectApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectAppsResponse({}));
  }

  async listProjectApps(request: ListProjectAppsRequest): Promise<ListProjectAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectAppsWithOptions(request, runtime);
  }

  async listProjectsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(runtime);
  }

  async listRpcServicesWithOptions(request: ListRpcServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListRpcServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRpcServicesResponse>(await this.doRPCRequest("ListRpcServices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRpcServicesResponse({}));
  }

  async listRpcServices(request: ListRpcServicesRequest): Promise<ListRpcServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRpcServicesWithOptions(request, runtime);
  }

  async listSchemaSubscribesWithOptions(request: ListSchemaSubscribesRequest, runtime: $Util.RuntimeOptions): Promise<ListSchemaSubscribesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSchemaSubscribesResponse>(await this.doRPCRequest("ListSchemaSubscribes", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListSchemaSubscribesResponse({}));
  }

  async listSchemaSubscribes(request: ListSchemaSubscribesRequest): Promise<ListSchemaSubscribesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchemaSubscribesWithOptions(request, runtime);
  }

  async listServicesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListServicesResponse>(await this.doRPCRequest("ListServices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListServicesResponse({}));
  }

  async listServices(): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(runtime);
  }

  async listShadowSchemaDeviceModelsWithOptions(request: ListShadowSchemaDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListShadowSchemaDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListShadowSchemaDeviceModelsResponse>(await this.doRPCRequest("ListShadowSchemaDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListShadowSchemaDeviceModelsResponse({}));
  }

  async listShadowSchemaDeviceModels(request: ListShadowSchemaDeviceModelsRequest): Promise<ListShadowSchemaDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listShadowSchemaDeviceModelsWithOptions(request, runtime);
  }

  async listShadowSchemasWithOptions(request: ListShadowSchemasRequest, runtime: $Util.RuntimeOptions): Promise<ListShadowSchemasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListShadowSchemasResponse>(await this.doRPCRequest("ListShadowSchemas", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListShadowSchemasResponse({}));
  }

  async listShadowSchemas(request: ListShadowSchemasRequest): Promise<ListShadowSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listShadowSchemasWithOptions(request, runtime);
  }

  async listSupportFeaturesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSupportFeaturesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListSupportFeaturesResponse>(await this.doRPCRequest("ListSupportFeatures", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSupportFeaturesResponse({}));
  }

  async listSupportFeatures(): Promise<ListSupportFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSupportFeaturesWithOptions(runtime);
  }

  async listTriggersWithOptions(request: ListTriggersRequest, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTriggersResponse>(await this.doRPCRequest("ListTriggers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTriggersResponse({}));
  }

  async listTriggers(request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTriggersWithOptions(request, runtime);
  }

  async listUpstreamAppKeyRelationsWithOptions(request: ListUpstreamAppKeyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListUpstreamAppKeyRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUpstreamAppKeyRelationsResponse>(await this.doRPCRequest("ListUpstreamAppKeyRelations", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUpstreamAppKeyRelationsResponse({}));
  }

  async listUpstreamAppKeyRelations(request: ListUpstreamAppKeyRelationsRequest): Promise<ListUpstreamAppKeyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUpstreamAppKeyRelationsWithOptions(request, runtime);
  }

  async listUpstreamAppServersWithOptions(request: ListUpstreamAppServersRequest, runtime: $Util.RuntimeOptions): Promise<ListUpstreamAppServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUpstreamAppServersResponse>(await this.doRPCRequest("ListUpstreamAppServers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUpstreamAppServersResponse({}));
  }

  async listUpstreamAppServers(request: ListUpstreamAppServersRequest): Promise<ListUpstreamAppServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUpstreamAppServersWithOptions(request, runtime);
  }

  async listVersionDeviceGroupsWithOptions(request: ListVersionDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVersionDeviceGroupsResponse>(await this.doRPCRequest("ListVersionDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVersionDeviceGroupsResponse({}));
  }

  async listVersionDeviceGroups(request: ListVersionDeviceGroupsRequest): Promise<ListVersionDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionDeviceGroupsWithOptions(request, runtime);
  }

  async publishAppVersionWithOptions(request: PublishAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<PublishAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishAppVersionResponse>(await this.doRPCRequest("PublishAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishAppVersionResponse({}));
  }

  async publishAppVersion(request: PublishAppVersionRequest): Promise<PublishAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishAppVersionWithOptions(request, runtime);
  }

  async publishMqttMessageWithOptions(request: PublishMqttMessageRequest, runtime: $Util.RuntimeOptions): Promise<PublishMqttMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishMqttMessageResponse>(await this.doRPCRequest("PublishMqttMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishMqttMessageResponse({}));
  }

  async publishMqttMessage(request: PublishMqttMessageRequest): Promise<PublishMqttMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishMqttMessageWithOptions(request, runtime);
  }

  async publishOsVersionWithOptions(request: PublishOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<PublishOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishOsVersionResponse>(await this.doRPCRequest("PublishOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishOsVersionResponse({}));
  }

  async publishOsVersion(request: PublishOsVersionRequest): Promise<PublishOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishOsVersionWithOptions(request, runtime);
  }

  async pushMessageWithOptions(request: PushMessageRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushMessageResponse>(await this.doRPCRequest("PushMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushMessageResponse({}));
  }

  async pushMessage(request: PushMessageRequest): Promise<PushMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageWithOptions(request, runtime);
  }

  async pushVersionMessageWithOptions(request: PushVersionMessageRequest, runtime: $Util.RuntimeOptions): Promise<PushVersionMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushVersionMessageResponse>(await this.doRPCRequest("PushVersionMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushVersionMessageResponse({}));
  }

  async pushVersionMessage(request: PushVersionMessageRequest): Promise<PushVersionMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushVersionMessageWithOptions(request, runtime);
  }

  async queryPrepublishPassedDeviceCountWithOptions(request: QueryPrepublishPassedDeviceCountRequest, runtime: $Util.RuntimeOptions): Promise<QueryPrepublishPassedDeviceCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPrepublishPassedDeviceCountResponse>(await this.doRPCRequest("QueryPrepublishPassedDeviceCount", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPrepublishPassedDeviceCountResponse({}));
  }

  async queryPrepublishPassedDeviceCount(request: QueryPrepublishPassedDeviceCountRequest): Promise<QueryPrepublishPassedDeviceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPrepublishPassedDeviceCountWithOptions(request, runtime);
  }

  async submitAssistReportWithOptions(request: SubmitAssistReportRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAssistReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAssistReportResponse>(await this.doRPCRequest("SubmitAssistReport", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAssistReportResponse({}));
  }

  async submitAssistReport(request: SubmitAssistReportRequest): Promise<SubmitAssistReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAssistReportWithOptions(request, runtime);
  }

  async updateApiGatewayAppStatusWithOptions(request: UpdateApiGatewayAppStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApiGatewayAppStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateApiGatewayAppStatusResponse>(await this.doRPCRequest("UpdateApiGatewayAppStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateApiGatewayAppStatusResponse({}));
  }

  async updateApiGatewayAppStatus(request: UpdateApiGatewayAppStatusRequest): Promise<UpdateApiGatewayAppStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApiGatewayAppStatusWithOptions(request, runtime);
  }

  async updateAppBlackWhiteVersionsWithOptions(request: UpdateAppBlackWhiteVersionsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppBlackWhiteVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppBlackWhiteVersionsResponse>(await this.doRPCRequest("UpdateAppBlackWhiteVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppBlackWhiteVersionsResponse({}));
  }

  async updateAppBlackWhiteVersions(request: UpdateAppBlackWhiteVersionsRequest): Promise<UpdateAppBlackWhiteVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppBlackWhiteVersionsWithOptions(request, runtime);
  }

  async updateAppVersionWithOptions(request: UpdateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionResponse>(await this.doRPCRequest("UpdateAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionResponse({}));
  }

  async updateAppVersion(request: UpdateAppVersionRequest): Promise<UpdateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionWithOptions(request, runtime);
  }

  async updateAppVersionReleaseNoteWithOptions(request: UpdateAppVersionReleaseNoteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionReleaseNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionReleaseNoteResponse>(await this.doRPCRequest("UpdateAppVersionReleaseNote", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionReleaseNoteResponse({}));
  }

  async updateAppVersionReleaseNote(request: UpdateAppVersionReleaseNoteRequest): Promise<UpdateAppVersionReleaseNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionReleaseNoteWithOptions(request, runtime);
  }

  async updateAppVersionRemarkWithOptions(request: UpdateAppVersionRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionRemarkResponse>(await this.doRPCRequest("UpdateAppVersionRemark", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionRemarkResponse({}));
  }

  async updateAppVersionRemark(request: UpdateAppVersionRemarkRequest): Promise<UpdateAppVersionRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionRemarkWithOptions(request, runtime);
  }

  async updateAppVersionStatusWithOptions(request: UpdateAppVersionStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionStatusResponse>(await this.doRPCRequest("UpdateAppVersionStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionStatusResponse({}));
  }

  async updateAppVersionStatus(request: UpdateAppVersionStatusRequest): Promise<UpdateAppVersionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionStatusWithOptions(request, runtime);
  }

  async updateCustomizedFilterWithOptions(request: UpdateCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCustomizedFilterResponse>(await this.doRPCRequest("UpdateCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCustomizedFilterResponse({}));
  }

  async updateCustomizedFilter(request: UpdateCustomizedFilterRequest): Promise<UpdateCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomizedFilterWithOptions(request, runtime);
  }

  async updateDeviceModelWithOptions(request: UpdateDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceModelResponse>(await this.doRPCRequest("UpdateDeviceModel", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceModelResponse({}));
  }

  async updateDeviceModel(request: UpdateDeviceModelRequest): Promise<UpdateDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceModelWithOptions(request, runtime);
  }

  async updateNamespaceDataWithOptions(request: UpdateNamespaceDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNamespaceDataResponse>(await this.doRPCRequest("UpdateNamespaceData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNamespaceDataResponse({}));
  }

  async updateNamespaceData(request: UpdateNamespaceDataRequest): Promise<UpdateNamespaceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNamespaceDataWithOptions(request, runtime);
  }

  async updateOsBlackWhiteVersionsWithOptions(request: UpdateOsBlackWhiteVersionsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsBlackWhiteVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsBlackWhiteVersionsResponse>(await this.doRPCRequest("UpdateOsBlackWhiteVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsBlackWhiteVersionsResponse({}));
  }

  async updateOsBlackWhiteVersions(request: UpdateOsBlackWhiteVersionsRequest): Promise<UpdateOsBlackWhiteVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsBlackWhiteVersionsWithOptions(request, runtime);
  }

  async updateOsVersionWithOptions(request: UpdateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionResponse>(await this.doRPCRequest("UpdateOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionResponse({}));
  }

  async updateOsVersion(request: UpdateOsVersionRequest): Promise<UpdateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionWithOptions(request, runtime);
  }

  async updateOsVersionReleaseNoteWithOptions(request: UpdateOsVersionReleaseNoteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionReleaseNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionReleaseNoteResponse>(await this.doRPCRequest("UpdateOsVersionReleaseNote", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionReleaseNoteResponse({}));
  }

  async updateOsVersionReleaseNote(request: UpdateOsVersionReleaseNoteRequest): Promise<UpdateOsVersionReleaseNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionReleaseNoteWithOptions(request, runtime);
  }

  async updateOsVersionRemarkWithOptions(request: UpdateOsVersionRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionRemarkResponse>(await this.doRPCRequest("UpdateOsVersionRemark", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionRemarkResponse({}));
  }

  async updateOsVersionRemark(request: UpdateOsVersionRemarkRequest): Promise<UpdateOsVersionRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionRemarkWithOptions(request, runtime);
  }

  async updateOsVersionStatusWithOptions(request: UpdateOsVersionStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionStatusResponse>(await this.doRPCRequest("UpdateOsVersionStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionStatusResponse({}));
  }

  async updateOsVersionStatus(request: UpdateOsVersionStatusRequest): Promise<UpdateOsVersionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionStatusWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateSchemaSubscribeWithOptions(request: UpdateSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSchemaSubscribeResponse>(await this.doRPCRequest("UpdateSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSchemaSubscribeResponse({}));
  }

  async updateSchemaSubscribe(request: UpdateSchemaSubscribeRequest): Promise<UpdateSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSchemaSubscribeWithOptions(request, runtime);
  }

  async updateShadowSchemaWithOptions(request: UpdateShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateShadowSchemaResponse>(await this.doRPCRequest("UpdateShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateShadowSchemaResponse({}));
  }

  async updateShadowSchema(request: UpdateShadowSchemaRequest): Promise<UpdateShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateShadowSchemaWithOptions(request, runtime);
  }

  async updateTriggerWithOptions(request: UpdateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTriggerResponse>(await this.doRPCRequest("UpdateTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTriggerResponse({}));
  }

  async updateTrigger(request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTriggerWithOptions(request, runtime);
  }

  async updateUpstreamAppServerWithOptions(request: UpdateUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUpstreamAppServerResponse>(await this.doRPCRequest("UpdateUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUpstreamAppServerResponse({}));
  }

  async updateUpstreamAppServer(request: UpdateUpstreamAppServerRequest): Promise<UpdateUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUpstreamAppServerWithOptions(request, runtime);
  }

  async updateVersionDeviceGroupWithOptions(request: UpdateVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVersionDeviceGroupResponse>(await this.doRPCRequest("UpdateVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVersionDeviceGroupResponse({}));
  }

  async updateVersionDeviceGroup(request: UpdateVersionDeviceGroupRequest): Promise<UpdateVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVersionDeviceGroupWithOptions(request, runtime);
  }

  async updateVersionPrepublishActiveStatusWithOptions(request: UpdateVersionPrepublishActiveStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVersionPrepublishActiveStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVersionPrepublishActiveStatusResponse>(await this.doRPCRequest("UpdateVersionPrepublishActiveStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVersionPrepublishActiveStatusResponse({}));
  }

  async updateVersionPrepublishActiveStatus(request: UpdateVersionPrepublishActiveStatusRequest): Promise<UpdateVersionPrepublishActiveStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVersionPrepublishActiveStatusWithOptions(request, runtime);
  }

}
