// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginInstanceRequestInstanceLoginInfoEncryptionOptions extends $dara.Model {
  enabled?: boolean;
  KMSKeyId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      KMSKeyId: 'KMSKeyId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      KMSKeyId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfoOptionsContainerInfo extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfoOptions extends $dara.Model {
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

  validate() {
    if(this.containerInfo && typeof (this.containerInfo as any).validate === 'function') {
      (this.containerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestInstanceLoginInfo extends $dara.Model {
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
  encryptionOptions?: LoginInstanceRequestInstanceLoginInfoEncryptionOptions;
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
      encryptionOptions: 'EncryptionOptions',
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
      encryptionOptions: LoginInstanceRequestInstanceLoginInfoEncryptionOptions,
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

  validate() {
    if(this.encryptionOptions && typeof (this.encryptionOptions as any).validate === 'function') {
      (this.encryptionOptions as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestPartnerInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestUserAccountOptions extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequestUserAccount extends $dara.Model {
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

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequest extends $dara.Model {
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

  validate() {
    if(this.instanceLoginInfo && typeof (this.instanceLoginInfo as any).validate === 'function') {
      (this.instanceLoginInfo as any).validate();
    }
    if(this.partnerInfo && typeof (this.partnerInfo as any).validate === 'function') {
      (this.partnerInfo as any).validate();
    }
    if(this.userAccount && typeof (this.userAccount as any).validate === 'function') {
      (this.userAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

