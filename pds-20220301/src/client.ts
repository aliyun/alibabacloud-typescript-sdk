// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import SPI from '@alicloud/gateway-spi';
import GatewayClient from '@alicloud/gateway-pds';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccountAccessTokenResponse extends $tea.Model {
  accessToken?: string;
  avatar?: string;
  defaultDriveId?: string;
  defaultSboxDriveId?: string;
  deviceId?: string;
  deviceName?: string;
  domainId?: string;
  existLink?: LinkInfo[];
  expireTime?: string;
  expiresIn?: number;
  isFirstLogin?: boolean;
  needLink?: boolean;
  needRpVerify?: boolean;
  nickName?: string;
  pathStatus?: string;
  pinSetup?: boolean;
  refreshToken?: string;
  role?: string;
  state?: string;
  status?: string;
  tokenType?: string;
  userData?: { [key: string]: string };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      avatar: 'avatar',
      defaultDriveId: 'default_drive_id',
      defaultSboxDriveId: 'default_sbox_drive_id',
      deviceId: 'device_id',
      deviceName: 'device_name',
      domainId: 'domain_id',
      existLink: 'exist_link',
      expireTime: 'expire_time',
      expiresIn: 'expires_in',
      isFirstLogin: 'is_first_login',
      needLink: 'need_link',
      needRpVerify: 'need_rp_verify',
      nickName: 'nick_name',
      pathStatus: 'path_status',
      pinSetup: 'pin_setup',
      refreshToken: 'refresh_token',
      role: 'role',
      state: 'state',
      status: 'status',
      tokenType: 'token_type',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatar: 'string',
      defaultDriveId: 'string',
      defaultSboxDriveId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      domainId: 'string',
      existLink: { 'type': 'array', 'itemType': LinkInfo },
      expireTime: 'string',
      expiresIn: 'number',
      isFirstLogin: 'boolean',
      needLink: 'boolean',
      needRpVerify: 'boolean',
      nickName: 'string',
      pathStatus: 'string',
      pinSetup: 'boolean',
      refreshToken: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tokenType: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountLinkInfo extends $tea.Model {
  authenticationType?: string;
  createdAt?: number;
  displayName?: string;
  domainId?: string;
  extra?: string;
  identity?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      createdAt: 'created_at',
      displayName: 'display_name',
      domainId: 'domain_id',
      extra: 'extra',
      identity: 'identity',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      createdAt: 'number',
      displayName: 'string',
      domainId: 'string',
      extra: 'string',
      identity: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Activity extends $tea.Model {
  activityId?: string;
  device?: string;
  driveId?: string;
  eventType?: number;
  latestEventTime?: string;
  resourceCategory?: number;
  resourceList?: { [key: string]: any }[];
  totalResourceCount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activity_id',
      device: 'device',
      driveId: 'drive_id',
      eventType: 'event_type',
      latestEventTime: 'latest_event_time',
      resourceCategory: 'resource_category',
      resourceList: 'resource_list',
      totalResourceCount: 'total_resource_count',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      device: 'string',
      driveId: 'string',
      eventType: 'number',
      latestEventTime: 'string',
      resourceCategory: 'number',
      resourceList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalResourceCount: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Address extends $tea.Model {
  city?: string;
  country?: string;
  district?: string;
  province?: string;
  township?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      country: 'country',
      district: 'district',
      province: 'province',
      township: 'township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      district: 'string',
      province: 'string',
      township: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGroup extends $tea.Model {
  addressDetail?: Address;
  count?: number;
  coverFileId?: string;
  coverUrl?: string;
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'address_detail',
      count: 'count',
      coverFileId: 'cover_file_id',
      coverUrl: 'cover_url',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: Address,
      count: 'number',
      coverFileId: 'string',
      coverUrl: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Aggregation extends $tea.Model {
  field?: Buffer;
  groups?: AggregationsGroup[];
  operation?: Buffer;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      groups: 'groups',
      operation: 'operation',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      groups: { 'type': 'array', 'itemType': AggregationsGroup },
      operation: 'Buffer',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregationsGroup extends $tea.Model {
  count?: number;
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      value: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class App extends $tea.Model {
  appId?: string;
  appName?: string;
  appSecret?: string;
  createdAt?: string;
  description?: string;
  logo?: string;
  provider?: string;
  redirectUri?: string;
  scope?: string[];
  stage?: string;
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'app_id',
      appName: 'app_name',
      appSecret: 'app_secret',
      createdAt: 'created_at',
      description: 'description',
      logo: 'logo',
      provider: 'provider',
      redirectUri: 'redirect_uri',
      scope: 'scope',
      stage: 'stage',
      type: 'type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      createdAt: 'string',
      description: 'string',
      logo: 'string',
      provider: 'string',
      redirectUri: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      stage: 'string',
      type: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppAccessStrategy extends $tea.Model {
  effect?: string;
  exceptAppIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      exceptAppIdList: 'except_app_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      exceptAppIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArchiveFilesConfig extends $tea.Model {
  enable?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArchiveFilesConfigResponse extends $tea.Model {
  enabled?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncTask extends $tea.Model {
  asyncTaskId?: string;
  category?: string;
  consumedProcess?: number;
  createdAt?: string;
  errorCode?: string;
  errorMessage?: string;
  finishedAt?: string;
  startedAt?: string;
  state?: string;
  taskType?: string;
  totalProcess?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      category: 'category',
      consumedProcess: 'consumed_process',
      createdAt: 'created_at',
      errorCode: 'error_code',
      errorMessage: 'error_message',
      finishedAt: 'finished_at',
      startedAt: 'started_at',
      state: 'state',
      taskType: 'task_type',
      totalProcess: 'total_process',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      category: 'string',
      consumedProcess: 'number',
      createdAt: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      finishedAt: 'string',
      startedAt: 'string',
      state: 'string',
      taskType: 'string',
      totalProcess: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AudioPreviewPlayInfo extends $tea.Model {
  meta?: AudioPreviewPlayInfoMeta;
  offlineAudioList?: AudioPreviewPlayInfoOfflineAudioList[];
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      offlineAudioList: 'offline_audio_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: AudioPreviewPlayInfoMeta,
      offlineAudioList: { 'type': 'array', 'itemType': AudioPreviewPlayInfoOfflineAudioList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditLog extends $tea.Model {
  actedAt?: string;
  actionCategory?: string;
  actionType?: string;
  actorId?: string;
  actorName?: string;
  actorType?: string;
  clientDevice?: string;
  clientIp?: string;
  clientType?: string;
  clientVersion?: string;
  detail?: AuditLogDetail;
  filePathType?: string;
  logId?: string;
  objectId?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'acted_at',
      actionCategory: 'action_category',
      actionType: 'action_type',
      actorId: 'actor_id',
      actorName: 'actor_name',
      actorType: 'actor_type',
      clientDevice: 'client_device',
      clientIp: 'client_ip',
      clientType: 'client_type',
      clientVersion: 'client_version',
      detail: 'detail',
      filePathType: 'file_path_type',
      logId: 'log_id',
      objectId: 'object_id',
      objectName: 'object_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      actionCategory: 'string',
      actionType: 'string',
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      clientDevice: 'string',
      clientIp: 'string',
      clientType: 'string',
      clientVersion: 'string',
      detail: AuditLogDetail,
      filePathType: 'string',
      logId: 'string',
      objectId: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditLogDetail extends $tea.Model {
  driveLogDetail?: DriveLogDetail;
  fileLogDetail?: FileLogDetail;
  userLogDetail?: UserLogDetail;
  static names(): { [key: string]: string } {
    return {
      driveLogDetail: 'drive_log_detail',
      fileLogDetail: 'file_log_detail',
      userLogDetail: 'user_log_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveLogDetail: DriveLogDetail,
      fileLogDetail: FileLogDetail,
      userLogDetail: UserLogDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthenticationInfo extends $tea.Model {
  authenticationDisplayName?: string;
  authenticationType?: string;
  extra?: string;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationDisplayName: 'authentication_display_name',
      authenticationType: 'authentication_type',
      extra: 'extra',
      identity: 'identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationDisplayName: 'string',
      authenticationType: 'string',
      extra: 'string',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseAssignmentResponse extends $tea.Model {
  associatedRoleTagId?: string;
  createdAt?: string;
  creator?: string;
  disinheritSubGroup?: boolean;
  domainId?: string;
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      associatedRoleTagId: 'associated_role_tag_id',
      createdAt: 'created_at',
      creator: 'creator',
      disinheritSubGroup: 'disinherit_sub_group',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedRoleTagId: 'string',
      createdAt: 'string',
      creator: 'string',
      disinheritSubGroup: 'boolean',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseDomainResponse extends $tea.Model {
  createdAt?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  shareLinkEnabled?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  updatedAt?: string;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      shareLinkEnabled: 'share_link_enabled',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      shareLinkEnabled: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      updatedAt: 'string',
      usedSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseDriveResponse extends $tea.Model {
  actionList?: string[];
  category?: string;
  createdAt?: string;
  creator?: string;
  deltaEnabled?: boolean;
  description?: string;
  domainId?: string;
  driveId?: string;
  driveName?: string;
  driveType?: string;
  encryptDataAccess?: boolean;
  encryptMode?: string;
  isHandover?: boolean;
  owner?: string;
  ownerType?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  relativePath?: string;
  status?: string;
  storeId?: string;
  totalSize?: number;
  updatedAt?: string;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      category: 'category',
      createdAt: 'created_at',
      creator: 'creator',
      deltaEnabled: 'delta_enabled',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      encryptDataAccess: 'encrypt_data_access',
      encryptMode: 'encrypt_mode',
      isHandover: 'is_handover',
      owner: 'owner',
      ownerType: 'owner_type',
      pathStatus: 'path_status',
      permission: 'permission',
      relativePath: 'relative_path',
      status: 'status',
      storeId: 'store_id',
      totalSize: 'total_size',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      createdAt: 'string',
      creator: 'string',
      deltaEnabled: 'boolean',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      encryptDataAccess: 'boolean',
      encryptMode: 'string',
      isHandover: 'boolean',
      owner: 'string',
      ownerType: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      relativePath: 'string',
      status: 'string',
      storeId: 'string',
      totalSize: 'number',
      updatedAt: 'string',
      usedSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseGroupResponse extends $tea.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  groupName?: string;
  isSync?: boolean;
  permission?: { [key: string]: IDPermission };
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      isSync: 'is_sync',
      permission: 'permission',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      isSync: 'boolean',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasePunishLogResponse extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  punishedAt?: string;
  punishee?: BasePunishLogResponsePunishee;
  punishmentDetail?: BasePunishLogResponsePunishmentDetail;
  punishmentId?: string;
  punishmentOperation?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'error_code',
      errorMessage: 'error_message',
      punishedAt: 'punished_at',
      punishee: 'punishee',
      punishmentDetail: 'punishment_detail',
      punishmentId: 'punishment_id',
      punishmentOperation: 'punishment_operation',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      punishedAt: 'string',
      punishee: BasePunishLogResponsePunishee,
      punishmentDetail: BasePunishLogResponsePunishmentDetail,
      punishmentId: 'string',
      punishmentOperation: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseRoleMemberResponse extends $tea.Model {
  assignmentList?: BaseAssignmentResponse[];
  createdAt?: string;
  creator?: string;
  domainId?: string;
  identity?: Identity;
  identityName?: string;
  isAdmin?: boolean;
  subdomainId?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      identityName: 'identity_name',
      isAdmin: 'is_admin',
      subdomainId: 'subdomain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': BaseAssignmentResponse },
      createdAt: 'string',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      identityName: 'string',
      isAdmin: 'boolean',
      subdomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseUserPunishRuleResponse extends $tea.Model {
  results?: BaseUserPunishRuleResponseResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': BaseUserPunishRuleResponseResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseUserResponse extends $tea.Model {
  avatar?: string;
  createdAt?: string;
  creator?: string;
  defaultDriveId?: string;
  defaultLocation?: string;
  denyChangePasswordBySelf?: boolean;
  description?: string;
  domainId?: string;
  email?: string;
  expiredAt?: number;
  isSync?: boolean;
  lastLoginTime?: number;
  needChangePasswordNextLogin?: boolean;
  nickName?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  phone?: string;
  phoneRegion?: string;
  role?: string;
  status?: string;
  updatedAt?: string;
  userData?: { [key: string]: any };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      defaultLocation: 'default_location',
      denyChangePasswordBySelf: 'deny_change_password_by_self',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      expiredAt: 'expired_at',
      isSync: 'is_sync',
      lastLoginTime: 'last_login_time',
      needChangePasswordNextLogin: 'need_change_password_next_login',
      nickName: 'nick_name',
      pathStatus: 'path_status',
      permission: 'permission',
      phone: 'phone',
      phoneRegion: 'phone_region',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      creator: 'string',
      defaultDriveId: 'string',
      defaultLocation: 'string',
      denyChangePasswordBySelf: 'boolean',
      description: 'string',
      domainId: 'string',
      email: 'string',
      expiredAt: 'number',
      isSync: 'boolean',
      lastLoginTime: 'number',
      needChangePasswordNextLogin: 'boolean',
      nickName: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      phone: 'string',
      phoneRegion: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BenefitMeta extends $tea.Model {
  config?: string;
  enabled?: boolean;
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      enabled: 'enabled',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      enabled: 'boolean',
      quota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BenefitPkgDeliveryInfo extends $tea.Model {
  amount?: number;
  createdAt?: string;
  expireTime?: string;
  isPermanent?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      createdAt: 'created_at',
      expireTime: 'expire_time',
      isPermanent: 'is_permanent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      createdAt: 'string',
      expireTime: 'string',
      isPermanent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CNameStatus extends $tea.Model {
  bingdingState?: string;
  legalState?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bingdingState: 'bingding_state',
      legalState: 'legal_state',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bingdingState: 'string',
      legalState: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CdnFileDownloadCallbackInfo extends $tea.Model {
  bucket?: string;
  domainId?: string;
  driveId?: string;
  expire?: number;
  fileId?: string;
  object?: string;
  token?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      expire: 'expire',
      fileId: 'file_id',
      object: 'object',
      token: 'token',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      expire: 'number',
      fileId: 'string',
      object: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertInfo extends $tea.Model {
  certBody?: string;
  certName?: string;
  certPrivatekey?: string;
  static names(): { [key: string]: string } {
    return {
      certBody: 'cert_body',
      certName: 'cert_name',
      certPrivatekey: 'cert_privatekey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBody: 'string',
      certName: 'string',
      certPrivatekey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecycleBinItem extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Condition extends $tea.Model {
  intEquals?: number[];
  intNotEquals?: number[];
  stringEquals?: string[];
  stringNotEquals?: string[];
  static names(): { [key: string]: string } {
    return {
      intEquals: 'int_equals',
      intNotEquals: 'int_not_equals',
      stringEquals: 'string_equals',
      stringNotEquals: 'string_not_equals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intEquals: { 'type': 'array', 'itemType': 'number' },
      intNotEquals: { 'type': 'array', 'itemType': 'number' },
      stringEquals: { 'type': 'array', 'itemType': 'string' },
      stringNotEquals: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiCondition extends $tea.Model {
  fileDataPunish?: Condition;
  static names(): { [key: string]: string } {
    return {
      fileDataPunish: 'file_data_punish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDataPunish: Condition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssCreateOrderParam extends $tea.Model {
  agentId?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  bid?: string;
  buyerId?: number;
  certificate?: string;
  childId?: number;
  cilentIp?: string;
  commodities?: CssInstanceCommodity[];
  createrNick?: string;
  cssAuthRequestParam?: any;
  fromApp?: string;
  language?: string;
  marketType?: number;
  memo?: string;
  orderOrigin?: string;
  orderParams?: { [key: string]: string };
  payerId?: number;
  planGroupId?: number;
  planId?: number;
  planInstanceId?: string;
  promotionCode?: string;
  promotionInputParam?: any;
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  transientAccess?: any;
  umidToken?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      autoPay: 'autoPay',
      autoUseCoupon: 'autoUseCoupon',
      bid: 'bid',
      buyerId: 'buyerId',
      certificate: 'certificate',
      childId: 'childId',
      cilentIp: 'cilentIp',
      commodities: 'commodities',
      createrNick: 'createrNick',
      cssAuthRequestParam: 'cssAuthRequestParam',
      fromApp: 'fromApp',
      language: 'language',
      marketType: 'marketType',
      memo: 'memo',
      orderOrigin: 'orderOrigin',
      orderParams: 'orderParams',
      payerId: 'payerId',
      planGroupId: 'planGroupId',
      planId: 'planId',
      planInstanceId: 'planInstanceId',
      promotionCode: 'promotionCode',
      promotionInputParam: 'promotionInputParam',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      transientAccess: 'transientAccess',
      umidToken: 'umidToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bid: 'string',
      buyerId: 'number',
      certificate: 'string',
      childId: 'number',
      cilentIp: 'string',
      commodities: { 'type': 'array', 'itemType': CssInstanceCommodity },
      createrNick: 'string',
      cssAuthRequestParam: 'any',
      fromApp: 'string',
      language: 'string',
      marketType: 'number',
      memo: 'string',
      orderOrigin: 'string',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payerId: 'number',
      planGroupId: 'number',
      planId: 'number',
      planInstanceId: 'string',
      promotionCode: 'string',
      promotionInputParam: 'any',
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      transientAccess: 'any',
      umidToken: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceCommodity extends $tea.Model {
  activityId?: number;
  aliyunProduceCode?: string;
  chargeType?: string;
  commodityCode?: string;
  components?: CssInstanceComponent[];
  duration?: number;
  instanceId?: string;
  isFree?: boolean;
  isPrePayPostCharge?: boolean;
  isRenewChange?: boolean;
  isSyncToSubscription?: boolean;
  orderParams?: { [key: string]: string };
  orderType?: string;
  planItemId?: number;
  pricingCycle?: string;
  quantity?: number;
  redeemNoList?: string[];
  redeemOrderType?: string;
  refundSpecCode?: string;
  specCode?: string;
  specUpgradeOriginSpecCodes?: string[];
  specifyStartDate?: number;
  upgradeInquireFinancialValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activityId',
      aliyunProduceCode: 'aliyunProduceCode',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      components: 'components',
      duration: 'duration',
      instanceId: 'instanceId',
      isFree: 'isFree',
      isPrePayPostCharge: 'isPrePayPostCharge',
      isRenewChange: 'isRenewChange',
      isSyncToSubscription: 'isSyncToSubscription',
      orderParams: 'orderParams',
      orderType: 'orderType',
      planItemId: 'planItemId',
      pricingCycle: 'pricingCycle',
      quantity: 'quantity',
      redeemNoList: 'redeemNoList',
      redeemOrderType: 'redeemOrderType',
      refundSpecCode: 'refundSpecCode',
      specCode: 'specCode',
      specUpgradeOriginSpecCodes: 'specUpgradeOriginSpecCodes',
      specifyStartDate: 'specifyStartDate',
      upgradeInquireFinancialValue: 'upgradeInquireFinancialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      aliyunProduceCode: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': CssInstanceComponent },
      duration: 'number',
      instanceId: 'string',
      isFree: 'boolean',
      isPrePayPostCharge: 'boolean',
      isRenewChange: 'boolean',
      isSyncToSubscription: 'boolean',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderType: 'string',
      planItemId: 'number',
      pricingCycle: 'string',
      quantity: 'number',
      redeemNoList: { 'type': 'array', 'itemType': 'string' },
      redeemOrderType: 'string',
      refundSpecCode: 'string',
      specCode: 'string',
      specUpgradeOriginSpecCodes: { 'type': 'array', 'itemType': 'string' },
      specifyStartDate: 'number',
      upgradeInquireFinancialValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceComponent extends $tea.Model {
  componentCode?: string;
  componentName?: string;
  globalKey?: string;
  instanceProperty?: CssInstanceProperty[];
  moduleAttrStatus?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'componentCode',
      componentName: 'componentName',
      globalKey: 'globalKey',
      instanceProperty: 'instanceProperty',
      moduleAttrStatus: 'moduleAttrStatus',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      globalKey: 'string',
      instanceProperty: { 'type': 'array', 'itemType': CssInstanceProperty },
      moduleAttrStatus: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceProperty extends $tea.Model {
  code?: string;
  globalKey?: string;
  name?: string;
  unit?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      globalKey: 'globalKey',
      name: 'name',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalKey: 'string',
      name: 'string',
      unit: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssProduce extends $tea.Model {
  bid?: string;
  buyerId?: number;
  childId?: number;
  fromApp?: string;
  orderId?: number;
  payerId?: number;
  purchases?: CssPurchase[];
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      buyerId: 'buyerId',
      childId: 'childId',
      fromApp: 'fromApp',
      orderId: 'orderId',
      payerId: 'payerId',
      purchases: 'purchases',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buyerId: 'number',
      childId: 'number',
      fromApp: 'string',
      orderId: 'number',
      payerId: 'number',
      purchases: { 'type': 'array', 'itemType': CssPurchase },
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssPurchase extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  endDate?: number;
  gmtCreate?: number;
  instanceComponents?: CssInstanceComponent[];
  instanceId?: string;
  orderType?: string;
  purchaseParams?: { [key: string]: string };
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      gmtCreate: 'gmtCreate',
      instanceComponents: 'instanceComponents',
      instanceId: 'instanceId',
      orderType: 'orderType',
      purchaseParams: 'purchaseParams',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'number',
      gmtCreate: 'number',
      instanceComponents: { 'type': 'array', 'itemType': CssInstanceComponent },
      instanceId: 'string',
      orderType: 'string',
      purchaseParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomSideLinkConfig extends $tea.Model {
  icon?: string;
  link?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      link: 'link',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      link: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataCName extends $tea.Model {
  dataCname?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      dataCname: 'data_cname',
      location: 'location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCname: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Domain extends $tea.Model {
  createdAt?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  sharable?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  updatedAt?: string;
  usedSize?: number;
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sharable: 'sharable',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      sharable: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      updatedAt: 'string',
      usedSize: 'number',
      userCountQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainAppConfig extends $tea.Model {
  allowUploadCustomFileExtList?: string[];
  allowUploadFileCategoryList?: string[];
  sameNameFileUploadMode?: string;
  singleFileUploadSizeLimit?: number;
  webClientDownloadMode?: string;
  static names(): { [key: string]: string } {
    return {
      allowUploadCustomFileExtList: 'allow_upload_custom_file_ext_list',
      allowUploadFileCategoryList: 'allow_upload_file_category_list',
      sameNameFileUploadMode: 'same_name_file_upload_mode',
      singleFileUploadSizeLimit: 'single_file_upload_size_limit',
      webClientDownloadMode: 'web_client_download_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUploadCustomFileExtList: { 'type': 'array', 'itemType': 'string' },
      allowUploadFileCategoryList: { 'type': 'array', 'itemType': 'string' },
      sameNameFileUploadMode: 'string',
      singleFileUploadSizeLimit: 'number',
      webClientDownloadMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainBuildClientConfig extends $tea.Model {
  copyright?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      copyright: 'copyright',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyright: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainSeniorConfig extends $tea.Model {
  clientDownloadEnable?: boolean;
  cspFrameAncestors?: string;
  customLoginAppid?: string;
  customLoginUrl?: string;
  customLogoutUrl?: string;
  customSideLinkList?: CustomSideLinkConfig[];
  homePageBgImageUrl?: string;
  homePageFooter?: string;
  homePageFooter2?: string;
  homePageSlogan?: string;
  refererEnable?: boolean;
  wxTxtList?: WxTrustedDomainConfig;
  static names(): { [key: string]: string } {
    return {
      clientDownloadEnable: 'client_download_enable',
      cspFrameAncestors: 'csp_frame_ancestors',
      customLoginAppid: 'custom_login_appid',
      customLoginUrl: 'custom_login_url',
      customLogoutUrl: 'custom_logout_url',
      customSideLinkList: 'custom_side_link_list',
      homePageBgImageUrl: 'home_page_bg_image_url',
      homePageFooter: 'home_page_footer',
      homePageFooter2: 'home_page_footer2',
      homePageSlogan: 'home_page_slogan',
      refererEnable: 'referer_enable',
      wxTxtList: 'wx_txt_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientDownloadEnable: 'boolean',
      cspFrameAncestors: 'string',
      customLoginAppid: 'string',
      customLoginUrl: 'string',
      customLogoutUrl: 'string',
      customSideLinkList: { 'type': 'array', 'itemType': CustomSideLinkConfig },
      homePageBgImageUrl: 'string',
      homePageFooter: 'string',
      homePageFooter2: 'string',
      homePageSlogan: 'string',
      refererEnable: 'boolean',
      wxTxtList: WxTrustedDomainConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Drive extends $tea.Model {
  createdAt?: string;
  creator?: string;
  description?: string;
  domainId?: string;
  driveId?: string;
  driveName?: string;
  driveType?: string;
  owner?: string;
  ownerType?: string;
  status?: string;
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DriveLogDetail extends $tea.Model {
  forceDelete?: boolean;
  handoverOwnerName?: string;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  updateTo?: DriveLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'force_delete',
      handoverOwnerName: 'handover_owner_name',
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
      handoverOwnerName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
      updateTo: DriveLogDetailUpdateTo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExternalMultiFileRevisionConfig extends $tea.Model {
  revisionCount?: number;
  revisionMergeEnabled?: boolean;
  revisionRecyclePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      revisionCount: 'revision_count',
      revisionMergeEnabled: 'revision_merge_enabled',
      revisionRecyclePeriod: 'revision_recycle_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revisionCount: 'number',
      revisionMergeEnabled: 'boolean',
      revisionRecyclePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGroup extends $tea.Model {
  createdAt?: string;
  groupCoverFaceBoundary?: FaceGroupGroupCoverFaceBoundary;
  groupCoverFileId?: string;
  groupCoverHeight?: number;
  groupCoverUrl?: string;
  groupCoverWidth?: number;
  groupId?: string;
  groupName?: string;
  imageCount?: number;
  remarks?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      groupCoverFaceBoundary: 'group_cover_face_boundary',
      groupCoverFileId: 'group_cover_file_id',
      groupCoverHeight: 'group_cover_height',
      groupCoverUrl: 'group_cover_url',
      groupCoverWidth: 'group_cover_width',
      groupId: 'group_id',
      groupName: 'group_name',
      imageCount: 'image_count',
      remarks: 'remarks',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      groupCoverFaceBoundary: FaceGroupGroupCoverFaceBoundary,
      groupCoverFileId: 'string',
      groupCoverHeight: 'number',
      groupCoverUrl: 'string',
      groupCoverWidth: 'number',
      groupId: 'string',
      groupName: 'string',
      imageCount: 'number',
      remarks: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceThumbnail extends $tea.Model {
  faceGroupId?: string;
  faceId?: string;
  faceThumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'face_group_id',
      faceId: 'face_id',
      faceThumbnail: 'face_thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'string',
      faceId: 'string',
      faceThumbnail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class File extends $tea.Model {
  category?: string;
  contentHash?: string;
  contentHashName?: string;
  contentType?: string;
  crc64Hash?: string;
  createdAt?: string;
  description?: string;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  fileExtension?: string;
  fileId?: string;
  hidden?: boolean;
  investigationInfo?: FileInvestigationInfo;
  labels?: string[];
  localCreatedAt?: string;
  localModifiedAt?: string;
  name?: string;
  parentFileId?: string;
  revisionId?: string;
  size?: number;
  starred?: boolean;
  status?: string;
  thumbnail?: string;
  thumbnailUrls?: { [key: string]: string };
  trashedAt?: string;
  type?: string;
  updatedAt?: string;
  uploadId?: string;
  userTags?: { [key: string]: string };
  videoMediaMetadata?: VideoMediaMetadata;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      hidden: 'hidden',
      investigationInfo: 'investigation_info',
      labels: 'labels',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      parentFileId: 'parent_file_id',
      revisionId: 'revision_id',
      size: 'size',
      starred: 'starred',
      status: 'status',
      thumbnail: 'thumbnail',
      thumbnailUrls: 'thumbnail_urls',
      trashedAt: 'trashed_at',
      type: 'type',
      updatedAt: 'updated_at',
      uploadId: 'upload_id',
      userTags: 'user_tags',
      videoMediaMetadata: 'video_media_metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      fileExtension: 'string',
      fileId: 'string',
      hidden: 'boolean',
      investigationInfo: FileInvestigationInfo,
      labels: { 'type': 'array', 'itemType': 'string' },
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
      parentFileId: 'string',
      revisionId: 'string',
      size: 'number',
      starred: 'boolean',
      status: 'string',
      thumbnail: 'string',
      thumbnailUrls: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      trashedAt: 'string',
      type: 'string',
      updatedAt: 'string',
      uploadId: 'string',
      userTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      videoMediaMetadata: VideoMediaMetadata,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileDownloadCallbackInfo extends $tea.Model {
  bucket?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  object?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      object: 'object',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      object: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileLogDetail extends $tea.Model {
  decompressFileList?: string[];
  newName?: string;
  parentPath?: string;
  revVersion?: number;
  revisionId?: string;
  size?: number;
  toParentPath?: string;
  toParentPathType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      decompressFileList: 'decompress_file_list',
      newName: 'new_name',
      parentPath: 'parent_path',
      revVersion: 'rev_version',
      revisionId: 'revision_id',
      size: 'size',
      toParentPath: 'to_parent_path',
      toParentPathType: 'to_parent_path_type',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decompressFileList: { 'type': 'array', 'itemType': 'string' },
      newName: 'string',
      parentPath: 'string',
      revVersion: 'number',
      revisionId: 'string',
      size: 'number',
      toParentPath: 'string',
      toParentPathType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePermissionMember extends $tea.Model {
  actionList?: string[];
  disinheritSubGroup?: boolean;
  expireTime?: number;
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      identity: Identity,
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileStreamInfo extends $tea.Model {
  contentHash?: string;
  contentHashName?: string;
  contentMd5?: string;
  partInfoList?: UploadPartInfo;
  preHash?: string;
  proofCode?: string;
  proofVersion?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentMd5: 'content_md5',
      partInfoList: 'part_info_list',
      preHash: 'pre_hash',
      proofCode: 'proof_code',
      proofVersion: 'proof_version',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      contentMd5: 'string',
      partInfoList: UploadPartInfo,
      preHash: 'string',
      proofCode: 'string',
      proofVersion: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditUrlOption extends $tea.Model {
  copy?: boolean;
  print?: boolean;
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
      readonly: 'readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
      readonly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditUrlWatermark extends $tea.Model {
  fillstyle?: string;
  font?: string;
  horizontal?: number;
  rotate?: number;
  type?: number;
  value?: string;
  vertical?: number;
  static names(): { [key: string]: string } {
    return {
      fillstyle: 'fillstyle',
      font: 'font',
      horizontal: 'horizontal',
      rotate: 'rotate',
      type: 'type',
      value: 'value',
      vertical: 'vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillstyle: 'string',
      font: 'string',
      horizontal: 'number',
      rotate: 'number',
      type: 'number',
      value: 'string',
      vertical: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficePreviewUrlOption extends $tea.Model {
  copy?: boolean;
  print?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Group extends $tea.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  groupName?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IDPermission extends $tea.Model {
  disinheritSubGroup?: boolean;
  expireTime?: number;
  permission?: Permission;
  roles?: string[];
  static names(): { [key: string]: string } {
    return {
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      permission: 'permission',
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      permission: Permission,
      roles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Identity extends $tea.Model {
  identityId?: string;
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityBenefitPkg extends $tea.Model {
  benefitPkgId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgId: 'benefit_pkg_id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityToBenefitPkgMapping extends $tea.Model {
  benefitPkgComputationRule?: string;
  benefitPkgId?: string;
  benefitPkgName?: string;
  benefitPkgOwnerId?: string;
  benefitPkgPriority?: number;
  benefitPkgType?: string;
  createdAt?: string;
  deliveryInfoList?: BenefitPkgDeliveryInfo[];
  identityId?: string;
  identityType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgComputationRule: 'benefit_pkg_computation_rule',
      benefitPkgId: 'benefit_pkg_id',
      benefitPkgName: 'benefit_pkg_name',
      benefitPkgOwnerId: 'benefit_pkg_owner_id',
      benefitPkgPriority: 'benefit_pkg_priority',
      benefitPkgType: 'benefit_pkg_type',
      createdAt: 'created_at',
      deliveryInfoList: 'delivery_info_list',
      identityId: 'identity_id',
      identityType: 'identity_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgComputationRule: 'string',
      benefitPkgId: 'string',
      benefitPkgName: 'string',
      benefitPkgOwnerId: 'string',
      benefitPkgPriority: 'number',
      benefitPkgType: 'string',
      createdAt: 'string',
      deliveryInfoList: { 'type': 'array', 'itemType': BenefitPkgDeliveryInfo },
      identityId: 'string',
      identityType: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageMediaMetadata extends $tea.Model {
  addressLine?: string;
  city?: string;
  country?: string;
  district?: string;
  exif?: string;
  facesThumbnail?: FaceThumbnail[];
  height?: number;
  imageQuality?: ImageQuality;
  imageTags?: SystemTag[];
  location?: string;
  province?: string;
  time?: string;
  township?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      addressLine: 'address_line',
      city: 'city',
      country: 'country',
      district: 'district',
      exif: 'exif',
      facesThumbnail: 'faces_thumbnail',
      height: 'height',
      imageQuality: 'image_quality',
      imageTags: 'image_tags',
      location: 'location',
      province: 'province',
      time: 'time',
      township: 'township',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLine: 'string',
      city: 'string',
      country: 'string',
      district: 'string',
      exif: 'string',
      facesThumbnail: { 'type': 'array', 'itemType': FaceThumbnail },
      height: 'number',
      imageQuality: ImageQuality,
      imageTags: { 'type': 'array', 'itemType': SystemTag },
      location: 'string',
      province: 'string',
      time: 'string',
      township: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageProcess extends $tea.Model {
  imageThumbnailProcess?: string;
  officeThumbnailProcess?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageQuality extends $tea.Model {
  overallScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'overall_score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTag extends $tea.Model {
  count?: number;
  coverFileCategory?: string;
  coverFileId?: string;
  coverOverallScore?: number;
  coverTagConfidence?: number;
  coverUrl?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      coverFileCategory: 'cover_file_category',
      coverFileId: 'cover_file_id',
      coverOverallScore: 'cover_overall_score',
      coverTagConfidence: 'cover_tag_confidence',
      coverUrl: 'cover_url',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      coverFileCategory: 'string',
      coverFileId: 'string',
      coverOverallScore: 'number',
      coverTagConfidence: 'number',
      coverUrl: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Int64Range extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfo extends $tea.Model {
  status?: number;
  suggestion?: string;
  videoDetail?: InvestigationInfoVideoDetail;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
      videoDetail: 'video_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
      videoDetail: InvestigationInfoVideoDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JWTPayload extends $tea.Model {
  aud?: string;
  autoCreate?: boolean;
  exp?: number;
  iat?: number;
  iss?: string;
  jti?: string;
  nbf?: number;
  sub?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      aud: 'aud',
      autoCreate: 'auto_create',
      exp: 'exp',
      iat: 'iat',
      iss: 'iss',
      jti: 'jti',
      nbf: 'nbf',
      sub: 'sub',
      subType: 'sub_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aud: 'string',
      autoCreate: 'boolean',
      exp: 'number',
      iat: 'number',
      iss: 'string',
      jti: 'string',
      nbf: 'number',
      sub: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkInfo extends $tea.Model {
  extra?: string;
  identity?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationDateCluster extends $tea.Model {
  address?: Address;
  clusterId?: string;
  createdAt?: string;
  customLabels?: { [key: string]: string };
  driveId?: string;
  endTime?: string;
  level?: string;
  startTime?: string;
  title?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'cluster_id',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      endTime: 'end_time',
      level: 'level',
      startTime: 'start_time',
      title: 'title',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      clusterId: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      endTime: 'string',
      level: 'string',
      startTime: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Membership extends $tea.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  memberRole?: string;
  memberType?: string;
  subGroupId?: string;
  updatedAt?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      memberRole: 'member_role',
      memberType: 'member_type',
      subGroupId: 'sub_group_id',
      updatedAt: 'updated_at',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      memberRole: 'string',
      memberType: 'string',
      subGroupId: 'string',
      updatedAt: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NameCheckResult extends $tea.Model {
  existFileId?: string;
  existFileType?: string;
  static names(): { [key: string]: string } {
    return {
      existFileId: 'exist_file_id',
      existFileType: 'exist_file_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existFileId: 'string',
      existFileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfficeEditConfig extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfficePreviewConfig extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $tea.Model {
  actionList?: PermissionActionList[];
  collection?: string;
  condition?: PermissionCondition;
  createdAt?: number;
  effect?: string;
  identityId?: string;
  identityType?: string;
  resource?: string;
  resourceType?: string;
  updatedAt?: number;
  userTags?: string[];
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      collection: 'collection',
      condition: 'condition',
      createdAt: 'created_at',
      effect: 'effect',
      identityId: 'identity_id',
      identityType: 'identity_type',
      resource: 'resource',
      resourceType: 'resource_type',
      updatedAt: 'updated_at',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': PermissionActionList },
      collection: 'string',
      condition: PermissionCondition,
      createdAt: 'number',
      effect: 'string',
      identityId: 'string',
      identityType: 'string',
      resource: 'string',
      resourceType: 'string',
      updatedAt: 'number',
      userTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionCondition extends $tea.Model {
  ipEquals?: PermissionConditionIpEquals;
  ipNotEquals?: PermissionConditionIpNotEquals;
  stringLike?: PermissionConditionStringLike;
  stringNotLike?: PermissionConditionStringNotLike;
  static names(): { [key: string]: string } {
    return {
      ipEquals: 'ip_equals',
      ipNotEquals: 'ip_not_equals',
      stringLike: 'string_like',
      stringNotLike: 'string_not_like',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipEquals: PermissionConditionIpEquals,
      ipNotEquals: PermissionConditionIpNotEquals,
      stringLike: PermissionConditionStringLike,
      stringNotLike: PermissionConditionStringNotLike,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishRule extends $tea.Model {
  actionCode?: string;
  endsAt?: string;
  impermanent?: boolean;
  startsAt?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'action_code',
      endsAt: 'ends_at',
      impermanent: 'impermanent',
      startsAt: 'starts_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      endsAt: 'string',
      impermanent: 'boolean',
      startsAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecycleBinConfig extends $tea.Model {
  autoDeleteEnabled?: boolean;
  autoDeleteKeepSecond?: number;
  deleteTrashNormalFileDisabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoDeleteEnabled: 'auto_delete_enabled',
      autoDeleteKeepSecond: 'auto_delete_keep_second',
      deleteTrashNormalFileDisabled: 'delete_trash_normal_file_disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteEnabled: 'boolean',
      autoDeleteKeepSecond: 'number',
      deleteTrashNormalFileDisabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundNoticeParam extends $tea.Model {
  aliuid?: number;
  aliyunProduceCode?: string;
  commodityCode?: string;
  instanceId?: string;
  newExpireTime?: any;
  orderIds?: number[];
  refundParamMap?: { [key: string]: string };
  refundType?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      aliyunProduceCode: 'aliyunProduceCode',
      commodityCode: 'commodityCode',
      instanceId: 'instanceId',
      newExpireTime: 'newExpireTime',
      orderIds: 'orderIds',
      refundParamMap: 'refundParamMap',
      refundType: 'refundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      aliyunProduceCode: 'string',
      commodityCode: 'string',
      instanceId: 'string',
      newExpireTime: 'any',
      orderIds: { 'type': 'array', 'itemType': 'number' },
      refundParamMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      refundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Revision extends $tea.Model {
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  createdAt?: string;
  creatorId?: string;
  creatorName?: string;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  fileExtension?: string;
  fileId?: string;
  isLatestVersion?: boolean;
  keepForever?: boolean;
  revisionDescription?: string;
  revisionId?: string;
  revisionName?: string;
  revisionVersion?: number;
  size?: number;
  thumbnail?: string;
  updatedAt?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      creatorId: 'creator_id',
      creatorName: 'creator_name',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      isLatestVersion: 'is_latest_version',
      keepForever: 'keep_forever',
      revisionDescription: 'revision_description',
      revisionId: 'revision_id',
      revisionName: 'revision_name',
      revisionVersion: 'revision_version',
      size: 'size',
      thumbnail: 'thumbnail',
      updatedAt: 'updated_at',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      creatorId: 'string',
      creatorName: 'string',
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      fileExtension: 'string',
      fileId: 'string',
      isLatestVersion: 'boolean',
      keepForever: 'boolean',
      revisionDescription: 'string',
      revisionId: 'string',
      revisionName: 'string',
      revisionVersion: 'number',
      size: 'number',
      thumbnail: 'string',
      updatedAt: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Role extends $tea.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  manageResourceType?: string;
  name?: string;
  permissions?: Permission[];
  roleId?: string;
  status?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      manageResourceType: 'manage_resource_type',
      name: 'name',
      permissions: 'permissions',
      roleId: 'role_id',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      manageResourceType: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': Permission },
      roleId: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFromThirdPartyItem extends $tea.Model {
  authenticationType?: string;
  extra?: string;
  identity?: string;
  others?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      extra: 'extra',
      identity: 'identity',
      others: 'others',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      extra: 'string',
      identity: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLink extends $tea.Model {
  accessCount?: number;
  createdAt?: string;
  creator?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  driveId?: string;
  expiration?: string;
  expired?: boolean;
  fileIdList?: string[];
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveLimit?: number;
  shareAllFiles?: boolean;
  shareId?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  updatedAt?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      expired: 'expired',
      fileIdList: 'file_id_list',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      expired: 'boolean',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLinkConfig extends $tea.Model {
  enableShareLinkOfficeEdit?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableShareLinkOfficeEdit: 'enable_share_link_office_edit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableShareLinkOfficeEdit: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLinkDetail extends $tea.Model {
  enableOfficeEditable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOfficeEditable: 'enable_office_editable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOfficeEditable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQuery extends $tea.Model {
  field?: Buffer;
  operation?: Buffer;
  subQueries?: SimpleQuery[];
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operation: 'operation',
      subQueries: 'sub_queries',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      operation: 'Buffer',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleStreamInfo extends $tea.Model {
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  downloadUrl?: string;
  size?: number;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      downloadUrl: 'download_url',
      size: 'size',
      thumbnail: 'thumbnail',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      downloadUrl: 'string',
      size: 'number',
      thumbnail: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Store extends $tea.Model {
  basePath?: string;
  bucket?: string;
  endpoint?: string;
  location?: string;
  ownership?: string;
  roleArn?: string;
  storeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'base_path',
      bucket: 'bucket',
      endpoint: 'endpoint',
      location: 'location',
      ownership: 'ownership',
      roleArn: 'role_arn',
      storeId: 'store_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      bucket: 'string',
      endpoint: 'string',
      location: 'string',
      ownership: 'string',
      roleArn: 'string',
      storeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Story extends $tea.Model {
  coverFileId?: string;
  coverFileThumbnailUrl?: string;
  createdAt?: string;
  customLabels?: { [key: string]: any };
  faceGroupIds?: string[];
  storyEndTime?: string;
  storyFileList?: File[];
  storyId?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      coverFileId: 'cover_file_id',
      coverFileThumbnailUrl: 'cover_file_thumbnail_url',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      faceGroupIds: 'face_group_ids',
      storyEndTime: 'story_end_time',
      storyFileList: 'story_file_list',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverFileId: 'string',
      coverFileThumbnailUrl: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      storyEndTime: 'string',
      storyFileList: { 'type': 'array', 'itemType': File },
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StreamUploadInfo extends $tea.Model {
  location?: string;
  partInfoList?: UploadPartInfo[];
  preRapidUpload?: boolean;
  rapidUpload?: boolean;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'location',
      partInfoList: 'part_info_list',
      preRapidUpload: 'pre_rapid_upload',
      rapidUpload: 'rapid_upload',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      preRapidUpload: 'boolean',
      rapidUpload: 'boolean',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SystemTag extends $tea.Model {
  centricScore?: number;
  confidence?: number;
  name?: string;
  parentName?: string;
  tagLevel?: number;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'centric_score',
      confidence: 'confidence',
      name: 'name',
      parentName: 'parent_name',
      tagLevel: 'tag_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centricScore: 'number',
      confidence: 'number',
      name: 'string',
      parentName: 'string',
      tagLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRange extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Token extends $tea.Model {
  accessToken?: string;
  avatar?: string;
  defaultDriveId?: string;
  deviceId?: string;
  deviceName?: string;
  domainId?: string;
  expireTime?: string;
  expiresIn?: number;
  isFirstLogin?: boolean;
  nickName?: string;
  refreshToken?: string;
  role?: string;
  status?: string;
  tokenType?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      avatar: 'avatar',
      defaultDriveId: 'default_drive_id',
      deviceId: 'device_id',
      deviceName: 'device_name',
      domainId: 'domain_id',
      expireTime: 'expire_time',
      expiresIn: 'expires_in',
      isFirstLogin: 'is_first_login',
      nickName: 'nick_name',
      refreshToken: 'refresh_token',
      role: 'role',
      status: 'status',
      tokenType: 'token_type',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatar: 'string',
      defaultDriveId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      domainId: 'string',
      expireTime: 'string',
      expiresIn: 'number',
      isFirstLogin: 'boolean',
      nickName: 'string',
      refreshToken: 'string',
      role: 'string',
      status: 'string',
      tokenType: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UncompressConfig extends $tea.Model {
  enable?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UncompressConfigResponse extends $tea.Model {
  enabled?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UncompressedFileInfo extends $tea.Model {
  driveId?: string;
  fileId?: string;
  isFolder?: boolean;
  items?: UncompressedFileInfo[];
  name?: string;
  size?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      isFolder: 'is_folder',
      items: 'items',
      name: 'name',
      size: 'size',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      isFolder: 'boolean',
      items: { 'type': 'array', 'itemType': UncompressedFileInfo },
      name: 'string',
      size: 'number',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFormInfo extends $tea.Model {
  bucketName?: string;
  objectKey?: string;
  ossAccessKeyId?: string;
  ossEndPoint?: string;
  ossSecurityToken?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucket_name',
      objectKey: 'object_key',
      ossAccessKeyId: 'oss_access_key_id',
      ossEndPoint: 'oss_end_point',
      ossSecurityToken: 'oss_security_token',
      policy: 'policy',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      ossAccessKeyId: 'string',
      ossEndPoint: 'string',
      ossSecurityToken: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfo extends $tea.Model {
  etag?: string;
  internalUploadUrl?: string;
  parallelSha1Ctx?: UploadPartInfoParallelSha1Ctx;
  parallelSha256Ctx?: UploadPartInfoParallelSha256Ctx;
  partNumber?: number;
  partSize?: number;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      etag: 'etag',
      internalUploadUrl: 'internal_upload_url',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      parallelSha256Ctx: 'parallel_sha256_ctx',
      partNumber: 'part_number',
      partSize: 'part_size',
      uploadUrl: 'upload_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      etag: 'string',
      internalUploadUrl: 'string',
      parallelSha1Ctx: UploadPartInfoParallelSha1Ctx,
      parallelSha256Ctx: UploadPartInfoParallelSha256Ctx,
      partNumber: 'number',
      partSize: 'number',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class User extends $tea.Model {
  avatar?: string;
  createdAt?: number;
  creator?: string;
  defaultDriveId?: string;
  description?: string;
  domainId?: string;
  email?: string;
  nickName?: string;
  phone?: string;
  role?: string;
  status?: string;
  updatedAt?: number;
  userData?: { [key: string]: string };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'number',
      creator: 'string',
      defaultDriveId: 'string',
      description: 'string',
      domainId: 'string',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'number',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserExtraItem extends $tea.Model {
  account?: AccountLinkInfo[];
  avatar?: string;
  createdAt?: string;
  creator?: string;
  defaultDrive?: BaseDriveResponse;
  defaultDriveId?: string;
  defaultLocation?: string;
  denyChangePasswordBySelf?: boolean;
  description?: string;
  domainId?: string;
  email?: string;
  expiredAt?: number;
  isSync?: boolean;
  lastLoginTime?: number;
  needChangePasswordNextLogin?: boolean;
  nickName?: string;
  parentGroup?: BaseDriveResponse[];
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  phone?: string;
  phoneRegion?: string;
  role?: string;
  status?: string;
  updatedAt?: string;
  userData?: { [key: string]: any };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDrive: 'default_drive',
      defaultDriveId: 'default_drive_id',
      defaultLocation: 'default_location',
      denyChangePasswordBySelf: 'deny_change_password_by_self',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      expiredAt: 'expired_at',
      isSync: 'is_sync',
      lastLoginTime: 'last_login_time',
      needChangePasswordNextLogin: 'need_change_password_next_login',
      nickName: 'nick_name',
      parentGroup: 'parent_group',
      pathStatus: 'path_status',
      permission: 'permission',
      phone: 'phone',
      phoneRegion: 'phone_region',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': AccountLinkInfo },
      avatar: 'string',
      createdAt: 'string',
      creator: 'string',
      defaultDrive: BaseDriveResponse,
      defaultDriveId: 'string',
      defaultLocation: 'string',
      denyChangePasswordBySelf: 'boolean',
      description: 'string',
      domainId: 'string',
      email: 'string',
      expiredAt: 'number',
      isSync: 'boolean',
      lastLoginTime: 'number',
      needChangePasswordNextLogin: 'boolean',
      nickName: 'string',
      parentGroup: { 'type': 'array', 'itemType': BaseDriveResponse },
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      phone: 'string',
      phoneRegion: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserLogDetail extends $tea.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  updateTo?: UserLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
      updateTo: UserLogDetailUpdateTo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaAudioStream extends $tea.Model {
  bitRate?: string;
  codeName?: string;
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'bit_rate',
      codeName: 'code_name',
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'string',
      codeName: 'string',
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaMetadata extends $tea.Model {
  height?: number;
  videoMediaAudioStream?: VideoMediaAudioStream[];
  videoMediaVideoStream?: VideoMediaVideoStream[];
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      videoMediaAudioStream: 'video_media_audio_stream',
      videoMediaVideoStream: 'video_media_video_stream',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      videoMediaAudioStream: { 'type': 'array', 'itemType': VideoMediaAudioStream },
      videoMediaVideoStream: { 'type': 'array', 'itemType': VideoMediaVideoStream },
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaVideoStream extends $tea.Model {
  bitrate?: string;
  codeName?: string;
  duration?: string;
  frameCount?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'bitrate',
      codeName: 'code_name',
      duration: 'duration',
      frameCount: 'frame_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codeName: 'string',
      duration: 'string',
      frameCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayInfo extends $tea.Model {
  category?: string;
  liveTranscodingTaskList?: VideoPreviewPlayInfoLiveTranscodingTaskList[];
  meta?: VideoPreviewPlayInfoMeta;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoLiveTranscodingTaskList },
      meta: VideoPreviewPlayInfoMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMeta extends $tea.Model {
  category?: string;
  liveTranscodingTaskList?: VideoPreviewPlayMetaLiveTranscodingTaskList[];
  meta?: VideoPreviewPlayMetaMeta;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaLiveTranscodingTaskList },
      meta: VideoPreviewPlayMetaMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class View extends $tea.Model {
  category?: string;
  createdAt?: string;
  description?: string;
  exFieldsInfo?: { [key: string]: any };
  fileCount?: number;
  name?: string;
  owner?: string;
  updatedAt?: string;
  viewId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      createdAt: 'created_at',
      description: 'description',
      exFieldsInfo: 'ex_fields_info',
      fileCount: 'file_count',
      name: 'name',
      owner: 'owner',
      updatedAt: 'updated_at',
      viewId: 'view_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdAt: 'string',
      description: 'string',
      exFieldsInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileCount: 'number',
      name: 'string',
      owner: 'string',
      updatedAt: 'string',
      viewId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewFile extends $tea.Model {
  category?: string;
  contentHash?: string;
  contentHashName?: string;
  contentType?: string;
  crc64Hash?: string;
  createdAt?: string;
  description?: string;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  fields?: { [key: string]: any };
  fileExtension?: string;
  fileId?: string;
  fileRevisionId?: string;
  hidden?: boolean;
  investigationInfo?: ViewFileInvestigationInfo;
  joinedAt?: number;
  labels?: string[];
  localCreatedAt?: string;
  localModifiedAt?: string;
  name?: string;
  parentFileId?: string;
  revisionId?: string;
  size?: number;
  starred?: boolean;
  status?: string;
  thumbnail?: string;
  thumbnailUrls?: { [key: string]: string };
  trashedAt?: string;
  type?: string;
  updatedAt?: string;
  uploadId?: string;
  viewId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      fields: 'fields',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      fileRevisionId: 'file_revision_id',
      hidden: 'hidden',
      investigationInfo: 'investigation_info',
      joinedAt: 'joined_at',
      labels: 'labels',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      parentFileId: 'parent_file_id',
      revisionId: 'revision_id',
      size: 'size',
      starred: 'starred',
      status: 'status',
      thumbnail: 'thumbnail',
      thumbnailUrls: 'thumbnail_urls',
      trashedAt: 'trashed_at',
      type: 'type',
      updatedAt: 'updated_at',
      uploadId: 'upload_id',
      viewId: 'view_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileExtension: 'string',
      fileId: 'string',
      fileRevisionId: 'string',
      hidden: 'boolean',
      investigationInfo: ViewFileInvestigationInfo,
      joinedAt: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
      parentFileId: 'string',
      revisionId: 'string',
      size: 'number',
      starred: 'boolean',
      status: 'string',
      thumbnail: 'string',
      thumbnailUrls: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      trashedAt: 'string',
      type: 'string',
      updatedAt: 'string',
      uploadId: 'string',
      viewId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WatermarkConfig extends $tea.Model {
  displayAccessUserName?: boolean;
  displayShareLinkCreatorName?: boolean;
  enableDocPreview?: boolean;
  enableOnPreview?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayAccessUserName: 'display_access_user_name',
      displayShareLinkCreatorName: 'display_shareLink_creator_name',
      enableDocPreview: 'enable_doc_preview',
      enableOnPreview: 'enable_on_preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayAccessUserName: 'boolean',
      displayShareLinkCreatorName: 'boolean',
      enableDocPreview: 'boolean',
      enableOnPreview: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WatermarkEnableConfig extends $tea.Model {
  displayAccessUserName?: boolean;
  displayCustomText?: string;
  displayShareLinkCreatorName?: boolean;
  enableDocPreview?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayAccessUserName: 'display_access_user_name',
      displayCustomText: 'display_custom_text',
      displayShareLinkCreatorName: 'display_shareLink_creator_name',
      enableDocPreview: 'enable_doc_preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayAccessUserName: 'boolean',
      displayCustomText: 'string',
      displayShareLinkCreatorName: 'boolean',
      enableDocPreview: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WxTrustedDomainConfig extends $tea.Model {
  content?: string;
  name?: string;
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      show: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberRequest extends $tea.Model {
  groupId?: string;
  memberId?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      memberId: 'member_id',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      memberId: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequest extends $tea.Model {
  driveId?: string;
  files?: AddStoryFilesRequestFiles[];
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFilesRequestFiles },
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponseBody extends $tea.Model {
  driveId?: string;
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddStoryFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignRoleRequest extends $tea.Model {
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRequest extends $tea.Model {
  clientId?: string;
  hideConsent?: boolean;
  loginType?: string;
  redirectUri?: string;
  responseType?: string;
  scope?: string[];
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      hideConsent: 'hide_consent',
      loginType: 'login_type',
      redirectUri: 'redirect_uri',
      responseType: 'response_type',
      scope: 'scope',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      hideConsent: 'boolean',
      loginType: 'string',
      redirectUri: 'string',
      responseType: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeShrinkRequest extends $tea.Model {
  clientId?: string;
  hideConsent?: boolean;
  loginType?: string;
  redirectUri?: string;
  responseType?: string;
  scopeShrink?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      hideConsent: 'hide_consent',
      loginType: 'login_type',
      redirectUri: 'redirect_uri',
      responseType: 'response_type',
      scopeShrink: 'scope',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      hideConsent: 'boolean',
      loginType: 'string',
      redirectUri: 'string',
      responseType: 'string',
      scopeShrink: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRequest extends $tea.Model {
  requests?: BatchRequestRequests[];
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      requests: 'requests',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requests: { 'type': 'array', 'itemType': BatchRequestRequests },
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponseBody extends $tea.Model {
  responses?: BatchResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      responses: 'responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responses: { 'type': 'array', 'itemType': BatchResponseBodyResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAssignRoleRequest extends $tea.Model {
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAssignRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShareLinkRequest extends $tea.Model {
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinRequest extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClearRecyclebinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearRecyclebinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteFileRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileRequest extends $tea.Model {
  autoRename?: boolean;
  driveId?: string;
  fileId?: string;
  shareId?: string;
  toDriveId?: string;
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRename: 'auto_rename',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      toDriveId: 'to_drive_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRename: 'boolean',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      toDriveId: 'string',
      toParentFileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequest extends $tea.Model {
  customLabels?: { [key: string]: string };
  driveId?: string;
  storyCover?: CreateCustomizedStoryRequestStoryCover;
  storyFiles?: CreateCustomizedStoryRequestStoryFiles[];
  storyName?: string;
  storySubType?: string;
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyCover: 'story_cover',
      storyFiles: 'story_files',
      storyName: 'story_name',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyCover: CreateCustomizedStoryRequestStoryCover,
      storyFiles: { 'type': 'array', 'itemType': CreateCustomizedStoryRequestStoryFiles },
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponseBody extends $tea.Model {
  driveId?: string;
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomizedStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomizedStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  description?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  sizeQuota?: number;
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveRequest extends $tea.Model {
  default?: boolean;
  description?: string;
  driveName?: string;
  driveType?: string;
  owner?: string;
  ownerType?: string;
  status?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      description: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveResponseBody extends $tea.Model {
  domainId?: string;
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDriveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $tea.Model {
  checkNameMode?: string;
  contentHash?: string;
  contentHashName?: string;
  contentType?: string;
  description?: string;
  driveId?: string;
  fileId?: string;
  hidden?: boolean;
  imageMediaMetadata?: ImageMediaMetadata;
  localCreatedAt?: string;
  localModifiedAt?: string;
  name?: string;
  parallelUpload?: boolean;
  parentFileId?: string;
  partInfoList?: CreateFileRequestPartInfoList[];
  preHash?: string;
  shareId?: string;
  size?: number;
  type?: string;
  userTags?: UserTag[];
  videoMediaMetadata?: VideoMediaMetadata;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      description: 'description',
      driveId: 'drive_id',
      fileId: 'file_id',
      hidden: 'hidden',
      imageMediaMetadata: 'image_media_metadata',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      parallelUpload: 'parallel_upload',
      parentFileId: 'parent_file_id',
      partInfoList: 'part_info_list',
      preHash: 'pre_hash',
      shareId: 'share_id',
      size: 'size',
      type: 'type',
      userTags: 'user_tags',
      videoMediaMetadata: 'video_media_metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      description: 'string',
      driveId: 'string',
      fileId: 'string',
      hidden: 'boolean',
      imageMediaMetadata: ImageMediaMetadata,
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
      parallelUpload: 'boolean',
      parentFileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': CreateFileRequestPartInfoList },
      preHash: 'string',
      shareId: 'string',
      size: 'number',
      type: 'string',
      userTags: { 'type': 'array', 'itemType': UserTag },
      videoMediaMetadata: VideoMediaMetadata,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $tea.Model {
  domainId?: string;
  driveId?: string;
  exist?: boolean;
  fileId?: string;
  fileName?: string;
  parentFileId?: string;
  partInfoList?: UploadPartInfo[];
  rapidUpload?: boolean;
  status?: string;
  type?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      exist: 'exist',
      fileId: 'file_id',
      fileName: 'file_name',
      parentFileId: 'parent_file_id',
      partInfoList: 'part_info_list',
      rapidUpload: 'rapid_upload',
      status: 'status',
      type: 'type',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      exist: 'boolean',
      fileId: 'string',
      fileName: 'string',
      parentFileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      rapidUpload: 'boolean',
      status: 'string',
      type: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  description?: string;
  groupName?: string;
  isRoot?: boolean;
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupName: 'group_name',
      isRoot: 'is_root',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
      isRoot: 'boolean',
      parentGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityToBenefitPkgMappingRequest extends $tea.Model {
  amount?: number;
  benefitPkgId?: string;
  expireTime?: number;
  identityId?: string;
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      benefitPkgId: 'benefit_pkg_id',
      expireTime: 'expire_time',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      benefitPkgId: 'string',
      expireTime: 'number',
      identityId: 'string',
      identityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityToBenefitPkgMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  code?: string;
  instanceId?: string;
  orderType?: string;
  package?: string;
  period?: number;
  periodUnit?: string;
  totalSize?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'auto_pay',
      autoRenew: 'auto_renew',
      code: 'code',
      instanceId: 'instance_id',
      orderType: 'order_type',
      package: 'package',
      period: 'period',
      periodUnit: 'period_unit',
      totalSize: 'total_size',
      userCount: 'user_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      code: 'string',
      instanceId: 'string',
      orderType: 'string',
      package: 'string',
      period: 'number',
      periodUnit: 'string',
      totalSize: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShareLinkRequest extends $tea.Model {
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadLimit?: number;
  driveId?: string;
  expiration?: string;
  fileIdList?: string[];
  officeEditable?: boolean;
  previewLimit?: number;
  saveLimit?: number;
  shareAllFiles?: boolean;
  shareName?: string;
  sharePwd?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewLimit: 'preview_limit',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewLimit: 'number',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareName: 'string',
      sharePwd: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusterTaskRequest extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusterTaskResponseBody extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
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

export class CreateSimilarImageClusterTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSimilarImageClusterTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSimilarImageClusterTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryRequest extends $tea.Model {
  address?: Address;
  customLabels?: { [key: string]: string };
  driveId?: string;
  maxImageCount?: number;
  minImageCount?: number;
  storyEndTime?: string;
  storyId?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      maxImageCount: 'max_image_count',
      minImageCount: 'min_image_count',
      storyEndTime: 'story_end_time',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      maxImageCount: 'number',
      minImageCount: 'number',
      storyEndTime: 'string',
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponseBody extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  avatar?: string;
  description?: string;
  email?: string;
  groupInfoList?: CreateUserRequestGroupInfoList[];
  nickName?: string;
  phone?: string;
  role?: string;
  status?: string;
  userData?: { [key: string]: any };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      email: 'email',
      groupInfoList: 'group_info_list',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': CreateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  avatar?: string;
  createdAt?: number;
  creator?: string;
  defaultDriveId?: string;
  description?: string;
  domainId?: string;
  email?: string;
  nickName?: string;
  phone?: string;
  role?: string;
  status?: string;
  updatedAt?: number;
  userData?: { [key: string]: any };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'number',
      creator: 'string',
      defaultDriveId: 'string',
      description: 'string',
      domainId: 'string',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'number',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      urlExpireSec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoResponseBody extends $tea.Model {
  investigationInfo?: InvestigationInfo;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      investigationInfo: 'investigation_info',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      investigationInfo: InvestigationInfo,
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CsiGetFileInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CsiGetFileInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDriveRequest extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
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

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRevisionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryRequest extends $tea.Model {
  driveId?: string;
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryResponseBody extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorRequest extends $tea.Model {
  driveId?: string;
  syncRootId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      syncRootId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorResponseBody extends $tea.Model {
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeltaGetLastCursorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeltaGetLastCursorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  imageThumbnailProcess?: string;
  officeThumbnailProcess?: string;
  shareId?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      shareId: 'share_id',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      shareId: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAddPermissionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  memberList?: FilePermissionMember[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      memberList: 'member_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      memberList: { 'type': 'array', 'itemType': FilePermissionMember },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAddPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileDeleteUserTagsRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  keyList?: string[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      keyList: 'key_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      keyList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileDeleteUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileListPermissionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileListPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FilePermissionMember[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': FilePermissionMember },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  userTags?: FilePutUserTagsRequestUserTags[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      userTags: { 'type': 'array', 'itemType': FilePutUserTagsRequestUserTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsResponseBody extends $tea.Model {
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FilePutUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FilePutUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileRemovePermissionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  memberList?: FileRemovePermissionRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      memberList: 'member_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      memberList: { 'type': 'array', 'itemType': FileRemovePermissionRequestMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileRemovePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskRequest extends $tea.Model {
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponseBody extends $tea.Model {
  asyncTaskId?: string;
  category?: string;
  consumedProcess?: number;
  createdAt?: string;
  errCode?: number;
  errorCode?: string;
  errorMessage?: string;
  failedProcess?: number;
  finishedAt?: string;
  message?: string;
  skippedProcess?: number;
  startedAt?: string;
  state?: string;
  status?: string;
  totalProcess?: number;
  uncompressFileList?: UncompressedFileInfo[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      category: 'category',
      consumedProcess: 'consumed_process',
      createdAt: 'created_at',
      errCode: 'err_code',
      errorCode: 'error_code',
      errorMessage: 'error_message',
      failedProcess: 'failed_process',
      finishedAt: 'finished_at',
      message: 'message',
      skippedProcess: 'skipped_process',
      startedAt: 'started_at',
      state: 'state',
      status: 'status',
      totalProcess: 'total_process',
      uncompressFileList: 'uncompress_file_list',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      category: 'string',
      consumedProcess: 'number',
      createdAt: 'string',
      errCode: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      failedProcess: 'number',
      finishedAt: 'string',
      message: 'string',
      skippedProcess: 'number',
      startedAt: 'string',
      state: 'string',
      status: 'string',
      totalProcess: 'number',
      uncompressFileList: { 'type': 'array', 'itemType': UncompressedFileInfo },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDriveRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $tea.Model {
  domainId?: string;
  getQuotaUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      getQuotaUsed: 'get_quota_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      getQuotaUsed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainQuotaResponseBody extends $tea.Model {
  sizeQuota?: number;
  sizeUsed?: number;
  userCountQuota?: number;
  userCountUsed?: number;
  static names(): { [key: string]: string } {
    return {
      sizeQuota: 'size_quota',
      sizeUsed: 'size_used',
      userCountQuota: 'user_count_quota',
      userCountUsed: 'user_count_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeQuota: 'number',
      sizeUsed: 'number',
      userCountQuota: 'number',
      userCountUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDomainQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlRequest extends $tea.Model {
  driveId?: string;
  expireSec?: number;
  fileId?: string;
  fileName?: string;
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      expireSec: 'expire_sec',
      fileId: 'file_id',
      fileName: 'file_name',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      expireSec: 'number',
      fileId: 'string',
      fileName: 'string',
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlResponseBody extends $tea.Model {
  cdnUrl?: string;
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  expiration?: string;
  internalUrl?: string;
  size?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cdnUrl: 'cdn_url',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      expiration: 'expiration',
      internalUrl: 'internal_url',
      size: 'size',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnUrl: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      expiration: 'string',
      internalUrl: 'string',
      size: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDriveRequest extends $tea.Model {
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  fileId?: string;
  shareId?: string;
  thumbnailProcesses?: { [key: string]: ImageProcess };
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      shareId: 'share_id',
      thumbnailProcesses: 'thumbnail_processes',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      shareId: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      urlExpireSec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
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

export class GetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityToBenefitPkgMappingRequest extends $tea.Model {
  benefitPkgId?: string;
  identityId?: string;
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgId: 'benefit_pkg_id',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgId: 'string',
      identityId: 'string',
      identityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityToBenefitPkgMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IdentityToBenefitPkgMapping;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IdentityToBenefitPkgMapping,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoRequest extends $tea.Model {
  extra?: string;
  identity?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AccountLinkInfo;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AccountLinkInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdResponseBody extends $tea.Model {
  items?: AccountLinkInfo[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AccountLinkInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLinkInfoByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLinkInfoByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRevisionRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  fileId?: string;
  revisionId?: string;
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      revisionId: 'revision_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      revisionId: 'string',
      urlExpireSec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkRequest extends $tea.Model {
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousRequest extends $tea.Model {
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousResponseBody extends $tea.Model {
  accessCount?: number;
  avatar?: string;
  creatorId?: string;
  creatorName?: string;
  creatorPhone?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  expiration?: string;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveDownloadLimit?: number;
  saveLimit?: number;
  shareName?: string;
  updatedAt?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      avatar: 'avatar',
      creatorId: 'creator_id',
      creatorName: 'creator_name',
      creatorPhone: 'creator_phone',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareName: 'share_name',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      avatar: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorPhone: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareName: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetShareLinkByAnonymousResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetShareLinkByAnonymousResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenRequest extends $tea.Model {
  expireSec?: number;
  shareId?: string;
  sharePwd?: string;
  static names(): { [key: string]: string } {
    return {
      expireSec: 'expire_sec',
      shareId: 'share_id',
      sharePwd: 'share_pwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireSec: 'number',
      shareId: 'string',
      sharePwd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenResponseBody extends $tea.Model {
  expiresIn?: number;
  shareToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiresIn: 'expires_in',
      shareToken: 'share_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresIn: 'number',
      shareToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetShareLinkTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetShareLinkTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryRequest extends $tea.Model {
  coverImageThumbnailProcess?: string;
  coverVideoThumbnailProcess?: string;
  driveId?: string;
  imageThumbnailProcess?: string;
  imageUrlProcess?: string;
  storyId?: string;
  urlExpireSec?: number;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      imageUrlProcess: 'image_url_process',
      storyId: 'story_id',
      urlExpireSec: 'url_expire_sec',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      imageUrlProcess: 'string',
      storyId: 'string',
      urlExpireSec: 'number',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Story;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Story,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  driveId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
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

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  partInfoList?: GetUploadUrlRequestPartInfoList[];
  shareId?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': GetUploadUrlRequestPartInfoList },
      shareId: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlResponseBody extends $tea.Model {
  createAt?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  partInfoList?: UploadPartInfo[];
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'create_at',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoRequest extends $tea.Model {
  category?: string;
  driveId?: string;
  fileId?: string;
  getMasterUrl?: boolean;
  getWithoutUrl?: boolean;
  shareId?: string;
  templateId?: string;
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      getMasterUrl: 'get_master_url',
      getWithoutUrl: 'get_without_url',
      shareId: 'share_id',
      templateId: 'template_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      getMasterUrl: 'boolean',
      getWithoutUrl: 'boolean',
      shareId: 'string',
      templateId: 'string',
      urlExpireSec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoResponseBody extends $tea.Model {
  code?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  masterUrl?: string;
  message?: string;
  shareId?: string;
  videoPreviewPlayInfo?: VideoPreviewPlayInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      masterUrl: 'master_url',
      message: 'message',
      shareId: 'share_id',
      videoPreviewPlayInfo: 'video_preview_play_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      masterUrl: 'string',
      message: 'string',
      shareId: 'string',
      videoPreviewPlayInfo: VideoPreviewPlayInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoPreviewPlayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoPreviewPlayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaRequest extends $tea.Model {
  category?: string;
  driveId?: string;
  fileId?: string;
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaResponseBody extends $tea.Model {
  domainId?: string;
  driveId?: string;
  fileId?: string;
  shareId?: string;
  videoPreviewPlayMeta?: VideoPreviewPlayMeta;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      videoPreviewPlayMeta: 'video_preview_play_meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      videoPreviewPlayMeta: VideoPreviewPlayMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoPreviewPlayMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoPreviewPlayMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUpdateNameRequest extends $tea.Model {
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUpdateNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserRequest extends $tea.Model {
  authenticationDisplayName?: string;
  authenticationType?: string;
  autoCreateDrive?: boolean;
  driveTotalSize?: number;
  extra?: string;
  identity?: string;
  nickName?: string;
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationDisplayName: 'authentication_display_name',
      authenticationType: 'authentication_type',
      autoCreateDrive: 'auto_create_drive',
      driveTotalSize: 'drive_total_size',
      extra: 'extra',
      identity: 'identity',
      nickName: 'nick_name',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationDisplayName: 'string',
      authenticationType: 'string',
      autoCreateDrive: 'boolean',
      driveTotalSize: 'number',
      extra: 'string',
      identity: 'string',
      nickName: 'string',
      parentGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileRequest extends $tea.Model {
  driveFileIds?: InvestigateFileRequestDriveFileIds[];
  static names(): { [key: string]: string } {
    return {
      driveFileIds: 'drive_file_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveFileIds: { 'type': 'array', 'itemType': InvestigateFileRequestDriveFileIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkAccountRequest extends $tea.Model {
  extra?: string;
  identity?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Token;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Token,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsRequest extends $tea.Model {
  driveId?: string;
  imageThumbnailProcess?: string;
  limit?: number;
  marker?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      limit: 'limit',
      marker: 'marker',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      limit: 'number',
      marker: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsResponseBody extends $tea.Model {
  items?: AddressGroup[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddressGroup },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAddressGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAddressGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentRequest extends $tea.Model {
  limit?: number;
  manageResourceId?: string;
  manageResourceType?: string;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      manageResourceId: 'string',
      manageResourceType: 'string',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponseBody extends $tea.Model {
  assignmentList?: ListAssignmentResponseBodyAssignmentList[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': ListAssignmentResponseBodyAssignmentList },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAssignmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAssignmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaRequest extends $tea.Model {
  cursor?: string;
  driveId?: string;
  limit?: number;
  syncRootId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      driveId: 'drive_id',
      limit: 'limit',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      driveId: 'string',
      limit: 'number',
      syncRootId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponseBody extends $tea.Model {
  cursor?: string;
  hasMore?: boolean;
  items?: ListDeltaResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      hasMore: 'has_more',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListDeltaResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeltaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeltaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  parentDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      parentDomainId: 'parent_domain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      parentDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  items?: Domain[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Domain },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  owner?: string;
  ownerType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      owner: 'owner',
      ownerType: 'owner_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      owner: 'string',
      ownerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveResponseBody extends $tea.Model {
  items?: Drive[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDriveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsRequest extends $tea.Model {
  driveId?: string;
  limit?: number;
  marker?: string;
  remarks?: string;
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      limit: 'limit',
      marker: 'marker',
      remarks: 'remarks',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      limit: 'number',
      marker: 'string',
      remarks: 'string',
      returnTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsResponseBody extends $tea.Model {
  items?: FaceGroup[];
  nextMarker?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FaceGroup },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFacegroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFacegroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileRequest extends $tea.Model {
  category?: string;
  driveId?: string;
  fields?: string;
  limit?: number;
  marker?: string;
  orderBy?: string;
  orderDirection?: string;
  parentFileId?: string;
  shareId?: string;
  status?: string;
  thumbnailProcesses?: { [key: string]: ImageProcess };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      parentFileId: 'parent_file_id',
      shareId: 'share_id',
      status: 'status',
      thumbnailProcesses: 'thumbnail_processes',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      parentFileId: 'string',
      shareId: 'string',
      status: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $tea.Model {
  items?: File[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $tea.Model {
  items?: Group[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Group },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberRequest extends $tea.Model {
  groupId?: string;
  limit?: number;
  marker?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      limit: 'limit',
      marker: 'marker',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      limit: 'number',
      marker: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBody extends $tea.Model {
  groupItems?: Group[];
  nextMarker?: string;
  userItems?: User[];
  static names(): { [key: string]: string } {
    return {
      groupItems: 'group_items',
      nextMarker: 'next_marker',
      userItems: 'user_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupItems: { 'type': 'array', 'itemType': Group },
      nextMarker: 'string',
      userItems: { 'type': 'array', 'itemType': User },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityRoleRequest extends $tea.Model {
  identity?: Identity;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BaseRoleMemberResponse;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BaseRoleMemberResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingRequest extends $tea.Model {
  identityId?: string;
  identityType?: string;
  includeExpired?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
      includeExpired: 'include_expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
      includeExpired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingResponseBody extends $tea.Model {
  items?: IdentityToBenefitPkgMapping[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': IdentityToBenefitPkgMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIdentityToBenefitPkgMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdentityToBenefitPkgMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesResponseBody extends $tea.Model {
  items?: Drive[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMyDrivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMyDrivesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveResponseBody extends $tea.Model {
  items?: Drive[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMyGroupDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMyGroupDriveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileResponseBody extends $tea.Model {
  items?: File[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListReceivedFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListReceivedFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinResponseBody extends $tea.Model {
  items?: File[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRecyclebinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecyclebinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  fileId?: string;
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionResponseBody extends $tea.Model {
  items?: Revision[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Revision },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRevisionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRevisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkRequest extends $tea.Model {
  creator?: string;
  includeCancelled?: boolean;
  limit?: number;
  marker?: string;
  orderBy?: string;
  orderDirection?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      includeCancelled: 'include_cancelled',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      includeCancelled: 'boolean',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkResponseBody extends $tea.Model {
  items?: ShareLink[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ShareLink },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListShareLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  driveId?: string;
  imageThumbnailProcess?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  tags?: ImageTag[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ImageTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  limit?: number;
  partNumberMarker?: number;
  shareId?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      limit: 'limit',
      partNumberMarker: 'part_number_marker',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      limit: 'number',
      partNumberMarker: 'number',
      shareId: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsResponseBody extends $tea.Model {
  fileId?: string;
  nextPartNumberMarker?: string;
  parallelUpload?: boolean;
  uploadId?: string;
  uploadedParts?: UploadPartInfo[];
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      nextPartNumberMarker: 'next_part_number_marker',
      parallelUpload: 'parallel_upload',
      uploadId: 'upload_id',
      uploadedParts: 'uploaded_parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      nextPartNumberMarker: 'string',
      parallelUpload: 'boolean',
      uploadId: 'string',
      uploadedParts: { 'type': 'array', 'itemType': UploadPartInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUploadedPartsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUploadedPartsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRequest extends $tea.Model {
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResponseBody extends $tea.Model {
  items?: User[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': User },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileRequest extends $tea.Model {
  checkNameMode?: string;
  driveId?: string;
  fileId?: string;
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      driveId: 'drive_id',
      fileId: 'file_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      driveId: 'string',
      fileId: 'string',
      toParentFileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  exist?: boolean;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      exist: 'exist',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      exist: 'boolean',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceRequest extends $tea.Model {
  code?: string;
  instanceId?: string;
  orderType?: string;
  package?: string;
  period?: number;
  periodUnit?: string;
  totalSize?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instance_id',
      orderType: 'order_type',
      package: 'package',
      period: 'period',
      periodUnit: 'period_unit',
      totalSize: 'total_size',
      userCount: 'user_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      orderType: 'string',
      package: 'string',
      period: 'number',
      periodUnit: 'string',
      totalSize: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceResponseBody extends $tea.Model {
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'discount_price',
      originalPrice: 'original_price',
      tradePrice: 'trade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrderPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceGroupFileRequest extends $tea.Model {
  driveId?: string;
  faceGroupId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      faceGroupId: 'face_group_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      faceGroupId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceGroupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberRequest extends $tea.Model {
  groupId?: string;
  memberId?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      memberId: 'member_id',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      memberId: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequest extends $tea.Model {
  driveId?: string;
  files?: RemoveStoryFilesRequestFiles[];
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': RemoveStoryFilesRequestFiles },
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesResponseBody extends $tea.Model {
  driveId?: string;
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveStoryFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestoreFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRevisionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  limit?: number;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileResponseBody extends $tea.Model {
  items?: File[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScanFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScanFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsRequest extends $tea.Model {
  addressLevel?: string;
  addressNames?: string[];
  brGeoPoint?: string;
  driveId?: string;
  imageThumbnailProcess?: string;
  tlGeoPoint?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      addressLevel: 'address_level',
      addressNames: 'address_names',
      brGeoPoint: 'br_geo_point',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      tlGeoPoint: 'tl_geo_point',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLevel: 'string',
      addressNames: { 'type': 'array', 'itemType': 'string' },
      brGeoPoint: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      tlGeoPoint: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsResponseBody extends $tea.Model {
  items?: AddressGroup[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddressGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAddressGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchAddressGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsRequest extends $tea.Model {
  instanceId?: string;
  limit?: number;
  marker?: string;
  name?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      limit: 'limit',
      marker: 'marker',
      name: 'name',
      orderBy: 'order_by',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      limit: 'number',
      marker: 'string',
      name: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsResponseBody extends $tea.Model {
  items?: Domain[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Domain },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveRequest extends $tea.Model {
  driveName?: string;
  limit?: number;
  marker?: string;
  owner?: string;
  ownerType?: string;
  static names(): { [key: string]: string } {
    return {
      driveName: 'drive_name',
      limit: 'limit',
      marker: 'marker',
      owner: 'owner',
      ownerType: 'owner_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveName: 'string',
      limit: 'number',
      marker: 'string',
      owner: 'string',
      ownerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveResponseBody extends $tea.Model {
  items?: Drive[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchDriveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileRequest extends $tea.Model {
  driveId?: string;
  fields?: string;
  limit?: number;
  marker?: string;
  orderBy?: string;
  query?: string;
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      query: 'query',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      query: 'string',
      returnTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileResponseBody extends $tea.Model {
  items?: File[];
  nextMarker?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkRequest extends $tea.Model {
  creators?: string[];
  limit?: number;
  marker?: string;
  orderBy?: string;
  orderDirection?: string;
  query?: string;
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      creators: 'creators',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      query: 'query',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creators: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      query: 'string',
      returnTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkResponseBody extends $tea.Model {
  items?: ShareLink[];
  nextMarker?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ShareLink },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchShareLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersRequest extends $tea.Model {
  driveId?: string;
  imageThumbnailProcess?: string;
  limit?: number;
  marker?: string;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      limit: 'number',
      marker: 'string',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponseBody extends $tea.Model {
  nextMarker?: string;
  similarImageClusters?: SearchSimilarImageClustersResponseBodySimilarImageClusters[];
  static names(): { [key: string]: string } {
    return {
      nextMarker: 'next_marker',
      similarImageClusters: 'similar_image_clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextMarker: 'string',
      similarImageClusters: { 'type': 'array', 'itemType': SearchSimilarImageClustersResponseBodySimilarImageClusters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchSimilarImageClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchSimilarImageClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequest extends $tea.Model {
  coverImageThumbnailProcess?: string;
  coverVideoThumbnailProcess?: string;
  createTimeRange?: SearchStoriesRequestCreateTimeRange;
  customLabels?: string;
  driveId?: string;
  faceGroupIds?: string[];
  limit?: number;
  marker?: string;
  order?: string;
  sort?: string;
  storyEndTimeRange?: SearchStoriesRequestStoryEndTimeRange;
  storyId?: string;
  storyName?: string;
  storyStartTimeRange?: SearchStoriesRequestStoryStartTimeRange;
  storyType?: string;
  urlExpireSec?: number;
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      createTimeRange: 'create_time_range',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      faceGroupIds: 'face_group_ids',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
      sort: 'sort',
      storyEndTimeRange: 'story_end_time_range',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTimeRange: 'story_start_time_range',
      storyType: 'story_type',
      urlExpireSec: 'url_expire_sec',
      withEmptyStories: 'with_empty_stories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      createTimeRange: SearchStoriesRequestCreateTimeRange,
      customLabels: 'string',
      driveId: 'string',
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      order: 'string',
      sort: 'string',
      storyEndTimeRange: SearchStoriesRequestStoryEndTimeRange,
      storyId: 'string',
      storyName: 'string',
      storyStartTimeRange: SearchStoriesRequestStoryStartTimeRange,
      storyType: 'string',
      urlExpireSec: 'number',
      withEmptyStories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesResponseBody extends $tea.Model {
  items?: Story[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Story },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchStoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchStoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserRequest extends $tea.Model {
  email?: string;
  limit?: number;
  marker?: string;
  nickName?: string;
  nickNameForFuzzy?: string;
  phone?: string;
  role?: string;
  status?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      limit: 'limit',
      marker: 'marker',
      nickName: 'nick_name',
      nickNameForFuzzy: 'nick_name_for_fuzzy',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      limit: 'number',
      marker: 'string',
      nickName: 'string',
      nickNameForFuzzy: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserResponseBody extends $tea.Model {
  items?: User[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': User },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenRequest extends $tea.Model {
  assertion?: string;
  clientId?: string;
  clientSecret?: string;
  code?: string;
  grantType?: string;
  redirectUri?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      assertion: 'assertion',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      code: 'code',
      grantType: 'grant_type',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertion: 'string',
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      grantType: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Token;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Token,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileResponseBody extends $tea.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrashFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TrashFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLinkAccountRequest extends $tea.Model {
  extra?: string;
  identity?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLinkAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRequest extends $tea.Model {
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  publishedAppAccessStrategy?: AppAccessStrategy;
  sizeQuota?: number;
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      publishedAppAccessStrategy: AppAccessStrategy,
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDriveRequest extends $tea.Model {
  description?: string;
  driveId?: string;
  driveName?: string;
  owner?: string;
  status?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      driveId: 'drive_id',
      driveName: 'drive_name',
      owner: 'owner',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      driveId: 'string',
      driveName: 'string',
      owner: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDriveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupRequest extends $tea.Model {
  driveId?: string;
  groupCoverFaceId?: string;
  groupId?: string;
  groupName?: string;
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      groupCoverFaceId: 'group_cover_face_id',
      groupId: 'group_id',
      groupName: 'group_name',
      remarks: 'remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      groupCoverFaceId: 'string',
      groupId: 'string',
      groupName: 'string',
      remarks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupResponseBody extends $tea.Model {
  driveId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFacegroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFacegroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileRequest extends $tea.Model {
  checkNameMode?: string;
  description?: string;
  driveId?: string;
  fileId?: string;
  hidden?: boolean;
  labels?: string[];
  localModifiedAt?: string;
  name?: string;
  starred?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      description: 'description',
      driveId: 'drive_id',
      fileId: 'file_id',
      hidden: 'hidden',
      labels: 'labels',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      starred: 'starred',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      description: 'string',
      driveId: 'string',
      fileId: 'string',
      hidden: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
      localModifiedAt: 'string',
      name: 'string',
      starred: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupId: 'group_id',
      groupName: 'group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityToBenefitPkgMappingRequest extends $tea.Model {
  amount?: number;
  benefitPkgId?: string;
  expireTime?: number;
  identityId?: string;
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      benefitPkgId: 'benefit_pkg_id',
      expireTime: 'expire_time',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      benefitPkgId: 'string',
      expireTime: 'number',
      identityId: 'string',
      identityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityToBenefitPkgMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRevisionRequest extends $tea.Model {
  driveId?: string;
  fileId?: string;
  keepForever?: boolean;
  revisionDescription?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      keepForever: 'keep_forever',
      revisionDescription: 'revision_description',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      keepForever: 'boolean',
      revisionDescription: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareLinkRequest extends $tea.Model {
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  expiration?: string;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveLimit?: number;
  shareId?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveLimit: 'save_limit',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequest extends $tea.Model {
  cover?: UpdateStoryRequestCover;
  customLabels?: { [key: string]: string };
  driveId?: string;
  storyId?: string;
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'cover',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyId: 'story_id',
      storyName: 'story_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: UpdateStoryRequestCover,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyId: 'string',
      storyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryResponseBody extends $tea.Model {
  driveId?: string;
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  avatar?: string;
  description?: string;
  email?: string;
  groupInfoList?: UpdateUserRequestGroupInfoList[];
  nickName?: string;
  phone?: string;
  role?: string;
  status?: string;
  userData?: { [key: string]: string };
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      email: 'email',
      groupInfoList: 'group_info_list',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userData: 'user_data',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': UpdateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AudioPreviewPlayInfoMeta extends $tea.Model {
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AudioPreviewPlayInfoOfflineAudioList extends $tea.Model {
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      templateId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasePunishLogResponsePunisheeContentHash extends $tea.Model {
  hashHexStr?: string;
  hashName?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      hashHexStr: 'hash_hex_str',
      hashName: 'hash_name',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashHexStr: 'string',
      hashName: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasePunishLogResponsePunishee extends $tea.Model {
  contentHash?: BasePunishLogResponsePunisheeContentHash;
  driveId?: string;
  faceGroupId?: string;
  fileId?: string;
  revisionId?: string;
  shareId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      driveId: 'drive_id',
      faceGroupId: 'face_group_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
      shareId: 'share_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: BasePunishLogResponsePunisheeContentHash,
      driveId: 'string',
      faceGroupId: 'string',
      fileId: 'string',
      revisionId: 'string',
      shareId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BasePunishLogResponsePunishmentDetail extends $tea.Model {
  actionCode?: string;
  investigationStatus?: number;
  method?: string;
  punishReason?: string;
  punishments?: PunishRule[];
  source?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'action_code',
      investigationStatus: 'investigation_status',
      method: 'method',
      punishReason: 'punish_reason',
      punishments: 'punishments',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      investigationStatus: 'number',
      method: 'string',
      punishReason: 'string',
      punishments: { 'type': 'array', 'itemType': PunishRule },
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseUserPunishRuleResponseResults extends $tea.Model {
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DriveLogDetailUpdateTo extends $tea.Model {
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGroupGroupCoverFaceBoundary extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileInvestigationInfo extends $tea.Model {
  status?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfoVideoDetailBlockFrames extends $tea.Model {
  label?: string;
  offset?: number;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      offset: 'offset',
      rate: 'rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfoVideoDetail extends $tea.Model {
  blockFrames?: InvestigationInfoVideoDetailBlockFrames[];
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'block_frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': InvestigationInfoVideoDetailBlockFrames },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionActionList extends $tea.Model {
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpEquals extends $tea.Model {
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpNotEquals extends $tea.Model {
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringLike extends $tea.Model {
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringNotLike extends $tea.Model {
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfoParallelSha1Ctx extends $tea.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfoParallelSha256Ctx extends $tea.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserLogDetailUpdateTo extends $tea.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayInfoLiveTranscodingTaskList extends $tea.Model {
  keepOriginalResolution?: boolean;
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayInfoMeta extends $tea.Model {
  duration?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaLiveTranscodingTaskList extends $tea.Model {
  keepOriginalResolution?: boolean;
  status?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaMeta extends $tea.Model {
  duration?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewFileInvestigationInfo extends $tea.Model {
  status?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequestFiles extends $tea.Model {
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRequestRequests extends $tea.Model {
  body?: { [key: string]: string };
  headers?: { [key: string]: string };
  id?: string;
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headers: 'headers',
      id: 'id',
      method: 'method',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponseBodyResponses extends $tea.Model {
  body?: { [key: string]: string };
  id?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      id: 'id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestStoryCover extends $tea.Model {
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestStoryFiles extends $tea.Model {
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequestPartInfoListParallelSha1Ctx extends $tea.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequestPartInfoList extends $tea.Model {
  contentMd5?: string;
  parallelSha1Ctx?: CreateFileRequestPartInfoListParallelSha1Ctx;
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      parallelSha1Ctx: CreateFileRequestPartInfoListParallelSha1Ctx,
      partNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestGroupInfoList extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
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

export class FilePutUserTagsRequestUserTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class FileRemovePermissionRequestMemberList extends $tea.Model {
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequestPartInfoListParallelSha1Ctx extends $tea.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequestPartInfoList extends $tea.Model {
  contentMd5?: string;
  contentType?: string;
  parallelSha1Ctx?: GetUploadUrlRequestPartInfoListParallelSha1Ctx;
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      contentType: 'content_type',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      contentType: 'string',
      parallelSha1Ctx: GetUploadUrlRequestPartInfoListParallelSha1Ctx,
      partNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileRequestDriveFileIds extends $tea.Model {
  driveId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponseBodyAssignmentList extends $tea.Model {
  createdAt?: number;
  creator?: string;
  domainId?: string;
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponseBodyItems extends $tea.Model {
  file?: File;
  fileId?: string;
  op?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      fileId: 'file_id',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: File,
      fileId: 'string',
      op: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequestFiles extends $tea.Model {
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponseBodySimilarImageClusters extends $tea.Model {
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestCreateTimeRange extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestStoryEndTimeRange extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestStoryStartTimeRange extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequestCover extends $tea.Model {
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequestGroupInfoList extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
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


export default class Client extends OpenApi {
  _client: SPI;

  constructor(config: $OpenApi.Config) {
    super(config);
    this._client = new GatewayClient();
    this._spi = this._client;
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
  }


  async addGroupMemberWithOptions(request: AddGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddGroupMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!Util.isUnset(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/add_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddGroupMemberResponse>(await this.execute(params, req, runtime), new AddGroupMemberResponse({}));
  }

  async addGroupMember(request: AddGroupMemberRequest): Promise<AddGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupMemberWithOptions(request, headers, runtime);
  }

  async addStoryFilesWithOptions(request: AddStoryFilesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddStoryFilesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/add_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddStoryFilesResponse>(await this.execute(params, req, runtime), new AddStoryFilesResponse({}));
  }

  async addStoryFiles(request: AddStoryFilesRequest): Promise<AddStoryFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addStoryFilesWithOptions(request, headers, runtime);
  }

  /**
    * You can call this operation to assign a group administrator role to a user.
    *
    * @param request AssignRoleRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssignRoleResponse
   */
  async assignRoleWithOptions(request: AssignRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AssignRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!Util.isUnset(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!Util.isUnset(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AssignRoleResponse>(await this.execute(params, req, runtime), new AssignRoleResponse({}));
  }

  /**
    * You can call this operation to assign a group administrator role to a user.
    *
    * @param request AssignRoleRequest
    * @return AssignRoleResponse
   */
  async assignRole(request: AssignRoleRequest): Promise<AssignRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.assignRoleWithOptions(request, headers, runtime);
  }

  /**
    * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
    *
    * @param tmpReq AuthorizeRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return AuthorizeResponse
   */
  async authorizeWithOptions(tmpReq: AuthorizeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeResponse> {
    Util.validateModel(tmpReq);
    let request = new AuthorizeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.scope)) {
      request.scopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scope, "scope", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!Util.isUnset(request.hideConsent)) {
      query["hide_consent"] = request.hideConsent;
    }

    if (!Util.isUnset(request.loginType)) {
      query["login_type"] = request.loginType;
    }

    if (!Util.isUnset(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!Util.isUnset(request.responseType)) {
      query["response_type"] = request.responseType;
    }

    if (!Util.isUnset(request.scopeShrink)) {
      query["scope"] = request.scopeShrink;
    }

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Authorize",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/authorize`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $tea.cast<AuthorizeResponse>(await this.execute(params, req, runtime), new AuthorizeResponse({}));
  }

  /**
    * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
    *
    * @param request AuthorizeRequest
    * @return AuthorizeResponse
   */
  async authorize(request: AuthorizeRequest): Promise<AuthorizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeWithOptions(request, headers, runtime);
  }

  async batchWithOptions(request: BatchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requests)) {
      body["requests"] = request.requests;
    }

    if (!Util.isUnset(request.resource)) {
      body["resource"] = request.resource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Batch",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchResponse>(await this.execute(params, req, runtime), new BatchResponse({}));
  }

  async batch(request: BatchRequest): Promise<BatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchWithOptions(request, headers, runtime);
  }

  /**
    * You can cancel only the group administrator role.
    *
    * @param request CancelAssignRoleRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelAssignRoleResponse
   */
  async cancelAssignRoleWithOptions(request: CancelAssignRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelAssignRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!Util.isUnset(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!Util.isUnset(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelAssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/cancel_assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelAssignRoleResponse>(await this.execute(params, req, runtime), new CancelAssignRoleResponse({}));
  }

  /**
    * You can cancel only the group administrator role.
    *
    * @param request CancelAssignRoleRequest
    * @return CancelAssignRoleResponse
   */
  async cancelAssignRole(request: CancelAssignRoleRequest): Promise<CancelAssignRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelAssignRoleWithOptions(request, headers, runtime);
  }

  async cancelShareLinkWithOptions(request: CancelShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelShareLinkResponse>(await this.execute(params, req, runtime), new CancelShareLinkResponse({}));
  }

  async cancelShareLink(request: CancelShareLinkRequest): Promise<CancelShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelShareLinkWithOptions(request, headers, runtime);
  }

  async clearRecyclebinWithOptions(request: ClearRecyclebinRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ClearRecyclebinResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ClearRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/clear`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ClearRecyclebinResponse>(await this.execute(params, req, runtime), new ClearRecyclebinResponse({}));
  }

  async clearRecyclebin(request: ClearRecyclebinRequest): Promise<ClearRecyclebinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.clearRecyclebinWithOptions(request, headers, runtime);
  }

  async completeFileWithOptions(request: CompleteFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CompleteFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CompleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/complete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CompleteFileResponse>(await this.execute(params, req, runtime), new CompleteFileResponse({}));
  }

  async completeFile(request: CompleteFileRequest): Promise<CompleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeFileWithOptions(request, headers, runtime);
  }

  async copyFileWithOptions(request: CopyFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CopyFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRename)) {
      body["auto_rename"] = request.autoRename;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.toDriveId)) {
      body["to_drive_id"] = request.toDriveId;
    }

    if (!Util.isUnset(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CopyFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/copy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CopyFileResponse>(await this.execute(params, req, runtime), new CopyFileResponse({}));
  }

  async copyFile(request: CopyFileRequest): Promise<CopyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.copyFileWithOptions(request, headers, runtime);
  }

  async createCustomizedStoryWithOptions(request: CreateCustomizedStoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedStoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.storyCover)) {
      body["story_cover"] = request.storyCover;
    }

    if (!Util.isUnset(request.storyFiles)) {
      body["story_files"] = request.storyFiles;
    }

    if (!Util.isUnset(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!Util.isUnset(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!Util.isUnset(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomizedStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_customized_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomizedStoryResponse>(await this.execute(params, req, runtime), new CreateCustomizedStoryResponse({}));
  }

  async createCustomizedStory(request: CreateCustomizedStoryRequest): Promise<CreateCustomizedStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomizedStoryWithOptions(request, headers, runtime);
  }

  /**
    * If you want to perform secondary operations based on Drive and Photo Service and perform fine-grained control on your tenants, you can use the parent-child domain feature of Drive and Photo Service. For more information, join the DingTalk group whose ID is 23146118.
    *
    * @param request CreateDomainRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!Util.isUnset(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!Util.isUnset(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!Util.isUnset(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    if (!Util.isUnset(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!Util.isUnset(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.execute(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
    * If you want to perform secondary operations based on Drive and Photo Service and perform fine-grained control on your tenants, you can use the parent-child domain feature of Drive and Photo Service. For more information, join the DingTalk group whose ID is 23146118.
    *
    * @param request CreateDomainRequest
    * @return CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  async createDriveWithOptions(request: CreateDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.default)) {
      body["default"] = request.default;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!Util.isUnset(request.driveType)) {
      body["drive_type"] = request.driveType;
    }

    if (!Util.isUnset(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!Util.isUnset(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDriveResponse>(await this.execute(params, req, runtime), new CreateDriveResponse({}));
  }

  async createDrive(request: CreateDriveRequest): Promise<CreateDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDriveWithOptions(request, headers, runtime);
  }

  async createFileWithOptions(request: CreateFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!Util.isUnset(request.contentHash)) {
      body["content_hash"] = request.contentHash;
    }

    if (!Util.isUnset(request.contentHashName)) {
      body["content_hash_name"] = request.contentHashName;
    }

    if (!Util.isUnset(request.contentType)) {
      body["content_type"] = request.contentType;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!Util.isUnset(request.imageMediaMetadata)) {
      body["image_media_metadata"] = request.imageMediaMetadata;
    }

    if (!Util.isUnset(request.localCreatedAt)) {
      body["local_created_at"] = request.localCreatedAt;
    }

    if (!Util.isUnset(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parallelUpload)) {
      body["parallel_upload"] = request.parallelUpload;
    }

    if (!Util.isUnset(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!Util.isUnset(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!Util.isUnset(request.preHash)) {
      body["pre_hash"] = request.preHash;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.size)) {
      body["size"] = request.size;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    if (!Util.isUnset(request.videoMediaMetadata)) {
      body["video_media_metadata"] = request.videoMediaMetadata;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFileResponse>(await this.execute(params, req, runtime), new CreateFileResponse({}));
  }

  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileWithOptions(request, headers, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!Util.isUnset(request.isRoot)) {
      body["is_root"] = request.isRoot;
    }

    if (!Util.isUnset(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.execute(params, req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
    * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
    *
    * @param request CreateIdentityToBenefitPkgMappingRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMappingWithOptions(request: CreateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIdentityToBenefitPkgMappingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!Util.isUnset(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!Util.isUnset(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new CreateIdentityToBenefitPkgMappingResponse({}));
  }

  /**
    * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
    *
    * @param request CreateIdentityToBenefitPkgMappingRequest
    * @return CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMapping(request: CreateIdentityToBenefitPkgMappingRequest): Promise<CreateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoPay)) {
      body["auto_pay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["auto_renew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!Util.isUnset(request.package)) {
      body["package"] = request.package;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!Util.isUnset(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create_order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.execute(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrderWithOptions(request, headers, runtime);
  }

  /**
    * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
    *
    * @param request CreateShareLinkRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateShareLinkResponse
   */
  async createShareLinkWithOptions(request: CreateShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!Util.isUnset(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!Util.isUnset(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.fileIdList)) {
      body["file_id_list"] = request.fileIdList;
    }

    if (!Util.isUnset(request.officeEditable)) {
      body["office_editable"] = request.officeEditable;
    }

    if (!Util.isUnset(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!Util.isUnset(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!Util.isUnset(request.shareAllFiles)) {
      body["share_all_files"] = request.shareAllFiles;
    }

    if (!Util.isUnset(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!Util.isUnset(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateShareLinkResponse>(await this.execute(params, req, runtime), new CreateShareLinkResponse({}));
  }

  /**
    * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
    *
    * @param request CreateShareLinkRequest
    * @return CreateShareLinkResponse
   */
  async createShareLink(request: CreateShareLinkRequest): Promise<CreateShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createShareLinkWithOptions(request, headers, runtime);
  }

  async createSimilarImageClusterTaskWithOptions(request: CreateSimilarImageClusterTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSimilarImageClusterTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSimilarImageClusterTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_similar_image_cluster_task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSimilarImageClusterTaskResponse>(await this.execute(params, req, runtime), new CreateSimilarImageClusterTaskResponse({}));
  }

  async createSimilarImageClusterTask(request: CreateSimilarImageClusterTaskRequest): Promise<CreateSimilarImageClusterTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSimilarImageClusterTaskWithOptions(request, headers, runtime);
  }

  async createStoryWithOptions(request: CreateStoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateStoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["address"] = request.address;
    }

    if (!Util.isUnset(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.maxImageCount)) {
      body["max_image_count"] = request.maxImageCount;
    }

    if (!Util.isUnset(request.minImageCount)) {
      body["min_image_count"] = request.minImageCount;
    }

    if (!Util.isUnset(request.storyEndTime)) {
      body["story_end_time"] = request.storyEndTime;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!Util.isUnset(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!Util.isUnset(request.storyStartTime)) {
      body["story_start_time"] = request.storyStartTime;
    }

    if (!Util.isUnset(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!Util.isUnset(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateStoryResponse>(await this.execute(params, req, runtime), new CreateStoryResponse({}));
  }

  async createStory(request: CreateStoryRequest): Promise<CreateStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStoryWithOptions(request, headers, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!Util.isUnset(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.execute(params, req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

  async csiGetFileInfoWithOptions(request: CsiGetFileInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CsiGetFileInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CsiGetFileInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/get_file_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CsiGetFileInfoResponse>(await this.execute(params, req, runtime), new CsiGetFileInfoResponse({}));
  }

  async csiGetFileInfo(request: CsiGetFileInfoRequest): Promise<CsiGetFileInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.csiGetFileInfoWithOptions(request, headers, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.execute(params, req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(request, headers, runtime);
  }

  async deleteDriveWithOptions(request: DeleteDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDriveResponse>(await this.execute(params, req, runtime), new DeleteDriveResponse({}));
  }

  async deleteDrive(request: DeleteDriveRequest): Promise<DeleteDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDriveWithOptions(request, headers, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.execute(params, req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(request, headers, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.execute(params, req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(request, headers, runtime);
  }

  async deleteRevisionWithOptions(request: DeleteRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRevisionResponse>(await this.execute(params, req, runtime), new DeleteRevisionResponse({}));
  }

  async deleteRevision(request: DeleteRevisionRequest): Promise<DeleteRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRevisionWithOptions(request, headers, runtime);
  }

  async deleteStoryWithOptions(request: DeleteStoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteStoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/delete_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteStoryResponse>(await this.execute(params, req, runtime), new DeleteStoryResponse({}));
  }

  async deleteStory(request: DeleteStoryRequest): Promise<DeleteStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStoryWithOptions(request, headers, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.execute(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(request, headers, runtime);
  }

  async deltaGetLastCursorWithOptions(request: DeltaGetLastCursorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeltaGetLastCursorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeltaGetLastCursor",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_last_cursor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeltaGetLastCursorResponse>(await this.execute(params, req, runtime), new DeltaGetLastCursorResponse({}));
  }

  async deltaGetLastCursor(request: DeltaGetLastCursorRequest): Promise<DeltaGetLastCursorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deltaGetLastCursorWithOptions(request, headers, runtime);
  }

  /**
    * For information about best practices for downloading a file.
    *
    * @param request DownloadFileRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DownloadFileResponse
   */
  async downloadFileWithOptions(request: DownloadFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DownloadFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      query["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      query["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.officeThumbnailProcess)) {
      query["office_thumbnail_process"] = request.officeThumbnailProcess;
    }

    if (!Util.isUnset(request.shareId)) {
      query["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.videoThumbnailProcess)) {
      query["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/download`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $tea.cast<DownloadFileResponse>(await this.execute(params, req, runtime), new DownloadFileResponse({}));
  }

  /**
    * For information about best practices for downloading a file.
    *
    * @param request DownloadFileRequest
    * @return DownloadFileResponse
   */
  async downloadFile(request: DownloadFileRequest): Promise<DownloadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadFileWithOptions(request, headers, runtime);
  }

  async fileAddPermissionWithOptions(request: FileAddPermissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileAddPermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileAddPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/add_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileAddPermissionResponse>(await this.execute(params, req, runtime), new FileAddPermissionResponse({}));
  }

  async fileAddPermission(request: FileAddPermissionRequest): Promise<FileAddPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAddPermissionWithOptions(request, headers, runtime);
  }

  async fileDeleteUserTagsWithOptions(request: FileDeleteUserTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileDeleteUserTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.keyList)) {
      body["key_list"] = request.keyList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileDeleteUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileDeleteUserTagsResponse>(await this.execute(params, req, runtime), new FileDeleteUserTagsResponse({}));
  }

  async fileDeleteUserTags(request: FileDeleteUserTagsRequest): Promise<FileDeleteUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileDeleteUserTagsWithOptions(request, headers, runtime);
  }

  async fileListPermissionWithOptions(request: FileListPermissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileListPermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileListPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<FileListPermissionResponse>(await this.execute(params, req, runtime), new FileListPermissionResponse({}));
  }

  async fileListPermission(request: FileListPermissionRequest): Promise<FileListPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileListPermissionWithOptions(request, headers, runtime);
  }

  /**
    * This operation is an incremental update operation. Take note of the following items:
    * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
    * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
    * *   The existing tags with unique names are not affected.
    *
    * @param request FilePutUserTagsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return FilePutUserTagsResponse
   */
  async filePutUserTagsWithOptions(request: FilePutUserTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FilePutUserTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FilePutUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/put_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FilePutUserTagsResponse>(await this.execute(params, req, runtime), new FilePutUserTagsResponse({}));
  }

  /**
    * This operation is an incremental update operation. Take note of the following items:
    * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
    * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
    * *   The existing tags with unique names are not affected.
    *
    * @param request FilePutUserTagsRequest
    * @return FilePutUserTagsResponse
   */
  async filePutUserTags(request: FilePutUserTagsRequest): Promise<FilePutUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.filePutUserTagsWithOptions(request, headers, runtime);
  }

  async fileRemovePermissionWithOptions(request: FileRemovePermissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileRemovePermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileRemovePermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/remove_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileRemovePermissionResponse>(await this.execute(params, req, runtime), new FileRemovePermissionResponse({}));
  }

  async fileRemovePermission(request: FileRemovePermissionRequest): Promise<FileRemovePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileRemovePermissionWithOptions(request, headers, runtime);
  }

  async getAsyncTaskWithOptions(request: GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAsyncTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.asyncTaskId)) {
      body["async_task_id"] = request.asyncTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/async_task/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncTaskResponse>(await this.execute(params, req, runtime), new GetAsyncTaskResponse({}));
  }

  async getAsyncTask(request: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(request, headers, runtime);
  }

  async getDefaultDriveWithOptions(request: GetDefaultDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDefaultDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get_default_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultDriveResponse>(await this.execute(params, req, runtime), new GetDefaultDriveResponse({}));
  }

  async getDefaultDrive(request: GetDefaultDriveRequest): Promise<GetDefaultDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultDriveWithOptions(request, headers, runtime);
  }

  async getDomainWithOptions(request: GetDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!Util.isUnset(request.getQuotaUsed)) {
      body["get_quota_used"] = request.getQuotaUsed;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDomainResponse>(await this.execute(params, req, runtime), new GetDomainResponse({}));
  }

  async getDomain(request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(request, headers, runtime);
  }

  async getDomainQuotaWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDomainQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDomainQuota",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get_quota`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDomainQuotaResponse>(await this.execute(params, req, runtime), new GetDomainQuotaResponse({}));
  }

  async getDomainQuota(): Promise<GetDomainQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainQuotaWithOptions(headers, runtime);
  }

  async getDownloadUrlWithOptions(request: GetDownloadUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.fileName)) {
      body["file_name"] = request.fileName;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDownloadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_download_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDownloadUrlResponse>(await this.execute(params, req, runtime), new GetDownloadUrlResponse({}));
  }

  async getDownloadUrl(request: GetDownloadUrlRequest): Promise<GetDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadUrlWithOptions(request, headers, runtime);
  }

  async getDriveWithOptions(request: GetDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDriveResponse>(await this.execute(params, req, runtime), new GetDriveResponse({}));
  }

  async getDrive(request: GetDriveRequest): Promise<GetDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDriveWithOptions(request, headers, runtime);
  }

  async getFileWithOptions(request: GetFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileResponse>(await this.execute(params, req, runtime), new GetFileResponse({}));
  }

  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(request, headers, runtime);
  }

  async getGroupWithOptions(request: GetGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.execute(params, req, runtime), new GetGroupResponse({}));
  }

  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(request, headers, runtime);
  }

  async getIdentityToBenefitPkgMappingWithOptions(request: GetIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIdentityToBenefitPkgMappingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!Util.isUnset(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new GetIdentityToBenefitPkgMappingResponse({}));
  }

  async getIdentityToBenefitPkgMapping(request: GetIdentityToBenefitPkgMappingRequest): Promise<GetIdentityToBenefitPkgMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  async getLinkInfoWithOptions(request: GetLinkInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLinkInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLinkInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLinkInfoResponse>(await this.execute(params, req, runtime), new GetLinkInfoResponse({}));
  }

  async getLinkInfo(request: GetLinkInfoRequest): Promise<GetLinkInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoWithOptions(request, headers, runtime);
  }

  async getLinkInfoByUserIdWithOptions(request: GetLinkInfoByUserIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLinkInfoByUserIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLinkInfoByUserId",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info_by_user_id`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLinkInfoByUserIdResponse>(await this.execute(params, req, runtime), new GetLinkInfoByUserIdResponse({}));
  }

  async getLinkInfoByUserId(request: GetLinkInfoByUserIdRequest): Promise<GetLinkInfoByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoByUserIdWithOptions(request, headers, runtime);
  }

  async getRevisionWithOptions(request: GetRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRevisionResponse>(await this.execute(params, req, runtime), new GetRevisionResponse({}));
  }

  async getRevision(request: GetRevisionRequest): Promise<GetRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRevisionWithOptions(request, headers, runtime);
  }

  async getShareLinkWithOptions(request: GetShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetShareLinkResponse>(await this.execute(params, req, runtime), new GetShareLinkResponse({}));
  }

  async getShareLink(request: GetShareLinkRequest): Promise<GetShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkWithOptions(request, headers, runtime);
  }

  async getShareLinkByAnonymousWithOptions(request: GetShareLinkByAnonymousRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetShareLinkByAnonymousResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetShareLinkByAnonymous",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_by_anonymous`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetShareLinkByAnonymousResponse>(await this.execute(params, req, runtime), new GetShareLinkByAnonymousResponse({}));
  }

  async getShareLinkByAnonymous(request: GetShareLinkByAnonymousRequest): Promise<GetShareLinkByAnonymousResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkByAnonymousWithOptions(request, headers, runtime);
  }

  /**
    * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
    *
    * @param request GetShareLinkTokenRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetShareLinkTokenResponse
   */
  async getShareLinkTokenWithOptions(request: GetShareLinkTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetShareLinkTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetShareLinkToken",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_share_token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetShareLinkTokenResponse>(await this.execute(params, req, runtime), new GetShareLinkTokenResponse({}));
  }

  /**
    * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
    *
    * @param request GetShareLinkTokenRequest
    * @return GetShareLinkTokenResponse
   */
  async getShareLinkToken(request: GetShareLinkTokenRequest): Promise<GetShareLinkTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkTokenWithOptions(request, headers, runtime);
  }

  async getStoryWithOptions(request: GetStoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!Util.isUnset(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.imageUrlProcess)) {
      body["image_url_process"] = request.imageUrlProcess;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!Util.isUnset(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetStoryResponse>(await this.execute(params, req, runtime), new GetStoryResponse({}));
  }

  async getStory(request: GetStoryRequest): Promise<GetStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoryWithOptions(request, headers, runtime);
  }

  /**
    * **Before you call this operation, make sure that you are familiar with the [billing](~~425220~~) of Drive and Photo Service**.
    * To call this operation, make sure that the value-added image processing feature is enabled.
    * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
    *
    * @param request GetTaskStatusRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_task_status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.execute(params, req, runtime), new GetTaskStatusResponse({}));
  }

  /**
    * **Before you call this operation, make sure that you are familiar with the [billing](~~425220~~) of Drive and Photo Service**.
    * To call this operation, make sure that the value-added image processing feature is enabled.
    * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
    *
    * @param request GetTaskStatusRequest
    * @return GetTaskStatusResponse
   */
  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(request, headers, runtime);
  }

  async getUploadUrlWithOptions(request: GetUploadUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUploadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_upload_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUploadUrlResponse>(await this.execute(params, req, runtime), new GetUploadUrlResponse({}));
  }

  async getUploadUrl(request: GetUploadUrlRequest): Promise<GetUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUploadUrlWithOptions(request, headers, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.execute(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
    * For more information about best practices, see [Preview videos online](~~427477~~).
    *
    * @param request GetVideoPreviewPlayInfoRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfoWithOptions(request: GetVideoPreviewPlayInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVideoPreviewPlayInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["category"] = request.category;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.getMasterUrl)) {
      body["get_master_url"] = request.getMasterUrl;
    }

    if (!Util.isUnset(request.getWithoutUrl)) {
      body["get_without_url"] = request.getWithoutUrl;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["template_id"] = request.templateId;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoPreviewPlayInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetVideoPreviewPlayInfoResponse>(await this.execute(params, req, runtime), new GetVideoPreviewPlayInfoResponse({}));
  }

  /**
    * For more information about best practices, see [Preview videos online](~~427477~~).
    *
    * @param request GetVideoPreviewPlayInfoRequest
    * @return GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfo(request: GetVideoPreviewPlayInfoRequest): Promise<GetVideoPreviewPlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayInfoWithOptions(request, headers, runtime);
  }

  /**
    * For more information about best practices, see [Preview videos online](~~427477~~).
    *
    * @param request GetVideoPreviewPlayMetaRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMetaWithOptions(request: GetVideoPreviewPlayMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVideoPreviewPlayMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["category"] = request.category;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoPreviewPlayMeta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_meta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetVideoPreviewPlayMetaResponse>(await this.execute(params, req, runtime), new GetVideoPreviewPlayMetaResponse({}));
  }

  /**
    * For more information about best practices, see [Preview videos online](~~427477~~).
    *
    * @param request GetVideoPreviewPlayMetaRequest
    * @return GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMeta(request: GetVideoPreviewPlayMetaRequest): Promise<GetVideoPreviewPlayMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayMetaWithOptions(request, headers, runtime);
  }

  async groupUpdateNameWithOptions(request: GroupUpdateNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GroupUpdateNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GroupUpdateName",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GroupUpdateNameResponse>(await this.execute(params, req, runtime), new GroupUpdateNameResponse({}));
  }

  async groupUpdateName(request: GroupUpdateNameRequest): Promise<GroupUpdateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.groupUpdateNameWithOptions(request, headers, runtime);
  }

  async importUserWithOptions(request: ImportUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImportUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authenticationDisplayName)) {
      body["authentication_display_name"] = request.authenticationDisplayName;
    }

    if (!Util.isUnset(request.authenticationType)) {
      body["authentication_type"] = request.authenticationType;
    }

    if (!Util.isUnset(request.autoCreateDrive)) {
      body["auto_create_drive"] = request.autoCreateDrive;
    }

    if (!Util.isUnset(request.driveTotalSize)) {
      body["drive_total_size"] = request.driveTotalSize;
    }

    if (!Util.isUnset(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!Util.isUnset(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImportUserResponse>(await this.execute(params, req, runtime), new ImportUserResponse({}));
  }

  async importUser(request: ImportUserRequest): Promise<ImportUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importUserWithOptions(request, headers, runtime);
  }

  async investigateFileWithOptions(request: InvestigateFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InvestigateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveFileIds)) {
      body["drive_file_ids"] = request.driveFileIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvestigateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/investigate_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvestigateFileResponse>(await this.execute(params, req, runtime), new InvestigateFileResponse({}));
  }

  async investigateFile(request: InvestigateFileRequest): Promise<InvestigateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.investigateFileWithOptions(request, headers, runtime);
  }

  async linkAccountWithOptions(request: LinkAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LinkAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/link`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LinkAccountResponse>(await this.execute(params, req, runtime), new LinkAccountResponse({}));
  }

  async linkAccount(request: LinkAccountRequest): Promise<LinkAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.linkAccountWithOptions(request, headers, runtime);
  }

  async listAddressGroupsWithOptions(request: ListAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAddressGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAddressGroupsResponse>(await this.execute(params, req, runtime), new ListAddressGroupsResponse({}));
  }

  async listAddressGroups(request: ListAddressGroupsRequest): Promise<ListAddressGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddressGroupsWithOptions(request, headers, runtime);
  }

  async listAssignmentWithOptions(request: ListAssignmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAssignmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!Util.isUnset(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAssignment",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_assignment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAssignmentResponse>(await this.execute(params, req, runtime), new ListAssignmentResponse({}));
  }

  async listAssignment(request: ListAssignmentRequest): Promise<ListAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAssignmentWithOptions(request, headers, runtime);
  }

  async listDeltaWithOptions(request: ListDeltaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeltaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cursor)) {
      body["cursor"] = request.cursor;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDelta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_delta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeltaResponse>(await this.execute(params, req, runtime), new ListDeltaResponse({}));
  }

  async listDelta(request: ListDeltaRequest): Promise<ListDeltaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeltaWithOptions(request, headers, runtime);
  }

  async listDomainsWithOptions(request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.execute(params, req, runtime), new ListDomainsResponse({}));
  }

  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  async listDriveWithOptions(request: ListDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!Util.isUnset(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDriveResponse>(await this.execute(params, req, runtime), new ListDriveResponse({}));
  }

  async listDrive(request: ListDriveRequest): Promise<ListDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDriveWithOptions(request, headers, runtime);
  }

  async listFacegroupsWithOptions(request: ListFacegroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFacegroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    if (!Util.isUnset(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFacegroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_facegroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFacegroupsResponse>(await this.execute(params, req, runtime), new ListFacegroupsResponse({}));
  }

  async listFacegroups(request: ListFacegroupsRequest): Promise<ListFacegroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFacegroupsWithOptions(request, headers, runtime);
  }

  async listFileWithOptions(request: ListFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["category"] = request.category;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!Util.isUnset(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFileResponse>(await this.execute(params, req, runtime), new ListFileResponse({}));
  }

  async listFile(request: ListFileRequest): Promise<ListFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(request, headers, runtime);
  }

  async listGroupWithOptions(request: ListGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupResponse>(await this.execute(params, req, runtime), new ListGroupResponse({}));
  }

  async listGroup(request: ListGroupRequest): Promise<ListGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  async listGroupMemberWithOptions(request: ListGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupMemberResponse>(await this.execute(params, req, runtime), new ListGroupMemberResponse({}));
  }

  async listGroupMember(request: ListGroupMemberRequest): Promise<ListGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupMemberWithOptions(request, headers, runtime);
  }

  async listIdentityRoleWithOptions(request: ListIdentityRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIdentityRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIdentityRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_identity_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIdentityRoleResponse>(await this.execute(params, req, runtime), new ListIdentityRoleResponse({}));
  }

  async listIdentityRole(request: ListIdentityRoleRequest): Promise<ListIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityRoleWithOptions(request, headers, runtime);
  }

  async listIdentityToBenefitPkgMappingWithOptions(request: ListIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIdentityToBenefitPkgMappingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    if (!Util.isUnset(request.includeExpired)) {
      body["include_expired"] = request.includeExpired;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new ListIdentityToBenefitPkgMappingResponse({}));
  }

  async listIdentityToBenefitPkgMapping(request: ListIdentityToBenefitPkgMappingRequest): Promise<ListIdentityToBenefitPkgMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  async listMyDrivesWithOptions(request: ListMyDrivesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMyDrivesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMyDrives",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_drives`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMyDrivesResponse>(await this.execute(params, req, runtime), new ListMyDrivesResponse({}));
  }

  async listMyDrives(request: ListMyDrivesRequest): Promise<ListMyDrivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyDrivesWithOptions(request, headers, runtime);
  }

  async listMyGroupDriveWithOptions(request: ListMyGroupDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMyGroupDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMyGroupDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_group_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMyGroupDriveResponse>(await this.execute(params, req, runtime), new ListMyGroupDriveResponse({}));
  }

  async listMyGroupDrive(request: ListMyGroupDriveRequest): Promise<ListMyGroupDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyGroupDriveWithOptions(request, headers, runtime);
  }

  async listReceivedFileWithOptions(request: ListReceivedFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListReceivedFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListReceivedFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_received_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListReceivedFileResponse>(await this.execute(params, req, runtime), new ListReceivedFileResponse({}));
  }

  async listReceivedFile(request: ListReceivedFileRequest): Promise<ListReceivedFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReceivedFileWithOptions(request, headers, runtime);
  }

  async listRecyclebinWithOptions(request: ListRecyclebinRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRecyclebinResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRecyclebinResponse>(await this.execute(params, req, runtime), new ListRecyclebinResponse({}));
  }

  async listRecyclebin(request: ListRecyclebinRequest): Promise<ListRecyclebinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecyclebinWithOptions(request, headers, runtime);
  }

  async listRevisionWithOptions(request: ListRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRevisionResponse>(await this.execute(params, req, runtime), new ListRevisionResponse({}));
  }

  async listRevision(request: ListRevisionRequest): Promise<ListRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRevisionWithOptions(request, headers, runtime);
  }

  /**
    * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
    *
    * @param request ListShareLinkRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListShareLinkResponse
   */
  async listShareLinkWithOptions(request: ListShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      body["creator"] = request.creator;
    }

    if (!Util.isUnset(request.includeCancelled)) {
      body["include_cancelled"] = request.includeCancelled;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListShareLinkResponse>(await this.execute(params, req, runtime), new ListShareLinkResponse({}));
  }

  /**
    * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
    *
    * @param request ListShareLinkRequest
    * @return ListShareLinkResponse
   */
  async listShareLink(request: ListShareLinkRequest): Promise<ListShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShareLinkWithOptions(request, headers, runtime);
  }

  /**
    * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
    *
    * @param request ListTagsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagsResponse
   */
  async listTagsWithOptions(request: ListTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagsResponse>(await this.execute(params, req, runtime), new ListTagsResponse({}));
  }

  /**
    * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
    *
    * @param request ListTagsRequest
    * @return ListTagsResponse
   */
  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  async listUploadedPartsWithOptions(request: ListUploadedPartsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUploadedPartsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.partNumberMarker)) {
      body["part_number_marker"] = request.partNumberMarker;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUploadedParts",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_uploaded_parts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUploadedPartsResponse>(await this.execute(params, req, runtime), new ListUploadedPartsResponse({}));
  }

  async listUploadedParts(request: ListUploadedPartsRequest): Promise<ListUploadedPartsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUploadedPartsWithOptions(request, headers, runtime);
  }

  async listUserWithOptions(request: ListUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserResponse>(await this.execute(params, req, runtime), new ListUserResponse({}));
  }

  async listUser(request: ListUserRequest): Promise<ListUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserWithOptions(request, headers, runtime);
  }

  async moveFileWithOptions(request: MoveFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MoveFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/move`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MoveFileResponse>(await this.execute(params, req, runtime), new MoveFileResponse({}));
  }

  async moveFile(request: MoveFileRequest): Promise<MoveFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveFileWithOptions(request, headers, runtime);
  }

  async queryOrderPriceWithOptions(request: QueryOrderPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryOrderPriceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!Util.isUnset(request.package)) {
      body["package"] = request.package;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!Util.isUnset(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderPrice",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/query_order_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderPriceResponse>(await this.execute(params, req, runtime), new QueryOrderPriceResponse({}));
  }

  async queryOrderPrice(request: QueryOrderPriceRequest): Promise<QueryOrderPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrderPriceWithOptions(request, headers, runtime);
  }

  async removeFaceGroupFileWithOptions(request: RemoveFaceGroupFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveFaceGroupFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.faceGroupId)) {
      body["face_group_id"] = request.faceGroupId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveFaceGroupFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/albums/unassign_facegroup_item`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveFaceGroupFileResponse>(await this.execute(params, req, runtime), new RemoveFaceGroupFileResponse({}));
  }

  async removeFaceGroupFile(request: RemoveFaceGroupFileRequest): Promise<RemoveFaceGroupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFaceGroupFileWithOptions(request, headers, runtime);
  }

  async removeGroupMemberWithOptions(request: RemoveGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveGroupMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!Util.isUnset(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/remove_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveGroupMemberResponse>(await this.execute(params, req, runtime), new RemoveGroupMemberResponse({}));
  }

  async removeGroupMember(request: RemoveGroupMemberRequest): Promise<RemoveGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeGroupMemberWithOptions(request, headers, runtime);
  }

  async removeStoryFilesWithOptions(request: RemoveStoryFilesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveStoryFilesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/remove_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveStoryFilesResponse>(await this.execute(params, req, runtime), new RemoveStoryFilesResponse({}));
  }

  async removeStoryFiles(request: RemoveStoryFilesRequest): Promise<RemoveStoryFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeStoryFilesWithOptions(request, headers, runtime);
  }

  async restoreFileWithOptions(request: RestoreFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestoreFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestoreFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestoreFileResponse>(await this.execute(params, req, runtime), new RestoreFileResponse({}));
  }

  async restoreFile(request: RestoreFileRequest): Promise<RestoreFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreFileWithOptions(request, headers, runtime);
  }

  async restoreRevisionWithOptions(request: RestoreRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestoreRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestoreRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestoreRevisionResponse>(await this.execute(params, req, runtime), new RestoreRevisionResponse({}));
  }

  async restoreRevision(request: RestoreRevisionRequest): Promise<RestoreRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreRevisionWithOptions(request, headers, runtime);
  }

  async scanFileWithOptions(request: ScanFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScanFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScanFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScanFileResponse>(await this.execute(params, req, runtime), new ScanFileResponse({}));
  }

  async scanFile(request: ScanFileRequest): Promise<ScanFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanFileWithOptions(request, headers, runtime);
  }

  async searchAddressGroupsWithOptions(request: SearchAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchAddressGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressLevel)) {
      body["address_level"] = request.addressLevel;
    }

    if (!Util.isUnset(request.addressNames)) {
      body["address_names"] = request.addressNames;
    }

    if (!Util.isUnset(request.brGeoPoint)) {
      body["br_geo_point"] = request.brGeoPoint;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.tlGeoPoint)) {
      body["tl_geo_point"] = request.tlGeoPoint;
    }

    if (!Util.isUnset(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/search_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchAddressGroupsResponse>(await this.execute(params, req, runtime), new SearchAddressGroupsResponse({}));
  }

  async searchAddressGroups(request: SearchAddressGroupsRequest): Promise<SearchAddressGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchAddressGroupsWithOptions(request, headers, runtime);
  }

  async searchDomainsWithOptions(request: SearchDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchDomainsResponse>(await this.execute(params, req, runtime), new SearchDomainsResponse({}));
  }

  async searchDomains(request: SearchDomainsRequest): Promise<SearchDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDomainsWithOptions(request, headers, runtime);
  }

  async searchDriveWithOptions(request: SearchDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!Util.isUnset(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchDriveResponse>(await this.execute(params, req, runtime), new SearchDriveResponse({}));
  }

  async searchDrive(request: SearchDriveRequest): Promise<SearchDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDriveWithOptions(request, headers, runtime);
  }

  async searchFileWithOptions(request: SearchFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchFileResponse>(await this.execute(params, req, runtime), new SearchFileResponse({}));
  }

  async searchFile(request: SearchFileRequest): Promise<SearchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchFileWithOptions(request, headers, runtime);
  }

  async searchShareLinkWithOptions(request: SearchShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creators)) {
      body["creators"] = request.creators;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchShareLinkResponse>(await this.execute(params, req, runtime), new SearchShareLinkResponse({}));
  }

  async searchShareLink(request: SearchShareLinkRequest): Promise<SearchShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchShareLinkWithOptions(request, headers, runtime);
  }

  async searchSimilarImageClustersWithOptions(request: SearchSimilarImageClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchSimilarImageClustersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchSimilarImageClusters",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/query_similar_image_clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchSimilarImageClustersResponse>(await this.execute(params, req, runtime), new SearchSimilarImageClustersResponse({}));
  }

  async searchSimilarImageClusters(request: SearchSimilarImageClustersRequest): Promise<SearchSimilarImageClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchSimilarImageClustersWithOptions(request, headers, runtime);
  }

  async searchStoriesWithOptions(request: SearchStoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchStoriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!Util.isUnset(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!Util.isUnset(request.createTimeRange)) {
      body["create_time_range"] = request.createTimeRange;
    }

    if (!Util.isUnset(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.faceGroupIds)) {
      body["face_group_ids"] = request.faceGroupIds;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    if (!Util.isUnset(request.sort)) {
      body["sort"] = request.sort;
    }

    if (!Util.isUnset(request.storyEndTimeRange)) {
      body["story_end_time_range"] = request.storyEndTimeRange;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!Util.isUnset(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!Util.isUnset(request.storyStartTimeRange)) {
      body["story_start_time_range"] = request.storyStartTimeRange;
    }

    if (!Util.isUnset(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    if (!Util.isUnset(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!Util.isUnset(request.withEmptyStories)) {
      body["with_empty_stories"] = request.withEmptyStories;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchStories",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/find_stories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchStoriesResponse>(await this.execute(params, req, runtime), new SearchStoriesResponse({}));
  }

  async searchStories(request: SearchStoriesRequest): Promise<SearchStoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchStoriesWithOptions(request, headers, runtime);
  }

  async searchUserWithOptions(request: SearchUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!Util.isUnset(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!Util.isUnset(request.nickNameForFuzzy)) {
      body["nick_name_for_fuzzy"] = request.nickNameForFuzzy;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchUserResponse>(await this.execute(params, req, runtime), new SearchUserResponse({}));
  }

  async searchUser(request: SearchUserRequest): Promise<SearchUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchUserWithOptions(request, headers, runtime);
  }

  /**
    * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).<props="intl">只发布国际站</props>
    * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).<props="intl">只发布国际站</props>
    *
    * @param request TokenRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return TokenResponse
   */
  async tokenWithOptions(request: TokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assertion)) {
      body["assertion"] = request.assertion;
    }

    if (!Util.isUnset(request.clientId)) {
      body["client_id"] = request.clientId;
    }

    if (!Util.isUnset(request.clientSecret)) {
      body["client_secret"] = request.clientSecret;
    }

    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.grantType)) {
      body["grant_type"] = request.grantType;
    }

    if (!Util.isUnset(request.redirectUri)) {
      body["redirect_uri"] = request.redirectUri;
    }

    if (!Util.isUnset(request.refreshToken)) {
      body["refresh_token"] = request.refreshToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Token",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TokenResponse>(await this.execute(params, req, runtime), new TokenResponse({}));
  }

  /**
    * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).<props="intl">只发布国际站</props>
    * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).<props="intl">只发布国际站</props>
    *
    * @param request TokenRequest
    * @return TokenResponse
   */
  async token(request: TokenRequest): Promise<TokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tokenWithOptions(request, headers, runtime);
  }

  async trashFileWithOptions(request: TrashFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TrashFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TrashFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/trash`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrashFileResponse>(await this.execute(params, req, runtime), new TrashFileResponse({}));
  }

  async trashFile(request: TrashFileRequest): Promise<TrashFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.trashFileWithOptions(request, headers, runtime);
  }

  async unLinkAccountWithOptions(request: UnLinkAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnLinkAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!Util.isUnset(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnLinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/unlink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnLinkAccountResponse>(await this.execute(params, req, runtime), new UnLinkAccountResponse({}));
  }

  async unLinkAccount(request: UnLinkAccountRequest): Promise<UnLinkAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unLinkAccountWithOptions(request, headers, runtime);
  }

  async updateDomainWithOptions(request: UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!Util.isUnset(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!Util.isUnset(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!Util.isUnset(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!Util.isUnset(request.publishedAppAccessStrategy)) {
      body["published_app_access_strategy"] = request.publishedAppAccessStrategy;
    }

    if (!Util.isUnset(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!Util.isUnset(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainResponse>(await this.execute(params, req, runtime), new UpdateDomainResponse({}));
  }

  async updateDomain(request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(request, headers, runtime);
  }

  async updateDriveWithOptions(request: UpdateDriveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDriveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!Util.isUnset(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDriveResponse>(await this.execute(params, req, runtime), new UpdateDriveResponse({}));
  }

  async updateDrive(request: UpdateDriveRequest): Promise<UpdateDriveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDriveWithOptions(request, headers, runtime);
  }

  async updateFacegroupWithOptions(request: UpdateFacegroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFacegroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.groupCoverFaceId)) {
      body["group_cover_face_id"] = request.groupCoverFaceId;
    }

    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!Util.isUnset(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFacegroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_facegroup_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFacegroupResponse>(await this.execute(params, req, runtime), new UpdateFacegroupResponse({}));
  }

  async updateFacegroup(request: UpdateFacegroupRequest): Promise<UpdateFacegroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFacegroupWithOptions(request, headers, runtime);
  }

  async updateFileWithOptions(request: UpdateFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!Util.isUnset(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.starred)) {
      body["starred"] = request.starred;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileResponse>(await this.execute(params, req, runtime), new UpdateFileResponse({}));
  }

  async updateFile(request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileWithOptions(request, headers, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupResponse>(await this.execute(params, req, runtime), new UpdateGroupResponse({}));
  }

  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(request, headers, runtime);
  }

  async updateIdentityToBenefitPkgMappingWithOptions(request: UpdateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIdentityToBenefitPkgMappingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!Util.isUnset(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!Util.isUnset(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new UpdateIdentityToBenefitPkgMappingResponse({}));
  }

  async updateIdentityToBenefitPkgMapping(request: UpdateIdentityToBenefitPkgMappingRequest): Promise<UpdateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  async updateRevisionWithOptions(request: UpdateRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!Util.isUnset(request.keepForever)) {
      body["keep_forever"] = request.keepForever;
    }

    if (!Util.isUnset(request.revisionDescription)) {
      body["revision_description"] = request.revisionDescription;
    }

    if (!Util.isUnset(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRevisionResponse>(await this.execute(params, req, runtime), new UpdateRevisionResponse({}));
  }

  async updateRevision(request: UpdateRevisionRequest): Promise<UpdateRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRevisionWithOptions(request, headers, runtime);
  }

  async updateShareLinkWithOptions(request: UpdateShareLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateShareLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!Util.isUnset(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!Util.isUnset(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!Util.isUnset(request.downloadCount)) {
      body["download_count"] = request.downloadCount;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.previewCount)) {
      body["preview_count"] = request.previewCount;
    }

    if (!Util.isUnset(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!Util.isUnset(request.reportCount)) {
      body["report_count"] = request.reportCount;
    }

    if (!Util.isUnset(request.saveCount)) {
      body["save_count"] = request.saveCount;
    }

    if (!Util.isUnset(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!Util.isUnset(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!Util.isUnset(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!Util.isUnset(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.videoPreviewCount)) {
      body["video_preview_count"] = request.videoPreviewCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateShareLinkResponse>(await this.execute(params, req, runtime), new UpdateShareLinkResponse({}));
  }

  async updateShareLink(request: UpdateShareLinkRequest): Promise<UpdateShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateShareLinkWithOptions(request, headers, runtime);
  }

  async updateStoryWithOptions(request: UpdateStoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateStoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cover)) {
      body["cover"] = request.cover;
    }

    if (!Util.isUnset(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!Util.isUnset(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!Util.isUnset(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!Util.isUnset(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateStoryResponse>(await this.execute(params, req, runtime), new UpdateStoryResponse({}));
  }

  async updateStory(request: UpdateStoryRequest): Promise<UpdateStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStoryWithOptions(request, headers, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!Util.isUnset(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.execute(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

}
