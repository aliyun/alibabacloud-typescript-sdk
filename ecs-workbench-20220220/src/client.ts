// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  code?: string;
  message?: string;
  requestId?: string;
  root?: LoginInstanceResponseBodyRoot;
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

export class LoginInstanceRequestInstanceLoginInfoOptionsContainerInfo extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  containerName?: string;
  deployment?: string;
  endpoint?: string;
  headers?: { [key: string]: any };
  namespace?: string;
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
  notificationEventTypes?: string;
  notificationRecipientUrl?: string;
  notificationRetryIntervalSeconds?: number;
  notificationRetryLimit?: number;
  operationDisableSeconds?: number;
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
  authenticationType?: string;
  certificate?: string;
  credentialToken?: string;
  dockerContainerName?: string;
  dockerExec?: string;
  durationSeconds?: number;
  expireTime?: string;
  host?: string;
  instanceId?: string;
  instanceType?: string;
  loginByInstanceCredential?: boolean;
  loginByInstanceShortcut?: boolean;
  networkAccessMode?: string;
  options?: LoginInstanceRequestInstanceLoginInfoOptions;
  passPhrase?: string;
  password?: string;
  port?: number;
  protocol?: string;
  regionId?: string;
  resourceGroupId?: string;
  shortcutToken?: string;
  username?: string;
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
  partnerId?: string;
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
  accountId?: number;
  accountPlatform?: string;
  accountStructure?: string;
  durationSeconds?: number;
  empId?: string;
  expireTime?: string;
  loginName?: string;
  options?: LoginInstanceRequestUserAccountOptions;
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
  loginFormActionUrl?: string;
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
  instanceId?: string;
  instanceLoginToken?: string;
  instanceLoginView?: LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView;
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

  async loginInstance(request: LoginInstanceRequest): Promise<LoginInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

}
