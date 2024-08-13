// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateDeviceRequest extends $tea.Model {
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateDeviceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceFromSNRequest extends $tea.Model {
  alias?: string;
  customProperty?: string;
  groupId?: string;
  labelContents?: string;
  secureNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      customProperty: 'CustomProperty',
      groupId: 'GroupId',
      labelContents: 'LabelContents',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      customProperty: 'string',
      groupId: 'string',
      labelContents: 'string',
      secureNetworkType: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceFromSNResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceFromSNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDeviceFromSNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDeviceFromSNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceSeatsAndLabelsRequest extends $tea.Model {
  isUnique?: boolean;
  label?: string;
  labelList?: string[];
  seatName?: string;
  serialNo?: string;
  tenantId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isUnique: 'IsUnique',
      label: 'Label',
      labelList: 'LabelList',
      seatName: 'SeatName',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUnique: 'boolean',
      label: 'string',
      labelList: { 'type': 'array', 'itemType': 'string' },
      seatName: 'string',
      serialNo: 'string',
      tenantId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceSeatsAndLabelsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceSeatsAndLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDeviceSeatsAndLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDeviceSeatsAndLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesFromCSVRequest extends $tea.Model {
  fileName?: string;
  fileType?: number;
  seatCol?: number;
  siteId?: string;
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
      seatCol: 'SeatCol',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'number',
      seatCol: 'number',
      siteId: 'string',
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesFromCSVResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesFromCSVResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDevicesFromCSVResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDevicesFromCSVResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLabelsRequest extends $tea.Model {
  labelContents?: string;
  static names(): { [key: string]: string } {
    return {
      labelContents: 'LabelContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLabelsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDeviceSeatsRequest extends $tea.Model {
  fileName?: string;
  userCustomId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      userCustomId: 'UserCustomId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      userCustomId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDeviceSeatsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDeviceSeatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateDeviceSeatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOrUpdateDeviceSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTerminalRequest extends $tea.Model {
  alias?: string;
  serialNumber?: string;
  terminalGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      serialNumber: 'string',
      terminalGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTerminalResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTerminalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTerminalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTerminalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEndUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachEndUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelRequest extends $tea.Model {
  labelContent?: string;
  labelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelsRequest extends $tea.Model {
  labelIds?: string;
  serialNo?: string;
  serialNoList?: string;
  static names(): { [key: string]: string } {
    return {
      labelIds: 'LabelIds',
      serialNo: 'SerialNo',
      serialNoList: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIds: 'string',
      serialNo: 'string',
      serialNoList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountLessLoginUserRequest extends $tea.Model {
  endUserId?: string;
  serialNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      serialNumber: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountLessLoginUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountLessLoginUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAccountLessLoginUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAccountLessLoginUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUuidValidRequest extends $tea.Model {
  bluetooth?: string;
  buildId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chipId?: string;
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  customId?: string;
  etherMac?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uuid?: string;
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      chipId: 'ChipId',
      clientId: 'ClientId',
      customId: 'CustomId',
      etherMac: 'EtherMac',
      serialNo: 'SerialNo',
      uuid: 'Uuid',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bluetooth: 'string',
      buildId: 'string',
      chipId: 'string',
      clientId: 'string',
      customId: 'string',
      etherMac: 'string',
      serialNo: 'string',
      uuid: 'string',
      wlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUuidValidResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUuidValidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUuidValidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUuidValidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaTaskRequest extends $tea.Model {
  appVersionUid?: string;
  channel?: string;
  clientIdList?: string[];
  clientType?: number;
  creator?: string;
  description?: string;
  forceUpgrade?: number;
  label?: string;
  name?: string;
  project?: string;
  regions?: string[];
  status?: number;
  taskType?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionUid: 'AppVersionUid',
      channel: 'Channel',
      clientIdList: 'ClientIdList',
      clientType: 'ClientType',
      creator: 'Creator',
      description: 'Description',
      forceUpgrade: 'ForceUpgrade',
      label: 'Label',
      name: 'Name',
      project: 'Project',
      regions: 'Regions',
      status: 'Status',
      taskType: 'TaskType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionUid: 'string',
      channel: 'string',
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'number',
      creator: 'string',
      description: 'string',
      forceUpgrade: 'number',
      label: 'string',
      name: 'string',
      project: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaTaskResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAppOtaTaskResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAppOtaTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppOtaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaVersionRequest extends $tea.Model {
  appVersion?: string;
  arch?: string;
  channel?: string;
  clientType?: number;
  creator?: string;
  downloadUrl?: string;
  md5?: string;
  os?: string;
  osType?: string;
  otaType?: number;
  project?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  size?: number;
  snapshotId?: string;
  snapshotRegionId?: string;
  status?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      arch: 'Arch',
      channel: 'Channel',
      clientType: 'ClientType',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      os: 'Os',
      osType: 'OsType',
      otaType: 'OtaType',
      project: 'Project',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
      snapshotId: 'SnapshotId',
      snapshotRegionId: 'SnapshotRegionId',
      status: 'Status',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      arch: 'string',
      channel: 'string',
      clientType: 'number',
      creator: 'string',
      downloadUrl: 'string',
      md5: 'string',
      os: 'string',
      osType: 'string',
      otaType: 'number',
      project: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'number',
      snapshotId: 'string',
      snapshotRegionId: 'string',
      status: 'number',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaVersionResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAppOtaVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAppOtaVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppOtaVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppOtaVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppOtaVersionsRequest extends $tea.Model {
  versionUidList?: string[];
  static names(): { [key: string]: string } {
    return {
      versionUidList: 'VersionUidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionUidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppOtaVersionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppOtaVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppOtaVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppOtaVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  force?: string;
  serialNos?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      serialNos: 'SerialNos',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
      serialNos: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  force?: string;
  labelContent?: string;
  labelId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      labelContent: 'LabelContent',
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
      labelContent: 'string',
      labelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionRequest extends $tea.Model {
  appVersion?: string;
  channel?: string;
  clientType?: number;
  creator?: string;
  project?: string;
  status?: number;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      channel: 'Channel',
      clientType: 'ClientType',
      creator: 'Creator',
      project: 'Project',
      status: 'Status',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      channel: 'string',
      clientType: 'number',
      creator: 'string',
      project: 'string',
      status: 'number',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAppOtaVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAppOtaVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppOtaVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppOtaVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceSeatsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  serialNo?: string;
  serialNoList?: string[];
  siteId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNo: 'SerialNo',
      serialNoList: 'SerialNoList',
      siteId: 'SiteId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      serialNo: 'string',
      serialNoList: { 'type': 'array', 'itemType': 'string' },
      siteId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceSeatsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeDeviceSeatsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeDeviceSeatsResponseBodyData },
      message: 'string',
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

export class DescribeDeviceSeatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceSeatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeviceSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceVersionDetailRequest extends $tea.Model {
  model?: string;
  networkType?: string;
  region?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      networkType: 'NetworkType',
      region: 'Region',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      networkType: 'string',
      region: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceVersionDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeDeviceVersionDetailResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeDeviceVersionDetailResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceVersionDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceVersionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeviceVersionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsRequest extends $tea.Model {
  labelList?: string[];
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      labelList: 'LabelList',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelList: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSnLabelCountsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSnLabelCountsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSnLabelCountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSnLabelCountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  zoneIdList?: string[];
  zoneNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      zoneIdList: 'ZoneIdList',
      zoneNameList: 'ZoneNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
      zoneIdList: { 'type': 'array', 'itemType': 'string' },
      zoneNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeWorkZonesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWorkZonesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWorkZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeWorkZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEndUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachEndUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelRequest extends $tea.Model {
  labelContent?: string;
  labelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelsRequest extends $tea.Model {
  labelIds?: string;
  serialNo?: string;
  serialNoList?: string;
  static names(): { [key: string]: string } {
    return {
      labelIds: 'LabelIds',
      serialNo: 'SerialNo',
      serialNoList: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIds: 'string',
      serialNo: 'string',
      serialNoList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUrlRequest extends $tea.Model {
  objectNameList?: string[];
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      objectNameList: 'ObjectNameList',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectNameList: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUrlResponseBody extends $tea.Model {
  data?: GenerateOssUrlResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GenerateOssUrlResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateOssUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateOssUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppOtaLatestVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  clientType?: number;
  clientUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      clientType: 'ClientType',
      clientUid: 'ClientUid',
      osType: 'OsType',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      clientType: 'number',
      clientUid: 'string',
      osType: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppOtaLatestVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppOtaLatestVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppOtaLatestVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppOtaLatestVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppOtaLatestVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppOtaLatestVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsRequest extends $tea.Model {
  deviceId?: string;
  networkType?: string;
  region?: string;
  serialNo?: string;
  urclVersion?: string;
  userCustomId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      networkType: 'NetworkType',
      region: 'Region',
      serialNo: 'SerialNo',
      urclVersion: 'UrclVersion',
      userCustomId: 'UserCustomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      networkType: 'string',
      region: 'string',
      serialNo: 'string',
      urclVersion: 'string',
      userCustomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceConfigsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceConfigsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaAutoStatusRequest extends $tea.Model {
  clientType?: number;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaAutoStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceOtaAutoStatusResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceOtaAutoStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaAutoStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceOtaAutoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceOtaAutoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  model?: string;
  networkType?: string;
  osVersion?: string;
  region?: string;
  regionId?: string;
  targetVersionType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      channel: 'Channel',
      deviceId: 'DeviceId',
      model: 'Model',
      networkType: 'NetworkType',
      osVersion: 'OsVersion',
      region: 'Region',
      regionId: 'RegionId',
      targetVersionType: 'TargetVersionType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      channel: 'string',
      deviceId: 'string',
      model: 'string',
      networkType: 'string',
      osVersion: 'string',
      region: 'string',
      regionId: 'string',
      targetVersionType: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceOtaInfoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceOtaInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceOtaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceOtaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  model?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      deviceId: 'DeviceId',
      model: 'Model',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      deviceId: 'string',
      model: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceOtaInfoTestResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceOtaInfoTestResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceOtaInfoTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceOtaInfoTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaTaskVersionInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class GetDeviceOtaTaskVersionInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceOtaTaskVersionInfoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceOtaTaskVersionInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaTaskVersionInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceOtaTaskVersionInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceOtaTaskVersionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusRequest extends $tea.Model {
  appVersion?: string;
  clientUid?: string;
  project?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      clientUid: 'ClientUid',
      project: 'Project',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      clientUid: 'string',
      project: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceUpgradeStatusResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceUpgradeStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceUpgradeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceUpgradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExportDeviceInfoOssUrlRequest extends $tea.Model {
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExportDeviceInfoOssUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetExportDeviceInfoOssUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetExportDeviceInfoOssUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExportDeviceInfoOssUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExportDeviceInfoOssUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExportDeviceInfoOssUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFbOssConfigRequest extends $tea.Model {
  dirPrefix?: string;
  isDedicatedLine?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      dirPrefix: 'DirPrefix',
      isDedicatedLine: 'IsDedicatedLine',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirPrefix: 'string',
      isDedicatedLine: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFbOssConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetFbOssConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFbOssConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFbOssConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFbOssConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFbOssConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssConfigRequest extends $tea.Model {
  type?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetOssConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOssConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionDownloadUrlRequest extends $tea.Model {
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetVersionDownloadUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVersionDownloadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVersionDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVersionDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeviceOtaTaskByTenantResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDeviceOtaTaskByTenantResponseBodyData,
      message: 'string',
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

export class ListDeviceOtaTaskByTenantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceOtaTaskByTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceOtaTaskByTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsRequest extends $tea.Model {
  label?: string;
  seatNo?: string;
  serialNoList?: string[];
  tenantId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      seatNo: 'SeatNo',
      serialNoList: 'SerialNoList',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      seatNo: 'string',
      serialNoList: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeviceSeatsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDeviceSeatsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceSeatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  alias?: string;
  buildId?: string;
  clientType?: number;
  deviceGroupId?: string;
  deviceIpV4?: string;
  deviceName?: string;
  deviceOS?: string;
  devicePlatform?: string;
  endUserId?: string;
  labelContent?: string;
  labelId?: string;
  locationInfo?: string;
  model?: string;
  pageNumber?: number;
  pageSize?: number;
  serialNo?: string;
  userType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      buildId: 'BuildId',
      clientType: 'ClientType',
      deviceGroupId: 'DeviceGroupId',
      deviceIpV4: 'DeviceIpV4',
      deviceName: 'DeviceName',
      deviceOS: 'DeviceOS',
      devicePlatform: 'DevicePlatform',
      endUserId: 'EndUserId',
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      locationInfo: 'LocationInfo',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNo: 'SerialNo',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      buildId: 'string',
      clientType: 'number',
      deviceGroupId: 'string',
      deviceIpV4: 'string',
      deviceName: 'string',
      deviceOS: 'string',
      devicePlatform: 'string',
      endUserId: 'string',
      labelContent: 'string',
      labelId: 'string',
      locationInfo: 'string',
      model: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serialNo: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListDevicesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDevicesResponseBodyData },
      message: 'string',
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

export class ListDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsResponseBody extends $tea.Model {
  code?: string;
  data?: ListFbIssueLabelsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFbIssueLabelsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFbIssueLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFbIssueLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsByLCRequest extends $tea.Model {
  caller?: string;
  languageType?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      languageType: 'LanguageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      languageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsByLCResponseBody extends $tea.Model {
  code?: string;
  data?: ListFbIssueLabelsByLCResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFbIssueLabelsByLCResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsByLCResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFbIssueLabelsByLCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFbIssueLabelsByLCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsRequest extends $tea.Model {
  labelContent?: string;
  labelId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLabelsResponseBodyData[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListLabelsResponseBodyData },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListTenantDeviceOtaInfoResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTenantDeviceOtaInfoResponseBodyData,
      message: 'string',
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

export class ListTenantDeviceOtaInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantDeviceOtaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTenantDeviceOtaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalRequest extends $tea.Model {
  alias?: string;
  buildId?: string;
  clientType?: number;
  inManage?: boolean;
  ipv4?: string;
  locationInfo?: string;
  maxResults?: number;
  model?: string;
  nextToken?: string;
  searchKeyword?: string;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      buildId: 'BuildId',
      clientType: 'ClientType',
      inManage: 'InManage',
      ipv4: 'Ipv4',
      locationInfo: 'LocationInfo',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      searchKeyword: 'SearchKeyword',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      buildId: 'string',
      clientType: 'number',
      inManage: 'boolean',
      ipv4: 'string',
      locationInfo: 'string',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      searchKeyword: 'string',
      serialNumber: 'string',
      terminalGroupId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalResponseBody extends $tea.Model {
  code?: string;
  data?: ListTerminalResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTerminalResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTerminalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTerminalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalsRequest extends $tea.Model {
  /**
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @example
   * DemoDevice
   */
  searchKeyword?: string;
  serialNumbers?: string[];
  /**
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKeyword: 'SearchKeyword',
      serialNumbers: 'SerialNumbers',
      terminalGroupId: 'TerminalGroupId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchKeyword: 'string',
      serialNumbers: { 'type': 'array', 'itemType': 'string' },
      terminalGroupId: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalsResponseBody extends $tea.Model {
  /**
   * @example
   * TERMINAL_NOT_FOUND
   */
  code?: string;
  data?: ListTerminalsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * terminal not found
   */
  message?: string;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTerminalsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTerminalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTerminalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustDevicesRequest extends $tea.Model {
  labelContent?: string;
  labelId?: string;
  serialNo?: string;
  userCustomId?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      serialNo: 'SerialNo',
      userCustomId: 'UserCustomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      serialNo: 'string',
      userCustomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListTrustDevicesResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTrustDevicesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrustDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrustDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesRequest extends $tea.Model {
  account?: string;
  clientVersion?: string;
  errorMessage?: string;
  instanceId?: string;
  issueId?: string;
  label?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      issueId: 'IssueId',
      label: 'Label',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      issueId: 'string',
      label: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponseBody extends $tea.Model {
  code?: string;
  data?: ListUserFbAcIssuesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserFbAcIssuesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserFbAcIssuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserFbAcIssuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesRequest extends $tea.Model {
  appId?: string;
  clientId?: string;
  clientModel?: string;
  clientSn?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  issueId?: number;
  issueLabel?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  title?: string;
  userEmail?: string;
  userId?: string;
  wasRead?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientSn: 'ClientSn',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      issueId: 'IssueId',
      issueLabel: 'IssueLabel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
      wasRead: 'WasRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientSn: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      issueId: 'number',
      issueLabel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
      wasRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesResponseBody extends $tea.Model {
  code?: string;
  data?: ListUserFbIssuesResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserFbIssuesResponseBodyData,
      message: 'string',
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

export class ListUserFbIssuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserFbIssuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserFbIssuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDevicesSecureNetworkTypeRequest extends $tea.Model {
  allDevices?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  secureNetworkType?: string;
  serialNos?: string;
  static names(): { [key: string]: string } {
    return {
      allDevices: 'AllDevices',
      secureNetworkType: 'SecureNetworkType',
      serialNos: 'SerialNos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDevices: 'number',
      secureNetworkType: 'string',
      serialNos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDevicesSecureNetworkTypeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDevicesSecureNetworkTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDevicesSecureNetworkTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDevicesSecureNetworkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecureNetworkTypeRequest extends $tea.Model {
  secureNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureNetworkType: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecureNetworkTypeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecureNetworkTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecureNetworkTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecureNetworkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  bluetooth?: string;
  buildId?: string;
  chipId?: string;
  clientId?: string;
  clientType?: number;
  cpu?: string;
  customId?: string;
  etherMac?: string;
  memory?: string;
  model?: string;
  serialNo?: string;
  storage?: string;
  token?: string;
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      chipId: 'ChipId',
      clientId: 'ClientId',
      clientType: 'ClientType',
      cpu: 'Cpu',
      customId: 'CustomId',
      etherMac: 'EtherMac',
      memory: 'Memory',
      model: 'Model',
      serialNo: 'SerialNo',
      storage: 'Storage',
      token: 'Token',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bluetooth: 'string',
      buildId: 'string',
      chipId: 'string',
      clientId: 'string',
      clientType: 'number',
      cpu: 'string',
      customId: 'string',
      etherMac: 'string',
      memory: 'string',
      model: 'string',
      serialNo: 'string',
      storage: 'string',
      token: 'string',
      wlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: RegisterDeviceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RegisterDeviceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportAppOtaInfoRequest extends $tea.Model {
  baseVersion?: string;
  clientType?: number;
  clientUid?: string;
  note?: string;
  osType?: string;
  project?: string;
  status?: number;
  targetVersion?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      clientType: 'ClientType',
      clientUid: 'ClientUid',
      note: 'Note',
      osType: 'OsType',
      project: 'Project',
      status: 'Status',
      targetVersion: 'TargetVersion',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      clientType: 'number',
      clientUid: 'string',
      note: 'string',
      osType: 'string',
      project: 'string',
      status: 'number',
      targetVersion: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportAppOtaInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportAppOtaInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportAppOtaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportAppOtaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceOtaInfoRequest extends $tea.Model {
  baseVersion?: string;
  deviceId?: string;
  model?: string;
  note?: string;
  status?: number;
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      deviceId: 'DeviceId',
      model: 'Model',
      note: 'Note',
      status: 'Status',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      deviceId: 'string',
      model: 'string',
      note: 'string',
      status: 'number',
      targetVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceOtaInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceOtaInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportDeviceOtaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportDeviceOtaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueRequest extends $tea.Model {
  account?: string;
  clientVersion?: string;
  errorMsg?: string;
  fileList?: ReportUserFbAcIssueRequestFileList[];
  instanceId?: string;
  labels?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMsg: 'ErrorMsg',
      fileList: 'FileList',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMsg: 'string',
      fileList: { 'type': 'array', 'itemType': ReportUserFbAcIssueRequestFileList },
      instanceId: 'string',
      labels: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueShrinkRequest extends $tea.Model {
  account?: string;
  clientVersion?: string;
  errorMsg?: string;
  fileListShrink?: string;
  instanceId?: string;
  labels?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMsg: 'ErrorMsg',
      fileListShrink: 'FileList',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMsg: 'string',
      fileListShrink: 'string',
      instanceId: 'string',
      labels: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueResponseBody extends $tea.Model {
  code?: string;
  data?: ReportUserFbAcIssueResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReportUserFbAcIssueResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportUserFbAcIssueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportUserFbAcIssueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueRequest extends $tea.Model {
  appId?: string;
  clientId?: string;
  clientModel?: string;
  clientOsName?: string;
  clientSn?: string;
  clientVersion?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  desktopType?: number;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  fileList?: ReportUserFbIssueRequestFileList[];
  issueLabel?: string;
  occurTime?: number;
  reservedA?: string;
  reservedB?: string;
  telNo?: string;
  title?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  workspaceId?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientOsName: 'ClientOsName',
      clientSn: 'ClientSn',
      clientVersion: 'ClientVersion',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      fileList: 'FileList',
      issueLabel: 'IssueLabel',
      occurTime: 'OccurTime',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      telNo: 'TelNo',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientOsName: 'string',
      clientSn: 'string',
      clientVersion: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      desktopType: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      fileList: { 'type': 'array', 'itemType': ReportUserFbIssueRequestFileList },
      issueLabel: 'string',
      occurTime: 'number',
      reservedA: 'string',
      reservedB: 'string',
      telNo: 'string',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
      userName: 'string',
      workspaceId: 'string',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueShrinkRequest extends $tea.Model {
  appId?: string;
  clientId?: string;
  clientModel?: string;
  clientOsName?: string;
  clientSn?: string;
  clientVersion?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  desktopType?: number;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  fileListShrink?: string;
  issueLabel?: string;
  occurTime?: number;
  reservedA?: string;
  reservedB?: string;
  telNo?: string;
  title?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  workspaceId?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientOsName: 'ClientOsName',
      clientSn: 'ClientSn',
      clientVersion: 'ClientVersion',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      fileListShrink: 'FileList',
      issueLabel: 'IssueLabel',
      occurTime: 'OccurTime',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      telNo: 'TelNo',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientOsName: 'string',
      clientSn: 'string',
      clientVersion: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      desktopType: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      fileListShrink: 'string',
      issueLabel: 'string',
      occurTime: 'number',
      reservedA: 'string',
      reservedB: 'string',
      telNo: 'string',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
      userName: 'string',
      workspaceId: 'string',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueResponseBody extends $tea.Model {
  code?: string;
  data?: ReportUserFbIssueResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReportUserFbIssueResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportUserFbIssueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportUserFbIssueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOpsMessageToTerminalsRequest extends $tea.Model {
  delay?: boolean;
  msg?: string;
  opsAction?: string;
  uuids?: string[];
  waitForAck?: boolean;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      msg: 'Msg',
      opsAction: 'OpsAction',
      uuids: 'Uuids',
      waitForAck: 'WaitForAck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'boolean',
      msg: 'string',
      opsAction: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      waitForAck: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOpsMessageToTerminalsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOpsMessageToTerminalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendOpsMessageToTerminalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendOpsMessageToTerminalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaAutoStatusRequest extends $tea.Model {
  autoUpdate?: number;
  autoUpdateTimeSchedule?: string;
  clientType?: number;
  forceUpgrade?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      autoUpdateTimeSchedule: 'AutoUpdateTimeSchedule',
      clientType: 'ClientType',
      forceUpgrade: 'ForceUpgrade',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'number',
      autoUpdateTimeSchedule: 'string',
      clientType: 'number',
      forceUpgrade: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaAutoStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaAutoStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDeviceOtaAutoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeviceOtaAutoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  operationStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      operationStatus: 'OperationStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationStatus: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaTaskStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceOtaTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDeviceOtaTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeviceOtaTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAccountLessLoginUserRequest extends $tea.Model {
  serialNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAccountLessLoginUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAccountLessLoginUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindAccountLessLoginUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindAccountLessLoginUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceSeatsRequest extends $tea.Model {
  serialNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      serialNoList: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceSeatsShrinkRequest extends $tea.Model {
  serialNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      serialNoListShrink: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceSeatsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceSeatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindDeviceSeatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindDeviceSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  alias?: string;
  serialNo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      serialNo: 'SerialNo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      serialNo: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  sourceAdEndUsers?: UpdateDeviceBindedEndUserRequestSourceAdEndUsers[];
  sourceEndUserIds?: string;
  targetAdEndUsers?: UpdateDeviceBindedEndUserRequestTargetAdEndUsers[];
  targetEndUserIds?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      serialNo: 'SerialNo',
      sourceAdEndUsers: 'SourceAdEndUsers',
      sourceEndUserIds: 'SourceEndUserIds',
      targetAdEndUsers: 'TargetAdEndUsers',
      targetEndUserIds: 'TargetEndUserIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNo: 'string',
      sourceAdEndUsers: { 'type': 'array', 'itemType': UpdateDeviceBindedEndUserRequestSourceAdEndUsers },
      sourceEndUserIds: 'string',
      targetAdEndUsers: { 'type': 'array', 'itemType': UpdateDeviceBindedEndUserRequestTargetAdEndUsers },
      targetEndUserIds: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeviceBindedEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeviceBindedEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelRequest extends $tea.Model {
  labelContent?: string;
  labelId?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTerminalPolicyRequest extends $tea.Model {
  displayLayout?: string;
  displayResolution?: string;
  displayScaleRatio?: string;
  enableAutoLockScreen?: number;
  enableAutoLogin?: number;
  enableBluetooth?: number;
  enableModifyPassword?: number;
  enableScheduledShutdown?: number;
  enableSwitchPersonal?: number;
  enableWlan?: number;
  idleTimeout?: number;
  idleTimeoutAction?: number;
  name?: string;
  powerButtonDefine?: number;
  powerButtonDefineForAs?: number;
  powerButtonDefineForNs?: number;
  powerOnBehavior?: number;
  scheduledShutdown?: string;
  settingLock?: number;
  terminalPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      displayLayout: 'DisplayLayout',
      displayResolution: 'DisplayResolution',
      displayScaleRatio: 'DisplayScaleRatio',
      enableAutoLockScreen: 'EnableAutoLockScreen',
      enableAutoLogin: 'EnableAutoLogin',
      enableBluetooth: 'EnableBluetooth',
      enableModifyPassword: 'EnableModifyPassword',
      enableScheduledShutdown: 'EnableScheduledShutdown',
      enableSwitchPersonal: 'EnableSwitchPersonal',
      enableWlan: 'EnableWlan',
      idleTimeout: 'IdleTimeout',
      idleTimeoutAction: 'IdleTimeoutAction',
      name: 'Name',
      powerButtonDefine: 'PowerButtonDefine',
      powerButtonDefineForAs: 'PowerButtonDefineForAs',
      powerButtonDefineForNs: 'PowerButtonDefineForNs',
      powerOnBehavior: 'PowerOnBehavior',
      scheduledShutdown: 'ScheduledShutdown',
      settingLock: 'SettingLock',
      terminalPolicyId: 'TerminalPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayLayout: 'string',
      displayResolution: 'string',
      displayScaleRatio: 'string',
      enableAutoLockScreen: 'number',
      enableAutoLogin: 'number',
      enableBluetooth: 'number',
      enableModifyPassword: 'number',
      enableScheduledShutdown: 'number',
      enableSwitchPersonal: 'number',
      enableWlan: 'number',
      idleTimeout: 'number',
      idleTimeoutAction: 'number',
      name: 'string',
      powerButtonDefine: 'number',
      powerButtonDefineForAs: 'number',
      powerButtonDefineForNs: 'number',
      powerOnBehavior: 'number',
      scheduledShutdown: 'string',
      settingLock: 'number',
      terminalPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTerminalPolicyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTerminalPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTerminalPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTerminalPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaTaskResponseBodyData extends $tea.Model {
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaVersionResponseBodyData extends $tea.Model {
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList extends $tea.Model {
  appVersion?: string;
  channel?: string;
  downloadUrl?: string;
  fullDownloadUrl?: string;
  gmtCreate?: string;
  md5?: string;
  osType?: string;
  project?: string;
  protocolType?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  sessionType?: string;
  size?: number;
  status?: number;
  versionCode?: number;
  versionType?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      channel: 'Channel',
      downloadUrl: 'DownloadUrl',
      fullDownloadUrl: 'FullDownloadUrl',
      gmtCreate: 'GmtCreate',
      md5: 'Md5',
      osType: 'OsType',
      project: 'Project',
      protocolType: 'ProtocolType',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      sessionType: 'SessionType',
      size: 'Size',
      status: 'Status',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      channel: 'string',
      downloadUrl: 'string',
      fullDownloadUrl: 'string',
      gmtCreate: 'string',
      md5: 'string',
      osType: 'string',
      project: 'string',
      protocolType: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      sessionType: 'string',
      size: 'number',
      status: 'number',
      versionCode: 'number',
      versionType: 'string',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppOtaVersionResponseBodyData extends $tea.Model {
  appOtaInfoDTOList?: DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaInfoDTOList: 'AppOtaInfoDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaInfoDTOList: { 'type': 'array', 'itemType': DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceSeatsResponseBodyData extends $tea.Model {
  seatCol?: number;
  seatName?: string;
  seatNo?: string;
  seatRow?: number;
  serialNo?: string;
  siteId?: string;
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      seatCol: 'SeatCol',
      seatName: 'SeatName',
      seatNo: 'SeatNo',
      seatRow: 'SeatRow',
      serialNo: 'SerialNo',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seatCol: 'number',
      seatName: 'string',
      seatNo: 'string',
      seatRow: 'number',
      serialNo: 'string',
      siteId: 'string',
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceVersionDetailResponseBodyData extends $tea.Model {
  androidHorizontalMultiCnImageDownloadUrl?: string;
  androidHorizontalMultiEnImageDownloadUrl?: string;
  androidVerticalMultiCnImageDownloadUrl?: string;
  androidVerticalMultiEnImageDownloadUrl?: string;
  channel?: string;
  clientType?: number;
  cnImageDownloadUrl?: string;
  creator?: string;
  downloadUrl?: string;
  enImageDownloadUrl?: string;
  md5?: string;
  model?: string;
  multiCnImageDownloadUrl?: string;
  multiEnImageDownloadUrl?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  size?: number;
  version?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'AndroidHorizontalMultiCnImageDownloadUrl',
      androidHorizontalMultiEnImageDownloadUrl: 'AndroidHorizontalMultiEnImageDownloadUrl',
      androidVerticalMultiCnImageDownloadUrl: 'AndroidVerticalMultiCnImageDownloadUrl',
      androidVerticalMultiEnImageDownloadUrl: 'AndroidVerticalMultiEnImageDownloadUrl',
      channel: 'Channel',
      clientType: 'ClientType',
      cnImageDownloadUrl: 'CnImageDownloadUrl',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      enImageDownloadUrl: 'EnImageDownloadUrl',
      md5: 'Md5',
      model: 'Model',
      multiCnImageDownloadUrl: 'MultiCnImageDownloadUrl',
      multiEnImageDownloadUrl: 'MultiEnImageDownloadUrl',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      size: 'Size',
      version: 'Version',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'string',
      androidHorizontalMultiEnImageDownloadUrl: 'string',
      androidVerticalMultiCnImageDownloadUrl: 'string',
      androidVerticalMultiEnImageDownloadUrl: 'string',
      channel: 'string',
      clientType: 'number',
      cnImageDownloadUrl: 'string',
      creator: 'string',
      downloadUrl: 'string',
      enImageDownloadUrl: 'string',
      md5: 'string',
      model: 'string',
      multiCnImageDownloadUrl: 'string',
      multiEnImageDownloadUrl: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      size: 'number',
      version: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsResponseBodyDataLabelCountDTOList extends $tea.Model {
  count?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsResponseBodyData extends $tea.Model {
  labelCountDTOList?: DescribeSnLabelCountsResponseBodyDataLabelCountDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelCountDTOList: 'LabelCountDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCountDTOList: { 'type': 'array', 'itemType': DescribeSnLabelCountsResponseBodyDataLabelCountDTOList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponseBodyDataWorkZoneDTOList extends $tea.Model {
  seatCol?: number;
  seatRow?: number;
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      seatCol: 'SeatCol',
      seatRow: 'SeatRow',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seatCol: 'number',
      seatRow: 'number',
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponseBodyData extends $tea.Model {
  totalCount?: number;
  workZoneDTOList?: DescribeWorkZonesResponseBodyDataWorkZoneDTOList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      workZoneDTOList: 'WorkZoneDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      workZoneDTOList: { 'type': 'array', 'itemType': DescribeWorkZonesResponseBodyDataWorkZoneDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUrlResponseBodyData extends $tea.Model {
  downloadUrl?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppOtaLatestVersionResponseBodyData extends $tea.Model {
  appVersion?: string;
  downloadUrl?: string;
  forceUpgrade?: number;
  md5?: string;
  releaseNote?: string;
  size?: number;
  taskUid?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      downloadUrl: 'DownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      md5: 'Md5',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      taskUid: 'TaskUid',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      downloadUrl: 'string',
      forceUpgrade: 'number',
      md5: 'string',
      releaseNote: 'string',
      size: 'number',
      taskUid: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsResponseBodyDataCustomResourcePackage extends $tea.Model {
  configAboutLogo?: string;
  desktopWallpaper?: string;
  loginPageBackground?: string;
  loginPageLogo?: string;
  personalCenterLogo?: string;
  startLogo?: string;
  startMenuLogo?: string;
  upgradeLogo?: string;
  static names(): { [key: string]: string } {
    return {
      configAboutLogo: 'ConfigAboutLogo',
      desktopWallpaper: 'DesktopWallpaper',
      loginPageBackground: 'LoginPageBackground',
      loginPageLogo: 'LoginPageLogo',
      personalCenterLogo: 'PersonalCenterLogo',
      startLogo: 'StartLogo',
      startMenuLogo: 'StartMenuLogo',
      upgradeLogo: 'UpgradeLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAboutLogo: 'string',
      desktopWallpaper: 'string',
      loginPageBackground: 'string',
      loginPageLogo: 'string',
      personalCenterLogo: 'string',
      startLogo: 'string',
      startMenuLogo: 'string',
      upgradeLogo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsResponseBodyData extends $tea.Model {
  autoLockScreenTime?: number;
  autoLogin?: number;
  autoUpdate?: number;
  customIdleAction?: number;
  customPowerOn?: number;
  customResourcePackage?: GetDeviceConfigsResponseBodyDataCustomResourcePackage;
  definePowerButton?: number;
  deviceLock?: number;
  displayLayout?: string;
  displayResolution?: string;
  displayScaleRatio?: string;
  enableAdb?: number;
  enableAutoLockScreen?: number;
  enableBluetooth?: number;
  enableLockScreenPassword?: number;
  enableModifyPassword?: number;
  enableScheduledPowerOff?: number;
  enableUnlockPassword?: number;
  enableWlan?: number;
  idleTime?: number;
  localUsbPrint?: number;
  lockPassword?: string;
  scheduledPowerOff?: string;
  secureNetworkType?: string;
  serialNo?: string;
  sleepTime?: number;
  urcl?: string;
  usbStorage?: number;
  userCustomId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoLockScreenTime: 'AutoLockScreenTime',
      autoLogin: 'AutoLogin',
      autoUpdate: 'AutoUpdate',
      customIdleAction: 'CustomIdleAction',
      customPowerOn: 'CustomPowerOn',
      customResourcePackage: 'CustomResourcePackage',
      definePowerButton: 'DefinePowerButton',
      deviceLock: 'DeviceLock',
      displayLayout: 'DisplayLayout',
      displayResolution: 'DisplayResolution',
      displayScaleRatio: 'DisplayScaleRatio',
      enableAdb: 'EnableAdb',
      enableAutoLockScreen: 'EnableAutoLockScreen',
      enableBluetooth: 'EnableBluetooth',
      enableLockScreenPassword: 'EnableLockScreenPassword',
      enableModifyPassword: 'EnableModifyPassword',
      enableScheduledPowerOff: 'EnableScheduledPowerOff',
      enableUnlockPassword: 'EnableUnlockPassword',
      enableWlan: 'EnableWlan',
      idleTime: 'IdleTime',
      localUsbPrint: 'LocalUsbPrint',
      lockPassword: 'LockPassword',
      scheduledPowerOff: 'ScheduledPowerOff',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
      sleepTime: 'SleepTime',
      urcl: 'Urcl',
      usbStorage: 'UsbStorage',
      userCustomId: 'UserCustomId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockScreenTime: 'number',
      autoLogin: 'number',
      autoUpdate: 'number',
      customIdleAction: 'number',
      customPowerOn: 'number',
      customResourcePackage: GetDeviceConfigsResponseBodyDataCustomResourcePackage,
      definePowerButton: 'number',
      deviceLock: 'number',
      displayLayout: 'string',
      displayResolution: 'string',
      displayScaleRatio: 'string',
      enableAdb: 'number',
      enableAutoLockScreen: 'number',
      enableBluetooth: 'number',
      enableLockScreenPassword: 'number',
      enableModifyPassword: 'number',
      enableScheduledPowerOff: 'number',
      enableUnlockPassword: 'number',
      enableWlan: 'number',
      idleTime: 'number',
      localUsbPrint: 'number',
      lockPassword: 'string',
      scheduledPowerOff: 'string',
      secureNetworkType: 'string',
      serialNo: 'string',
      sleepTime: 'number',
      urcl: 'string',
      usbStorage: 'number',
      userCustomId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaAutoStatusResponseBodyData extends $tea.Model {
  autoUpdate?: number;
  autoUpdateTimeSchedule?: string;
  forceUpgrade?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      autoUpdateTimeSchedule: 'AutoUpdateTimeSchedule',
      forceUpgrade: 'ForceUpgrade',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'number',
      autoUpdateTimeSchedule: 'string',
      forceUpgrade: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoResponseBodyDataVersion extends $tea.Model {
  androidHorizontalMultiCnImageDownloadUrl?: string;
  androidHorizontalMultiEnImageDownloadUrl?: string;
  androidVerticalMultiCnImageDownloadUrl?: string;
  androidVerticalMultiEnImageDownloadUrl?: string;
  cnImageDownloadUrl?: string;
  creator?: string;
  customForceUpgrade?: boolean;
  downloadUrl?: string;
  enImageDownloadUrl?: string;
  forceUpgrade?: number;
  isAppDownloadUrl?: boolean;
  localDownloadUrl?: string;
  md5?: string;
  model?: string;
  multiCnImageDownloadUrl?: string;
  multiEnImageDownloadUrl?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  size?: number;
  version?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'AndroidHorizontalMultiCnImageDownloadUrl',
      androidHorizontalMultiEnImageDownloadUrl: 'AndroidHorizontalMultiEnImageDownloadUrl',
      androidVerticalMultiCnImageDownloadUrl: 'AndroidVerticalMultiCnImageDownloadUrl',
      androidVerticalMultiEnImageDownloadUrl: 'AndroidVerticalMultiEnImageDownloadUrl',
      cnImageDownloadUrl: 'CnImageDownloadUrl',
      creator: 'Creator',
      customForceUpgrade: 'CustomForceUpgrade',
      downloadUrl: 'DownloadUrl',
      enImageDownloadUrl: 'EnImageDownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      isAppDownloadUrl: 'IsAppDownloadUrl',
      localDownloadUrl: 'LocalDownloadUrl',
      md5: 'Md5',
      model: 'Model',
      multiCnImageDownloadUrl: 'MultiCnImageDownloadUrl',
      multiEnImageDownloadUrl: 'MultiEnImageDownloadUrl',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      size: 'Size',
      version: 'Version',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidHorizontalMultiCnImageDownloadUrl: 'string',
      androidHorizontalMultiEnImageDownloadUrl: 'string',
      androidVerticalMultiCnImageDownloadUrl: 'string',
      androidVerticalMultiEnImageDownloadUrl: 'string',
      cnImageDownloadUrl: 'string',
      creator: 'string',
      customForceUpgrade: 'boolean',
      downloadUrl: 'string',
      enImageDownloadUrl: 'string',
      forceUpgrade: 'number',
      isAppDownloadUrl: 'boolean',
      localDownloadUrl: 'string',
      md5: 'string',
      model: 'string',
      multiCnImageDownloadUrl: 'string',
      multiEnImageDownloadUrl: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      size: 'number',
      version: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoResponseBodyData extends $tea.Model {
  version?: GetDeviceOtaInfoResponseBodyDataVersion;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: GetDeviceOtaInfoResponseBodyDataVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestResponseBodyDataVersion extends $tea.Model {
  creator?: string;
  downloadUrl?: string;
  forceUpgrade?: number;
  localDownloadUrl?: string;
  md5?: string;
  model?: string;
  releaseNote?: string;
  size?: number;
  version?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      forceUpgrade: 'ForceUpgrade',
      localDownloadUrl: 'LocalDownloadUrl',
      md5: 'Md5',
      model: 'Model',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      version: 'Version',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      downloadUrl: 'string',
      forceUpgrade: 'number',
      localDownloadUrl: 'string',
      md5: 'string',
      model: 'string',
      releaseNote: 'string',
      size: 'number',
      version: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaInfoTestResponseBodyData extends $tea.Model {
  version?: GetDeviceOtaInfoTestResponseBodyDataVersion;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: GetDeviceOtaInfoTestResponseBodyDataVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOtaTaskVersionInfoResponseBodyData extends $tea.Model {
  releaseNote?: string;
  size?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      size: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList extends $tea.Model {
  baseVersion?: string;
  clientType?: number;
  clientUid?: string;
  note?: string;
  osType?: string;
  project?: string;
  status?: number;
  targetVersion?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      clientType: 'ClientType',
      clientUid: 'ClientUid',
      note: 'Note',
      osType: 'OsType',
      project: 'Project',
      status: 'Status',
      targetVersion: 'TargetVersion',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      clientType: 'number',
      clientUid: 'string',
      note: 'string',
      osType: 'string',
      project: 'string',
      status: 'number',
      targetVersion: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusResponseBodyData extends $tea.Model {
  appOtaStatusDTOList?: GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaStatusDTOList: 'AppOtaStatusDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaStatusDTOList: { 'type': 'array', 'itemType': GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExportDeviceInfoOssUrlResponseBodyData extends $tea.Model {
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

export class GetFbOssConfigResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  endPoint?: string;
  ossPolicy?: string;
  ossSignature?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endPoint: 'EndPoint',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endPoint: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssConfigResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  endPoint?: string;
  ossPolicy?: string;
  ossSignature?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endPoint: 'EndPoint',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endPoint: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionDownloadUrlResponseBodyData extends $tea.Model {
  fullDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fullDownloadUrl: 'FullDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullDownloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks extends $tea.Model {
  model?: string;
  operationStatus?: number;
  publishTime?: string;
  status?: number;
  taskId?: number;
  upgradeCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      operationStatus: 'OperationStatus',
      publishTime: 'PublishTime',
      status: 'Status',
      taskId: 'TaskId',
      upgradeCount: 'UpgradeCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      operationStatus: 'number',
      publishTime: 'string',
      status: 'number',
      taskId: 'number',
      upgradeCount: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceOtaTaskByTenantResponseBodyData extends $tea.Model {
  tenantDeviceOtaTasks?: ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaTasks: 'TenantDeviceOtaTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaTasks: { 'type': 'array', 'itemType': ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponseBodyDataDeviceSeatDTOList extends $tea.Model {
  label?: string;
  seatName?: string;
  seatNo?: string;
  serialNo?: string;
  siteId?: string;
  siteName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      seatName: 'SeatName',
      seatNo: 'SeatNo',
      serialNo: 'SerialNo',
      siteId: 'SiteId',
      siteName: 'SiteName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      seatName: 'string',
      seatNo: 'string',
      serialNo: 'string',
      siteId: 'string',
      siteName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponseBodyData extends $tea.Model {
  deviceSeatDTOList?: ListDeviceSeatsResponseBodyDataDeviceSeatDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceSeatDTOList: 'DeviceSeatDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSeatDTOList: { 'type': 'array', 'itemType': ListDeviceSeatsResponseBodyDataDeviceSeatDTOList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataConnectConfigs extends $tea.Model {
  connectScript?: string;
  peripheralPid?: string;
  peripheralVid?: string;
  redirectPolicy?: number;
  static names(): { [key: string]: string } {
    return {
      connectScript: 'ConnectScript',
      peripheralPid: 'PeripheralPid',
      peripheralVid: 'PeripheralVid',
      redirectPolicy: 'RedirectPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectScript: 'string',
      peripheralPid: 'string',
      peripheralVid: 'string',
      redirectPolicy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataCustomResourcePackage extends $tea.Model {
  configAboutLogo?: string;
  desktopWallpaper?: string;
  loginPageBackground?: string;
  loginPageLogo?: string;
  personalCenterLogo?: string;
  startLogo?: string;
  startMenuLogo?: string;
  upgradeLogo?: string;
  static names(): { [key: string]: string } {
    return {
      configAboutLogo: 'ConfigAboutLogo',
      desktopWallpaper: 'DesktopWallpaper',
      loginPageBackground: 'LoginPageBackground',
      loginPageLogo: 'LoginPageLogo',
      personalCenterLogo: 'PersonalCenterLogo',
      startLogo: 'StartLogo',
      startMenuLogo: 'StartMenuLogo',
      upgradeLogo: 'UpgradeLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAboutLogo: 'string',
      desktopWallpaper: 'string',
      loginPageBackground: 'string',
      loginPageLogo: 'string',
      personalCenterLogo: 'string',
      startLogo: 'string',
      startMenuLogo: 'string',
      upgradeLogo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataEndUserList extends $tea.Model {
  adDomain?: string;
  bindTime?: string;
  directoryId?: string;
  endUserId?: string;
  id?: number;
  serialNo?: string;
  tenantId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      bindTime: 'BindTime',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      id: 'Id',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      bindTime: 'string',
      directoryId: 'string',
      endUserId: 'string',
      id: 'number',
      serialNo: 'string',
      tenantId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataLabelList extends $tea.Model {
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  labelId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      labelId: 'LabelId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      labelId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataPeripheralConfig extends $tea.Model {
  defaultPolicy?: number;
  policyStrategy?: number;
  usbAndInternalCamera?: number;
  usbPrinter?: number;
  usbStorage?: number;
  static names(): { [key: string]: string } {
    return {
      defaultPolicy: 'DefaultPolicy',
      policyStrategy: 'PolicyStrategy',
      usbAndInternalCamera: 'UsbAndInternalCamera',
      usbPrinter: 'UsbPrinter',
      usbStorage: 'UsbStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicy: 'number',
      policyStrategy: 'number',
      usbAndInternalCamera: 'number',
      usbPrinter: 'number',
      usbStorage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $tea.Model {
  activeTime?: string;
  alias?: string;
  autoLockScreenTime?: number;
  autoLogin?: number;
  autoType?: string;
  bluetooth?: string;
  buildId?: string;
  clientId?: string;
  clientType?: string;
  connectConfigs?: ListDevicesResponseBodyDataConnectConfigs[];
  customIdleAction?: number;
  customPowerOn?: number;
  customProperty?: string;
  customResourcePackage?: ListDevicesResponseBodyDataCustomResourcePackage;
  definePowerButton?: number;
  deviceIpV4?: string;
  deviceLock?: number;
  deviceMqttConnectionStatus?: number;
  deviceName?: string;
  deviceOS?: string;
  devicePlatform?: string;
  displayLayout?: string;
  displayResolution?: string;
  displayScaleRatio?: string;
  enableAdb?: number;
  enableAutoLockScreen?: number;
  enableBluetooth?: number;
  enableLockScreenPassword?: number;
  enableModifyPassword?: number;
  enableScheduledPowerOff?: number;
  enableUnlockPassword?: number;
  enableWlan?: number;
  endUserList?: ListDevicesResponseBodyDataEndUserList[];
  etherMac?: string;
  gmtModified?: string;
  gmtSync?: string;
  id?: number;
  idleTime?: number;
  isActive?: string;
  labelList?: ListDevicesResponseBodyDataLabelList[];
  lastLoginUser?: string;
  localUsbPrint?: number;
  locationInfo?: string;
  lockPassword?: string;
  model?: string;
  orderId?: string;
  peripheralConfig?: ListDevicesResponseBodyDataPeripheralConfig;
  scheduledPowerOff?: string;
  secureNetworkType?: string;
  serialNo?: string;
  sleepTime?: number;
  source?: string;
  tenantId?: string;
  usbStorage?: number;
  uuid?: string;
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      alias: 'Alias',
      autoLockScreenTime: 'AutoLockScreenTime',
      autoLogin: 'AutoLogin',
      autoType: 'AutoType',
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      clientId: 'ClientId',
      clientType: 'ClientType',
      connectConfigs: 'ConnectConfigs',
      customIdleAction: 'CustomIdleAction',
      customPowerOn: 'CustomPowerOn',
      customProperty: 'CustomProperty',
      customResourcePackage: 'CustomResourcePackage',
      definePowerButton: 'DefinePowerButton',
      deviceIpV4: 'DeviceIpV4',
      deviceLock: 'DeviceLock',
      deviceMqttConnectionStatus: 'DeviceMqttConnectionStatus',
      deviceName: 'DeviceName',
      deviceOS: 'DeviceOS',
      devicePlatform: 'DevicePlatform',
      displayLayout: 'DisplayLayout',
      displayResolution: 'DisplayResolution',
      displayScaleRatio: 'DisplayScaleRatio',
      enableAdb: 'EnableAdb',
      enableAutoLockScreen: 'EnableAutoLockScreen',
      enableBluetooth: 'EnableBluetooth',
      enableLockScreenPassword: 'EnableLockScreenPassword',
      enableModifyPassword: 'EnableModifyPassword',
      enableScheduledPowerOff: 'EnableScheduledPowerOff',
      enableUnlockPassword: 'EnableUnlockPassword',
      enableWlan: 'EnableWlan',
      endUserList: 'EndUserList',
      etherMac: 'EtherMac',
      gmtModified: 'GmtModified',
      gmtSync: 'GmtSync',
      id: 'Id',
      idleTime: 'IdleTime',
      isActive: 'IsActive',
      labelList: 'LabelList',
      lastLoginUser: 'LastLoginUser',
      localUsbPrint: 'LocalUsbPrint',
      locationInfo: 'LocationInfo',
      lockPassword: 'LockPassword',
      model: 'Model',
      orderId: 'OrderId',
      peripheralConfig: 'PeripheralConfig',
      scheduledPowerOff: 'ScheduledPowerOff',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
      sleepTime: 'SleepTime',
      source: 'Source',
      tenantId: 'TenantId',
      usbStorage: 'UsbStorage',
      uuid: 'Uuid',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      alias: 'string',
      autoLockScreenTime: 'number',
      autoLogin: 'number',
      autoType: 'string',
      bluetooth: 'string',
      buildId: 'string',
      clientId: 'string',
      clientType: 'string',
      connectConfigs: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataConnectConfigs },
      customIdleAction: 'number',
      customPowerOn: 'number',
      customProperty: 'string',
      customResourcePackage: ListDevicesResponseBodyDataCustomResourcePackage,
      definePowerButton: 'number',
      deviceIpV4: 'string',
      deviceLock: 'number',
      deviceMqttConnectionStatus: 'number',
      deviceName: 'string',
      deviceOS: 'string',
      devicePlatform: 'string',
      displayLayout: 'string',
      displayResolution: 'string',
      displayScaleRatio: 'string',
      enableAdb: 'number',
      enableAutoLockScreen: 'number',
      enableBluetooth: 'number',
      enableLockScreenPassword: 'number',
      enableModifyPassword: 'number',
      enableScheduledPowerOff: 'number',
      enableUnlockPassword: 'number',
      enableWlan: 'number',
      endUserList: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataEndUserList },
      etherMac: 'string',
      gmtModified: 'string',
      gmtSync: 'string',
      id: 'number',
      idleTime: 'number',
      isActive: 'string',
      labelList: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataLabelList },
      lastLoginUser: 'string',
      localUsbPrint: 'number',
      locationInfo: 'string',
      lockPassword: 'string',
      model: 'string',
      orderId: 'string',
      peripheralConfig: ListDevicesResponseBodyDataPeripheralConfig,
      scheduledPowerOff: 'string',
      secureNetworkType: 'string',
      serialNo: 'string',
      sleepTime: 'number',
      source: 'string',
      tenantId: 'string',
      usbStorage: 'number',
      uuid: 'string',
      wlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsResponseBodyData extends $tea.Model {
  issueLabel?: string[];
  static names(): { [key: string]: string } {
    return {
      issueLabel: 'IssueLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueLabel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFbIssueLabelsByLCResponseBodyData extends $tea.Model {
  issueLabel?: string[];
  static names(): { [key: string]: string } {
    return {
      issueLabel: 'IssueLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueLabel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsResponseBodyData extends $tea.Model {
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  labelId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      labelId: 'LabelId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      labelId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos extends $tea.Model {
  currentVersion?: string;
  deviceId?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      deviceId: 'DeviceId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      deviceId: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDeviceOtaInfoResponseBodyData extends $tea.Model {
  tenantDeviceOtaInfos?: ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaInfos: 'TenantDeviceOtaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaInfos: { 'type': 'array', 'itemType': ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalResponseBodyData extends $tea.Model {
  alias?: string;
  bindUserCount?: number;
  bindUserId?: string;
  buildId?: string;
  clientType?: number;
  desktopId?: string;
  inManage?: boolean;
  ipv4?: string;
  /**
   * @deprecated
   */
  lastLoginUser?: string;
  locationInfo?: string;
  lockSettings?: boolean;
  loginUser?: string;
  model?: string;
  onlineStatus?: boolean;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      bindUserCount: 'BindUserCount',
      bindUserId: 'BindUserId',
      buildId: 'BuildId',
      clientType: 'ClientType',
      desktopId: 'DesktopId',
      inManage: 'InManage',
      ipv4: 'Ipv4',
      lastLoginUser: 'LastLoginUser',
      locationInfo: 'LocationInfo',
      lockSettings: 'LockSettings',
      loginUser: 'LoginUser',
      model: 'Model',
      onlineStatus: 'OnlineStatus',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      bindUserCount: 'number',
      bindUserId: 'string',
      buildId: 'string',
      clientType: 'number',
      desktopId: 'string',
      inManage: 'boolean',
      ipv4: 'string',
      lastLoginUser: 'string',
      locationInfo: 'string',
      lockSettings: 'boolean',
      loginUser: 'string',
      model: 'string',
      onlineStatus: 'boolean',
      serialNumber: 'string',
      terminalGroupId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalsResponseBodyData extends $tea.Model {
  /**
   * @example
   * DemoDevice
   */
  alias?: string;
  /**
   * @example
   * 7.0.2-RS-20240805.044924
   */
  buildId?: string;
  /**
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @example
   * ecd-drqmaogzbmbdf****
   */
  currentConnectDesktop?: string;
  /**
   * @example
   * alice
   */
  currentLoginUser?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  ipv4?: string;
  locationInfo?: string;
  /**
   * @example
   * US01
   */
  model?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * alice
   */
  passwordFreeLoginUser?: string;
  /**
   * @example
   * ODN49YQCPQYC****
   */
  serialNumber?: string;
  /**
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  /**
   * @example
   * 04873D3898B51A7DF2455C1E1DC9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      buildId: 'BuildId',
      clientType: 'ClientType',
      currentConnectDesktop: 'CurrentConnectDesktop',
      currentLoginUser: 'CurrentLoginUser',
      ipv4: 'Ipv4',
      locationInfo: 'LocationInfo',
      model: 'Model',
      online: 'Online',
      passwordFreeLoginUser: 'PasswordFreeLoginUser',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      buildId: 'string',
      clientType: 'number',
      currentConnectDesktop: 'string',
      currentLoginUser: 'string',
      ipv4: 'string',
      locationInfo: 'string',
      model: 'string',
      online: 'boolean',
      passwordFreeLoginUser: 'string',
      serialNumber: 'string',
      terminalGroupId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustDevicesResponseBodyData extends $tea.Model {
  model?: string;
  serialNo?: string;
  tenantId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      serialNo: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponseBodyDataIssueDataListFileList extends $tea.Model {
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponseBodyDataIssueDataList extends $tea.Model {
  account?: string;
  clientVersion?: string;
  errorMessage?: string;
  fileList?: ListUserFbAcIssuesResponseBodyDataIssueDataListFileList[];
  gmtCreated?: string;
  gmtModified?: string;
  instanceId?: string;
  issueId?: number;
  label?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMessage: 'ErrorMessage',
      fileList: 'FileList',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      issueId: 'IssueId',
      label: 'Label',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMessage: 'string',
      fileList: { 'type': 'array', 'itemType': ListUserFbAcIssuesResponseBodyDataIssueDataListFileList },
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      issueId: 'number',
      label: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponseBodyData extends $tea.Model {
  issueDataList?: ListUserFbAcIssuesResponseBodyDataIssueDataList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      issueDataList: 'IssueDataList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueDataList: { 'type': 'array', 'itemType': ListUserFbAcIssuesResponseBodyDataIssueDataList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList extends $tea.Model {
  fileMd5?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesResponseBodyDataFeedbackIssueData extends $tea.Model {
  appId?: string;
  clientId?: string;
  clientModel?: string;
  clientSn?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  fileList?: ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList[];
  gmtCreated?: string;
  issueId?: number;
  issueLabel?: string;
  status?: number;
  title?: string;
  userEmail?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientSn: 'ClientSn',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      fileList: 'FileList',
      gmtCreated: 'GmtCreated',
      issueId: 'IssueId',
      issueLabel: 'IssueLabel',
      status: 'Status',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientSn: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      fileList: { 'type': 'array', 'itemType': ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList },
      gmtCreated: 'string',
      issueId: 'number',
      issueLabel: 'string',
      status: 'number',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesResponseBodyData extends $tea.Model {
  count?: string;
  feedbackIssueData?: ListUserFbIssuesResponseBodyDataFeedbackIssueData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      feedbackIssueData: 'FeedbackIssueData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      feedbackIssueData: { 'type': 'array', 'itemType': ListUserFbIssuesResponseBodyDataFeedbackIssueData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyData extends $tea.Model {
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueRequestFileList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbAcIssueResponseBodyData extends $tea.Model {
  issueId?: number;
  static names(): { [key: string]: string } {
    return {
      issueId: 'IssueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueRequestFileList extends $tea.Model {
  fileMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueResponseBodyData extends $tea.Model {
  issueId?: number;
  static names(): { [key: string]: string } {
    return {
      issueId: 'IssueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserRequestSourceAdEndUsers extends $tea.Model {
  adDomain?: string;
  directoryId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserRequestTargetAdEndUsers extends $tea.Model {
  adDomain?: string;
  directoryId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("wyota", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 设备激活
   * 
   * @param request - ActivateDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateDeviceResponse
   */
  async activateDeviceWithOptions(request: ActivateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ActivateDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateDevice",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateDeviceResponse>(await this.callApi(params, req, runtime), new ActivateDeviceResponse({}));
  }

  /**
   * 设备激活
   * 
   * @param request - ActivateDeviceRequest
   * @returns ActivateDeviceResponse
   */
  async activateDevice(request: ActivateDeviceRequest): Promise<ActivateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateDeviceWithOptions(request, runtime);
  }

  /**
   * 通过序列号添加设备
   * 
   * @param request - AddDeviceFromSNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDeviceFromSNResponse
   */
  async addDeviceFromSNWithOptions(request: AddDeviceFromSNRequest, runtime: $Util.RuntimeOptions): Promise<AddDeviceFromSNResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.customProperty)) {
      body["CustomProperty"] = request.customProperty;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.labelContents)) {
      body["LabelContents"] = request.labelContents;
    }

    if (!Util.isUnset(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDeviceFromSN",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDeviceFromSNResponse>(await this.callApi(params, req, runtime), new AddDeviceFromSNResponse({}));
  }

  /**
   * 通过序列号添加设备
   * 
   * @param request - AddDeviceFromSNRequest
   * @returns AddDeviceFromSNResponse
   */
  async addDeviceFromSN(request: AddDeviceFromSNRequest): Promise<AddDeviceFromSNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeviceFromSNWithOptions(request, runtime);
  }

  /**
   * 新增设备座位和标签
   * 
   * @param request - AddDeviceSeatsAndLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDeviceSeatsAndLabelsResponse
   */
  async addDeviceSeatsAndLabelsWithOptions(request: AddDeviceSeatsAndLabelsRequest, runtime: $Util.RuntimeOptions): Promise<AddDeviceSeatsAndLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isUnique)) {
      body["IsUnique"] = request.isUnique;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.labelList)) {
      body["LabelList"] = request.labelList;
    }

    if (!Util.isUnset(request.seatName)) {
      body["SeatName"] = request.seatName;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDeviceSeatsAndLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDeviceSeatsAndLabelsResponse>(await this.callApi(params, req, runtime), new AddDeviceSeatsAndLabelsResponse({}));
  }

  /**
   * 新增设备座位和标签
   * 
   * @param request - AddDeviceSeatsAndLabelsRequest
   * @returns AddDeviceSeatsAndLabelsResponse
   */
  async addDeviceSeatsAndLabels(request: AddDeviceSeatsAndLabelsRequest): Promise<AddDeviceSeatsAndLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeviceSeatsAndLabelsWithOptions(request, runtime);
  }

  /**
   * 通过CSV文件添加设备
   * 
   * @param request - AddDevicesFromCSVRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDevicesFromCSVResponse
   */
  async addDevicesFromCSVWithOptions(request: AddDevicesFromCSVRequest, runtime: $Util.RuntimeOptions): Promise<AddDevicesFromCSVResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.seatCol)) {
      body["SeatCol"] = request.seatCol;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteName)) {
      body["SiteName"] = request.siteName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDevicesFromCSV",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDevicesFromCSVResponse>(await this.callApi(params, req, runtime), new AddDevicesFromCSVResponse({}));
  }

  /**
   * 通过CSV文件添加设备
   * 
   * @param request - AddDevicesFromCSVRequest
   * @returns AddDevicesFromCSVResponse
   */
  async addDevicesFromCSV(request: AddDevicesFromCSVRequest): Promise<AddDevicesFromCSVResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDevicesFromCSVWithOptions(request, runtime);
  }

  /**
   * 添加标签
   * 
   * @param request - AddLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLabelsResponse
   */
  async addLabelsWithOptions(request: AddLabelsRequest, runtime: $Util.RuntimeOptions): Promise<AddLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContents)) {
      body["LabelContents"] = request.labelContents;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddLabelsResponse>(await this.callApi(params, req, runtime), new AddLabelsResponse({}));
  }

  /**
   * 添加标签
   * 
   * @param request - AddLabelsRequest
   * @returns AddLabelsResponse
   */
  async addLabels(request: AddLabelsRequest): Promise<AddLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLabelsWithOptions(request, runtime);
  }

  /**
   * 新增或更新设备工位
   * 
   * @param request - AddOrUpdateDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateDeviceSeatsResponse
   */
  async addOrUpdateDeviceSeatsWithOptions(request: AddOrUpdateDeviceSeatsRequest, runtime: $Util.RuntimeOptions): Promise<AddOrUpdateDeviceSeatsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddOrUpdateDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOrUpdateDeviceSeatsResponse>(await this.callApi(params, req, runtime), new AddOrUpdateDeviceSeatsResponse({}));
  }

  /**
   * 新增或更新设备工位
   * 
   * @param request - AddOrUpdateDeviceSeatsRequest
   * @returns AddOrUpdateDeviceSeatsResponse
   */
  async addOrUpdateDeviceSeats(request: AddOrUpdateDeviceSeatsRequest): Promise<AddOrUpdateDeviceSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOrUpdateDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTerminalResponse
   */
  async addTerminalWithOptions(request: AddTerminalRequest, runtime: $Util.RuntimeOptions): Promise<AddTerminalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTerminalResponse>(await this.callApi(params, req, runtime), new AddTerminalResponse({}));
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @returns AddTerminalResponse
   */
  async addTerminal(request: AddTerminalRequest): Promise<AddTerminalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTerminalWithOptions(request, runtime);
  }

  /**
   * 设备绑定终端用户
   * 
   * @param request - AttachEndUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEndUsersResponse
   */
  async attachEndUsersWithOptions(request: AttachEndUsersRequest, runtime: $Util.RuntimeOptions): Promise<AttachEndUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachEndUsers",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachEndUsersResponse>(await this.callApi(params, req, runtime), new AttachEndUsersResponse({}));
  }

  /**
   * 设备绑定终端用户
   * 
   * @param request - AttachEndUsersRequest
   * @returns AttachEndUsersResponse
   */
  async attachEndUsers(request: AttachEndUsersRequest): Promise<AttachEndUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEndUsersWithOptions(request, runtime);
  }

  /**
   * 设备绑定标签
   * 
   * @param request - AttachLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLabelResponse
   */
  async attachLabelWithOptions(request: AttachLabelRequest, runtime: $Util.RuntimeOptions): Promise<AttachLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachLabelResponse>(await this.callApi(params, req, runtime), new AttachLabelResponse({}));
  }

  /**
   * 设备绑定标签
   * 
   * @param request - AttachLabelRequest
   * @returns AttachLabelResponse
   */
  async attachLabel(request: AttachLabelRequest): Promise<AttachLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLabelWithOptions(request, runtime);
  }

  /**
   * 批量绑定标签
   * 
   * @param request - AttachLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLabelsResponse
   */
  async attachLabelsWithOptions(request: AttachLabelsRequest, runtime: $Util.RuntimeOptions): Promise<AttachLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachLabelsResponse>(await this.callApi(params, req, runtime), new AttachLabelsResponse({}));
  }

  /**
   * 批量绑定标签
   * 
   * @param request - AttachLabelsRequest
   * @returns AttachLabelsResponse
   */
  async attachLabels(request: AttachLabelsRequest): Promise<AttachLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLabelsWithOptions(request, runtime);
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUserWithOptions(request: BindAccountLessLoginUserRequest, runtime: $Util.RuntimeOptions): Promise<BindAccountLessLoginUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new BindAccountLessLoginUserResponse({}));
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUser(request: BindAccountLessLoginUserRequest): Promise<BindAccountLessLoginUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 检查uuid有效性
   * 
   * @param request - CheckUuidValidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUuidValidResponse
   */
  async checkUuidValidWithOptions(request: CheckUuidValidRequest, runtime: $Util.RuntimeOptions): Promise<CheckUuidValidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bluetooth)) {
      body["Bluetooth"] = request.bluetooth;
    }

    if (!Util.isUnset(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!Util.isUnset(request.chipId)) {
      body["ChipId"] = request.chipId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!Util.isUnset(request.etherMac)) {
      body["EtherMac"] = request.etherMac;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.wlan)) {
      body["Wlan"] = request.wlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckUuidValid",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUuidValidResponse>(await this.callApi(params, req, runtime), new CheckUuidValidResponse({}));
  }

  /**
   * 检查uuid有效性
   * 
   * @param request - CheckUuidValidRequest
   * @returns CheckUuidValidResponse
   */
  async checkUuidValid(request: CheckUuidValidRequest): Promise<CheckUuidValidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUuidValidWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateAppOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppOtaTaskResponse
   */
  async createAppOtaTaskWithOptions(request: CreateAppOtaTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppOtaTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersionUid)) {
      query["AppVersionUid"] = request.appVersionUid;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.forceUpgrade)) {
      query["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppOtaTask",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppOtaTaskResponse>(await this.callApi(params, req, runtime), new CreateAppOtaTaskResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateAppOtaTaskRequest
   * @returns CreateAppOtaTaskResponse
   */
  async createAppOtaTask(request: CreateAppOtaTaskRequest): Promise<CreateAppOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppOtaTaskWithOptions(request, runtime);
  }

  /**
   * 创建版本
   * 
   * @param request - CreateAppOtaVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppOtaVersionResponse
   */
  async createAppOtaVersionWithOptions(request: CreateAppOtaVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppOtaVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.arch)) {
      query["Arch"] = request.arch;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.otaType)) {
      query["OtaType"] = request.otaType;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.releaseNote)) {
      query["ReleaseNote"] = request.releaseNote;
    }

    if (!Util.isUnset(request.releaseNoteEn)) {
      query["ReleaseNoteEn"] = request.releaseNoteEn;
    }

    if (!Util.isUnset(request.releaseNoteJp)) {
      query["ReleaseNoteJp"] = request.releaseNoteJp;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.snapshotRegionId)) {
      query["SnapshotRegionId"] = request.snapshotRegionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppOtaVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppOtaVersionResponse>(await this.callApi(params, req, runtime), new CreateAppOtaVersionResponse({}));
  }

  /**
   * 创建版本
   * 
   * @param request - CreateAppOtaVersionRequest
   * @returns CreateAppOtaVersionResponse
   */
  async createAppOtaVersion(request: CreateAppOtaVersionRequest): Promise<CreateAppOtaVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppOtaVersionWithOptions(request, runtime);
  }

  /**
   * 删除版本
   * 
   * @param request - DeleteAppOtaVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppOtaVersionsResponse
   */
  async deleteAppOtaVersionsWithOptions(request: DeleteAppOtaVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppOtaVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionUidList)) {
      query["VersionUidList"] = request.versionUidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppOtaVersions",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppOtaVersionsResponse>(await this.callApi(params, req, runtime), new DeleteAppOtaVersionsResponse({}));
  }

  /**
   * 删除版本
   * 
   * @param request - DeleteAppOtaVersionsRequest
   * @returns DeleteAppOtaVersionsResponse
   */
  async deleteAppOtaVersions(request: DeleteAppOtaVersionsRequest): Promise<DeleteAppOtaVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppOtaVersionsWithOptions(request, runtime);
  }

  /**
   * 删除设备
   * 
   * @param request - DeleteDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDevicesResponse
   */
  async deleteDevicesWithOptions(request: DeleteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      body["Force"] = request.force;
    }

    if (!Util.isUnset(request.serialNos)) {
      body["SerialNos"] = request.serialNos;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDevicesResponse>(await this.callApi(params, req, runtime), new DeleteDevicesResponse({}));
  }

  /**
   * 删除设备
   * 
   * @param request - DeleteDevicesRequest
   * @returns DeleteDevicesResponse
   */
  async deleteDevices(request: DeleteDevicesRequest): Promise<DeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicesWithOptions(request, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLabelResponse
   */
  async deleteLabelWithOptions(request: DeleteLabelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      body["Force"] = request.force;
    }

    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLabelResponse>(await this.callApi(params, req, runtime), new DeleteLabelResponse({}));
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteLabelRequest
   * @returns DeleteLabelResponse
   */
  async deleteLabel(request: DeleteLabelRequest): Promise<DeleteLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLabelWithOptions(request, runtime);
  }

  /**
   * 查询版本
   * 
   * @param request - DescribeAppOtaVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppOtaVersionResponse
   */
  async describeAppOtaVersionWithOptions(request: DescribeAppOtaVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppOtaVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.versionUid)) {
      query["VersionUid"] = request.versionUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppOtaVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppOtaVersionResponse>(await this.callApi(params, req, runtime), new DescribeAppOtaVersionResponse({}));
  }

  /**
   * 查询版本
   * 
   * @param request - DescribeAppOtaVersionRequest
   * @returns DescribeAppOtaVersionResponse
   */
  async describeAppOtaVersion(request: DescribeAppOtaVersionRequest): Promise<DescribeAppOtaVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppOtaVersionWithOptions(request, runtime);
  }

  /**
   * 查询设备座位
   * 
   * @param request - DescribeDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceSeatsResponse
   */
  async describeDeviceSeatsWithOptions(request: DescribeDeviceSeatsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceSeatsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeviceSeatsResponse>(await this.callApi(params, req, runtime), new DescribeDeviceSeatsResponse({}));
  }

  /**
   * 查询设备座位
   * 
   * @param request - DescribeDeviceSeatsRequest
   * @returns DescribeDeviceSeatsResponse
   */
  async describeDeviceSeats(request: DescribeDeviceSeatsRequest): Promise<DescribeDeviceSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 查询版本信息
   * 
   * @param request - DescribeDeviceVersionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceVersionDetailResponse
   */
  async describeDeviceVersionDetailWithOptions(request: DescribeDeviceVersionDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceVersionDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeviceVersionDetail",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeviceVersionDetailResponse>(await this.callApi(params, req, runtime), new DescribeDeviceVersionDetailResponse({}));
  }

  /**
   * 查询版本信息
   * 
   * @param request - DescribeDeviceVersionDetailRequest
   * @returns DescribeDeviceVersionDetailResponse
   */
  async describeDeviceVersionDetail(request: DescribeDeviceVersionDetailRequest): Promise<DescribeDeviceVersionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceVersionDetailWithOptions(request, runtime);
  }

  /**
   * 查询设备标签数量
   * 
   * @param request - DescribeSnLabelCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnLabelCountsResponse
   */
  async describeSnLabelCountsWithOptions(request: DescribeSnLabelCountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnLabelCountsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelList)) {
      body["LabelList"] = request.labelList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.zoneName)) {
      body["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSnLabelCounts",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSnLabelCountsResponse>(await this.callApi(params, req, runtime), new DescribeSnLabelCountsResponse({}));
  }

  /**
   * 查询设备标签数量
   * 
   * @param request - DescribeSnLabelCountsRequest
   * @returns DescribeSnLabelCountsResponse
   */
  async describeSnLabelCounts(request: DescribeSnLabelCountsRequest): Promise<DescribeSnLabelCountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnLabelCountsWithOptions(request, runtime);
  }

  /**
   * 查询工作区域
   * 
   * @param request - DescribeWorkZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkZonesResponse
   */
  async describeWorkZonesWithOptions(request: DescribeWorkZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWorkZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.zoneIdList)) {
      body["ZoneIdList"] = request.zoneIdList;
    }

    if (!Util.isUnset(request.zoneNameList)) {
      body["ZoneNameList"] = request.zoneNameList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWorkZones",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWorkZonesResponse>(await this.callApi(params, req, runtime), new DescribeWorkZonesResponse({}));
  }

  /**
   * 查询工作区域
   * 
   * @param request - DescribeWorkZonesRequest
   * @returns DescribeWorkZonesResponse
   */
  async describeWorkZones(request: DescribeWorkZonesRequest): Promise<DescribeWorkZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWorkZonesWithOptions(request, runtime);
  }

  /**
   * 设备解绑终端用户
   * 
   * @param request - DetachEndUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEndUsersResponse
   */
  async detachEndUsersWithOptions(request: DetachEndUsersRequest, runtime: $Util.RuntimeOptions): Promise<DetachEndUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachEndUsers",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachEndUsersResponse>(await this.callApi(params, req, runtime), new DetachEndUsersResponse({}));
  }

  /**
   * 设备解绑终端用户
   * 
   * @param request - DetachEndUsersRequest
   * @returns DetachEndUsersResponse
   */
  async detachEndUsers(request: DetachEndUsersRequest): Promise<DetachEndUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEndUsersWithOptions(request, runtime);
  }

  /**
   * 设备绑定标签
   * 
   * @param request - DetachLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLabelResponse
   */
  async detachLabelWithOptions(request: DetachLabelRequest, runtime: $Util.RuntimeOptions): Promise<DetachLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachLabelResponse>(await this.callApi(params, req, runtime), new DetachLabelResponse({}));
  }

  /**
   * 设备绑定标签
   * 
   * @param request - DetachLabelRequest
   * @returns DetachLabelResponse
   */
  async detachLabel(request: DetachLabelRequest): Promise<DetachLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLabelWithOptions(request, runtime);
  }

  /**
   * 批量解绑标签
   * 
   * @param request - DetachLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLabelsResponse
   */
  async detachLabelsWithOptions(request: DetachLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DetachLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachLabelsResponse>(await this.callApi(params, req, runtime), new DetachLabelsResponse({}));
  }

  /**
   * 批量解绑标签
   * 
   * @param request - DetachLabelsRequest
   * @returns DetachLabelsResponse
   */
  async detachLabels(request: DetachLabelsRequest): Promise<DetachLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLabelsWithOptions(request, runtime);
  }

  /**
   * 查询用户上传的文件
   * 
   * @param request - GenerateOssUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOssUrlResponse
   */
  async generateOssUrlWithOptions(request: GenerateOssUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOssUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectNameList)) {
      body["ObjectNameList"] = request.objectNameList;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateOssUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateOssUrlResponse>(await this.callApi(params, req, runtime), new GenerateOssUrlResponse({}));
  }

  /**
   * 查询用户上传的文件
   * 
   * @param request - GenerateOssUrlRequest
   * @returns GenerateOssUrlResponse
   */
  async generateOssUrl(request: GenerateOssUrlRequest): Promise<GenerateOssUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOssUrlWithOptions(request, runtime);
  }

  /**
   * 获取应用最新版本
   * 
   * @param request - GetAppOtaLatestVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppOtaLatestVersionResponse
   */
  async getAppOtaLatestVersionWithOptions(request: GetAppOtaLatestVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetAppOtaLatestVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseVersion)) {
      query["BaseVersion"] = request.baseVersion;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppOtaLatestVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppOtaLatestVersionResponse>(await this.callApi(params, req, runtime), new GetAppOtaLatestVersionResponse({}));
  }

  /**
   * 获取应用最新版本
   * 
   * @param request - GetAppOtaLatestVersionRequest
   * @returns GetAppOtaLatestVersionResponse
   */
  async getAppOtaLatestVersion(request: GetAppOtaLatestVersionRequest): Promise<GetAppOtaLatestVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppOtaLatestVersionWithOptions(request, runtime);
  }

  /**
   * 获取设备配置
   * 
   * @param request - GetDeviceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceConfigsResponse
   */
  async getDeviceConfigsWithOptions(request: GetDeviceConfigsRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.urclVersion)) {
      body["UrclVersion"] = request.urclVersion;
    }

    if (!Util.isUnset(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceConfigs",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceConfigsResponse>(await this.callApi(params, req, runtime), new GetDeviceConfigsResponse({}));
  }

  /**
   * 获取设备配置
   * 
   * @param request - GetDeviceConfigsRequest
   * @returns GetDeviceConfigsResponse
   */
  async getDeviceConfigs(request: GetDeviceConfigsRequest): Promise<GetDeviceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigsWithOptions(request, runtime);
  }

  /**
   * 获取是否开启自动升级状态
   * 
   * @param request - GetDeviceOtaAutoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaAutoStatusResponse
   */
  async getDeviceOtaAutoStatusWithOptions(request: GetDeviceOtaAutoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceOtaAutoStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceOtaAutoStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceOtaAutoStatusResponse>(await this.callApi(params, req, runtime), new GetDeviceOtaAutoStatusResponse({}));
  }

  /**
   * 获取是否开启自动升级状态
   * 
   * @param request - GetDeviceOtaAutoStatusRequest
   * @returns GetDeviceOtaAutoStatusResponse
   */
  async getDeviceOtaAutoStatus(request: GetDeviceOtaAutoStatusRequest): Promise<GetDeviceOtaAutoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceOtaAutoStatusWithOptions(request, runtime);
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaInfoResponse
   */
  async getDeviceOtaInfoWithOptions(request: GetDeviceOtaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceOtaInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!Util.isUnset(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetVersionType)) {
      body["TargetVersionType"] = request.targetVersionType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceOtaInfoResponse({}));
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoRequest
   * @returns GetDeviceOtaInfoResponse
   */
  async getDeviceOtaInfo(request: GetDeviceOtaInfoRequest): Promise<GetDeviceOtaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaInfoTestResponse
   */
  async getDeviceOtaInfoTestWithOptions(request: GetDeviceOtaInfoTestRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceOtaInfoTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceOtaInfoTest",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceOtaInfoTestResponse>(await this.callApi(params, req, runtime), new GetDeviceOtaInfoTestResponse({}));
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoTestRequest
   * @returns GetDeviceOtaInfoTestResponse
   */
  async getDeviceOtaInfoTest(request: GetDeviceOtaInfoTestRequest): Promise<GetDeviceOtaInfoTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceOtaInfoTestWithOptions(request, runtime);
  }

  /**
   * 获取租户任务版本信息
   * 
   * @param request - GetDeviceOtaTaskVersionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaTaskVersionInfoResponse
   */
  async getDeviceOtaTaskVersionInfoWithOptions(request: GetDeviceOtaTaskVersionInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceOtaTaskVersionInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceOtaTaskVersionInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceOtaTaskVersionInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceOtaTaskVersionInfoResponse({}));
  }

  /**
   * 获取租户任务版本信息
   * 
   * @param request - GetDeviceOtaTaskVersionInfoRequest
   * @returns GetDeviceOtaTaskVersionInfoResponse
   */
  async getDeviceOtaTaskVersionInfo(request: GetDeviceOtaTaskVersionInfoRequest): Promise<GetDeviceOtaTaskVersionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceOtaTaskVersionInfoWithOptions(request, runtime);
  }

  /**
   * 获得设备升级详情
   * 
   * @param request - GetDeviceUpgradeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceUpgradeStatusResponse
   */
  async getDeviceUpgradeStatusWithOptions(request: GetDeviceUpgradeStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceUpgradeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceUpgradeStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceUpgradeStatusResponse>(await this.callApi(params, req, runtime), new GetDeviceUpgradeStatusResponse({}));
  }

  /**
   * 获得设备升级详情
   * 
   * @param request - GetDeviceUpgradeStatusRequest
   * @returns GetDeviceUpgradeStatusResponse
   */
  async getDeviceUpgradeStatus(request: GetDeviceUpgradeStatusRequest): Promise<GetDeviceUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceUpgradeStatusWithOptions(request, runtime);
  }

  /**
   * 导出设备工位列表
   * 
   * @param request - GetExportDeviceInfoOssUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExportDeviceInfoOssUrlResponse
   */
  async getExportDeviceInfoOssUrlWithOptions(request: GetExportDeviceInfoOssUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetExportDeviceInfoOssUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.zoneName)) {
      body["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetExportDeviceInfoOssUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExportDeviceInfoOssUrlResponse>(await this.callApi(params, req, runtime), new GetExportDeviceInfoOssUrlResponse({}));
  }

  /**
   * 导出设备工位列表
   * 
   * @param request - GetExportDeviceInfoOssUrlRequest
   * @returns GetExportDeviceInfoOssUrlResponse
   */
  async getExportDeviceInfoOssUrl(request: GetExportDeviceInfoOssUrlRequest): Promise<GetExportDeviceInfoOssUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExportDeviceInfoOssUrlWithOptions(request, runtime);
  }

  /**
   * 查询OSS配置信息
   * 
   * @param request - GetFbOssConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFbOssConfigResponse
   */
  async getFbOssConfigWithOptions(request: GetFbOssConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetFbOssConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dirPrefix)) {
      body["DirPrefix"] = request.dirPrefix;
    }

    if (!Util.isUnset(request.isDedicatedLine)) {
      body["IsDedicatedLine"] = request.isDedicatedLine;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFbOssConfig",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFbOssConfigResponse>(await this.callApi(params, req, runtime), new GetFbOssConfigResponse({}));
  }

  /**
   * 查询OSS配置信息
   * 
   * @param request - GetFbOssConfigRequest
   * @returns GetFbOssConfigResponse
   */
  async getFbOssConfig(request: GetFbOssConfigRequest): Promise<GetFbOssConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFbOssConfigWithOptions(request, runtime);
  }

  /**
   * 获取OSS配置
   * 
   * @param request - GetOssConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssConfigResponse
   */
  async getOssConfigWithOptions(request: GetOssConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetOssConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssConfig",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssConfigResponse>(await this.callApi(params, req, runtime), new GetOssConfigResponse({}));
  }

  /**
   * 获取OSS配置
   * 
   * @param request - GetOssConfigRequest
   * @returns GetOssConfigResponse
   */
  async getOssConfig(request: GetOssConfigRequest): Promise<GetOssConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssConfigWithOptions(request, runtime);
  }

  /**
   * 获取版本下载地址
   * 
   * @param request - GetVersionDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVersionDownloadUrlResponse
   */
  async getVersionDownloadUrlWithOptions(request: GetVersionDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetVersionDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVersionDownloadUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVersionDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetVersionDownloadUrlResponse({}));
  }

  /**
   * 获取版本下载地址
   * 
   * @param request - GetVersionDownloadUrlRequest
   * @returns GetVersionDownloadUrlResponse
   */
  async getVersionDownloadUrl(request: GetVersionDownloadUrlRequest): Promise<GetVersionDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVersionDownloadUrlWithOptions(request, runtime);
  }

  /**
   * 获取租户ota任务
   * 
   * @param request - ListDeviceOtaTaskByTenantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceOtaTaskByTenantResponse
   */
  async listDeviceOtaTaskByTenantWithOptions(request: ListDeviceOtaTaskByTenantRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceOtaTaskByTenantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceOtaTaskByTenant",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceOtaTaskByTenantResponse>(await this.callApi(params, req, runtime), new ListDeviceOtaTaskByTenantResponse({}));
  }

  /**
   * 获取租户ota任务
   * 
   * @param request - ListDeviceOtaTaskByTenantRequest
   * @returns ListDeviceOtaTaskByTenantResponse
   */
  async listDeviceOtaTaskByTenant(request: ListDeviceOtaTaskByTenantRequest): Promise<ListDeviceOtaTaskByTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceOtaTaskByTenantWithOptions(request, runtime);
  }

  /**
   * 查询设备座位列表
   * 
   * @param request - ListDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceSeatsResponse
   */
  async listDeviceSeatsWithOptions(request: ListDeviceSeatsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceSeatsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.seatNo)) {
      body["SeatNo"] = request.seatNo;
    }

    if (!Util.isUnset(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceSeatsResponse>(await this.callApi(params, req, runtime), new ListDeviceSeatsResponse({}));
  }

  /**
   * 查询设备座位列表
   * 
   * @param request - ListDeviceSeatsRequest
   * @returns ListDeviceSeatsResponse
   */
  async listDeviceSeats(request: ListDeviceSeatsRequest): Promise<ListDeviceSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 获取设备列表
   * 
   * @param request - ListDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDevicesResponse
   */
  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceIpV4)) {
      query["DeviceIpV4"] = request.deviceIpV4;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceOS)) {
      query["DeviceOS"] = request.deviceOS;
    }

    if (!Util.isUnset(request.devicePlatform)) {
      query["DevicePlatform"] = request.devicePlatform;
    }

    if (!Util.isUnset(request.locationInfo)) {
      query["LocationInfo"] = request.locationInfo;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      body["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicesResponse>(await this.callApi(params, req, runtime), new ListDevicesResponse({}));
  }

  /**
   * 获取设备列表
   * 
   * @param request - ListDevicesRequest
   * @returns ListDevicesResponse
   */
  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  /**
   * 查询用户问题标签
   * 
   * @param request - ListFbIssueLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFbIssueLabelsResponse
   */
  async listFbIssueLabelsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFbIssueLabelsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListFbIssueLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFbIssueLabelsResponse>(await this.callApi(params, req, runtime), new ListFbIssueLabelsResponse({}));
  }

  /**
   * 查询用户问题标签
   * @returns ListFbIssueLabelsResponse
   */
  async listFbIssueLabels(): Promise<ListFbIssueLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFbIssueLabelsWithOptions(runtime);
  }

  /**
   * 根据语言类型和调用方查询标签列表
   * 
   * @param request - ListFbIssueLabelsByLCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFbIssueLabelsByLCResponse
   */
  async listFbIssueLabelsByLCWithOptions(request: ListFbIssueLabelsByLCRequest, runtime: $Util.RuntimeOptions): Promise<ListFbIssueLabelsByLCResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.languageType)) {
      body["LanguageType"] = request.languageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFbIssueLabelsByLC",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFbIssueLabelsByLCResponse>(await this.callApi(params, req, runtime), new ListFbIssueLabelsByLCResponse({}));
  }

  /**
   * 根据语言类型和调用方查询标签列表
   * 
   * @param request - ListFbIssueLabelsByLCRequest
   * @returns ListFbIssueLabelsByLCResponse
   */
  async listFbIssueLabelsByLC(request: ListFbIssueLabelsByLCRequest): Promise<ListFbIssueLabelsByLCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFbIssueLabelsByLCWithOptions(request, runtime);
  }

  /**
   * 获取标签列表
   * 
   * @param request - ListLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLabelsResponse
   */
  async listLabelsWithOptions(request: ListLabelsRequest, runtime: $Util.RuntimeOptions): Promise<ListLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLabelsResponse>(await this.callApi(params, req, runtime), new ListLabelsResponse({}));
  }

  /**
   * 获取标签列表
   * 
   * @param request - ListLabelsRequest
   * @returns ListLabelsResponse
   */
  async listLabels(request: ListLabelsRequest): Promise<ListLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLabelsWithOptions(request, runtime);
  }

  /**
   * 获取租户升级设备信息
   * 
   * @param request - ListTenantDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantDeviceOtaInfoResponse
   */
  async listTenantDeviceOtaInfoWithOptions(request: ListTenantDeviceOtaInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListTenantDeviceOtaInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTenantDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTenantDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new ListTenantDeviceOtaInfoResponse({}));
  }

  /**
   * 获取租户升级设备信息
   * 
   * @param request - ListTenantDeviceOtaInfoRequest
   * @returns ListTenantDeviceOtaInfoResponse
   */
  async listTenantDeviceOtaInfo(request: ListTenantDeviceOtaInfoRequest): Promise<ListTenantDeviceOtaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalResponse
   */
  async listTerminalWithOptions(request: ListTerminalRequest, runtime: $Util.RuntimeOptions): Promise<ListTerminalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!Util.isUnset(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!Util.isUnset(request.ipv4)) {
      body["Ipv4"] = request.ipv4;
    }

    if (!Util.isUnset(request.locationInfo)) {
      body["LocationInfo"] = request.locationInfo;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTerminalResponse>(await this.callApi(params, req, runtime), new ListTerminalResponse({}));
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @returns ListTerminalResponse
   */
  async listTerminal(request: ListTerminalRequest): Promise<ListTerminalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTerminalWithOptions(request, runtime);
  }

  /**
   * 批量查询终端基本信息
   * 
   * @param request - ListTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalsResponse
   */
  async listTerminalsWithOptions(request: ListTerminalsRequest, runtime: $Util.RuntimeOptions): Promise<ListTerminalsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!Util.isUnset(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTerminalsResponse>(await this.callApi(params, req, runtime), new ListTerminalsResponse({}));
  }

  /**
   * 批量查询终端基本信息
   * 
   * @param request - ListTerminalsRequest
   * @returns ListTerminalsResponse
   */
  async listTerminals(request: ListTerminalsRequest): Promise<ListTerminalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTerminalsWithOptions(request, runtime);
  }

  /**
   * 查询可信设备列表
   * 
   * @param request - ListTrustDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrustDevicesResponse
   */
  async listTrustDevicesWithOptions(request: ListTrustDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListTrustDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTrustDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrustDevicesResponse>(await this.callApi(params, req, runtime), new ListTrustDevicesResponse({}));
  }

  /**
   * 查询可信设备列表
   * 
   * @param request - ListTrustDevicesRequest
   * @returns ListTrustDevicesResponse
   */
  async listTrustDevices(request: ListTrustDevicesRequest): Promise<ListTrustDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrustDevicesWithOptions(request, runtime);
  }

  /**
   * 查询问题反馈列表
   * 
   * @param request - ListUserFbAcIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserFbAcIssuesResponse
   */
  async listUserFbAcIssuesWithOptions(request: ListUserFbAcIssuesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserFbAcIssuesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.errorMessage)) {
      body["ErrorMessage"] = request.errorMessage;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.issueId)) {
      body["IssueId"] = request.issueId;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!Util.isUnset(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!Util.isUnset(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserFbAcIssues",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserFbAcIssuesResponse>(await this.callApi(params, req, runtime), new ListUserFbAcIssuesResponse({}));
  }

  /**
   * 查询问题反馈列表
   * 
   * @param request - ListUserFbAcIssuesRequest
   * @returns ListUserFbAcIssuesResponse
   */
  async listUserFbAcIssues(request: ListUserFbAcIssuesRequest): Promise<ListUserFbAcIssuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserFbAcIssuesWithOptions(request, runtime);
  }

  /**
   * 查询用户反馈问题列表
   * 
   * @param request - ListUserFbIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserFbIssuesResponse
   */
  async listUserFbIssuesWithOptions(request: ListUserFbIssuesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserFbIssuesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientModel)) {
      body["ClientModel"] = request.clientModel;
    }

    if (!Util.isUnset(request.clientSn)) {
      body["ClientSn"] = request.clientSn;
    }

    if (!Util.isUnset(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      body["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.errorCode)) {
      body["ErrorCode"] = request.errorCode;
    }

    if (!Util.isUnset(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!Util.isUnset(request.fbType)) {
      body["FbType"] = request.fbType;
    }

    if (!Util.isUnset(request.issueId)) {
      body["IssueId"] = request.issueId;
    }

    if (!Util.isUnset(request.issueLabel)) {
      body["IssueLabel"] = request.issueLabel;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.wasRead)) {
      body["WasRead"] = request.wasRead;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserFbIssues",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserFbIssuesResponse>(await this.callApi(params, req, runtime), new ListUserFbIssuesResponse({}));
  }

  /**
   * 查询用户反馈问题列表
   * 
   * @param request - ListUserFbIssuesRequest
   * @returns ListUserFbIssuesResponse
   */
  async listUserFbIssues(request: ListUserFbIssuesRequest): Promise<ListUserFbIssuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserFbIssuesWithOptions(request, runtime);
  }

  /**
   * 修改设备安全入网类型
   * 
   * @param request - ModifyDevicesSecureNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDevicesSecureNetworkTypeResponse
   */
  async modifyDevicesSecureNetworkTypeWithOptions(request: ModifyDevicesSecureNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDevicesSecureNetworkTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allDevices)) {
      body["AllDevices"] = request.allDevices;
    }

    if (!Util.isUnset(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!Util.isUnset(request.serialNos)) {
      body["SerialNos"] = request.serialNos;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDevicesSecureNetworkType",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDevicesSecureNetworkTypeResponse>(await this.callApi(params, req, runtime), new ModifyDevicesSecureNetworkTypeResponse({}));
  }

  /**
   * 修改设备安全入网类型
   * 
   * @param request - ModifyDevicesSecureNetworkTypeRequest
   * @returns ModifyDevicesSecureNetworkTypeResponse
   */
  async modifyDevicesSecureNetworkType(request: ModifyDevicesSecureNetworkTypeRequest): Promise<ModifyDevicesSecureNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDevicesSecureNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 匿名api修改安全入网配置
   * 
   * @param request - ModifySecureNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecureNetworkTypeResponse
   */
  async modifySecureNetworkTypeWithOptions(request: ModifySecureNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecureNetworkTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecureNetworkType",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecureNetworkTypeResponse>(await this.callApi(params, req, runtime), new ModifySecureNetworkTypeResponse({}));
  }

  /**
   * 匿名api修改安全入网配置
   * 
   * @param request - ModifySecureNetworkTypeRequest
   * @returns ModifySecureNetworkTypeResponse
   */
  async modifySecureNetworkType(request: ModifySecureNetworkTypeRequest): Promise<ModifySecureNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecureNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 设备注册
   * 
   * @param request - RegisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceResponse
   */
  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bluetooth)) {
      body["Bluetooth"] = request.bluetooth;
    }

    if (!Util.isUnset(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!Util.isUnset(request.chipId)) {
      body["ChipId"] = request.chipId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!Util.isUnset(request.etherMac)) {
      body["EtherMac"] = request.etherMac;
    }

    if (!Util.isUnset(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.storage)) {
      body["Storage"] = request.storage;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    if (!Util.isUnset(request.wlan)) {
      body["Wlan"] = request.wlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDevice",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDeviceResponse>(await this.callApi(params, req, runtime), new RegisterDeviceResponse({}));
  }

  /**
   * 设备注册
   * 
   * @param request - RegisterDeviceRequest
   * @returns RegisterDeviceResponse
   */
  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  /**
   * 上报升级信息
   * 
   * @param request - ReportAppOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportAppOtaInfoResponse
   */
  async reportAppOtaInfoWithOptions(request: ReportAppOtaInfoRequest, runtime: $Util.RuntimeOptions): Promise<ReportAppOtaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseVersion)) {
      query["BaseVersion"] = request.baseVersion;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportAppOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportAppOtaInfoResponse>(await this.callApi(params, req, runtime), new ReportAppOtaInfoResponse({}));
  }

  /**
   * 上报升级信息
   * 
   * @param request - ReportAppOtaInfoRequest
   * @returns ReportAppOtaInfoResponse
   */
  async reportAppOtaInfo(request: ReportAppOtaInfoRequest): Promise<ReportAppOtaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportAppOtaInfoWithOptions(request, runtime);
  }

  /**
   * 升级信息上报
   * 
   * @param request - ReportDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportDeviceOtaInfoResponse
   */
  async reportDeviceOtaInfoWithOptions(request: ReportDeviceOtaInfoRequest, runtime: $Util.RuntimeOptions): Promise<ReportDeviceOtaInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.note)) {
      body["Note"] = request.note;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.targetVersion)) {
      body["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new ReportDeviceOtaInfoResponse({}));
  }

  /**
   * 升级信息上报
   * 
   * @param request - ReportDeviceOtaInfoRequest
   * @returns ReportDeviceOtaInfoResponse
   */
  async reportDeviceOtaInfo(request: ReportDeviceOtaInfoRequest): Promise<ReportDeviceOtaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 应用中心用户问题反馈
   * 
   * @param tmpReq - ReportUserFbAcIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportUserFbAcIssueResponse
   */
  async reportUserFbAcIssueWithOptions(tmpReq: ReportUserFbAcIssueRequest, runtime: $Util.RuntimeOptions): Promise<ReportUserFbAcIssueResponse> {
    Util.validateModel(tmpReq);
    let request = new ReportUserFbAcIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fileList)) {
      request.fileListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileList, "FileList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!Util.isUnset(request.fileListShrink)) {
      body["FileList"] = request.fileListShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!Util.isUnset(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!Util.isUnset(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportUserFbAcIssue",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUserFbAcIssueResponse>(await this.callApi(params, req, runtime), new ReportUserFbAcIssueResponse({}));
  }

  /**
   * 应用中心用户问题反馈
   * 
   * @param request - ReportUserFbAcIssueRequest
   * @returns ReportUserFbAcIssueResponse
   */
  async reportUserFbAcIssue(request: ReportUserFbAcIssueRequest): Promise<ReportUserFbAcIssueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUserFbAcIssueWithOptions(request, runtime);
  }

  /**
   * 上报用户反馈问题
   * 
   * @param tmpReq - ReportUserFbIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportUserFbIssueResponse
   */
  async reportUserFbIssueWithOptions(tmpReq: ReportUserFbIssueRequest, runtime: $Util.RuntimeOptions): Promise<ReportUserFbIssueResponse> {
    Util.validateModel(tmpReq);
    let request = new ReportUserFbIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fileList)) {
      request.fileListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileList, "FileList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientModel)) {
      body["ClientModel"] = request.clientModel;
    }

    if (!Util.isUnset(request.clientOsName)) {
      body["ClientOsName"] = request.clientOsName;
    }

    if (!Util.isUnset(request.clientSn)) {
      body["ClientSn"] = request.clientSn;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      body["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopType)) {
      body["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.errorCode)) {
      body["ErrorCode"] = request.errorCode;
    }

    if (!Util.isUnset(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!Util.isUnset(request.fbType)) {
      body["FbType"] = request.fbType;
    }

    if (!Util.isUnset(request.fileListShrink)) {
      body["FileList"] = request.fileListShrink;
    }

    if (!Util.isUnset(request.issueLabel)) {
      body["IssueLabel"] = request.issueLabel;
    }

    if (!Util.isUnset(request.occurTime)) {
      body["OccurTime"] = request.occurTime;
    }

    if (!Util.isUnset(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!Util.isUnset(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!Util.isUnset(request.telNo)) {
      body["TelNo"] = request.telNo;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportUserFbIssue",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUserFbIssueResponse>(await this.callApi(params, req, runtime), new ReportUserFbIssueResponse({}));
  }

  /**
   * 上报用户反馈问题
   * 
   * @param request - ReportUserFbIssueRequest
   * @returns ReportUserFbIssueResponse
   */
  async reportUserFbIssue(request: ReportUserFbIssueRequest): Promise<ReportUserFbIssueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUserFbIssueWithOptions(request, runtime);
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminalsWithOptions(request: SendOpsMessageToTerminalsRequest, runtime: $Util.RuntimeOptions): Promise<SendOpsMessageToTerminalsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delay)) {
      query["Delay"] = request.delay;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.msg)) {
      body["Msg"] = request.msg;
    }

    if (!Util.isUnset(request.opsAction)) {
      body["OpsAction"] = request.opsAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    if (!Util.isUnset(request.waitForAck)) {
      body["WaitForAck"] = request.waitForAck;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendOpsMessageToTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendOpsMessageToTerminalsResponse>(await this.callApi(params, req, runtime), new SendOpsMessageToTerminalsResponse({}));
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminals(request: SendOpsMessageToTerminalsRequest): Promise<SendOpsMessageToTerminalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendOpsMessageToTerminalsWithOptions(request, runtime);
  }

  /**
   * 设置租户ota自动开启/关闭
   * 
   * @param request - SetDeviceOtaAutoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceOtaAutoStatusResponse
   */
  async setDeviceOtaAutoStatusWithOptions(request: SetDeviceOtaAutoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceOtaAutoStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoUpdate)) {
      body["AutoUpdate"] = request.autoUpdate;
    }

    if (!Util.isUnset(request.autoUpdateTimeSchedule)) {
      body["AutoUpdateTimeSchedule"] = request.autoUpdateTimeSchedule;
    }

    if (!Util.isUnset(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.forceUpgrade)) {
      body["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDeviceOtaAutoStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeviceOtaAutoStatusResponse>(await this.callApi(params, req, runtime), new SetDeviceOtaAutoStatusResponse({}));
  }

  /**
   * 设置租户ota自动开启/关闭
   * 
   * @param request - SetDeviceOtaAutoStatusRequest
   * @returns SetDeviceOtaAutoStatusResponse
   */
  async setDeviceOtaAutoStatus(request: SetDeviceOtaAutoStatusRequest): Promise<SetDeviceOtaAutoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceOtaAutoStatusWithOptions(request, runtime);
  }

  /**
   * 租户设置设备ota任务的状态
   * 
   * @param request - SetDeviceOtaTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceOtaTaskStatusResponse
   */
  async setDeviceOtaTaskStatusWithOptions(request: SetDeviceOtaTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceOtaTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operationStatus)) {
      body["OperationStatus"] = request.operationStatus;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDeviceOtaTaskStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeviceOtaTaskStatusResponse>(await this.callApi(params, req, runtime), new SetDeviceOtaTaskStatusResponse({}));
  }

  /**
   * 租户设置设备ota任务的状态
   * 
   * @param request - SetDeviceOtaTaskStatusRequest
   * @returns SetDeviceOtaTaskStatusResponse
   */
  async setDeviceOtaTaskStatus(request: SetDeviceOtaTaskStatusRequest): Promise<SetDeviceOtaTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceOtaTaskStatusWithOptions(request, runtime);
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUserWithOptions(request: UnbindAccountLessLoginUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAccountLessLoginUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new UnbindAccountLessLoginUserResponse({}));
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUser(request: UnbindAccountLessLoginUserRequest): Promise<UnbindAccountLessLoginUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 解绑设备座位
   * 
   * @param tmpReq - UnbindDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDeviceSeatsResponse
   */
  async unbindDeviceSeatsWithOptions(tmpReq: UnbindDeviceSeatsRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceSeatsResponse> {
    Util.validateModel(tmpReq);
    let request = new UnbindDeviceSeatsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.serialNoList)) {
      request.serialNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serialNoList, "SerialNoList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serialNoListShrink)) {
      body["SerialNoList"] = request.serialNoListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDeviceSeatsResponse>(await this.callApi(params, req, runtime), new UnbindDeviceSeatsResponse({}));
  }

  /**
   * 解绑设备座位
   * 
   * @param request - UnbindDeviceSeatsRequest
   * @returns UnbindDeviceSeatsResponse
   */
  async unbindDeviceSeats(request: UnbindDeviceSeatsRequest): Promise<UnbindDeviceSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 更新设备别名
   * 
   * @param request - UpdateAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(request: UpdateAliasRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlias",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
  }

  /**
   * 更新设备别名
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  /**
   * 批量更新设备绑定的终端用户
   * 
   * @param request - UpdateDeviceBindedEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeviceBindedEndUserResponse
   */
  async updateDeviceBindedEndUserWithOptions(request: UpdateDeviceBindedEndUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceBindedEndUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.sourceAdEndUsers)) {
      body["SourceAdEndUsers"] = request.sourceAdEndUsers;
    }

    if (!Util.isUnset(request.sourceEndUserIds)) {
      body["SourceEndUserIds"] = request.sourceEndUserIds;
    }

    if (!Util.isUnset(request.targetAdEndUsers)) {
      body["TargetAdEndUsers"] = request.targetAdEndUsers;
    }

    if (!Util.isUnset(request.targetEndUserIds)) {
      body["TargetEndUserIds"] = request.targetEndUserIds;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceBindedEndUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceBindedEndUserResponse>(await this.callApi(params, req, runtime), new UpdateDeviceBindedEndUserResponse({}));
  }

  /**
   * 批量更新设备绑定的终端用户
   * 
   * @param request - UpdateDeviceBindedEndUserRequest
   * @returns UpdateDeviceBindedEndUserResponse
   */
  async updateDeviceBindedEndUser(request: UpdateDeviceBindedEndUserRequest): Promise<UpdateDeviceBindedEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceBindedEndUserWithOptions(request, runtime);
  }

  /**
   * 修改标签
   * 
   * @param request - UpdateLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLabelResponse
   */
  async updateLabelWithOptions(request: UpdateLabelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLabelResponse>(await this.callApi(params, req, runtime), new UpdateLabelResponse({}));
  }

  /**
   * 修改标签
   * 
   * @param request - UpdateLabelRequest
   * @returns UpdateLabelResponse
   */
  async updateLabel(request: UpdateLabelRequest): Promise<UpdateLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLabelWithOptions(request, runtime);
  }

  /**
   * 修改终端策略
   * 
   * @param request - UpdateTerminalPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTerminalPolicyResponse
   */
  async updateTerminalPolicyWithOptions(request: UpdateTerminalPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTerminalPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayLayout)) {
      body["DisplayLayout"] = request.displayLayout;
    }

    if (!Util.isUnset(request.displayResolution)) {
      body["DisplayResolution"] = request.displayResolution;
    }

    if (!Util.isUnset(request.displayScaleRatio)) {
      body["DisplayScaleRatio"] = request.displayScaleRatio;
    }

    if (!Util.isUnset(request.enableAutoLockScreen)) {
      body["EnableAutoLockScreen"] = request.enableAutoLockScreen;
    }

    if (!Util.isUnset(request.enableAutoLogin)) {
      body["EnableAutoLogin"] = request.enableAutoLogin;
    }

    if (!Util.isUnset(request.enableBluetooth)) {
      body["EnableBluetooth"] = request.enableBluetooth;
    }

    if (!Util.isUnset(request.enableModifyPassword)) {
      body["EnableModifyPassword"] = request.enableModifyPassword;
    }

    if (!Util.isUnset(request.enableScheduledShutdown)) {
      body["EnableScheduledShutdown"] = request.enableScheduledShutdown;
    }

    if (!Util.isUnset(request.enableSwitchPersonal)) {
      body["EnableSwitchPersonal"] = request.enableSwitchPersonal;
    }

    if (!Util.isUnset(request.enableWlan)) {
      body["EnableWlan"] = request.enableWlan;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.idleTimeoutAction)) {
      body["IdleTimeoutAction"] = request.idleTimeoutAction;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.powerButtonDefine)) {
      body["PowerButtonDefine"] = request.powerButtonDefine;
    }

    if (!Util.isUnset(request.powerButtonDefineForAs)) {
      body["PowerButtonDefineForAs"] = request.powerButtonDefineForAs;
    }

    if (!Util.isUnset(request.powerButtonDefineForNs)) {
      body["PowerButtonDefineForNs"] = request.powerButtonDefineForNs;
    }

    if (!Util.isUnset(request.powerOnBehavior)) {
      body["PowerOnBehavior"] = request.powerOnBehavior;
    }

    if (!Util.isUnset(request.scheduledShutdown)) {
      body["ScheduledShutdown"] = request.scheduledShutdown;
    }

    if (!Util.isUnset(request.settingLock)) {
      body["SettingLock"] = request.settingLock;
    }

    if (!Util.isUnset(request.terminalPolicyId)) {
      body["TerminalPolicyId"] = request.terminalPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTerminalPolicy",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTerminalPolicyResponse>(await this.callApi(params, req, runtime), new UpdateTerminalPolicyResponse({}));
  }

  /**
   * 修改终端策略
   * 
   * @param request - UpdateTerminalPolicyRequest
   * @returns UpdateTerminalPolicyResponse
   */
  async updateTerminalPolicy(request: UpdateTerminalPolicyRequest): Promise<UpdateTerminalPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTerminalPolicyWithOptions(request, runtime);
  }

}
