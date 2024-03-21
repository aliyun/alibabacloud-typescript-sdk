// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApproveFotaUpdateRequest extends $tea.Model {
  appVersion?: string;
  clientId?: string;
  desktopId?: string;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponseBody extends $tea.Model {
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

export class ApproveFotaUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveFotaUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveFotaUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordRequest extends $tea.Model {
  clientId?: string;
  endUserId?: string;
  loginToken?: string;
  newPassword?: string;
  officeSiteId?: string;
  oldPassword?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      endUserId: 'string',
      loginToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponseBody extends $tea.Model {
  loginToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangePasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangePasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFingerPrintTemplateRequest extends $tea.Model {
  clientId?: string;
  clientToken?: string;
  index?: number;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      index: 'Index',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      index: 'number',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFingerPrintTemplateResponseBody extends $tea.Model {
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

export class DeleteFingerPrintTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFingerPrintTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFingerPrintTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  clientId?: string;
  directoryId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      requestId: 'string',
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

export class DescribeFingerPrintTemplatesRequest extends $tea.Model {
  clientId?: string;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponseBody extends $tea.Model {
  fingerPrintTemplates?: DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrintTemplates: 'FingerPrintTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrintTemplates: { 'type': 'array', 'itemType': DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFingerPrintTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFingerPrintTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsRequest extends $tea.Model {
  clientId?: string;
  desktopAccessType?: string;
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  directoryId?: string;
  keyword?: string;
  loginRegionId?: string;
  loginToken?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  orderBy?: string;
  queryFotaUpdate?: boolean;
  regionId?: string;
  searchRegionId?: string;
  sessionId?: string;
  sortType?: string;
  withoutLatency?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopAccessType: 'DesktopAccessType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      orderBy: 'OrderBy',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      sessionId: 'SessionId',
      sortType: 'SortType',
      withoutLatency: 'WithoutLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopAccessType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      directoryId: 'string',
      keyword: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      orderBy: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      searchRegionId: 'string',
      sessionId: 'string',
      sortType: 'string',
      withoutLatency: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBody extends $tea.Model {
  desktops?: DescribeGlobalDesktopsResponseBodyDesktops[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGlobalDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesRequest extends $tea.Model {
  clientId?: string;
  officeSiteId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $tea.Model {
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  clientId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  clientId?: string;
  desktopId?: string;
  loginToken?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  sessionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordRequest extends $tea.Model {
  clientId?: string;
  directoryId?: string;
  loginToken?: string;
  officeSiteId?: string;
  password?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordResponseBody extends $tea.Model {
  encryptedPassword?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenRequest extends $tea.Model {
  clientId?: string;
  loginToken?: string;
  officeSiteId?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: GetCloudDriveServiceMountTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: GetCloudDriveServiceMountTokenResponseBodyToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudDriveServiceMountTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCloudDriveServiceMountTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientType?: string;
  clientVersion?: string;
  commandContent?: string;
  desktopId?: string;
  loginToken?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionId?: string;
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      commandContent: 'CommandContent',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      commandContent: 'string',
      desktopId: 'string',
      loginToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      taskId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  requestId?: string;
  taskCode?: string;
  taskId?: string;
  taskMessage?: string;
  taskStatus?: string;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskCode: 'string',
      taskId: 'string',
      taskMessage: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $tea.Model {
  authenticationCode?: string;
  clientId?: string;
  clientOS?: string;
  clientType?: string;
  clientVersion?: string;
  currentStage?: string;
  directoryId?: string;
  endUserId?: string;
  keepAlive?: boolean;
  keepAliveToken?: string;
  newPassword?: string;
  officeSiteId?: string;
  oldPassword?: string;
  password?: string;
  regionId?: string;
  sessionId?: string;
  tokenCode?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode: 'AuthenticationCode',
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentStage: 'CurrentStage',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      keepAlive: 'KeepAlive',
      keepAliveToken: 'KeepAliveToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode: 'string',
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      currentStage: 'string',
      directoryId: 'string',
      endUserId: 'string',
      keepAlive: 'boolean',
      keepAliveToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $tea.Model {
  email?: string;
  endUserId?: string;
  industry?: string;
  keepAliveToken?: string;
  label?: string;
  loginToken?: string;
  nextStage?: string;
  phone?: string;
  props?: { [key: string]: string };
  qrCodePng?: string;
  requestId?: string;
  secret?: string;
  sessionId?: string;
  tenantId?: number;
  windowDisplayMode?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      industry: 'Industry',
      keepAliveToken: 'KeepAliveToken',
      label: 'Label',
      loginToken: 'LoginToken',
      nextStage: 'NextStage',
      phone: 'Phone',
      props: 'Props',
      qrCodePng: 'QrCodePng',
      requestId: 'RequestId',
      secret: 'Secret',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      windowDisplayMode: 'WindowDisplayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      industry: 'string',
      keepAliveToken: 'string',
      label: 'string',
      loginToken: 'string',
      nextStage: 'string',
      phone: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qrCodePng: 'string',
      requestId: 'string',
      secret: 'string',
      sessionId: 'string',
      tenantId: 'number',
      windowDisplayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveRequest extends $tea.Model {
  clientId?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveResponseBody extends $tea.Model {
  isKeepAlive?: boolean;
  officeSiteId?: string;
  requestId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      isKeepAlive: 'IsKeepAlive',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isKeepAlive: 'boolean',
      officeSiteId: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IsKeepAliveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IsKeepAliveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigRequest extends $tea.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponseBody extends $tea.Model {
  data?: QueryEdsAgentReportConfigResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryEdsAgentReportConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEdsAgentReportConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEdsAgentReportConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientToken?: string;
  clientVersion?: string;
  desktopId?: string[];
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  sessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      sessionToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponseBody extends $tea.Model {
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

export class RebootDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenRequest extends $tea.Model {
  clientId?: string;
  directoryId?: string;
  endUserId?: string;
  loginToken?: string;
  officeSiteId?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponseBody extends $tea.Model {
  loginToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportEdsAgentInfoRequest extends $tea.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  edsAgentInfo?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
      edsAgentInfo: 'EdsAgentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
      edsAgentInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportEdsAgentInfoResponseBody extends $tea.Model {
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

export class ReportEdsAgentInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportEdsAgentInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportEdsAgentInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportSessionStatusRequest extends $tea.Model {
  endUserId?: string;
  instanceId?: string;
  regionId?: string;
  sessionChangeTime?: number;
  sessionId?: string;
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      sessionChangeTime: 'SessionChangeTime',
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceId: 'string',
      regionId: 'string',
      sessionChangeTime: 'number',
      sessionId: 'string',
      sessionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportSessionStatusResponseBody extends $tea.Model {
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

export class ReportSessionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportSessionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportSessionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetPasswordRequest extends $tea.Model {
  clientId?: string;
  clientToken?: string;
  email?: string;
  endUserId?: string;
  officeSiteId?: string;
  regionId?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      email: 'Email',
      endUserId: 'EndUserId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      email: 'string',
      endUserId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetPasswordResponseBody extends $tea.Model {
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

export class ResetPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotRequest extends $tea.Model {
  clientId?: string;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponseBody extends $tea.Model {
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

export class ResetSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTokenCodeRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  endUserId?: string;
  loginToken?: string;
  officeSiteId?: string;
  sessionId?: string;
  tokenCode?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTokenCodeResponseBody extends $tea.Model {
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

export class SendTokenCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTokenCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendTokenCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateRequest extends $tea.Model {
  clientId?: string;
  clientToken?: string;
  description?: string;
  encryptedFingerPrintTemplate?: string;
  encryptedKey?: string;
  fingerPrintTemplate?: string;
  loginToken?: string;
  password?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
      encryptedFingerPrintTemplate: 'EncryptedFingerPrintTemplate',
      encryptedKey: 'EncryptedKey',
      fingerPrintTemplate: 'FingerPrintTemplate',
      loginToken: 'LoginToken',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      description: 'string',
      encryptedFingerPrintTemplate: 'string',
      encryptedKey: 'string',
      fingerPrintTemplate: 'string',
      loginToken: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateResponseBody extends $tea.Model {
  encryptedPassword?: string;
  index?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      index: 'Index',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      index: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFingerPrintTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFingerPrintTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateDescriptionRequest extends $tea.Model {
  clientId?: string;
  clientToken?: string;
  description?: string;
  index?: number;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
      index: 'Index',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      description: 'string',
      index: 'number',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateDescriptionResponseBody extends $tea.Model {
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

export class SetFingerPrintTemplateDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFingerPrintTemplateDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFingerPrintTemplateDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientToken?: string;
  clientVersion?: string;
  desktopId?: string[];
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponseBody extends $tea.Model {
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

export class StartDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordContentRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopId?: string;
  filePath?: string;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      filePath: 'FilePath',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      filePath: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordContentResponseBody extends $tea.Model {
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

export class StartRecordContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRecordContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRecordContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientToken?: string;
  clientVersion?: string;
  desktopId?: string[];
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  sessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      sessionToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponseBody extends $tea.Model {
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

export class StopDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordContentRequest extends $tea.Model {
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopId?: string;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordContentResponseBody extends $tea.Model {
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

export class StopRecordContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRecordContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopRecordContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopRequest extends $tea.Model {
  clientId?: string;
  clientType?: string;
  force?: boolean;
  loginToken?: string;
  regionId?: string;
  sessionId?: string;
  userDesktopId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      force: 'Force',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      userDesktopId: 'UserDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      force: 'boolean',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      userDesktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopResponseBody extends $tea.Model {
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

export class UnbindUserDesktopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindUserDesktopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindUserDesktopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCredentialRequest extends $tea.Model {
  clientId?: string;
  credential?: string;
  credentialType?: string;
  encryptedKey?: string;
  loginToken?: string;
  officeSiteId?: string;
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      credential: 'Credential',
      credentialType: 'CredentialType',
      encryptedKey: 'EncryptedKey',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      credential: 'string',
      credentialType: 'string',
      encryptedKey: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCredentialResponseBody extends $tea.Model {
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

export class VerifyCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  desktopAccessType?: string;
  directoryId?: string;
  directoryType?: string;
  providerId?: string;
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates extends $tea.Model {
  clientId?: string;
  creationTime?: string;
  description?: string;
  endUserId?: string;
  index?: number;
  loginTime?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      creationTime: 'CreationTime',
      description: 'Description',
      endUserId: 'EndUserId',
      index: 'Index',
      loginTime: 'LoginTime',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      creationTime: 'string',
      description: 'string',
      endUserId: 'string',
      index: 'number',
      loginTime: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers extends $tea.Model {
  allowClientSetting?: boolean;
  cronExpression?: string;
  enforce?: boolean;
  executionTime?: string;
  interval?: number;
  operationType?: string;
  resetType?: string;
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      executionTime: 'ExecutionTime',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      executionTime: 'string',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsDisks extends $tea.Model {
  diskId?: string;
  diskSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate extends $tea.Model {
  channel?: string;
  currentAppVersion?: string;
  force?: boolean;
  newAppVersion?: string;
  project?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      currentAppVersion: 'CurrentAppVersion',
      force: 'Force',
      newAppVersion: 'NewAppVersion',
      project: 'Project',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      currentAppVersion: 'string',
      force: 'boolean',
      newAppVersion: 'string',
      project: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsSessions extends $tea.Model {
  endUserId?: string;
  establishmentTime?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktops extends $tea.Model {
  chargeType?: string;
  clients?: DescribeGlobalDesktopsResponseBodyDesktopsClients[];
  connectionStatus?: string;
  cpu?: number;
  creationTime?: string;
  desktopGroupId?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  desktopTimers?: DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers[];
  desktopType?: string;
  directoryId?: string;
  disks?: DescribeGlobalDesktopsResponseBodyDesktopsDisks[];
  endUserId?: string;
  endUserIds?: string[];
  expiredTime?: string;
  fotaUpdate?: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
  gpuMemory?: number;
  hibernationBeta?: boolean;
  hostName?: string;
  imageId?: string;
  lastStartTime?: string;
  localName?: string;
  managementFlags?: string[];
  memory?: number;
  networkInterfaceIp?: string;
  officeSiteId?: string;
  os?: string;
  osType?: string;
  platform?: string;
  policyGroupId?: string;
  protocolType?: string;
  realDesktopId?: string;
  regionId?: string;
  sessionType?: string;
  sessions?: DescribeGlobalDesktopsResponseBodyDesktopsSessions[];
  supportHibernation?: boolean;
  userCustomName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clients: 'Clients',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopTimers: 'DesktopTimers',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      disks: 'Disks',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuMemory: 'GpuMemory',
      hibernationBeta: 'HibernationBeta',
      hostName: 'HostName',
      imageId: 'ImageId',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      os: 'Os',
      osType: 'OsType',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      realDesktopId: 'RealDesktopId',
      regionId: 'RegionId',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      supportHibernation: 'SupportHibernation',
      userCustomName: 'UserCustomName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clients: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsClients },
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopTimers: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers },
      desktopType: 'string',
      directoryId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDisks },
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fotaUpdate: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate,
      gpuMemory: 'number',
      hibernationBeta: 'boolean',
      hostName: 'string',
      imageId: 'string',
      lastStartTime: 'string',
      localName: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      os: 'string',
      osType: 'string',
      platform: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      realDesktopId: 'string',
      regionId: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsSessions },
      supportHibernation: 'boolean',
      userCustomName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $tea.Model {
  desktopAccessType?: string;
  desktopVpcEndpoint?: string;
  officeSiteId?: string;
  officeSiteType?: string;
  providerId?: string;
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  creationTime?: string;
  description?: string;
  desktopId?: string;
  progress?: string;
  remainTime?: number;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceDiskSize?: string;
  sourceDiskType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      desktopId: 'DesktopId',
      progress: 'Progress',
      remainTime: 'RemainTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      desktopId: 'string',
      progress: 'string',
      remainTime: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponseBodyToken extends $tea.Model {
  domainId?: string;
  expiredAfter?: string;
  status?: string;
  token?: string;
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      expiredAfter: 'ExpiredAfter',
      status: 'Status',
      token: 'Token',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      expiredAfter: 'string',
      status: 'string',
      token: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponseBodyData extends $tea.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async approveFotaUpdateWithOptions(request: ApproveFotaUpdateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveFotaUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApproveFotaUpdate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveFotaUpdateResponse>(await this.callApi(params, req, runtime), new ApproveFotaUpdateResponse({}));
  }

  async approveFotaUpdate(request: ApproveFotaUpdateRequest): Promise<ApproveFotaUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  async changePasswordWithOptions(request: ChangePasswordRequest, runtime: $Util.RuntimeOptions): Promise<ChangePasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangePassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangePasswordResponse>(await this.callApi(params, req, runtime), new ChangePasswordResponse({}));
  }

  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  async deleteFingerPrintTemplateWithOptions(request: DeleteFingerPrintTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFingerPrintTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.index)) {
      query["Index"] = request.index;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFingerPrintTemplateResponse>(await this.callApi(params, req, runtime), new DeleteFingerPrintTemplateResponse({}));
  }

  async deleteFingerPrintTemplate(request: DeleteFingerPrintTemplateRequest): Promise<DeleteFingerPrintTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFingerPrintTemplateWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDirectories",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
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

  async describeFingerPrintTemplatesWithOptions(request: DescribeFingerPrintTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFingerPrintTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFingerPrintTemplates",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFingerPrintTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeFingerPrintTemplatesResponse({}));
  }

  async describeFingerPrintTemplates(request: DescribeFingerPrintTemplatesRequest): Promise<DescribeFingerPrintTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFingerPrintTemplatesWithOptions(request, runtime);
  }

  async describeGlobalDesktopsWithOptions(request: DescribeGlobalDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.withoutLatency)) {
      query["WithoutLatency"] = request.withoutLatency;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeGlobalDesktopsResponse({}));
  }

  async describeGlobalDesktops(request: DescribeGlobalDesktopsRequest): Promise<DescribeGlobalDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDesktopsWithOptions(request, runtime);
  }

  async describeOfficeSitesWithOptions(request: DescribeOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOfficeSitesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOfficeSites",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOfficeSitesResponse>(await this.callApi(params, req, runtime), new DescribeOfficeSitesResponse({}));
  }

  async describeOfficeSites(request: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSnapshots",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async encryptPasswordWithOptions(request: EncryptPasswordRequest, runtime: $Util.RuntimeOptions): Promise<EncryptPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EncryptPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EncryptPasswordResponse>(await this.callApi(params, req, runtime), new EncryptPasswordResponse({}));
  }

  async encryptPassword(request: EncryptPasswordRequest): Promise<EncryptPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptPasswordWithOptions(request, runtime);
  }

  async getCloudDriveServiceMountTokenWithOptions(request: GetCloudDriveServiceMountTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudDriveServiceMountTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudDriveServiceMountToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudDriveServiceMountTokenResponse>(await this.callApi(params, req, runtime), new GetCloudDriveServiceMountTokenResponse({}));
  }

  async getCloudDriveServiceMountToken(request: GetCloudDriveServiceMountTokenRequest): Promise<GetCloudDriveServiceMountTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudDriveServiceMountTokenWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectionTicket",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getLoginTokenWithOptions(request: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!Util.isUnset(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!Util.isUnset(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginTokenResponse>(await this.callApi(params, req, runtime), new GetLoginTokenResponse({}));
  }

  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  async isKeepAliveWithOptions(request: IsKeepAliveRequest, runtime: $Util.RuntimeOptions): Promise<IsKeepAliveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IsKeepAlive",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IsKeepAliveResponse>(await this.callApi(params, req, runtime), new IsKeepAliveResponse({}));
  }

  async isKeepAlive(request: IsKeepAliveRequest): Promise<IsKeepAliveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isKeepAliveWithOptions(request, runtime);
  }

  async queryEdsAgentReportConfigWithOptions(request: QueryEdsAgentReportConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdsAgentReportConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEdsAgentReportConfig",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEdsAgentReportConfigResponse>(await this.callApi(params, req, runtime), new QueryEdsAgentReportConfigResponse({}));
  }

  async queryEdsAgentReportConfig(request: QueryEdsAgentReportConfigRequest): Promise<QueryEdsAgentReportConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdsAgentReportConfigWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootDesktopsResponse>(await this.callApi(params, req, runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async refreshLoginTokenWithOptions(request: RefreshLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshLoginTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshLoginTokenResponse>(await this.callApi(params, req, runtime), new RefreshLoginTokenResponse({}));
  }

  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

  async reportEdsAgentInfoWithOptions(request: ReportEdsAgentInfoRequest, runtime: $Util.RuntimeOptions): Promise<ReportEdsAgentInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!Util.isUnset(request.edsAgentInfo)) {
      query["EdsAgentInfo"] = request.edsAgentInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportEdsAgentInfo",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportEdsAgentInfoResponse>(await this.callApi(params, req, runtime), new ReportEdsAgentInfoResponse({}));
  }

  async reportEdsAgentInfo(request: ReportEdsAgentInfoRequest): Promise<ReportEdsAgentInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportEdsAgentInfoWithOptions(request, runtime);
  }

  async reportSessionStatusWithOptions(request: ReportSessionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ReportSessionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionChangeTime)) {
      query["SessionChangeTime"] = request.sessionChangeTime;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportSessionStatus",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportSessionStatusResponse>(await this.callApi(params, req, runtime), new ReportSessionStatusResponse({}));
  }

  async reportSessionStatus(request: ReportSessionStatusRequest): Promise<ReportSessionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportSessionStatusWithOptions(request, runtime);
  }

  async resetPasswordWithOptions(request: ResetPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.phone)) {
      query["phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetPasswordResponse>(await this.callApi(params, req, runtime), new ResetPasswordResponse({}));
  }

  async resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetPasswordWithOptions(request, runtime);
  }

  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ResetSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSnapshot",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSnapshotResponse>(await this.callApi(params, req, runtime), new ResetSnapshotResponse({}));
  }

  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  async sendTokenCodeWithOptions(request: SendTokenCodeRequest, runtime: $Util.RuntimeOptions): Promise<SendTokenCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendTokenCode",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendTokenCodeResponse>(await this.callApi(params, req, runtime), new SendTokenCodeResponse({}));
  }

  async sendTokenCode(request: SendTokenCodeRequest): Promise<SendTokenCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTokenCodeWithOptions(request, runtime);
  }

  async setFingerPrintTemplateWithOptions(request: SetFingerPrintTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SetFingerPrintTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encryptedFingerPrintTemplate)) {
      query["EncryptedFingerPrintTemplate"] = request.encryptedFingerPrintTemplate;
    }

    if (!Util.isUnset(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!Util.isUnset(request.fingerPrintTemplate)) {
      query["FingerPrintTemplate"] = request.fingerPrintTemplate;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetFingerPrintTemplateResponse>(await this.callApi(params, req, runtime), new SetFingerPrintTemplateResponse({}));
  }

  async setFingerPrintTemplate(request: SetFingerPrintTemplateRequest): Promise<SetFingerPrintTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setFingerPrintTemplateWithOptions(request, runtime);
  }

  async setFingerPrintTemplateDescriptionWithOptions(request: SetFingerPrintTemplateDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<SetFingerPrintTemplateDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.index)) {
      query["Index"] = request.index;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetFingerPrintTemplateDescription",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetFingerPrintTemplateDescriptionResponse>(await this.callApi(params, req, runtime), new SetFingerPrintTemplateDescriptionResponse({}));
  }

  async setFingerPrintTemplateDescription(request: SetFingerPrintTemplateDescriptionRequest): Promise<SetFingerPrintTemplateDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setFingerPrintTemplateDescriptionWithOptions(request, runtime);
  }

  /**
    * The ID of the client.
    *
    * @param request StartDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StartDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDesktopsResponse>(await this.callApi(params, req, runtime), new StartDesktopsResponse({}));
  }

  /**
    * The ID of the client.
    *
    * @param request StartDesktopsRequest
    * @return StartDesktopsResponse
   */
  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  async startRecordContentWithOptions(request: StartRecordContentRequest, runtime: $Util.RuntimeOptions): Promise<StartRecordContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRecordContentResponse>(await this.callApi(params, req, runtime), new StartRecordContentResponse({}));
  }

  async startRecordContent(request: StartRecordContentRequest): Promise<StartRecordContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordContentWithOptions(request, runtime);
  }

  /**
    * The cloud desktops that you want to stop by calling this operation must be in the Running state. If the call is successful, the cloud desktops enter the Stopped state.
    *
    * @param request StopDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StopDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDesktopsResponse>(await this.callApi(params, req, runtime), new StopDesktopsResponse({}));
  }

  /**
    * The cloud desktops that you want to stop by calling this operation must be in the Running state. If the call is successful, the cloud desktops enter the Stopped state.
    *
    * @param request StopDesktopsRequest
    * @return StopDesktopsResponse
   */
  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  async stopRecordContentWithOptions(request: StopRecordContentRequest, runtime: $Util.RuntimeOptions): Promise<StopRecordContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopRecordContentResponse>(await this.callApi(params, req, runtime), new StopRecordContentResponse({}));
  }

  async stopRecordContent(request: StopRecordContentRequest): Promise<StopRecordContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordContentWithOptions(request, runtime);
  }

  async unbindUserDesktopWithOptions(request: UnbindUserDesktopRequest, runtime: $Util.RuntimeOptions): Promise<UnbindUserDesktopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindUserDesktop",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindUserDesktopResponse>(await this.callApi(params, req, runtime), new UnbindUserDesktopResponse({}));
  }

  async unbindUserDesktop(request: UnbindUserDesktopRequest): Promise<UnbindUserDesktopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindUserDesktopWithOptions(request, runtime);
  }

  async verifyCredentialWithOptions(request: VerifyCredentialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!Util.isUnset(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!Util.isUnset(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyCredential",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyCredentialResponse>(await this.callApi(params, req, runtime), new VerifyCredentialResponse({}));
  }

  async verifyCredential(request: VerifyCredentialRequest): Promise<VerifyCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyCredentialWithOptions(request, runtime);
  }

}
