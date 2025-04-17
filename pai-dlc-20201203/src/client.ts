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
   * @remarks
   * The branch of the referenced code repository. By default, the branch configured in the code source is used. This parameter is optional.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The ID of the code source.
   * 
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code to be downloaded. By default, the commit ID configured in the code source is used. This parameter is optional.
   * 
   * @example
   * 44da109b5******
   */
  commit?: string;
  /**
   * @remarks
   * The path to which the job is mounted. By default, the mount path configured in the data source is used. This parameter is optional.
   * 
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
   * @remarks
   * The data source ID.
   * 
   * @example
   * d-cn9dl*******
   */
  dataSourceId?: string;
  dataSourceVersion?: string;
  mountAccess?: string;
  /**
   * @remarks
   * The path to which the job is mounted. By default, the mount path in the data source configuration is used. This parameter is optional.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount attribute of the custom dataset. Set the value to OSS.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The data source path.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      mountAccess: 'string',
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
  /**
   * @remarks
   * The default route. Default value: false. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway. For more information about the configuration method, see [Enable Internet access for a DSW instance by using a private Internet NAT gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block.
   * 
   * *   If you leave the SwitchId and ExtendedCIDRs parameters empty, the system automatically obtains all CIDR blocks in a VPC.
   * *   If you configure the SwitchId and ExtendedCIDRs parameters, we recommend that you specify all CIDR blocks in a VPC.
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is optional.
   * 
   * *   If you leave this parameter empty, the system automatically selects a vSwitch based on the inventory status.
   * *   You can also specify a vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
   * @remarks
   * The code branch.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The code source ID.
   * 
   * @example
   * code******
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The code commit ID
   * 
   * @example
   * 44da109b59f8596152987eaa8f3b2487xxxxxx
   */
  commit?: string;
  /**
   * @remarks
   * The local mount path.
   * 
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
   * @remarks
   * The data source ID.
   * 
   * @example
   * d*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The local mount path. This parameter is optional. The default value is empty, which specifies that the mount path in the data source is used.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The data source URL.
   * 
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
   * @remarks
   * The time when the node was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.3
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the node.
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The resource type of the node.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of the node, such as its preemption status. Valid values:
   * 
   * *   Normal
   * *   Evicted
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The type of the node.
   * 
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
   * @remarks
   * The time when the node was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time of the node (UTC).
   * 
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The historical nodes.
   */
  historyPods?: GetJobResponseBodyPodsHistoryPods[];
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @remarks
   * The node ID. It can be used in the GetPodLogs and GetPodEvents operations to obtain the detailed logs and events of the node.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the node.
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The resource type of the node.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   Pending
   * *   Running
   * *   Succeeded
   * *   Failed
   * *   Unknown
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of the node, such as its preemption status. Valid values:
   * 
   * *   Normal
   * *   Evicted
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The node type, which corresponds to a specific JobSpec in JobSpecs of the CreateJob operation.
   * 
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
  /**
   * @remarks
   * The default router. This parameter is valid only for general-purpose computing resources. Valid values:
   * 
   * eth0: The default network interface is used to access the Internet through the public gateway. eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway.
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block. Example: 192.168.0.1/24.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
  /**
   * @deprecated
   */
  podAnnotations?: { [key: string]: string };
  /**
   * @deprecated
   */
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
  isTruncated?: boolean;
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
      isTruncated: 'IsTruncated',
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
      isTruncated: 'boolean',
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
  nodeName?: string;
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
      nodeName: 'NodeName',
      podId: 'PodId',
      podUid: 'PodUid',
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
      historyPods: { 'type': 'array', 'itemType': PodItem },
      ip: 'string',
      nodeName: 'string',
      podId: 'string',
      podUid: 'string',
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

export class SeccompProfile extends $dara.Model {
  /**
   * @example
   * my-profiles/profile-allow.json
   */
  localhostProfile?: string;
  /**
   * @example
   * Unconfined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      localhostProfile: 'LocalhostProfile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localhostProfile: 'string',
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

export class SecurityContext extends $dara.Model {
  /**
   * @example
   * 1000
   */
  runAsGroup?: number;
  /**
   * @example
   * 1000
   */
  runAsUser?: number;
  seccompProfile?: SeccompProfile;
  static names(): { [key: string]: string } {
    return {
      runAsGroup: 'RunAsGroup',
      runAsUser: 'RunAsUser',
      seccompProfile: 'SeccompProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runAsGroup: 'number',
      runAsUser: 'number',
      seccompProfile: SeccompProfile,
    };
  }

  validate() {
    if(this.seccompProfile && typeof (this.seccompProfile as any).validate === 'function') {
      (this.seccompProfile as any).validate();
    }
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
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code source of the job. Before the node of the job runs, DLC automatically downloads the configured code from the code source and mounts the code to the local path of the container.
   */
  codeSource?: CreateJobRequestCodeSource;
  /**
   * @remarks
   * The access credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The data sources for job running.
   */
  dataSources?: CreateJobRequestDataSources[];
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * “”
   */
  debuggerConfigContent?: string;
  /**
   * @remarks
   * The job name. The name must be in the following format:
   * 
   * *   The name must be 1 to 256 characters in length.
   * *   The name can contain digits, letters, underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is not supported.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * The environment variables.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The maximum running duration of the job. Unit: minutes.
   * 
   * @example
   * 1024
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * The configurations for job running, such as the image address, startup command, node resource declaration, and number of replicas.****
   * 
   * A DLC job consists of different types of nodes. If nodes of the same type have exactly the same configuration, the configuration is called JobSpec. **JobSpecs** specifies the configurations of all types of nodes. The value is of the array type.
   * 
   * This parameter is required.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. The value is case-sensitive. The following job types are supported:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   MPIJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * *   SlurmJob
   * *   RayJob
   * 
   * Valid values for each job type:
   * 
   * *   OneFlowJob: OneFlow.
   * *   PyTorchJob: PyTorch.
   * *   SlurmJob: Slurm.
   * *   XGBoostJob: XGBoost.
   * *   ElasticBatchJob: ElasticBatch.
   * *   MPIJob: MPIJob.
   * *   TFJob: Tensorflow.
   * *   RayJob: Ray.
   * 
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The additional configuration of the job. You can use this parameter to adjust the behavior of the attached data source. For example, if the attached data source of the job is of the OSS type, you can use this parameter to add the following configurations to override the default parameters of JindoFS: `fs.oss.download.thread.concurrency=4,fs.oss.download.queue.size=16`.
   * 
   * @example
   * key1=value1,key2=value2
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. Default value: 1. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9: the highest priority.
   * 
   * @example
   * 8
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group. This parameter is optional.
   * 
   * *   If you leave this parameter empty, the job is submitted to a public resource group.
   * *   If a resource quota is bound to the current workspace, you can specify the resource quota ID. For more information about how to query the resource quota ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * rs-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The additional parameter configurations of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The policy that is used to check whether a distributed multi-node job is successful. Only TensorFlow distributed multi-node jobs are supported.
   * 
   * *   ChiefWorker: If you use this policy, the job is considered successful when the pod on the chief node completes operations.
   * *   AllWorkers (default): If you use this policy, the job is considered successful when all worker nodes complete operations.
   * 
   * @example
   * AllWorkers
   */
  successPolicy?: string;
  /**
   * @remarks
   * The folder in which the third-party Python library file requirements.txt is stored. Before the startup command specified by the UserCommand parameter is run on each node, DLC fetches the requirements.txt file from the folder and runs `pip install -r` to install the required package and library.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The third-party Python libraries to be installed.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * The startup command for all nodes of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The VPC settings.
   */
  userVpc?: CreateJobRequestUserVpc;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc7*******
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID used to troubleshoot issues.
   * 
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
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * 
   * *   PUBLIC: The configuration is public in the workspace.
   * *   PRIVATE: The configuration is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The dataset ID. 
   * <props="china">Call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to get the dataset ID.
   * 
   * @example
   * d-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * 
   * *   OSS
   * *   NAS
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSources?: DataSourceItem[];
  /**
   * @remarks
   * The TensorBoard name
   * 
   * @example
   * tensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The job ID. Call [ListJobs](https://help.aliyun.com/document_detail/459676.html) to get the job ID.
   * 
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum running duration. Unit: minutes.
   * 
   * @example
   * 240
   */
  maxRunningTimeMinutes?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 1000
   */
  memory?: number;
  /**
   * @remarks
   * The extended fields of the dataset are in the JSON format. MountPath: the path to mount the dataset.
   * 
   * @example
   * {"mountpath":"/root/data/"}
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. Default value: 1. Valid values: 1 to 9.
   * 
   * *   1 is the lowest priority.
   * *   9 is the highest priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The resource quota ID. This parameter is required when you create a TensorBoard job by using a resource quota. <props="china">Call [ListQuotas](https://help.aliyun.com/document_detail/2628071.html) to get the quota ID. 
   * This feature is currently limited to whitelisted users. If you need to use this feature, contact us.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The directory of summary.
   * 
   * @example
   * /root/data/
   */
  summaryPath?: string;
  /**
   * @remarks
   * The relative path of summary.
   * 
   * @example
   * /summary/
   */
  summaryRelativePath?: string;
  /**
   * @remarks
   * The configurations of datasets mounted with the TensorBoard job.
   */
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @remarks
   * The pay-as-you-go configuration of TensorBoard, which is used to create TensorBoard jobs that use pay-as-you-go resources.
   */
  tensorboardSpec?: TensorboardSpec;
  /**
   * @remarks
   * The dataset URI.
   * 
   * *   Value format when DataSourceType is set to OSS: `oss://[oss-bucket].[endpoint]/[path]`.
   * *   Value format when DataSourceType is set to NAS:`nas://[nas-filesystem-id].[region]/[path]`.
   * 
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  /**
   * @remarks
   * The workspace ID. 
   * <props="china">Call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The dataset ID.
   * 
   * @example
   * ds-20210126170216-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * TensorBoard ID
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc*************
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the request ID.
   * 
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
   * @remarks
   * The workspace ID. 
   * <props="china">For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The TensorBoard ID.
   * 
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
   * @remarks
   * Specifies whether to return the job details. Default value: true.
   * 
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
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * 
   * *   PUBLIC: The code is public in the workspace.
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace. This is the default value.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a*****
   */
  clusterId?: string;
  /**
   * @remarks
   * The code source.
   */
  codeSource?: GetJobResponseBodyCodeSource;
  /**
   * @remarks
   * The access credential configurations.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The data sources.
   */
  dataSources?: GetJobResponseBodyDataSources[];
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * The duration of the job (seconds).
   * 
   * @example
   * 3602
   */
  duration?: number;
  /**
   * @remarks
   * The elastic job parameters.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * Specifies whether to enable the debugger job.
   * 
   * @example
   * false
   */
  enabledDebugger?: boolean;
  /**
   * @remarks
   * The configurations of environment variables.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The time when the job was created (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time of the job failed (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFailedTime?: string;
  /**
   * @remarks
   * The time when the job ended (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the job (UTC).
   * 
   * @example
   * 2021-01-12T14:36:21Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The time when the job stopped (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtStoppedTime?: string;
  /**
   * @remarks
   * The time when the job was submitted to the cluster (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @remarks
   * The time when the job succeeded (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtSuccessedTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc*******
   */
  jobId?: string;
  /**
   * @remarks
   * The node configurations of the job, which is **JobSpecs** in the CreateJob operation.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. Specified by the JobType parameter of the [CreateJob](https://help.aliyun.com/document_detail/459672.html) operation.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * All running nodes of the job.
   */
  pods?: GetJobResponseBodyPods[];
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 9.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status detail code, which is a sub-status under the current status.
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The description of the status detail code.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the job belongs.
   * 
   * @example
   * r******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level that the job uses.
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The resource type. Valid values: ECS, Lingjun, and ACS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of retries and the maximum number of retries used by the job.
   * 
   * @example
   * 0/10
   */
  restartTimes?: string;
  /**
   * @remarks
   * The settings of the additional parameters of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Creating
   * *   Queuing
   * *   Bidding (Only for Lingjun preemptible jobs)
   * *   EnvPreparing
   * *   SanityChecking
   * *   Running
   * *   Restarting
   * *   Stopping
   * *   SucceededReserving
   * *   FailedReserving
   * *   Succeeded
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The status history.
   */
  statusHistory?: StatusTransitionItem[];
  /**
   * @remarks
   * The sub-status of the job, such as its preemption status.
   * 
   * @example
   * Restarting
   */
  subStatus?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * GAR***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * The directory that contains requirements.txt.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The third-party Python libraries to be installed.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * The command that is run to start each node.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account who submitted the job.
   * 
   * @example
   * 12*********
   */
  userId?: string;
  /**
   * @remarks
   * The VPC of the user.
   */
  userVpc?: GetJobResponseBodyUserVpc;
  /**
   * @remarks
   * The ID of the workspace to which the job belongs.
   * 
   * @example
   * 268
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the job belongs.
   * 
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
   * @remarks
   * The end time (UTC) of the time range for querying events. The default value is the current time.
   * 
   * @example
   * 2020-11-08T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events that can be returned. Default value: 2000.
   * 
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The start time (UTC) of the time range for querying events. The default value is 7 days ago.
   * 
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
  /**
   * @remarks
   * The events.
   */
  events?: string[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-******
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
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
   * @remarks
   * The end time of the time range to query monitoring data. The time is displayed in UTC. The default value is the current time.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the monitoring metrics. Valid values:
   * 
   * *   GpuCoreUsage: GPU utilization
   * *   GpuMemoryUsage: GPU memory utilization
   * *   CpuCoreUsage: CPU utilization
   * *   MemoryUsage: memory utilization
   * *   NetworkInputRate: the network write in rate.
   * *   NetworkOutputRate: the network write out rate
   * *   DiskReadRate: the disk read rate
   * *   DiskWriteRate: the disk write rate
   * 
   * This parameter is required.
   * 
   * @example
   * GpuMemoryUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The beginning of the time range to query monitoring data. The time is displayed in UTC. The default value is the time 1 hour before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The interval at which monitoring data is returned. Default value: 5. Unit: minutes.
   * 
   * @example
   * 5m
   */
  timeStep?: string;
  /**
   * @remarks
   * The temporary token used for authentication.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-*******
   */
  jobId?: string;
  /**
   * @remarks
   * The monitoring metrics of the job.
   */
  podMetrics?: PodMetric[];
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the request ID.
   * 
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
   * The nth time for which the job sanity check is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sanityCheckNumber?: number;
  /**
   * @remarks
   * The phase in which the job sanity check is performed.
   * 
   * *   CheckInit
   * *   DeviceCheck
   * *   SingleNodeCommCheck
   * *   TwoNodeCommCheck
   * *   AllNodeCommCheck
   * 
   * @example
   * DeviceCheck
   */
  sanityCheckPhase?: string;
  /**
   * @remarks
   * The token information for job sharing. For more information about how to obtain the token information, see [GetToken](https://help.aliyun.com/document_detail/2557812.html).
   * 
   * @example
   * eyJhbG******zI1NiIsInR5cCI6IkpXVCJ9.eyJle****jE3MDk1Mzk0NDIsImlhdCI6MTcwODkzNDY0MiwidXNlcl9pZCI6IjE3NTgwNTQxNjI0Mzg2NTUiLCJ0YXJnZXRfaWQiOiJkbGM1OGh1a2xyYzZwdGMyIiwidGFyZ2V0X3R5cGUiOiJqb2IifQ.GNL7jo6****mgKKv0QeGIYgvBufSU-PH_EQttX****
   */
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3789344-F1xxxBE-5xx2-A04D-xxxxx
   */
  requestID?: string;
  /**
   * @remarks
   * The job sanity check result.
   */
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
   * @remarks
   * The end time (UTC).
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events that can be returned.
   * 
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The node UID. Call [GetJob](https://help.aliyun.com/document_detail/459677.html) to get the node UID.
   * 
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podUid?: string;
  /**
   * @remarks
   * The start time (UTC).
   * 
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
  /**
   * @remarks
   * The events returned.
   */
  events?: string[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-*****
   */
  jobId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podId?: string;
  /**
   * @remarks
   * The node UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
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
   * @remarks
   * Specifies whether to download the log file. Default value: false. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  downloadToFile?: boolean;
  /**
   * @remarks
   * The end time of the query. Default value: current time.
   * 
   * @example
   * 2020-11-08T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of log entries. Default value: 2000.
   * 
   * @example
   * 100
   */
  maxLines?: number;
  /**
   * @remarks
   * The node UID. For more information about how to obtain a node UID, see [GetJob](https://help.aliyun.com/document_detail/459677.html).
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57****
   */
  podUid?: string;
  /**
   * @remarks
   * The start time of the query. Default value: 7 days ago.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-******
   */
  jobId?: string;
  /**
   * @remarks
   * The logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * dlc-20210126170216-****-chief-0
   */
  podId?: string;
  /**
   * @remarks
   * The instance UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @remarks
   * The request ID which is used for diagnostics and Q\\&A.
   * 
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

export class GetRayDashboardRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @example
   * some_token_value
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      isShared: 'isShared',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShared: 'boolean',
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

export class GetRayDashboardResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  metricsEnabled?: string;
  /**
   * @example
   * https://pre-pai-dlc-proxy-cn-hangzhou.aliyun.com/ray/dashboard/dlc1k7426goc7bvy
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      metricsEnabled: 'metricsEnabled',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricsEnabled: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRayDashboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRayDashboardResponseBody;
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
      body: GetRayDashboardResponseBody,
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
   * @remarks
   * The job ID. For more information about how to query the job ID, see [ListJob](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxxxxxxx
   */
  jodId?: string;
  /**
   * @remarks
   * The information about the shared token. You can specify this parameter to obtain the permission to view a TensorBoard job based on the shared token information. You can execute [GetTensorboardSharedUrl](https://help.aliyun.com/document_detail/2557813.html) and extract the shared token from the obtained information.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e
   * yJleHAiOjE2OTUyODA0NTMsImlhdCI6MTY5NTE5NDA1MywidXNlcl9pZCI6IjExN
   * Tc3MDMyNzA5OTQ5MDEiLCJ0YXJnZXRfaWQiOiJ0YjRrOGxjNXhmdTM2b3B0Iiw
   * idGFyZ2V0X3R5cGUiOiJ0ZW5zb3Jib2FyZCJ9.6eT68J-KMBwwfN2d7fj7u6vyPcf0erfqYeizd2N****
   */
  token?: string;
  /**
   * @remarks
   * The workspace ID. 
   * <props="china">For more information about how to query the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
   * @remarks
   * The validity period of the shareable link. Unit: seconds. Maximum value: 604800.
   * 
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
   * @remarks
   * The request ID which is used for troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The shareable link of the TensorBoard task.
   * 
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
   * @remarks
   * The time when the share link expires. Default value: 604800 seconds. Minimum value: 0.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the job that is waiting to be shared.
   * 
   * @example
   * dlc*******
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the job that you want to share. Valid values: job and tensorboard.
   * 
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
   * @remarks
   * The request ID, which is used to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The token of the shared job, which can be used as the value of the Token parameter in the GetJob API operation to view information about the shared job.
   * 
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
  /**
   * @remarks
   * Specifies whether to create a shareable link to access the container. Valid values:
   * 
   * *   true: returns a shareable link to access the container. The link will expire after 30 seconds and can only be used once. After you access the container by using the link, other requests that use this link to access the container become invalid.
   * *   false: returns a common shareable link to access the container. If you use a common shareable link to access a container, Alibaba Cloud identity authentication is required. The link will expire after 30 seconds.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The pod UID.
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
  /**
   * @remarks
   * The request ID which is used for diagnostics and Q\\&A.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The WebSocket URI for accessing the container. You must build a WebSocket client. For more information about the communication format, see the following code:
   * 
   *     ws = new WebSocket(
   *       `wss://xxxxx`,
   *     );
   *     ws.onopen = function open() {
   *       console.warn(\\"connected\\");
   *       term.write(\\"\\r\\");
   *     };
   * 
   *     ws.onclose = function close() {
   *       console.warn(\\"disconnected\\");
   *       term.write(\\"Connection closed\\");
   *     };
   * 
   *     // Return the following information in the backend.
   *     ws.onmessage = function incoming(event) {
   *       const msg = JSON.parse(event.data);
   *       console.warn(msg);
   *       if (msg.operation === \\"stdout\\") {
   *         term.write(msg.data);
   *       } else {
   *         console.warn(\\"invalid msg operation: \\" + msg);
   *       }
   *     };
   * 
   *     // Enter the following code in the console.
   *     term.onData(data => {
   *       const msg = { operation: \\"stdin\\", data: data };
   *       ws.send(JSON.stringify(msg));
   *     });
   * 
   *     term.onResize(size => {
   *       const msg = { operation: \\"resize\\", cols: size.cols, rows: size.rows };
   *       ws.send(JSON.stringify(msg));
   *     });
   * 
   *     fitAddon.fit();
   *     };
   * 
   * @example
   * wss://*****
   */
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
   * @remarks
   * Filter by accelerator type. Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The instance types to query. Separate the types with commas (,).
   * 
   * @example
   * ecs.g6.large,ecs.g6.xlarge
   */
  instanceTypes?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to query. The start value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   ECS
   * *   Lingjun
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The field based on which the results are sorted. Valid values:
   * 
   * *   CPU
   * *   GPU
   * *   Memory
   * *   GmtCreateTime
   * 
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
  /**
   * @remarks
   * The list of ECS specifications.
   */
  ecsSpecs?: EcsSpec[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of types that meet the filter conditions.
   * 
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
   * @remarks
   * The sorting order:
   * 
   * *   desc: descending order
   * *   asc: ascending order
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AC9xxx-3xxx-5xxx2-xxxx-FA5
   */
  requestID?: string;
  /**
   * @remarks
   * The sanity check results.
   */
  sanityCheckResults?: SanityCheckResultItem[][];
  /**
   * @remarks
   * The total number of results that meet the filter conditions.
   * 
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
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the user associated with the job.
   * 
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @remarks
   * The caller.
   * 
   * @example
   * local
   */
  caller?: string;
  /**
   * @remarks
   * The job name. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. For example, if you enter test, test-job1, job-test, job-test2, or job-test can be matched, and job-t1 cannot be matched. The default value null indicates any job name.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query. Use the job creation time to filter data. The default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query a list of jobs across workspaces. This parameter must be used together with `ShowOwn=true`. You can use this parameter to query a list of jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * The job ID. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. The default value null indicates any job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * The job type. The default value null indicates any type. Valid values:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default)
   * *   asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The Idle resource information. Valid values:
   * 
   * *   ForbiddenQuotaOverSold
   * *   ForceQuotaOverSold
   * *   AcceptQuotaOverSold-true (true indicates that the job uses idle resources.)
   * *   AcceptQuotaOverSold-false (false indicates that the job uses guaranteed resources.)
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The number of the page to return for the current query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  paymentType?: string;
  /**
   * @remarks
   * The specific pipeline ID used to filter jobs.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to obtain the ID of a dedicated resource group, see [Manage resource quota](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * r*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource quota name used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by resource quota name.
   * 
   * @example
   * quota***
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * Specifies whether to query only the jobs submitted by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The sorting field. Valid values:
   * 
   * *   DisplayName
   * *   JobType
   * *   Status
   * *   GmtCreateTime
   * *   GmtFinishTime
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the query. Use the job creation time to filter data. The default value is the current time minus seven days. In other words, if you do not configure the StartTime and EndTime parameters, the system queries the job list in the last seven days.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Creating
   * *   Queuing
   * *   Bidding (only available for spot jobs that use Lingjun resources)
   * *   EnvPreparing
   * *   SanityChecking
   * *   Running
   * *   Restarting
   * *   Stopping
   * *   SucceededReserving
   * *   FailedReserving
   * *   Succeeded
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The user ID used to filter jobs.
   * 
   * @example
   * 20**************
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * The username used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by username.
   * 
   * @example
   * test***
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the user associated with the job.
   * 
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @remarks
   * The caller.
   * 
   * @example
   * local
   */
  caller?: string;
  /**
   * @remarks
   * The job name. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. For example, if you enter test, test-job1, job-test, job-test2, or job-test can be matched, and job-t1 cannot be matched. The default value null indicates any job name.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query. Use the job creation time to filter data. The default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query a list of jobs across workspaces. This parameter must be used together with `ShowOwn=true`. You can use this parameter to query a list of jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * The job ID. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. The default value null indicates any job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * The job type. The default value null indicates any type. Valid values:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default)
   * *   asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The Idle resource information. Valid values:
   * 
   * *   ForbiddenQuotaOverSold
   * *   ForceQuotaOverSold
   * *   AcceptQuotaOverSold-true (true indicates that the job uses idle resources.)
   * *   AcceptQuotaOverSold-false (false indicates that the job uses guaranteed resources.)
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The number of the page to return for the current query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  paymentType?: string;
  /**
   * @remarks
   * The specific pipeline ID used to filter jobs.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to obtain the ID of a dedicated resource group, see [Manage resource quota](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * r*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource quota name used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by resource quota name.
   * 
   * @example
   * quota***
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * Specifies whether to query only the jobs submitted by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The sorting field. Valid values:
   * 
   * *   DisplayName
   * *   JobType
   * *   Status
   * *   GmtCreateTime
   * *   GmtFinishTime
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the query. Use the job creation time to filter data. The default value is the current time minus seven days. In other words, if you do not configure the StartTime and EndTime parameters, the system queries the job list in the last seven days.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Creating
   * *   Queuing
   * *   Bidding (only available for spot jobs that use Lingjun resources)
   * *   EnvPreparing
   * *   SanityChecking
   * *   Running
   * *   Restarting
   * *   Stopping
   * *   SucceededReserving
   * *   FailedReserving
   * *   Succeeded
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The user ID used to filter jobs.
   * 
   * @example
   * 20**************
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * The username used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by username.
   * 
   * @example
   * test***
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
  /**
   * @remarks
   * The jobs.
   */
  jobs?: JobItem[];
  /**
   * @remarks
   * The request ID used to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of jobs that meet the filter conditions.
   * 
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
  /**
   * @remarks
   * The instance visibility.
   * 
   * *   PUBLIC: TensorBoard instances are visible to all members in the workspace.
   * *   PRIVATE: TensorBoard instances are visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The TensorBoard instance name.
   * 
   * @example
   * TestTensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query. Use the UTC time when the TensorBoard instance is created to filter data. If you leave this parameter empty, the default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID used to filter TensorBoard instances. For more information about how to obtain the ID of a job, see [ListJobs](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxx
   */
  jobId?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * *   desc
   * *   asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of TensorBoard instances per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of TensorBoard instances.
   * 
   * *   Free: the TensorBoard instance that uses free resources.
   * *   Postpaid: the TensorBoard instance that uses pay-as-you-go resources.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * > 
   * 
   * *   Only whitelisted users can use resource quotas to create TensorBoard instances. If you want to use this feature, contact us.
   * 
   * *   This parameter takes effect only when TensorBoard instances use resource quotas.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * Specifies whether to return only the TensorBoard instances created by the current logon account.
   * 
   * @example
   * false
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The returned field used to sort TensorBoard instances.
   * 
   * *   DisplayName: the name of the TensorBoard instance.
   * *   GmtCreateTime: the time when the TensorBoard instance is created.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID. For more information about how to obtain the ID of a job, see [ListJobs](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source associated with the TensorBoard instance. This parameter is no longer used. Only Deep Learning Containers (DLC) training jobs are supported.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query. Use the UTC time when the TensorBoard instance is created to filter data. If you leave this parameter empty, the default value is seven days before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The TensorBoard instance status. Valid values:
   * 
   * *   Creating
   * *   Running
   * *   Stopped
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The TensorBoard instance ID used to filter TensorBoard instances.
   * 
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 161****3000
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * she****mo
   */
  username?: string;
  /**
   * @remarks
   * Specifies whether to return the information about the TensorBoard instance.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. Obtain a list of TensorBoard instances based on the workspace ID. 
   * <props="china">For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The TensorBoard instances.
   */
  tensorboards?: Tensorboard[];
  /**
   * @remarks
   * The total number of data sources that meet the conditions.
   * 
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
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The TensorBoard instance ID.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the request ID.
   * 
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
   * @remarks
   * The workspace ID. 
   * <props="china">For more information about how to query the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the TensorBoard instance.
   * 
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
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The job priority. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9: the highest priority.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc*************
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID, which is used for diagnostics and Q\\&A.
   * 
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
  /**
   * @remarks
   * The visibility of the jobs. Valid values:
   * 
   * *   PUBLIC: The jobs are public in the workspace.
   * *   PRIVATE: The jobs are visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The maximum running time. Unit: minutes.
   * 
   * @example
   * 300
   */
  maxRunningTimeMinutes?: number;
  priority?: string;
  /**
   * @remarks
   * The workspace ID. 
   * <props="china">For more information about how to query the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the TensorBoard instance.
   * 
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
      'ap-northeast-2-pop': "pai-dlc.aliyuncs.com",
      'ap-south-1': "pai-dlc.aliyuncs.com",
      'ap-southeast-2': "pai-dlc.aliyuncs.com",
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
   * Creates a job that runs in a cluster. You can configure the data source, code source, startup command, and computing resources of each node on which a job runs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
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
    return $dara.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * Creates a job that runs in a cluster. You can configure the data source, code source, startup command, and computing resources of each node on which a job runs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
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
   * Creates a TensorBoard by using a job or specifying a data source configuration.
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
    return $dara.cast<CreateTensorboardResponse>(await this.callApi(params, req, runtime), new CreateTensorboardResponse({}));
  }

  /**
   * Creates a TensorBoard by using a job or specifying a data source configuration.
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
   * Deletes a completed or stopped job.
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
    return $dara.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
  }

  /**
   * Deletes a completed or stopped job.
   * @returns DeleteJobResponse
   */
  async deleteJob(JobId: string): Promise<DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(JobId, headers, runtime);
  }

  /**
   * Deletes a stopped TensorBoard.
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
    return $dara.cast<DeleteTensorboardResponse>(await this.callApi(params, req, runtime), new DeleteTensorboardResponse({}));
  }

  /**
   * Deletes a stopped TensorBoard.
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
   * Obtains the configuration and runtime information of a job.
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
    return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * Obtains the configuration and runtime information of a job.
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
   * Obtains the system events of a job.
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
    return $dara.cast<GetJobEventsResponse>(await this.callApi(params, req, runtime), new GetJobEventsResponse({}));
  }

  /**
   * Obtains the system events of a job.
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
   * Obtains the monitoring data of a job, including the CPU, GPU, and memory utilization, network, and disk read/write rate.
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
    return $dara.cast<GetJobMetricsResponse>(await this.callApi(params, req, runtime), new GetJobMetricsResponse({}));
  }

  /**
   * Obtains the monitoring data of a job, including the CPU, GPU, and memory utilization, network, and disk read/write rate.
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
   * Obtains specified job sanity check result in a Deep Learning Containers (DLC) job.
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
    return $dara.cast<GetJobSanityCheckResultResponse>(await this.callApi(params, req, runtime), new GetJobSanityCheckResultResponse({}));
  }

  /**
   * Obtains specified job sanity check result in a Deep Learning Containers (DLC) job.
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
   * Obtains the system events of a specific node in a job to locate and troubleshoot issues.
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
    return $dara.cast<GetPodEventsResponse>(await this.callApi(params, req, runtime), new GetPodEventsResponse({}));
  }

  /**
   * Obtains the system events of a specific node in a job to locate and troubleshoot issues.
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
   * Obtains or downloads the logs of a node for a task. The logs are from the stdout and stderr of the system and user scripts.
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
    return $dara.cast<GetPodLogsResponse>(await this.callApi(params, req, runtime), new GetPodLogsResponse({}));
  }

  /**
   * Obtains or downloads the logs of a node for a task. The logs are from the stdout and stderr of the system and user scripts.
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
   * 获取 Ray Dashboard 链接
   * 
   * @param request - GetRayDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRayDashboardResponse
   */
  async getRayDashboardWithOptions(jobId: string, request: GetRayDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRayDashboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      query["isShared"] = request.isShared;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRayDashboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(jobId)}/rayDashboard`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetRayDashboardResponse>(await this.callApi(params, req, runtime), new GetRayDashboardResponse({}));
  }

  /**
   * 获取 Ray Dashboard 链接
   * 
   * @param request - GetRayDashboardRequest
   * @returns GetRayDashboardResponse
   */
  async getRayDashboard(jobId: string, request: GetRayDashboardRequest): Promise<GetRayDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRayDashboardWithOptions(jobId, request, headers, runtime);
  }

  /**
   * Queries the information of a TensorBoard instance.
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
    return $dara.cast<GetTensorboardResponse>(await this.callApi(params, req, runtime), new GetTensorboardResponse({}));
  }

  /**
   * Queries the information of a TensorBoard instance.
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
   * Obtains the shareable link of a TensorBoard task. The link contains digital tokens. You can use a shareable link to access a TensorBoard task.
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
    return $dara.cast<GetTensorboardSharedUrlResponse>(await this.callApi(params, req, runtime), new GetTensorboardSharedUrlResponse({}));
  }

  /**
   * Obtains the shareable link of a TensorBoard task. The link contains digital tokens. You can use a shareable link to access a TensorBoard task.
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
   * Queries a user token.
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
    return $dara.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * Queries a user token.
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
   * Provides methods and steps to obtain a HTTP link for accessing a container.
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
    return $dara.cast<GetWebTerminalResponse>(await this.callApi(params, req, runtime), new GetWebTerminalResponse({}));
  }

  /**
   * Provides methods and steps to obtain a HTTP link for accessing a container.
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
   * Queries the list of supported instance types.
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
    return $dara.cast<ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new ListEcsSpecsResponse({}));
  }

  /**
   * Queries the list of supported instance types.
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
   * Obtains the results of all sanity checks for a DLC job.
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
    return $dara.cast<ListJobSanityCheckResultsResponse>(await this.callApi(params, req, runtime), new ListJobSanityCheckResultsResponse({}));
  }

  /**
   * Obtains the results of all sanity checks for a DLC job.
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
   * Queries a list of jobs and supports pagination, sorting, and filtering by conditions.
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
    return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * Queries a list of jobs and supports pagination, sorting, and filtering by conditions.
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
   * Queries a list of TensorBoard instances.
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
    return $dara.cast<ListTensorboardsResponse>(await this.callApi(params, req, runtime), new ListTensorboardsResponse({}));
  }

  /**
   * Queries a list of TensorBoard instances.
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
   * Starts a TensorBoard instance.
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
    return $dara.cast<StartTensorboardResponse>(await this.callApi(params, req, runtime), new StartTensorboardResponse({}));
  }

  /**
   * Starts a TensorBoard instance.
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
   * Stops a running job.
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
    return $dara.cast<StopJobResponse>(await this.callApi(params, req, runtime), new StopJobResponse({}));
  }

  /**
   * Stops a running job.
   * @returns StopJobResponse
   */
  async stopJob(JobId: string): Promise<StopJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  /**
   * Stops a TensorBoard instance.
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
    return $dara.cast<StopTensorboardResponse>(await this.callApi(params, req, runtime), new StopTensorboardResponse({}));
  }

  /**
   * Stops a TensorBoard instance.
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
   * Updates the configuration information of a job. For example, you can modify the priority of a job in a queue.
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
    return $dara.cast<UpdateJobResponse>(await this.callApi(params, req, runtime), new UpdateJobResponse({}));
  }

  /**
   * Updates the configuration information of a job. For example, you can modify the priority of a job in a queue.
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
   * Updates a TensorBoard instance.
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
    return $dara.cast<UpdateTensorboardResponse>(await this.callApi(params, req, runtime), new UpdateTensorboardResponse({}));
  }

  /**
   * Updates a TensorBoard instance.
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
