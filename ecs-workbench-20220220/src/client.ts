// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetInstanceRecordConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRecordConfigResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  root?: GetInstanceRecordConfigResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: GetInstanceRecordConfigResponseBodyRoot,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRecordConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceRecordConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceRecordConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsRequest extends $tea.Model {
  /**
   * @example
   * i-xxx
   */
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  root?: ListInstanceRecordsResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: ListInstanceRecordsResponseBodyRoot,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequest extends $tea.Model {
  instanceLoginInfo?: LoginInstanceRequestInstanceLoginInfo;
  partnerInfo?: LoginInstanceRequestPartnerInfo;
  userAccount?: LoginInstanceRequestUserAccount;
  static names(): { [key: string]: string } {
    return {
      instanceLoginInfo: 'InstanceLoginInfo',
      partnerInfo: 'PartnerInfo',
      userAccount: 'UserAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLoginInfo: LoginInstanceRequestInstanceLoginInfo,
      partnerInfo: LoginInstanceRequestPartnerInfo,
      userAccount: LoginInstanceRequestUserAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * abc-123
   */
  requestId?: string;
  root?: LoginInstanceResponseBodyRoot;
  /**
   * @example
   * true/false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: LoginInstanceResponseBodyRoot,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoginInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoginInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceRecordConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @example
   * acs:oss:cn-shanghai:123:workbench-record-123-1/record
   */
  recordStorageTarget?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      expirationDays: 'ExpirationDays',
      instanceId: 'InstanceId',
      recordStorageTarget: 'RecordStorageTarget',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      expirationDays: 'number',
      instanceId: 'string',
      recordStorageTarget: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceRecordConfigResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  root?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceRecordConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInstanceRecordConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetInstanceRecordConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewInstanceRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-123
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  terminalSessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      terminalSessionToken: 'TerminalSessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      terminalSessionToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewInstanceRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  root?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewInstanceRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ViewInstanceRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ViewInstanceRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRecordConfigResponseBodyRoot extends $tea.Model {
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @example
   * i-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @example
   * acs:oss:cn-shanghai:123:workbench-record-123-1/record
   */
  recordStorageTarget?: string;
  static names(): { [key: string]: string } {
    return {
      expirationDays: 'ExpirationDays',
      instanceId: 'InstanceId',
      parentId: 'ParentId',
      recordStorageTarget: 'RecordStorageTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDays: 'number',
      instanceId: 'string',
      parentId: 'string',
      recordStorageTarget: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponseBodyRootRecordList extends $tea.Model {
  /**
   * @example
   * 1234
   */
  accountId?: number;
  /**
   * @example
   * 2023-11-16T02:59:39Z
   */
  expireTime?: string;
  /**
   * @example
   * 2023-04-10T12:41:28Z
   */
  gmtCreate?: string;
  /**
   * @example
   * i-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * https://ecs-workbench.aliyun.com/view/instance/record/replay/abc
   */
  instanceRecordUrl?: string;
  /**
   * @example
   * 123
   */
  recordDurationMillis?: number;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * abc
   */
  terminalSessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceRecordUrl: 'InstanceRecordUrl',
      recordDurationMillis: 'RecordDurationMillis',
      status: 'Status',
      terminalSessionToken: 'TerminalSessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      expireTime: 'string',
      gmtCreate: 'string',
      instanceId: 'string',
      instanceRecordUrl: 'string',
      recordDurationMillis: 'number',
      status: 'string',
      terminalSessionToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponseBodyRoot extends $tea.Model {
  recordList?: ListInstanceRecordsResponseBodyRootRecordList[];
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      recordList: 'RecordList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordList: { 'type': 'array', 'itemType': ListInstanceRecordsResponseBodyRootRecordList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfoOptionsContainerInfo extends $tea.Model {
  /**
   * @example
   * abcdef
   */
  clusterId?: string;
  /**
   * @example
   * abc
   */
  clusterName?: string;
  /**
   * @example
   * abc
   */
  containerName?: string;
  /**
   * @example
   * abc
   */
  deployment?: string;
  /**
   * @example
   * abc
   */
  endpoint?: string;
  /**
   * @example
   * {"abc":"def"}
   */
  headers?: { [key: string]: any };
  /**
   * @example
   * abc
   */
  namespace?: string;
  /**
   * @example
   * abc
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerName: 'ContainerName',
      deployment: 'Deployment',
      endpoint: 'Endpoint',
      headers: 'Headers',
      namespace: 'Namespace',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      containerName: 'string',
      deployment: 'string',
      endpoint: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfoOptions extends $tea.Model {
  audioMuteSeconds?: number;
  containerInfo?: LoginInstanceRequestInstanceLoginInfoOptionsContainerInfo;
  fixedHeight?: number;
  fixedWidth?: number;
  /**
   * @example
   * abc
   */
  notificationEventTypes?: string;
  /**
   * @example
   * abc
   */
  notificationRecipientUrl?: string;
  /**
   * @example
   * 10
   */
  notificationRetryIntervalSeconds?: number;
  /**
   * @example
   * 3
   */
  notificationRetryLimit?: number;
  operationDisableSeconds?: number;
  /**
   * @example
   * abc
   */
  sessionControl?: string;
  videoFreezeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      audioMuteSeconds: 'AudioMuteSeconds',
      containerInfo: 'ContainerInfo',
      fixedHeight: 'FixedHeight',
      fixedWidth: 'FixedWidth',
      notificationEventTypes: 'NotificationEventTypes',
      notificationRecipientUrl: 'NotificationRecipientUrl',
      notificationRetryIntervalSeconds: 'NotificationRetryIntervalSeconds',
      notificationRetryLimit: 'NotificationRetryLimit',
      operationDisableSeconds: 'OperationDisableSeconds',
      sessionControl: 'SessionControl',
      videoFreezeSeconds: 'VideoFreezeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMuteSeconds: 'number',
      containerInfo: LoginInstanceRequestInstanceLoginInfoOptionsContainerInfo,
      fixedHeight: 'number',
      fixedWidth: 'number',
      notificationEventTypes: 'string',
      notificationRecipientUrl: 'string',
      notificationRetryIntervalSeconds: 'number',
      notificationRetryLimit: 'number',
      operationDisableSeconds: 'number',
      sessionControl: 'string',
      videoFreezeSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfo extends $tea.Model {
  /**
   * @example
   * password/certificate
   */
  authenticationType?: string;
  /**
   * @example
   * ----begin----
   * ----end----
   */
  certificate?: string;
  credentialToken?: string;
  dockerContainerName?: string;
  dockerExec?: string;
  /**
   * @example
   * 123
   */
  durationSeconds?: number;
  /**
   * @example
   * 2022-11-30 00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 127.0.0.1
   */
  host?: string;
  /**
   * @example
   * i-123
   */
  instanceId?: string;
  /**
   * @example
   * ecs/eci/ack
   */
  instanceType?: string;
  loginByInstanceCredential?: boolean;
  loginByInstanceShortcut?: boolean;
  /**
   * @example
   * vpc/classic
   */
  networkAccessMode?: string;
  options?: LoginInstanceRequestInstanceLoginInfoOptions;
  /**
   * @example
   * xxxx
   */
  passPhrase?: string;
  /**
   * @example
   * xxxxx
   */
  password?: string;
  /**
   * @example
   * 22/3389
   */
  port?: number;
  /**
   * @example
   * ssh/rdp/ack
   */
  protocol?: string;
  /**
   * @example
   * cn-hangzhou/cn-beijing
   */
  regionId?: string;
  resourceGroupId?: string;
  shortcutToken?: string;
  /**
   * @example
   * root/Administrator
   */
  username?: string;
  /**
   * @example
   * vpc-abc
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      certificate: 'Certificate',
      credentialToken: 'CredentialToken',
      dockerContainerName: 'DockerContainerName',
      dockerExec: 'DockerExec',
      durationSeconds: 'DurationSeconds',
      expireTime: 'ExpireTime',
      host: 'Host',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      loginByInstanceCredential: 'LoginByInstanceCredential',
      loginByInstanceShortcut: 'LoginByInstanceShortcut',
      networkAccessMode: 'NetworkAccessMode',
      options: 'Options',
      passPhrase: 'PassPhrase',
      password: 'Password',
      port: 'Port',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shortcutToken: 'ShortcutToken',
      username: 'Username',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      certificate: 'string',
      credentialToken: 'string',
      dockerContainerName: 'string',
      dockerExec: 'string',
      durationSeconds: 'number',
      expireTime: 'string',
      host: 'string',
      instanceId: 'string',
      instanceType: 'string',
      loginByInstanceCredential: 'boolean',
      loginByInstanceShortcut: 'boolean',
      networkAccessMode: 'string',
      options: LoginInstanceRequestInstanceLoginInfoOptions,
      passPhrase: 'string',
      password: 'string',
      port: 'number',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shortcutToken: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestPartnerInfo extends $tea.Model {
  /**
   * @example
   * abc
   */
  partnerId?: string;
  /**
   * @example
   * abc
   */
  partnerName?: string;
  static names(): { [key: string]: string } {
    return {
      partnerId: 'PartnerId',
      partnerName: 'PartnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partnerId: 'string',
      partnerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestUserAccountOptions extends $tea.Model {
  /**
   * @example
   * 3
   */
  loginLimit?: number;
  static names(): { [key: string]: string } {
    return {
      loginLimit: 'LoginLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestUserAccount extends $tea.Model {
  /**
   * @example
   * 1234
   */
  accountId?: number;
  /**
   * @example
   * aas
   */
  accountPlatform?: string;
  /**
   * @example
   * 2/3/4
   */
  accountStructure?: string;
  /**
   * @example
   * 100
   */
  durationSeconds?: number;
  /**
   * @example
   * 123abc
   */
  empId?: string;
  /**
   * @example
   * 2022-11-30 00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * abc
   */
  loginName?: string;
  options?: LoginInstanceRequestUserAccountOptions;
  /**
   * @example
   * 1234
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountPlatform: 'AccountPlatform',
      accountStructure: 'AccountStructure',
      durationSeconds: 'DurationSeconds',
      empId: 'EmpId',
      expireTime: 'ExpireTime',
      loginName: 'LoginName',
      options: 'Options',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountPlatform: 'string',
      accountStructure: 'string',
      durationSeconds: 'number',
      empId: 'string',
      expireTime: 'string',
      loginName: 'string',
      options: LoginInstanceRequestUserAccountOptions,
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootDisposableAccount extends $tea.Model {
  /**
   * @example
   * abc
   */
  loginFormActionUrl?: string;
  /**
   * @example
   * abc
   */
  loginUrl?: string;
  static names(): { [key: string]: string } {
    return {
      loginFormActionUrl: 'LoginFormActionUrl',
      loginUrl: 'LoginUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginFormActionUrl: 'string',
      loginUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView extends $tea.Model {
  /**
   * @example
   * abc
   */
  defaultViewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      defaultViewUrl: 'DefaultViewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultViewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootInstanceLoginInfoList extends $tea.Model {
  /**
   * @example
   * i-abc
   */
  instanceId?: string;
  /**
   * @example
   * 134
   */
  instanceLoginToken?: string;
  instanceLoginView?: LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView;
  /**
   * @example
   * true
   */
  loginSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceLoginToken: 'InstanceLoginToken',
      instanceLoginView: 'InstanceLoginView',
      loginSuccess: 'LoginSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceLoginToken: 'string',
      instanceLoginView: LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView,
      loginSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootSessionControl extends $tea.Model {
  /**
   * @example
   * abc
   */
  baseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRoot extends $tea.Model {
  disposableAccount?: LoginInstanceResponseBodyRootDisposableAccount;
  instanceLoginInfoList?: LoginInstanceResponseBodyRootInstanceLoginInfoList[];
  sessionControl?: LoginInstanceResponseBodyRootSessionControl;
  static names(): { [key: string]: string } {
    return {
      disposableAccount: 'DisposableAccount',
      instanceLoginInfoList: 'InstanceLoginInfoList',
      sessionControl: 'SessionControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disposableAccount: LoginInstanceResponseBodyRootDisposableAccount,
      instanceLoginInfoList: { 'type': 'array', 'itemType': LoginInstanceResponseBodyRootInstanceLoginInfoList },
      sessionControl: LoginInstanceResponseBodyRootSessionControl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecs-workbench", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取实例录屏配置
   * 
   * @param request - GetInstanceRecordConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceRecordConfigResponse
   */
  async getInstanceRecordConfigWithOptions(request: GetInstanceRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceRecordConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceRecordConfig",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceRecordConfigResponse>(await this.callApi(params, req, runtime), new GetInstanceRecordConfigResponse({}));
  }

  /**
   * 获取实例录屏配置
   * 
   * @param request - GetInstanceRecordConfigRequest
   * @returns GetInstanceRecordConfigResponse
   */
  async getInstanceRecordConfig(request: GetInstanceRecordConfigRequest): Promise<GetInstanceRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceRecordConfigWithOptions(request, runtime);
  }

  /**
   * 获取实例录屏记录列表
   * 
   * @param request - ListInstanceRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceRecordsResponse
   */
  async listInstanceRecordsWithOptions(request: ListInstanceRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceRecords",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceRecordsResponse>(await this.callApi(params, req, runtime), new ListInstanceRecordsResponse({}));
  }

  /**
   * 获取实例录屏记录列表
   * 
   * @param request - ListInstanceRecordsRequest
   * @returns ListInstanceRecordsResponse
   */
  async listInstanceRecords(request: ListInstanceRecordsRequest): Promise<ListInstanceRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceRecordsWithOptions(request, runtime);
  }

  /**
   * 登录实例
   * 
   * @param request - LoginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginInstanceResponse
   */
  async loginInstanceWithOptions(request: LoginInstanceRequest, runtime: $Util.RuntimeOptions): Promise<LoginInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceLoginInfo)) {
      query["InstanceLoginInfo"] = request.instanceLoginInfo;
    }

    if (!Util.isUnset(request.partnerInfo)) {
      query["PartnerInfo"] = request.partnerInfo;
    }

    if (!Util.isUnset(request.userAccount)) {
      query["UserAccount"] = request.userAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LoginInstance",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoginInstanceResponse>(await this.callApi(params, req, runtime), new LoginInstanceResponse({}));
  }

  /**
   * 登录实例
   * 
   * @param request - LoginInstanceRequest
   * @returns LoginInstanceResponse
   */
  async loginInstance(request: LoginInstanceRequest): Promise<LoginInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

  /**
   * 设置实例录屏配置
   * 
   * @param request - SetInstanceRecordConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceRecordConfigResponse
   */
  async setInstanceRecordConfigWithOptions(request: SetInstanceRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceRecordConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.expirationDays)) {
      body["ExpirationDays"] = request.expirationDays;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.recordStorageTarget)) {
      body["RecordStorageTarget"] = request.recordStorageTarget;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetInstanceRecordConfig",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetInstanceRecordConfigResponse>(await this.callApi(params, req, runtime), new SetInstanceRecordConfigResponse({}));
  }

  /**
   * 设置实例录屏配置
   * 
   * @param request - SetInstanceRecordConfigRequest
   * @returns SetInstanceRecordConfigResponse
   */
  async setInstanceRecordConfig(request: SetInstanceRecordConfigRequest): Promise<SetInstanceRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceRecordConfigWithOptions(request, runtime);
  }

  /**
   * 查看实例录屏内容
   * 
   * @param request - ViewInstanceRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewInstanceRecordsResponse
   */
  async viewInstanceRecordsWithOptions(request: ViewInstanceRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ViewInstanceRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.terminalSessionToken)) {
      body["TerminalSessionToken"] = request.terminalSessionToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ViewInstanceRecords",
      version: "2022-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewInstanceRecordsResponse>(await this.callApi(params, req, runtime), new ViewInstanceRecordsResponse({}));
  }

  /**
   * 查看实例录屏内容
   * 
   * @param request - ViewInstanceRecordsRequest
   * @returns ViewInstanceRecordsResponse
   */
  async viewInstanceRecords(request: ViewInstanceRecordsRequest): Promise<ViewInstanceRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewInstanceRecordsWithOptions(request, runtime);
  }

}
