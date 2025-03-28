// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class JobItemCodeSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb72ea63
   */
  commit?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemDataSources extends $dara.Model {
  /**
   * @example
   * data-20210114104214-vf9lowjt3pso
   */
  dataSourceId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemUserVpc extends $dara.Model {
  defaultRoute?: string;
  extendedCidrs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCidrs: 'ExtendedCidrs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCidrs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCidrs)) {
      $dara.Model.validateArray(this.extendedCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePostStartExec extends $dara.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePostStart extends $dara.Model {
  exec?: LifecyclePostStartExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePostStartExec,
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePreStopExec extends $dara.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePreStop extends $dara.Model {
  exec?: LifecyclePreStopExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePreStopExec,
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestCodeSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @example
   * 44da109b5******
   */
  commit?: string;
  /**
   * @example
   * /root/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDataSources extends $dara.Model {
  /**
   * @example
   * d-cn9dl*******
   */
  dataSourceId?: string;
  dataSourceVersion?: string;
  /**
   * @example
   * /root/data
   */
  mountPath?: string;
  options?: string;
  /**
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      mountPath: 'MountPath',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      mountPath: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestUserVpc extends $dara.Model {
  defaultRoute?: string;
  extendedCIDRs?: string[];
  /**
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @example
   * vpc-abcdef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyCodeSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * code******
   */
  codeSourceId?: string;
  /**
   * @example
   * 44da109b59f8596152987eaa8f3b2487xxxxxx
   */
  commit?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyDataSources extends $dara.Model {
  /**
   * @example
   * d*******
   */
  dataSourceId?: string;
  /**
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyPodsHistoryPods extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @example
   * 10.0.1.3
   */
  ip?: string;
  /**
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @example
   * Failed
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyPods extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  historyPods?: GetJobResponseBodyPodsHistoryPods[];
  /**
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': GetJobResponseBodyPodsHistoryPods },
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyUserVpc extends $dara.Model {
  defaultRoute?: string;
  extendedCidrs?: string[];
  /**
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @example
   * vpc-abcdef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCidrs: 'ExtendedCidrs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCidrs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCidrs)) {
      $dara.Model.validateArray(this.extendedCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIMasterMessage extends $dara.Model {
  extended?: string;
  jobRestartCount?: number;
  messageContent?: string;
  messageEvent?: string;
  messageVersion?: number;
  restartType?: string;
  static names(): { [key: string]: string } {
    return {
      extended: 'Extended',
      jobRestartCount: 'JobRestartCount',
      messageContent: 'MessageContent',
      messageEvent: 'MessageEvent',
      messageVersion: 'MessageVersion',
      restartType: 'RestartType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extended: 'string',
      jobRestartCount: 'number',
      messageContent: 'string',
      messageEvent: 'string',
      messageVersion: 'number',
      restartType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunAccounts extends $dara.Model {
  aliyunUid?: string;
  employeeId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      employeeId: 'EmployeeId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      employeeId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignNodeSpec extends $dara.Model {
  /**
   * @example
   * lingjxxxxxxxx
   */
  antiAffinityNodeNames?: string;
  /**
   * @example
   * true
   */
  enableAssignNode?: boolean;
  /**
   * @example
   * lingjxxxxxxxx
   */
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      antiAffinityNodeNames: 'AntiAffinityNodeNames',
      enableAssignNode: 'EnableAssignNode',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiAffinityNodeNames: 'string',
      enableAssignNode: 'boolean',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeUserInfo extends $dara.Model {
  accessKeyId?: string;
  id?: string;
  securityToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CodeSourceItem extends $dara.Model {
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da1*******
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  codeRepoAccessToken?: string;
  /**
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-20210111103721-85qz*****
   */
  codeSourceId?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * 115**********
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContainerSpec extends $dara.Model {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-dlc/curl:v1.0.0
   */
  image?: string;
  /**
   * @example
   * data-init
   */
  name?: string;
  resources?: ResourceRequirements;
  /**
   * @example
   * /root
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      env: 'Env',
      image: 'Image',
      name: 'Name',
      resources: 'Resources',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      env: { 'type': 'array', 'itemType': EnvVar },
      image: 'string',
      name: 'string',
      resources: ResourceRequirements,
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.env)) {
      $dara.Model.validateArray(this.env);
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $dara.Model {
  aliyunEnvRoleKey?: string;
  credentialConfigItems?: CredentialConfigItem[];
  enableCredentialInject?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      credentialConfigItems: 'CredentialConfigItems',
      enableCredentialInject: 'EnableCredentialInject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      credentialConfigItems: { 'type': 'array', 'itemType': CredentialConfigItem },
      enableCredentialInject: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.credentialConfigItems)) {
      $dara.Model.validateArray(this.credentialConfigItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigItem extends $dara.Model {
  key?: string;
  /**
   * **if can be null:**
   * true
   */
  roles?: CredentialRole[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CredentialRole },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialRole extends $dara.Model {
  assumeRoleFor?: string;
  assumeUserInfo?: AssumeUserInfo;
  policy?: string;
  roleArn?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      assumeUserInfo: 'AssumeUserInfo',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      assumeUserInfo: AssumeUserInfo,
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    if(this.assumeUserInfo && typeof (this.assumeUserInfo as any).validate === 'function') {
      (this.assumeUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceItem extends $dara.Model {
  /**
   * @example
   * data-20210114104214-vf9lowjt3pso
   */
  dataSourceId?: string;
  /**
   * @example
   * nas
   */
  dataSourceType?: string;
  /**
   * @example
   * data source of dlc examples
   */
  description?: string;
  /**
   * @example
   * nas-data
   */
  displayName?: string;
  /**
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @example
   * {"key": "value"}
   */
  options?: string;
  /**
   * @example
   * oss://mybucket/path/to/dir
   */
  path?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      displayName: 'DisplayName',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      description: 'string',
      displayName: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebuggerConfig extends $dara.Model {
  /**
   * @example
   * {\"description\":\"这是一个新的pytorchjob模板\"}
   */
  content?: string;
  /**
   * @example
   * dc-vf9lowjt3pso
   */
  debuggerConfigId?: string;
  /**
   * @example
   * 这是一个Pytorch的基础配置模板
   */
  description?: string;
  /**
   * @example
   * Pytorch Experiment Config
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      debuggerConfigId: 'DebuggerConfigId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      debuggerConfigId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebuggerJob extends $dara.Model {
  /**
   * @example
   * dlc20210126170216-mtl37ge7gkvdz
   */
  debuggerJobId?: string;
  /**
   * @example
   * dlc debugger test
   */
  displayName?: string;
  /**
   * @example
   * 2932
   */
  duration?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  gmtFailedTime?: string;
  gmtFinishTime?: string;
  gmtRunningTime?: string;
  gmtStoppedTime?: string;
  gmtSubmittedTime?: string;
  gmtSucceedTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 12344556
   */
  userId?: string;
  /**
   * @example
   * workspace01
   */
  workspaceId?: string;
  /**
   * @example
   * public
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerJobId: 'DebuggerJobId',
      displayName: 'DisplayName',
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSucceedTime: 'GmtSucceedTime',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerJobId: 'string',
      displayName: 'string',
      duration: 'string',
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSucceedTime: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebuggerJobIssue extends $dara.Model {
  /**
   * @example
   * {"Name": "CPUBottleneck",  "Triggered": 10, "Violations": 2,  "Details": "{}"}
   */
  debuggerJobIssue?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * de-826ca1bcfba30
   */
  jobDebuggerIssueId?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 1002300
   */
  reasonCode?: string;
  /**
   * @example
   * GPU利用率低
   */
  reasonMessage?: string;
  /**
   * @example
   * ProfileReport
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerJobIssue: 'DebuggerJobIssue',
      gmtCreateTime: 'GmtCreateTime',
      jobDebuggerIssueId: 'JobDebuggerIssueId',
      jobId: 'JobId',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerJobIssue: 'string',
      gmtCreateTime: 'string',
      jobDebuggerIssueId: 'string',
      jobId: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebuggerResult extends $dara.Model {
  /**
   * @example
   * {\"description\":\"这是一个新的pytorchjob模板\"}
   */
  debuggerConfigContent?: string;
  /**
   * @example
   * { "ProfileReport": { "Name": "CPUBottleneck","Triggered": 10,"Violations": 2,"Details": "{}"}, "LowCPU": { "Name": "CPUBottleneck","Triggered": 10,"Violations": 2,"Details": "{}"}}
   */
  debuggerJobIssues?: string;
  /**
   * @example
   * {"Running": 1, "Failed": 1, "Succeeded": 2}
   */
  debuggerJobStatus?: string;
  /**
   * @example
   * http://xxx.com/debug/report/download/new_xxxx.html
   */
  debuggerReportURL?: string;
  /**
   * @example
   * dlc debugger test
   */
  jobDisplayName?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 12344556
   */
  jobUserId?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerConfigContent: 'DebuggerConfigContent',
      debuggerJobIssues: 'DebuggerJobIssues',
      debuggerJobStatus: 'DebuggerJobStatus',
      debuggerReportURL: 'DebuggerReportURL',
      jobDisplayName: 'JobDisplayName',
      jobId: 'JobId',
      jobUserId: 'JobUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerConfigContent: 'string',
      debuggerJobIssues: 'string',
      debuggerJobStatus: 'string',
      debuggerReportURL: 'string',
      jobDisplayName: 'string',
      jobId: 'string',
      jobUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcsSpec extends $dara.Model {
  /**
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  /**
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @example
   * 80
   */
  gpuMemory?: number;
  /**
   * @example
   * NVIDIA v100
   */
  gpuType?: string;
  /**
   * @example
   * ecs.gn6e-c12g1.3xlarge
   */
  instanceType?: string;
  /**
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @example
   * 92
   */
  memory?: number;
  /**
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  paymentTypes?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * WithStock
   */
  spotStockStatus?: string;
  supportedGPUDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      cpu: 'Cpu',
      defaultGPUDriver: 'DefaultGPUDriver',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuType: 'GpuType',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      memory: 'Memory',
      nonProtectSpotDiscount: 'NonProtectSpotDiscount',
      paymentTypes: 'PaymentTypes',
      resourceType: 'ResourceType',
      spotStockStatus: 'SpotStockStatus',
      supportedGPUDrivers: 'SupportedGPUDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      cpu: 'number',
      defaultGPUDriver: 'string',
      gpu: 'number',
      gpuMemory: 'number',
      gpuType: 'string',
      instanceType: 'string',
      isAvailable: 'boolean',
      memory: 'number',
      nonProtectSpotDiscount: 'number',
      paymentTypes: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      spotStockStatus: 'string',
      supportedGPUDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paymentTypes)) {
      $dara.Model.validateArray(this.paymentTypes);
    }
    if(Array.isArray(this.supportedGPUDrivers)) {
      $dara.Model.validateArray(this.supportedGPUDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvVar extends $dara.Model {
  /**
   * @example
   * ENABLE_DEBUG
   */
  name?: string;
  /**
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventInfo extends $dara.Model {
  content?: string;
  id?: string;
  podId?: string;
  podUid?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      podId: 'PodId',
      podUid: 'PodUid',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      podId: 'string',
      podUid: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtraPodSpec extends $dara.Model {
  initContainers?: ContainerSpec[];
  lifecycle?: Lifecycle;
  podAnnotations?: { [key: string]: string };
  podLabels?: { [key: string]: string };
  sharedVolumeMountPaths?: string[];
  sideCarContainers?: ContainerSpec[];
  static names(): { [key: string]: string } {
    return {
      initContainers: 'InitContainers',
      lifecycle: 'Lifecycle',
      podAnnotations: 'PodAnnotations',
      podLabels: 'PodLabels',
      sharedVolumeMountPaths: 'SharedVolumeMountPaths',
      sideCarContainers: 'SideCarContainers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initContainers: { 'type': 'array', 'itemType': ContainerSpec },
      lifecycle: Lifecycle,
      podAnnotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      podLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sharedVolumeMountPaths: { 'type': 'array', 'itemType': 'string' },
      sideCarContainers: { 'type': 'array', 'itemType': ContainerSpec },
    };
  }

  validate() {
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    if(this.podAnnotations) {
      $dara.Model.validateMap(this.podAnnotations);
    }
    if(this.podLabels) {
      $dara.Model.validateMap(this.podLabels);
    }
    if(Array.isArray(this.sharedVolumeMountPaths)) {
      $dara.Model.validateArray(this.sharedVolumeMountPaths);
    }
    if(Array.isArray(this.sideCarContainers)) {
      $dara.Model.validateArray(this.sideCarContainers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreeResourceClusterControlItem extends $dara.Model {
  clusterID?: string;
  clusterName?: string;
  crossClusters?: boolean;
  enableFreeResource?: boolean;
  /**
   * @example
   * frcc-whateversth
   */
  freeResourceClusterControlId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  regionID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      clusterName: 'ClusterName',
      crossClusters: 'CrossClusters',
      enableFreeResource: 'EnableFreeResource',
      freeResourceClusterControlId: 'FreeResourceClusterControlId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      regionID: 'RegionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      clusterName: 'string',
      crossClusters: 'boolean',
      enableFreeResource: 'boolean',
      freeResourceClusterControlId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      regionID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreeResourceDetail extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * CPU
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreeResourceItem extends $dara.Model {
  /**
   * @example
   * 2
   */
  availableNumber?: number;
  clusterID?: string;
  clusterName?: string;
  /**
   * @example
   * freeres-whateversth
   */
  freeResourceId?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * inner
   */
  regionID?: string;
  /**
   * @example
   * cpu
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      availableNumber: 'AvailableNumber',
      clusterID: 'ClusterID',
      clusterName: 'ClusterName',
      freeResourceId: 'FreeResourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      regionID: 'RegionID',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableNumber: 'number',
      clusterID: 'string',
      clusterName: 'string',
      freeResourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      regionID: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUDetail extends $dara.Model {
  GPU?: string;
  /**
   * @example
   * Tesla-V100-32G
   */
  GPUType?: string;
  /**
   * @example
   * nvidia.com/gpu-tesla-v100-sxm2-16gb
   */
  GPUTypeFullName?: string;
  static names(): { [key: string]: string } {
    return {
      GPU: 'GPU',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPU: 'string',
      GPUType: 'string',
      GPUTypeFullName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageConfig extends $dara.Model {
  auth?: string;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com
   */
  dockerRegistry?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      dockerRegistry: 'DockerRegistry',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      dockerRegistry: 'string',
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageItem extends $dara.Model {
  /**
   * @example
   * gpu
   */
  acceleratorType?: string;
  /**
   * @example
   * ken
   */
  authorId?: string;
  /**
   * @example
   * PyTorchJob
   */
  framework?: string;
  /**
   * @example
   * Community
   */
  imageProviderType?: string;
  /**
   * @example
   * tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageTag?: string;
  /**
   * @example
   * registry.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageUrl?: string;
  /**
   * @example
   * registry-vpc.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageUrlVpc?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      authorId: 'AuthorId',
      framework: 'Framework',
      imageProviderType: 'ImageProviderType',
      imageTag: 'ImageTag',
      imageUrl: 'ImageUrl',
      imageUrlVpc: 'ImageUrlVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      authorId: 'string',
      framework: 'string',
      imageProviderType: 'string',
      imageTag: 'string',
      imageUrl: 'string',
      imageUrlVpc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDebuggerConfig extends $dara.Model {
  debuggerConfigContent?: string;
  debuggerConfigId?: string;
  gmtCreateTime?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerConfigContent: 'DebuggerConfigContent',
      debuggerConfigId: 'DebuggerConfigId',
      gmtCreateTime: 'GmtCreateTime',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerConfigContent: 'string',
      debuggerConfigId: 'string',
      gmtCreateTime: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobElasticSpec extends $dara.Model {
  AIMasterDockerImage?: string;
  AIMasterType?: string;
  /**
   * @example
   * 16
   */
  EDPMaxParallelism?: number;
  /**
   * @example
   * 8
   */
  EDPMinParallelism?: number;
  elasticStrategy?: string;
  enableAIMaster?: boolean;
  /**
   * @example
   * true
   */
  enableEDP?: boolean;
  /**
   * @example
   * true
   */
  enableElasticTraining?: boolean;
  /**
   * @example
   * true
   */
  enablePsJobElasticPS?: boolean;
  enablePsJobElasticWorker?: boolean;
  /**
   * @example
   * true
   */
  enablePsResourceEstimate?: boolean;
  /**
   * @example
   * 8
   */
  maxParallelism?: number;
  /**
   * @example
   * 1
   */
  minParallelism?: number;
  /**
   * @example
   * 10
   */
  PSMaxParallelism?: number;
  /**
   * @example
   * 4
   */
  PSMinParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      AIMasterDockerImage: 'AIMasterDockerImage',
      AIMasterType: 'AIMasterType',
      EDPMaxParallelism: 'EDPMaxParallelism',
      EDPMinParallelism: 'EDPMinParallelism',
      elasticStrategy: 'ElasticStrategy',
      enableAIMaster: 'EnableAIMaster',
      enableEDP: 'EnableEDP',
      enableElasticTraining: 'EnableElasticTraining',
      enablePsJobElasticPS: 'EnablePsJobElasticPS',
      enablePsJobElasticWorker: 'EnablePsJobElasticWorker',
      enablePsResourceEstimate: 'EnablePsResourceEstimate',
      maxParallelism: 'MaxParallelism',
      minParallelism: 'MinParallelism',
      PSMaxParallelism: 'PSMaxParallelism',
      PSMinParallelism: 'PSMinParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIMasterDockerImage: 'string',
      AIMasterType: 'string',
      EDPMaxParallelism: 'number',
      EDPMinParallelism: 'number',
      elasticStrategy: 'string',
      enableAIMaster: 'boolean',
      enableEDP: 'boolean',
      enableElasticTraining: 'boolean',
      enablePsJobElasticPS: 'boolean',
      enablePsJobElasticWorker: 'boolean',
      enablePsResourceEstimate: 'boolean',
      maxParallelism: 'number',
      minParallelism: 'number',
      PSMaxParallelism: 'number',
      PSMinParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItem extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  clusterId?: string;
  codeSource?: JobItemCodeSource;
  credentialConfig?: CredentialConfig;
  dataSources?: JobItemDataSources[];
  /**
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @example
   * 3602
   */
  duration?: number;
  elasticSpec?: JobElasticSpec;
  /**
   * @example
   * false
   */
  enablePreemptibleJob?: boolean;
  /**
   * @example
   * false
   */
  enabledDebugger?: boolean;
  envs?: { [key: string]: string };
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtFailedTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtRunningTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtStoppedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSuccessedTime?: string;
  /**
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  jobMaxRunningTimeMinutes?: number;
  jobSpecs?: JobSpec[];
  /**
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @example
   * 1
   */
  nodeCount?: string;
  nodeNames?: string[];
  pods?: PodItem[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @example
   * 1
   */
  requestGPU?: string;
  /**
   * @example
   * 1Gi
   */
  requestMemory?: string;
  /**
   * @example
   * dlc-quota
   */
  resourceId?: string;
  /**
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @example
   * my_resource_group
   */
  resourceName?: string;
  /**
   * @example
   * test
   */
  resourceQuotaName?: string;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * 1
   */
  restartTimes?: string;
  settings?: JobSettings;
  /**
   * @example
   * Stopped
   */
  status?: string;
  statusHistory?: StatusTransitionItem[];
  /**
   * @example
   * Restarting
   */
  subStatus?: string;
  systemEnvs?: { [key: string]: string };
  tenantId?: string;
  /**
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  /**
   * @example
   * false
   */
  useOversoldResource?: boolean;
  /**
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @example
   * ls
   */
  userScript?: string;
  /**
   * @example
   * vpc-1
   */
  userVpc?: JobItemUserVpc;
  /**
   * @example
   * pai-dlc-role
   */
  username?: string;
  /**
   * @example
   * /mnt/data
   */
  workingDir?: string;
  /**
   * @example
   * 268
   */
  workspaceId?: string;
  /**
   * @example
   * dlc-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      clusterId: 'ClusterId',
      codeSource: 'CodeSource',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      duration: 'Duration',
      elasticSpec: 'ElasticSpec',
      enablePreemptibleJob: 'EnablePreemptibleJob',
      enabledDebugger: 'EnabledDebugger',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSuccessedTime: 'GmtSuccessedTime',
      isDeleted: 'IsDeleted',
      jobId: 'JobId',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      nodeCount: 'NodeCount',
      nodeNames: 'NodeNames',
      pods: 'Pods',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceId: 'ResourceId',
      resourceLevel: 'ResourceLevel',
      resourceName: 'ResourceName',
      resourceQuotaName: 'ResourceQuotaName',
      resourceType: 'ResourceType',
      restartTimes: 'RestartTimes',
      settings: 'Settings',
      status: 'Status',
      statusHistory: 'StatusHistory',
      subStatus: 'SubStatus',
      systemEnvs: 'SystemEnvs',
      tenantId: 'TenantId',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      useOversoldResource: 'UseOversoldResource',
      userCommand: 'UserCommand',
      userId: 'UserId',
      userScript: 'UserScript',
      userVpc: 'UserVpc',
      username: 'Username',
      workingDir: 'WorkingDir',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      clusterId: 'string',
      codeSource: JobItemCodeSource,
      credentialConfig: CredentialConfig,
      dataSources: { 'type': 'array', 'itemType': JobItemDataSources },
      displayName: 'string',
      duration: 'number',
      elasticSpec: JobElasticSpec,
      enablePreemptibleJob: 'boolean',
      enabledDebugger: 'boolean',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSuccessedTime: 'string',
      isDeleted: 'boolean',
      jobId: 'string',
      jobMaxRunningTimeMinutes: 'number',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      nodeCount: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      pods: { 'type': 'array', 'itemType': PodItem },
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestCPU: 'number',
      requestGPU: 'string',
      requestMemory: 'string',
      resourceId: 'string',
      resourceLevel: 'string',
      resourceName: 'string',
      resourceQuotaName: 'string',
      resourceType: 'string',
      restartTimes: 'string',
      settings: JobSettings,
      status: 'string',
      statusHistory: { 'type': 'array', 'itemType': StatusTransitionItem },
      subStatus: 'string',
      systemEnvs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tenantId: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      useOversoldResource: 'boolean',
      userCommand: 'string',
      userId: 'string',
      userScript: 'string',
      userVpc: JobItemUserVpc,
      username: 'string',
      workingDir: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.codeSource && typeof (this.codeSource as any).validate === 'function') {
      (this.codeSource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.elasticSpec && typeof (this.elasticSpec as any).validate === 'function') {
      (this.elasticSpec as any).validate();
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.statusHistory)) {
      $dara.Model.validateArray(this.statusHistory);
    }
    if(this.systemEnvs) {
      $dara.Model.validateMap(this.systemEnvs);
    }
    if(Array.isArray(this.thirdpartyLibs)) {
      $dara.Model.validateArray(this.thirdpartyLibs);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSettings extends $dara.Model {
  advancedSettings?: { [key: string]: any };
  /**
   * @example
   * 166924
   */
  businessUserId?: string;
  /**
   * @example
   * SilkFlow
   */
  caller?: string;
  /**
   * @example
   * false
   */
  disableEcsStockCheck?: boolean;
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * true
   */
  enableCPUAffinity?: boolean;
  /**
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  /**
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFai
   */
  sanityCheckArgs?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      disableEcsStockCheck: 'DisableEcsStockCheck',
      driver: 'Driver',
      enableCPUAffinity: 'EnableCPUAffinity',
      enableErrorMonitoringInAIMaster: 'EnableErrorMonitoringInAIMaster',
      enableOssAppend: 'EnableOssAppend',
      enableRDMA: 'EnableRDMA',
      enableSanityCheck: 'EnableSanityCheck',
      enableTideResource: 'EnableTideResource',
      errorMonitoringArgs: 'ErrorMonitoringArgs',
      jobReservedMinutes: 'JobReservedMinutes',
      jobReservedPolicy: 'JobReservedPolicy',
      oversoldType: 'OversoldType',
      pipelineId: 'PipelineId',
      sanityCheckArgs: 'SanityCheckArgs',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessUserId: 'string',
      caller: 'string',
      disableEcsStockCheck: 'boolean',
      driver: 'string',
      enableCPUAffinity: 'boolean',
      enableErrorMonitoringInAIMaster: 'boolean',
      enableOssAppend: 'boolean',
      enableRDMA: 'boolean',
      enableSanityCheck: 'boolean',
      enableTideResource: 'boolean',
      errorMonitoringArgs: 'string',
      jobReservedMinutes: 'number',
      jobReservedPolicy: 'string',
      oversoldType: 'string',
      pipelineId: 'string',
      sanityCheckArgs: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.advancedSettings) {
      $dara.Model.validateMap(this.advancedSettings);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSpec extends $dara.Model {
  assignNodeSpec?: AssignNodeSpec;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  extraPodSpec?: ExtraPodSpec;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-dlc/tensorflow-training:1.12.2PAI-cpu-py27-ubuntu16.04
   */
  image?: string;
  imageConfig?: ImageConfig;
  /**
   * @example
   * 1
   */
  podCount?: number;
  resourceConfig?: ResourceConfig;
  spotSpec?: SpotSpec;
  /**
   * @example
   * Worker
   */
  type?: string;
  /**
   * @example
   * false
   * 
   * @deprecated
   */
  useSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      assignNodeSpec: 'AssignNodeSpec',
      ecsSpec: 'EcsSpec',
      extraPodSpec: 'ExtraPodSpec',
      image: 'Image',
      imageConfig: 'ImageConfig',
      podCount: 'PodCount',
      resourceConfig: 'ResourceConfig',
      spotSpec: 'SpotSpec',
      type: 'Type',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignNodeSpec: AssignNodeSpec,
      ecsSpec: 'string',
      extraPodSpec: ExtraPodSpec,
      image: 'string',
      imageConfig: ImageConfig,
      podCount: 'number',
      resourceConfig: ResourceConfig,
      spotSpec: SpotSpec,
      type: 'string',
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
    }
    if(this.extraPodSpec && typeof (this.extraPodSpec as any).validate === 'function') {
      (this.extraPodSpec as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(this.resourceConfig && typeof (this.resourceConfig as any).validate === 'function') {
      (this.resourceConfig as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Lifecycle extends $dara.Model {
  postStart?: LifecyclePostStart;
  preStop?: LifecyclePreStop;
  static names(): { [key: string]: string } {
    return {
      postStart: 'PostStart',
      preStop: 'PreStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postStart: LifecyclePostStart,
      preStop: LifecyclePreStop,
    };
  }

  validate() {
    if(this.postStart && typeof (this.postStart as any).validate === 'function') {
      (this.postStart as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogInfo extends $dara.Model {
  content?: string;
  id?: string;
  podId?: string;
  podUid?: string;
  /**
   * @example
   * stderr, stdout
   */
  source?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      podId: 'PodId',
      podUid: 'PodUid',
      source: 'Source',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      podId: 'string',
      podUid: 'string',
      source: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Member extends $dara.Model {
  /**
   * @example
   * ken_12345
   */
  memberId?: string;
  /**
   * @example
   * WorkspaceAdmin
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Metric extends $dara.Model {
  /**
   * @example
   * 1616987726587
   */
  time?: number;
  /**
   * @example
   * 23.45
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeMetric extends $dara.Model {
  metrics?: Metric[];
  /**
   * @example
   * asi_xxx
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodItem extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:05Z
   */
  gmtStartTime?: string;
  historyPods?: PodItem[];
  /**
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz-worker-0
   */
  podId?: string;
  /**
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': PodItem },
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodMetric extends $dara.Model {
  metrics?: Metric[];
  /**
   * @example
   * dlc-20210329110128-746bf7cl47pr8-worker-0
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      podId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Quota extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  quotaConfig?: QuotaConfig;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * dlc-quota
   */
  quotaName?: string;
  /**
   * @example
   * asiquota
   */
  quotaType?: string;
  totalQuota?: QuotaDetail;
  totalTideQuota?: QuotaDetail;
  usedQuota?: QuotaDetail;
  usedTideQuota?: QuotaDetail;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      quotaConfig: 'QuotaConfig',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      totalQuota: 'TotalQuota',
      totalTideQuota: 'TotalTideQuota',
      usedQuota: 'UsedQuota',
      usedTideQuota: 'UsedTideQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      quotaConfig: QuotaConfig,
      quotaId: 'string',
      quotaName: 'string',
      quotaType: 'string',
      totalQuota: QuotaDetail,
      totalTideQuota: QuotaDetail,
      usedQuota: QuotaDetail,
      usedTideQuota: QuotaDetail,
    };
  }

  validate() {
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(this.totalQuota && typeof (this.totalQuota as any).validate === 'function') {
      (this.totalQuota as any).validate();
    }
    if(this.totalTideQuota && typeof (this.totalTideQuota as any).validate === 'function') {
      (this.totalTideQuota as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    if(this.usedTideQuota && typeof (this.usedTideQuota as any).validate === 'function') {
      (this.usedTideQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaConfig extends $dara.Model {
  allowedMaxPriority?: number;
  enableDLC?: boolean;
  enableDSW?: boolean;
  enableTideResource?: boolean;
  resourceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      allowedMaxPriority: 'AllowedMaxPriority',
      enableDLC: 'EnableDLC',
      enableDSW: 'EnableDSW',
      enableTideResource: 'EnableTideResource',
      resourceLevel: 'ResourceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedMaxPriority: 'number',
      enableDLC: 'boolean',
      enableDSW: 'boolean',
      enableTideResource: 'boolean',
      resourceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaDetail extends $dara.Model {
  /**
   * @example
   * 2
   */
  CPU?: string;
  /**
   * @example
   * 5
   */
  GPU?: string;
  GPUDetails?: GPUDetail[];
  /**
   * @example
   * Tesla-V100
   */
  GPUType?: string;
  /**
   * @example
   * nvidia.com/gpu
   */
  GPUTypeFullName?: string;
  /**
   * @example
   * 10Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUDetails: 'GPUDetails',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUDetails: { 'type': 'array', 'itemType': GPUDetail },
      GPUType: 'string',
      GPUTypeFullName: 'string',
      memory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.GPUDetails)) {
      $dara.Model.validateArray(this.GPUDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceConfig extends $dara.Model {
  /**
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @example
   * 3
   */
  GPU?: string;
  /**
   * @example
   * Tesla-V100-16G
   */
  GPUType?: string;
  /**
   * @example
   * 10Gi
   */
  memory?: string;
  /**
   * @example
   * 5Gi
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceRequirements extends $dara.Model {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      limits: 'Limits',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.limits) {
      $dara.Model.validateMap(this.limits);
    }
    if(this.requests) {
      $dara.Model.validateMap(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resources extends $dara.Model {
  /**
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @example
   * 8
   */
  GPU?: string;
  /**
   * @example
   * 1024（单位GB）
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SanityCheckResultItem extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkNumber?: number;
  /**
   * @example
   * ”2023-11-30T16:47:30.378817+08:00"
   */
  finishedAt?: string;
  message?: string;
  /**
   * @example
   * CheckInit
   */
  phase?: string;
  /**
   * @example
   * ”2023-11-30T16:47:30.343005+08:00“
   */
  startedAt?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkNumber: 'CheckNumber',
      finishedAt: 'FinishedAt',
      message: 'Message',
      phase: 'Phase',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNumber: 'number',
      finishedAt: 'string',
      message: 'string',
      phase: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCache extends $dara.Model {
  /**
   * @example
   * 10
   */
  cacheWorkerNum?: number;
  /**
   * @example
   * 100
   */
  cacheWorkerSize?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 123456
   */
  duration?: string;
  /**
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T23:36:01Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @example
   * {"num_threads": 32}
   */
  options?: string;
  /**
   * @example
   * oss://buc/path/to/dir
   */
  path?: string;
  /**
   * @example
   * smartcache-20210114104214-vf9lowjt3pso
   */
  smartCacheId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * oss
   */
  type?: string;
  /**
   * @example
   * 189xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheWorkerNum: 'CacheWorkerNum',
      cacheWorkerSize: 'CacheWorkerSize',
      description: 'Description',
      displayName: 'DisplayName',
      duration: 'Duration',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      smartCacheId: 'SmartCacheId',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheWorkerNum: 'number',
      cacheWorkerSize: 'number',
      description: 'string',
      displayName: 'string',
      duration: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      smartCacheId: 'string',
      status: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpotSpec extends $dara.Model {
  spotDiscountLimit?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDiscountLimit: 'SpotDiscountLimit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDiscountLimit: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StatusTransitionItem extends $dara.Model {
  endTime?: string;
  reasonCode?: string;
  reasonMessage?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tensorboard extends $dara.Model {
  accessibility?: string;
  cpu?: number;
  /**
   * @example
   * datasource-test
   */
  dataSourceId?: string;
  dataSourceType?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 1234567
   */
  duration?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * dlc-20210114104214-vf9lowjt3pso
   */
  jobId?: string;
  maxRunningTimeMinutes?: number;
  memory?: number;
  options?: string;
  priority?: string;
  quotaId?: string;
  quotaName?: string;
  /**
   * @example
   * Delete by user
   */
  reasonCode?: string;
  /**
   * @example
   * Tensorboard is deleted
   */
  reasonMessage?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * /root/data
   */
  summaryPath?: string;
  summaryRelativePath?: string;
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  tensorboardSpec?: TensorboardSpec;
  /**
   * @example
   * http://xxxxxx
   */
  tensorboardUrl?: string;
  token?: string;
  /**
   * @example
   * lycxxxxx
   */
  userId?: string;
  /**
   * @example
   * tensorboard.pai
   */
  username?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      cpu: 'Cpu',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      displayName: 'DisplayName',
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifyTime: 'GmtModifyTime',
      jobId: 'JobId',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      memory: 'Memory',
      options: 'Options',
      priority: 'Priority',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      status: 'Status',
      summaryPath: 'SummaryPath',
      summaryRelativePath: 'SummaryRelativePath',
      tensorboardDataSources: 'TensorboardDataSources',
      tensorboardId: 'TensorboardId',
      tensorboardSpec: 'TensorboardSpec',
      tensorboardUrl: 'TensorboardUrl',
      token: 'Token',
      userId: 'UserId',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      cpu: 'number',
      dataSourceId: 'string',
      dataSourceType: 'string',
      displayName: 'string',
      duration: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifyTime: 'string',
      jobId: 'string',
      maxRunningTimeMinutes: 'number',
      memory: 'number',
      options: 'string',
      priority: 'string',
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      status: 'string',
      summaryPath: 'string',
      summaryRelativePath: 'string',
      tensorboardDataSources: { 'type': 'array', 'itemType': TensorboardDataSourceSpec },
      tensorboardId: 'string',
      tensorboardSpec: TensorboardSpec,
      tensorboardUrl: 'string',
      token: 'string',
      userId: 'string',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tensorboardDataSources)) {
      $dara.Model.validateArray(this.tensorboardDataSources);
    }
    if(this.tensorboardSpec && typeof (this.tensorboardSpec as any).validate === 'function') {
      (this.tensorboardSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TensorboardDataSourceSpec extends $dara.Model {
  /**
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @example
   * dlcJobName
   */
  directoryName?: string;
  /**
   * @example
   * oss://xxxxx/tensorboard/run1
   */
  fullSummaryPath?: string;
  /**
   * @example
   * d-vf2fdhxxxxxx
   */
  id?: string;
  /**
   * @example
   * dlcJobName
   */
  name?: string;
  /**
   * @example
   * datasource
   */
  sourceType?: string;
  /**
   * @example
   * /tensorboard/run1
   */
  summaryPath?: string;
  /**
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      directoryName: 'DirectoryName',
      fullSummaryPath: 'FullSummaryPath',
      id: 'Id',
      name: 'Name',
      sourceType: 'SourceType',
      summaryPath: 'SummaryPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      directoryName: 'string',
      fullSummaryPath: 'string',
      id: 'string',
      name: 'string',
      sourceType: 'string',
      summaryPath: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TensorboardSpec extends $dara.Model {
  /**
   * @example
   * ecs.g6.large
   */
  ecsType?: string;
  /**
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxx
   */
  switchId?: string;
  /**
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsType: 'EcsType',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsType: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Workspace extends $dara.Model {
  /**
   * @example
   * ken
   */
  creator?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifyTime?: string;
  members?: Member[];
  quotas?: Quota[];
  totalResources?: Resources;
  workspaceAdmins?: Member[];
  /**
   * @example
   * ws-20210126170216-mtl37ge7gkvdz
   */
  workspaceId?: string;
  /**
   * @example
   * dlc-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      members: 'Members',
      quotas: 'Quotas',
      totalResources: 'TotalResources',
      workspaceAdmins: 'WorkspaceAdmins',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      members: { 'type': 'array', 'itemType': Member },
      quotas: { 'type': 'array', 'itemType': Quota },
      totalResources: Resources,
      workspaceAdmins: { 'type': 'array', 'itemType': Member },
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    if(Array.isArray(this.workspaceAdmins)) {
      $dara.Model.validateArray(this.workspaceAdmins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $dara.Model {
  accessibility?: string;
  codeSource?: CreateJobRequestCodeSource;
  credentialConfig?: CredentialConfig;
  dataSources?: CreateJobRequestDataSources[];
  /**
   * @example
   * “”
   */
  debuggerConfigContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  elasticSpec?: JobElasticSpec;
  envs?: { [key: string]: string };
  /**
   * @example
   * 1024
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @example
   * key1=value1,key2=value2
   */
  options?: string;
  /**
   * @example
   * 8
   */
  priority?: number;
  /**
   * @example
   * rs-xxx
   */
  resourceId?: string;
  settings?: JobSettings;
  /**
   * @example
   * AllWorkers
   */
  successPolicy?: string;
  /**
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  userVpc?: CreateJobRequestUserVpc;
  /**
   * @example
   * ws-20210126170216-xxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeSource: 'CodeSource',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      debuggerConfigContent: 'DebuggerConfigContent',
      displayName: 'DisplayName',
      elasticSpec: 'ElasticSpec',
      envs: 'Envs',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      options: 'Options',
      priority: 'Priority',
      resourceId: 'ResourceId',
      settings: 'Settings',
      successPolicy: 'SuccessPolicy',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeSource: CreateJobRequestCodeSource,
      credentialConfig: CredentialConfig,
      dataSources: { 'type': 'array', 'itemType': CreateJobRequestDataSources },
      debuggerConfigContent: 'string',
      displayName: 'string',
      elasticSpec: JobElasticSpec,
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobMaxRunningTimeMinutes: 'number',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      options: 'string',
      priority: 'number',
      resourceId: 'string',
      settings: JobSettings,
      successPolicy: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userVpc: CreateJobRequestUserVpc,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.codeSource && typeof (this.codeSource as any).validate === 'function') {
      (this.codeSource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.elasticSpec && typeof (this.elasticSpec as any).validate === 'function') {
      (this.elasticSpec as any).validate();
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.thirdpartyLibs)) {
      $dara.Model.validateArray(this.thirdpartyLibs);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $dara.Model {
  /**
   * @example
   * dlc7*******
   */
  jobId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @example
   * d-xxxxxxxx
   */
  dataSourceId?: string;
  dataSourceType?: string;
  dataSources?: DataSourceItem[];
  /**
   * @example
   * tensorboard
   */
  displayName?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 240
   */
  maxRunningTimeMinutes?: number;
  /**
   * @example
   * 1000
   */
  memory?: number;
  /**
   * @example
   * {"mountpath":"/root/data/"}
   */
  options?: string;
  priority?: string;
  quotaId?: string;
  /**
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @example
   * /root/data/
   */
  summaryPath?: string;
  /**
   * @example
   * /summary/
   */
  summaryRelativePath?: string;
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  tensorboardSpec?: TensorboardSpec;
  /**
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  /**
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      cpu: 'Cpu',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      jobId: 'JobId',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      memory: 'Memory',
      options: 'Options',
      priority: 'Priority',
      quotaId: 'QuotaId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      summaryPath: 'SummaryPath',
      summaryRelativePath: 'SummaryRelativePath',
      tensorboardDataSources: 'TensorboardDataSources',
      tensorboardSpec: 'TensorboardSpec',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      cpu: 'number',
      dataSourceId: 'string',
      dataSourceType: 'string',
      dataSources: { 'type': 'array', 'itemType': DataSourceItem },
      displayName: 'string',
      jobId: 'string',
      maxRunningTimeMinutes: 'number',
      memory: 'number',
      options: 'string',
      priority: 'string',
      quotaId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      summaryPath: 'string',
      summaryRelativePath: 'string',
      tensorboardDataSources: { 'type': 'array', 'itemType': TensorboardDataSourceSpec },
      tensorboardSpec: TensorboardSpec,
      uri: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.tensorboardDataSources)) {
      $dara.Model.validateArray(this.tensorboardDataSources);
    }
    if(this.tensorboardSpec && typeof (this.tensorboardSpec as any).validate === 'function') {
      (this.tensorboardSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardResponseBody extends $dara.Model {
  /**
   * @example
   * ds-20210126170216-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @example
   * dlc-20210126170216-xxxxxxxx
   */
  jobId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * tbxxxxxxxx
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      jobId: 'string',
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTensorboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $dara.Model {
  /**
   * @example
   * dlc*************
   */
  jobId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTensorboardRequest extends $dara.Model {
  /**
   * @example
   * 46099
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTensorboardResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * tensorboard-20210114104214-vf9lowjt3pso
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTensorboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  needDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      needDetail: 'NeedDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needDetail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * a*****
   */
  clusterId?: string;
  codeSource?: GetJobResponseBodyCodeSource;
  credentialConfig?: CredentialConfig;
  dataSources?: GetJobResponseBodyDataSources[];
  /**
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @example
   * 3602
   */
  duration?: number;
  elasticSpec?: JobElasticSpec;
  /**
   * @example
   * false
   */
  enabledDebugger?: boolean;
  envs?: { [key: string]: string };
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFailedTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:21Z
   */
  gmtRunningTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtStoppedTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtSuccessedTime?: string;
  /**
   * @example
   * dlc*******
   */
  jobId?: string;
  jobSpecs?: JobSpec[];
  /**
   * @example
   * TFJob
   */
  jobType?: string;
  pods?: GetJobResponseBodyPods[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * r******
   */
  resourceId?: string;
  /**
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * 0/10
   */
  restartTimes?: string;
  settings?: JobSettings;
  /**
   * @example
   * Stopped
   */
  status?: string;
  statusHistory?: StatusTransitionItem[];
  /**
   * @example
   * Restarting
   */
  subStatus?: string;
  tenantId?: string;
  /**
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  /**
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @example
   * 12*********
   */
  userId?: string;
  userVpc?: GetJobResponseBodyUserVpc;
  /**
   * @example
   * 268
   */
  workspaceId?: string;
  /**
   * @example
   * dlc-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      clusterId: 'ClusterId',
      codeSource: 'CodeSource',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      duration: 'Duration',
      elasticSpec: 'ElasticSpec',
      enabledDebugger: 'EnabledDebugger',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSuccessedTime: 'GmtSuccessedTime',
      jobId: 'JobId',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      pods: 'Pods',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceLevel: 'ResourceLevel',
      resourceType: 'ResourceType',
      restartTimes: 'RestartTimes',
      settings: 'Settings',
      status: 'Status',
      statusHistory: 'StatusHistory',
      subStatus: 'SubStatus',
      tenantId: 'TenantId',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      clusterId: 'string',
      codeSource: GetJobResponseBodyCodeSource,
      credentialConfig: CredentialConfig,
      dataSources: { 'type': 'array', 'itemType': GetJobResponseBodyDataSources },
      displayName: 'string',
      duration: 'number',
      elasticSpec: JobElasticSpec,
      enabledDebugger: 'boolean',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSuccessedTime: 'string',
      jobId: 'string',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      pods: { 'type': 'array', 'itemType': GetJobResponseBodyPods },
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceLevel: 'string',
      resourceType: 'string',
      restartTimes: 'string',
      settings: JobSettings,
      status: 'string',
      statusHistory: { 'type': 'array', 'itemType': StatusTransitionItem },
      subStatus: 'string',
      tenantId: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userId: 'string',
      userVpc: GetJobResponseBodyUserVpc,
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.codeSource && typeof (this.codeSource as any).validate === 'function') {
      (this.codeSource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.elasticSpec && typeof (this.elasticSpec as any).validate === 'function') {
      (this.elasticSpec as any).validate();
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.statusHistory)) {
      $dara.Model.validateArray(this.statusHistory);
    }
    if(Array.isArray(this.thirdpartyLibs)) {
      $dara.Model.validateArray(this.thirdpartyLibs);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsRequest extends $dara.Model {
  /**
   * @example
   * 2020-11-08T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsResponseBody extends $dara.Model {
  events?: string[];
  /**
   * @example
   * dlc-20210126170216-******
   */
  jobId?: string;
  /**
   * @example
   * 78F6FCE2-278F-4C4A-A6B7-DD8ECEA9C456
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsRequest extends $dara.Model {
  /**
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GpuMemoryUsage
   */
  metricType?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 5m
   */
  timeStep?: string;
  /**
   * @example
   * eyXXXX-XXXX.XXXXX
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * dlc-20210126170216-*******
   */
  jobId?: string;
  podMetrics?: PodMetric[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      podMetrics: { 'type': 'array', 'itemType': PodMetric },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podMetrics)) {
      $dara.Model.validateArray(this.podMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobSanityCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sanityCheckNumber?: number;
  /**
   * @example
   * DeviceCheck
   */
  sanityCheckPhase?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      sanityCheckNumber: 'SanityCheckNumber',
      sanityCheckPhase: 'SanityCheckPhase',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sanityCheckNumber: 'number',
      sanityCheckPhase: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobSanityCheckResultResponseBody extends $dara.Model {
  /**
   * @example
   * dlc-20210126170216-xxxxxx
   */
  jobId?: string;
  /**
   * @example
   * B3789344-F1xxxBE-5xx2-A04D-xxxxx
   */
  requestID?: string;
  sanityCheckResult?: SanityCheckResultItem[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestID: 'RequestID',
      sanityCheckResult: 'SanityCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestID: 'string',
      sanityCheckResult: { 'type': 'array', 'itemType': SanityCheckResultItem },
    };
  }

  validate() {
    if(Array.isArray(this.sanityCheckResult)) {
      $dara.Model.validateArray(this.sanityCheckResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobSanityCheckResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobSanityCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobSanityCheckResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsRequest extends $dara.Model {
  /**
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podUid?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      podUid: 'PodUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      podUid: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsResponseBody extends $dara.Model {
  events?: string[];
  /**
   * @example
   * dlc-20210126170216-*****
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podId?: string;
  /**
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      podId: 'PodId',
      podUid: 'PodUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      podId: 'string',
      podUid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPodEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPodEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  downloadToFile?: boolean;
  /**
   * @example
   * 2020-11-08T17:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 100
   */
  maxLines?: number;
  /**
   * @example
   * fe846462-af2c-4521-bd6f-96787a57****
   */
  podUid?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      downloadToFile: 'DownloadToFile',
      endTime: 'EndTime',
      maxLines: 'MaxLines',
      podUid: 'PodUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadToFile: 'boolean',
      endTime: 'string',
      maxLines: 'number',
      podUid: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsResponseBody extends $dara.Model {
  /**
   * @example
   * dlc-20210126170216-******
   */
  jobId?: string;
  logs?: string[];
  /**
   * @example
   * dlc-20210126170216-****-chief-0
   */
  podId?: string;
  /**
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      logs: 'Logs',
      podId: 'PodId',
      podUid: 'PodUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      podId: 'string',
      podUid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPodLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPodLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardRequest extends $dara.Model {
  /**
   * @example
   * dlc-xxxxxxxx
   */
  jodId?: string;
  token?: string;
  /**
   * @example
   * 46099
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      jodId: 'JodId',
      token: 'Token',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jodId: 'string',
      token: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Tensorboard;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Tensorboard,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardSharedUrlRequest extends $dara.Model {
  /**
   * @example
   * 86400
   */
  expireTimeSeconds?: string;
  static names(): { [key: string]: string } {
    return {
      expireTimeSeconds: 'ExpireTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimeSeconds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardSharedUrlResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * http://pai-dlc-proxy-xxx.alicyuncs.com/xxx/xxx/token/
   */
  tensorboardSharedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardSharedUrl: 'TensorboardSharedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardSharedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardSharedUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTensorboardSharedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTensorboardSharedUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $dara.Model {
  /**
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @example
   * dlc*******
   */
  targetId?: string;
  /**
   * @example
   * job
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebTerminalRequest extends $dara.Model {
  isShared?: boolean;
  /**
   * @remarks
   * Pod UID。
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  static names(): { [key: string]: string } {
    return {
      isShared: 'IsShared',
      podUid: 'PodUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShared: 'boolean',
      podUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebTerminalResponseBody extends $dara.Model {
  requestId?: string;
  webTerminalUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webTerminalUrl: 'WebTerminalUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webTerminalUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebTerminalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWebTerminalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWebTerminalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsRequest extends $dara.Model {
  /**
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @example
   * ecs.g6.large,ecs.g6.xlarge
   */
  instanceTypes?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * Gpu
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      instanceTypes: 'InstanceTypes',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      instanceTypes: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBody extends $dara.Model {
  ecsSpecs?: EcsSpec[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ecsSpecs: 'EcsSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpecs: { 'type': 'array', 'itemType': EcsSpec },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEcsSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEcsSpecsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSanityCheckResultsRequest extends $dara.Model {
  /**
   * @example
   * desc
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSanityCheckResultsResponseBody extends $dara.Model {
  /**
   * @example
   * 1AC9xxx-3xxx-5xxx2-xxxx-FA5
   */
  requestID?: string;
  sanityCheckResults?: SanityCheckResultItem[][];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestID: 'RequestID',
      sanityCheckResults: 'SanityCheckResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestID: 'string',
      sanityCheckResults: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': SanityCheckResultItem } },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sanityCheckResults)) {
      $dara.Model.validateArray(this.sanityCheckResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSanityCheckResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobSanityCheckResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobSanityCheckResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @example
   * local
   */
  caller?: string;
  /**
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  oversoldInfo?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  paymentType?: string;
  /**
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @example
   * r*****
   */
  resourceId?: string;
  resourceQuotaName?: string;
  /**
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: { [key: string]: string };
  userIdForFilter?: string;
  username?: string;
  /**
   * @example
   * 1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      fromAllWorkspaces: 'FromAllWorkspaces',
      jobId: 'JobId',
      jobType: 'JobType',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      pipelineId: 'PipelineId',
      resourceId: 'ResourceId',
      resourceQuotaName: 'ResourceQuotaName',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      userIdForFilter: 'UserIdForFilter',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      businessUserId: 'string',
      caller: 'string',
      displayName: 'string',
      endTime: 'string',
      fromAllWorkspaces: 'boolean',
      jobId: 'string',
      jobType: 'string',
      order: 'string',
      oversoldInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      pipelineId: 'string',
      resourceId: 'string',
      resourceQuotaName: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userIdForFilter: 'string',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsShrinkRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @example
   * local
   */
  caller?: string;
  /**
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  oversoldInfo?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  paymentType?: string;
  /**
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @example
   * r*****
   */
  resourceId?: string;
  resourceQuotaName?: string;
  /**
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tagsShrink?: string;
  userIdForFilter?: string;
  username?: string;
  /**
   * @example
   * 1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      fromAllWorkspaces: 'FromAllWorkspaces',
      jobId: 'JobId',
      jobType: 'JobType',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      pipelineId: 'PipelineId',
      resourceId: 'ResourceId',
      resourceQuotaName: 'ResourceQuotaName',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tagsShrink: 'Tags',
      userIdForFilter: 'UserIdForFilter',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      businessUserId: 'string',
      caller: 'string',
      displayName: 'string',
      endTime: 'string',
      fromAllWorkspaces: 'boolean',
      jobId: 'string',
      jobType: 'string',
      order: 'string',
      oversoldInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      pipelineId: 'string',
      resourceId: 'string',
      resourceQuotaName: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tagsShrink: 'string',
      userIdForFilter: 'string',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  jobs?: JobItem[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': JobItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * TestTensorboard
   */
  displayName?: string;
  /**
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @example
   * dlc-xxx
   */
  jobId?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  paymentType?: string;
  quotaId?: string;
  showOwn?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  userId?: string;
  username?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      jobId: 'JobId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      quotaId: 'QuotaId',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      tensorboardId: 'TensorboardId',
      userId: 'UserId',
      username: 'Username',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      displayName: 'string',
      endTime: 'string',
      jobId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      quotaId: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      tensorboardId: 'string',
      userId: 'string',
      username: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  tensorboards?: Tensorboard[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboards: 'Tensorboards',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboards: { 'type': 'array', 'itemType': Tensorboard },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tensorboards)) {
      $dara.Model.validateArray(this.tensorboards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTensorboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTensorboardsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTensorboardRequest extends $dara.Model {
  /**
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTensorboardResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * tensorboard-20210114104214-vf9lowjt3pso
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTensorboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponseBody extends $dara.Model {
  /**
   * @example
   * dlc-20210126170216-xxxxxxx
   */
  jobId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTensorboardRequest extends $dara.Model {
  /**
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTensorboardResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * tensorboard-20210114104214-xxxxxxxx
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTensorboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $dara.Model {
  /**
   * @example
   * dlc*************
   */
  jobId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardRequest extends $dara.Model {
  accessibility?: string;
  /**
   * @example
   * MaxRunningTimeMinutes
   */
  maxRunningTimeMinutes?: number;
  priority?: string;
  /**
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      priority: 'Priority',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      maxRunningTimeMinutes: 'number',
      priority: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * tensorboard-20210114104214-xxxxxxxx
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTensorboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "pai-dlc.aliyuncs.com",
      'ap-northeast-2-pop': "pai-dlc.aliyuncs.com",
      'ap-south-1': "pai-dlc.aliyuncs.com",
      'ap-southeast-2': "pai-dlc.aliyuncs.com",
      'ap-southeast-3': "pai-dlc.aliyuncs.com",
      'ap-southeast-5': "pai-dlc.aliyuncs.com",
      'cn-beijing-finance-1': "pai-dlc.aliyuncs.com",
      'cn-beijing-finance-pop': "pai-dlc.aliyuncs.com",
      'cn-beijing-gov-1': "pai-dlc.aliyuncs.com",
      'cn-beijing-nu16-b01': "pai-dlc.aliyuncs.com",
      'cn-chengdu': "pai-dlc.aliyuncs.com",
      'cn-edge-1': "pai-dlc.aliyuncs.com",
      'cn-fujian': "pai-dlc.aliyuncs.com",
      'cn-haidian-cm12-c01': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-bj-b01': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-finance': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-test-306': "pai-dlc.aliyuncs.com",
      'cn-hongkong-finance-pop': "pai-dlc.aliyuncs.com",
      'cn-huhehaote': "pai-dlc.aliyuncs.com",
      'cn-huhehaote-nebula-1': "pai-dlc.aliyuncs.com",
      'cn-north-2-gov-1': "pai-dlc.aliyuncs.com",
      'cn-qingdao': "pai-dlc.aliyuncs.com",
      'cn-qingdao-nebula': "pai-dlc.aliyuncs.com",
      'cn-shanghai-et15-b01': "pai-dlc.aliyuncs.com",
      'cn-shanghai-et2-b01': "pai-dlc.aliyuncs.com",
      'cn-shanghai-inner': "pai-dlc.aliyuncs.com",
      'cn-shanghai-internal-test-1': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-finance-1': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-inner': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-st4-d01': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-su18-b01': "pai-dlc.aliyuncs.com",
      'cn-wuhan': "pai-dlc.aliyuncs.com",
      'cn-wulanchabu': "pai-dlc.aliyuncs.com",
      'cn-yushanfang': "pai-dlc.aliyuncs.com",
      'cn-zhangbei': "pai-dlc.aliyuncs.com",
      'cn-zhangbei-na61-b01': "pai-dlc.aliyuncs.com",
      'cn-zhangjiakou': "pai-dlc.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "pai-dlc.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "pai-dlc.aliyuncs.com",
      'eu-west-1': "pai-dlc.aliyuncs.com",
      'eu-west-1-oxs': "pai-dlc.aliyuncs.com",
      'me-east-1': "pai-dlc.aliyuncs.com",
      'rus-west-1-pop': "pai-dlc.aliyuncs.com",
      'us-east-1': "pai-dlc.aliyuncs.com",
      'us-west-1': "pai-dlc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pai-dlc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建一个DLC作业
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.codeSource)) {
      body["CodeSource"] = request.codeSource;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.debuggerConfigContent)) {
      body["DebuggerConfigContent"] = request.debuggerConfigContent;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.elasticSpec)) {
      body["ElasticSpec"] = request.elasticSpec;
    }

    if (!$dara.isNull(request.envs)) {
      body["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.jobMaxRunningTimeMinutes)) {
      body["JobMaxRunningTimeMinutes"] = request.jobMaxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.jobSpecs)) {
      body["JobSpecs"] = request.jobSpecs;
    }

    if (!$dara.isNull(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.settings)) {
      body["Settings"] = request.settings;
    }

    if (!$dara.isNull(request.successPolicy)) {
      body["SuccessPolicy"] = request.successPolicy;
    }

    if (!$dara.isNull(request.thirdpartyLibDir)) {
      body["ThirdpartyLibDir"] = request.thirdpartyLibDir;
    }

    if (!$dara.isNull(request.thirdpartyLibs)) {
      body["ThirdpartyLibs"] = request.thirdpartyLibs;
    }

    if (!$dara.isNull(request.userCommand)) {
      body["UserCommand"] = request.userCommand;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
    } else {
      return $dara.cast<CreateJobResponse>(await this.execute(params, req, runtime), new CreateJobResponse({}));
    }

  }

  /**
   * 创建一个DLC作业
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  /**
   * 创建一个Tensorboard
   * 
   * @param request - CreateTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTensorboardResponse
   */
  async createTensorboardWithOptions(request: CreateTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTensorboardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maxRunningTimeMinutes)) {
      body["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.quotaId)) {
      body["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.summaryPath)) {
      body["SummaryPath"] = request.summaryPath;
    }

    if (!$dara.isNull(request.summaryRelativePath)) {
      body["SummaryRelativePath"] = request.summaryRelativePath;
    }

    if (!$dara.isNull(request.tensorboardDataSources)) {
      body["TensorboardDataSources"] = request.tensorboardDataSources;
    }

    if (!$dara.isNull(request.tensorboardSpec)) {
      body["TensorboardSpec"] = request.tensorboardSpec;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTensorboardResponse>(await this.callApi(params, req, runtime), new CreateTensorboardResponse({}));
    } else {
      return $dara.cast<CreateTensorboardResponse>(await this.execute(params, req, runtime), new CreateTensorboardResponse({}));
    }

  }

  /**
   * 创建一个Tensorboard
   * 
   * @param request - CreateTensorboardRequest
   * @returns CreateTensorboardResponse
   */
  async createTensorboard(request: CreateTensorboardRequest): Promise<CreateTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTensorboardWithOptions(request, headers, runtime);
  }

  /**
   * 删除一个DLC作业
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
    } else {
      return $dara.cast<DeleteJobResponse>(await this.execute(params, req, runtime), new DeleteJobResponse({}));
    }

  }

  /**
   * 删除一个DLC作业
   * @returns DeleteJobResponse
   */
  async deleteJob(JobId: string): Promise<DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(JobId, headers, runtime);
  }

  /**
   * 删除一个数据源配置
   * 
   * @param request - DeleteTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTensorboardResponse
   */
  async deleteTensorboardWithOptions(TensorboardId: string, request: DeleteTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTensorboardResponse>(await this.callApi(params, req, runtime), new DeleteTensorboardResponse({}));
    } else {
      return $dara.cast<DeleteTensorboardResponse>(await this.execute(params, req, runtime), new DeleteTensorboardResponse({}));
    }

  }

  /**
   * 删除一个数据源配置
   * 
   * @param request - DeleteTensorboardRequest
   * @returns DeleteTensorboardResponse
   */
  async deleteTensorboard(TensorboardId: string, request: DeleteTensorboardRequest): Promise<DeleteTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * 获取一个DLC作业详情
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(JobId: string, request: GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.needDetail)) {
      query["NeedDetail"] = request.needDetail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
    } else {
      return $dara.cast<GetJobResponse>(await this.execute(params, req, runtime), new GetJobResponse({}));
    }

  }

  /**
   * 获取一个DLC作业详情
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(JobId: string, request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 获取作业的事件
   * 
   * @param request - GetJobEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobEventsResponse
   */
  async getJobEventsWithOptions(JobId: string, request: GetJobEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobEvents",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobEventsResponse>(await this.callApi(params, req, runtime), new GetJobEventsResponse({}));
    } else {
      return $dara.cast<GetJobEventsResponse>(await this.execute(params, req, runtime), new GetJobEventsResponse({}));
    }

  }

  /**
   * 获取作业的事件
   * 
   * @param request - GetJobEventsRequest
   * @returns GetJobEventsResponse
   */
  async getJobEvents(JobId: string, request: GetJobEventsRequest): Promise<GetJobEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobEventsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 获取一个作业的资源监控指标
   * 
   * @param request - GetJobMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobMetricsResponse
   */
  async getJobMetricsWithOptions(JobId: string, request: GetJobMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobMetrics",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobMetricsResponse>(await this.callApi(params, req, runtime), new GetJobMetricsResponse({}));
    } else {
      return $dara.cast<GetJobMetricsResponse>(await this.execute(params, req, runtime), new GetJobMetricsResponse({}));
    }

  }

  /**
   * 获取一个作业的资源监控指标
   * 
   * @param request - GetJobMetricsRequest
   * @returns GetJobMetricsResponse
   */
  async getJobMetrics(JobId: string, request: GetJobMetricsRequest): Promise<GetJobMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobMetricsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 获取DLC作业某次算力健康检测结果
   * 
   * @param request - GetJobSanityCheckResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobSanityCheckResultResponse
   */
  async getJobSanityCheckResultWithOptions(JobId: string, request: GetJobSanityCheckResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobSanityCheckResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sanityCheckNumber)) {
      query["SanityCheckNumber"] = request.sanityCheckNumber;
    }

    if (!$dara.isNull(request.sanityCheckPhase)) {
      query["SanityCheckPhase"] = request.sanityCheckPhase;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobSanityCheckResult",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/sanitycheckresult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobSanityCheckResultResponse>(await this.callApi(params, req, runtime), new GetJobSanityCheckResultResponse({}));
    } else {
      return $dara.cast<GetJobSanityCheckResultResponse>(await this.execute(params, req, runtime), new GetJobSanityCheckResultResponse({}));
    }

  }

  /**
   * 获取DLC作业某次算力健康检测结果
   * 
   * @param request - GetJobSanityCheckResultRequest
   * @returns GetJobSanityCheckResultResponse
   */
  async getJobSanityCheckResult(JobId: string, request: GetJobSanityCheckResultRequest): Promise<GetJobSanityCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobSanityCheckResultWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 获取作业中一个运行实例的系统事件
   * 
   * @param request - GetPodEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPodEventsResponse
   */
  async getPodEventsWithOptions(JobId: string, PodId: string, request: GetPodEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPodEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPodEvents",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPodEventsResponse>(await this.callApi(params, req, runtime), new GetPodEventsResponse({}));
    } else {
      return $dara.cast<GetPodEventsResponse>(await this.execute(params, req, runtime), new GetPodEventsResponse({}));
    }

  }

  /**
   * 获取作业中一个运行实例的系统事件
   * 
   * @param request - GetPodEventsRequest
   * @returns GetPodEventsResponse
   */
  async getPodEvents(JobId: string, PodId: string, request: GetPodEventsRequest): Promise<GetPodEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodEventsWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * 获取作业中一个运行实例的日志
   * 
   * @param request - GetPodLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPodLogsResponse
   */
  async getPodLogsWithOptions(JobId: string, PodId: string, request: GetPodLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPodLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.downloadToFile)) {
      query["DownloadToFile"] = request.downloadToFile;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxLines)) {
      query["MaxLines"] = request.maxLines;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPodLogs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPodLogsResponse>(await this.callApi(params, req, runtime), new GetPodLogsResponse({}));
    } else {
      return $dara.cast<GetPodLogsResponse>(await this.execute(params, req, runtime), new GetPodLogsResponse({}));
    }

  }

  /**
   * 获取作业中一个运行实例的日志
   * 
   * @param request - GetPodLogsRequest
   * @returns GetPodLogsResponse
   */
  async getPodLogs(JobId: string, PodId: string, request: GetPodLogsRequest): Promise<GetPodLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodLogsWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * 获取一个Tensorboard
   * 
   * @param request - GetTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTensorboardResponse
   */
  async getTensorboardWithOptions(TensorboardId: string, request: GetTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jodId)) {
      query["JodId"] = request.jodId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTensorboardResponse>(await this.callApi(params, req, runtime), new GetTensorboardResponse({}));
    } else {
      return $dara.cast<GetTensorboardResponse>(await this.execute(params, req, runtime), new GetTensorboardResponse({}));
    }

  }

  /**
   * 获取一个Tensorboard
   * 
   * @param request - GetTensorboardRequest
   * @returns GetTensorboardResponse
   */
  async getTensorboard(TensorboardId: string, request: GetTensorboardRequest): Promise<GetTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Get the shared url for tensorboard
   * 
   * @param request - GetTensorboardSharedUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTensorboardSharedUrlResponse
   */
  async getTensorboardSharedUrlWithOptions(TensorboardId: string, request: GetTensorboardSharedUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTensorboardSharedUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTimeSeconds)) {
      query["ExpireTimeSeconds"] = request.expireTimeSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTensorboardSharedUrl",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/sharedurl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTensorboardSharedUrlResponse>(await this.callApi(params, req, runtime), new GetTensorboardSharedUrlResponse({}));
    } else {
      return $dara.cast<GetTensorboardSharedUrlResponse>(await this.execute(params, req, runtime), new GetTensorboardSharedUrlResponse({}));
    }

  }

  /**
   * Get the shared url for tensorboard
   * 
   * @param request - GetTensorboardSharedUrlRequest
   * @returns GetTensorboardSharedUrlResponse
   */
  async getTensorboardSharedUrl(TensorboardId: string, request: GetTensorboardSharedUrlRequest): Promise<GetTensorboardSharedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTensorboardSharedUrlWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * 获取用户Token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
    } else {
      return $dara.cast<GetTokenResponse>(await this.execute(params, req, runtime), new GetTokenResponse({}));
    }

  }

  /**
   * 获取用户Token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * Get the url for accessing pod's terminal in k8s
   * 
   * @param request - GetWebTerminalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebTerminalResponse
   */
  async getWebTerminalWithOptions(JobId: string, PodId: string, request: GetWebTerminalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetWebTerminalResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      query["IsShared"] = request.isShared;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebTerminal",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/webterminal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWebTerminalResponse>(await this.callApi(params, req, runtime), new GetWebTerminalResponse({}));
    } else {
      return $dara.cast<GetWebTerminalResponse>(await this.execute(params, req, runtime), new GetWebTerminalResponse({}));
    }

  }

  /**
   * Get the url for accessing pod's terminal in k8s
   * 
   * @param request - GetWebTerminalRequest
   * @returns GetWebTerminalResponse
   */
  async getWebTerminal(JobId: string, PodId: string, request: GetWebTerminalRequest): Promise<GetWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebTerminalWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * ListEcsSpecs
   * 
   * @param request - ListEcsSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecsWithOptions(request: ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEcsSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsSpecs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new ListEcsSpecsResponse({}));
    } else {
      return $dara.cast<ListEcsSpecsResponse>(await this.execute(params, req, runtime), new ListEcsSpecsResponse({}));
    }

  }

  /**
   * ListEcsSpecs
   * 
   * @param request - ListEcsSpecsRequest
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  /**
   * 获取某个DLC作业的多次算力健康检测结果
   * 
   * @param request - ListJobSanityCheckResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobSanityCheckResultsResponse
   */
  async listJobSanityCheckResultsWithOptions(JobId: string, request: ListJobSanityCheckResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobSanityCheckResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobSanityCheckResults",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/sanitycheckresults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobSanityCheckResultsResponse>(await this.callApi(params, req, runtime), new ListJobSanityCheckResultsResponse({}));
    } else {
      return $dara.cast<ListJobSanityCheckResultsResponse>(await this.execute(params, req, runtime), new ListJobSanityCheckResultsResponse({}));
    }

  }

  /**
   * 获取某个DLC作业的多次算力健康检测结果
   * 
   * @param request - ListJobSanityCheckResultsRequest
   * @returns ListJobSanityCheckResultsResponse
   */
  async listJobSanityCheckResults(JobId: string, request: ListJobSanityCheckResultsRequest): Promise<ListJobSanityCheckResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobSanityCheckResultsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 根据过滤条件获取DLC作业列表
   * 
   * @param tmpReq - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    tmpReq.validate();
    let request = new ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.businessUserId)) {
      query["BusinessUserId"] = request.businessUserId;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fromAllWorkspaces)) {
      query["FromAllWorkspaces"] = request.fromAllWorkspaces;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.oversoldInfo)) {
      query["OversoldInfo"] = request.oversoldInfo;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceQuotaName)) {
      query["ResourceQuotaName"] = request.resourceQuotaName;
    }

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userIdForFilter)) {
      query["UserIdForFilter"] = request.userIdForFilter;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
    } else {
      return $dara.cast<ListJobsResponse>(await this.execute(params, req, runtime), new ListJobsResponse({}));
    }

  }

  /**
   * 根据过滤条件获取DLC作业列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  /**
   * 获取Tensorboard
   * 
   * @param request - ListTensorboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTensorboardsResponse
   */
  async listTensorboardsWithOptions(request: ListTensorboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTensorboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tensorboardId)) {
      query["TensorboardId"] = request.tensorboardId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTensorboards",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTensorboardsResponse>(await this.callApi(params, req, runtime), new ListTensorboardsResponse({}));
    } else {
      return $dara.cast<ListTensorboardsResponse>(await this.execute(params, req, runtime), new ListTensorboardsResponse({}));
    }

  }

  /**
   * 获取Tensorboard
   * 
   * @param request - ListTensorboardsRequest
   * @returns ListTensorboardsResponse
   */
  async listTensorboards(request: ListTensorboardsRequest): Promise<ListTensorboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTensorboardsWithOptions(request, headers, runtime);
  }

  /**
   * 开始运行tensorboard
   * 
   * @param request - StartTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTensorboardResponse
   */
  async startTensorboardWithOptions(TensorboardId: string, request: StartTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTensorboardResponse>(await this.callApi(params, req, runtime), new StartTensorboardResponse({}));
    } else {
      return $dara.cast<StartTensorboardResponse>(await this.execute(params, req, runtime), new StartTensorboardResponse({}));
    }

  }

  /**
   * 开始运行tensorboard
   * 
   * @param request - StartTensorboardRequest
   * @returns StartTensorboardResponse
   */
  async startTensorboard(TensorboardId: string, request: StartTensorboardRequest): Promise<StartTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * 停止一个DLC作业
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobResponse
   */
  async stopJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopJobResponse>(await this.callApi(params, req, runtime), new StopJobResponse({}));
    } else {
      return $dara.cast<StopJobResponse>(await this.execute(params, req, runtime), new StopJobResponse({}));
    }

  }

  /**
   * 停止一个DLC作业
   * @returns StopJobResponse
   */
  async stopJob(JobId: string): Promise<StopJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  /**
   * 停止运行tensorboard
   * 
   * @param request - StopTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTensorboardResponse
   */
  async stopTensorboardWithOptions(TensorboardId: string, request: StopTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopTensorboardResponse>(await this.callApi(params, req, runtime), new StopTensorboardResponse({}));
    } else {
      return $dara.cast<StopTensorboardResponse>(await this.execute(params, req, runtime), new StopTensorboardResponse({}));
    }

  }

  /**
   * 停止运行tensorboard
   * 
   * @param request - StopTensorboardRequest
   * @returns StopTensorboardResponse
   */
  async stopTensorboard(TensorboardId: string, request: StopTensorboardRequest): Promise<StopTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * 更新一个Job
   * 
   * @param request - UpdateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(JobId: string, request: UpdateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateJobResponse>(await this.callApi(params, req, runtime), new UpdateJobResponse({}));
    } else {
      return $dara.cast<UpdateJobResponse>(await this.execute(params, req, runtime), new UpdateJobResponse({}));
    }

  }

  /**
   * 更新一个Job
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(JobId: string, request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJobWithOptions(JobId, request, headers, runtime);
  }

  /**
   * 更新tensorboard
   * 
   * @param request - UpdateTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTensorboardResponse
   */
  async updateTensorboardWithOptions(TensorboardId: string, request: UpdateTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.maxRunningTimeMinutes)) {
      query["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTensorboardResponse>(await this.callApi(params, req, runtime), new UpdateTensorboardResponse({}));
    } else {
      return $dara.cast<UpdateTensorboardResponse>(await this.execute(params, req, runtime), new UpdateTensorboardResponse({}));
    }

  }

  /**
   * 更新tensorboard
   * 
   * @param request - UpdateTensorboardRequest
   * @returns UpdateTensorboardResponse
   */
  async updateTensorboard(TensorboardId: string, request: UpdateTensorboardRequest): Promise<UpdateTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

}
