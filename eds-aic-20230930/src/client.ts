// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AttachKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances to which the ADB key pair is successfully attached.
   */
  attachedInstanceIds?: string[];
  /**
   * @remarks
   * The number of the cloud phone instances to which the ADB key pair failed to be attached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachedInstanceIds: 'AttachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachedInstanceIds)) {
      $dara.Model.validateArray(this.attachedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-22ex666a5mco5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      backupFileId: 'string',
      backupFileName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAcpConnectionTicketRequestInstanceTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-fkuit0cmyfvzz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * cn-hangzhou@c9f5c2e8-f5c4-4b01-8602-000cae94****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-1uzb6heg797z3****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-ajxvwo1u0hqvd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * cn-hangzhou@c9f5c2e8-f5c4-4b01-8602-000cae94****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The ticket used to connect to the cloud phone instance.
   * 
   * @example
   * piVE58_AdmVSVW7SEW3*AE5*p8mmO5gvItsNOmv4S_f_cNpoU_BOTwChTBoNM1ZJeedfK9zxYnbN5hossqIZCr6t7SGxRigm2Cb4fGaCdBZWIzmgdHq6sXXZQg4KFWufyvpeV*0*Cm58slMT1tJw3****
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      instanceId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos extends $dara.Model {
  /**
   * @example
   * cpn-jewjt8xryuitu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  instanceInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos[];
  /**
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBodyResourceStockModels extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Inventory status of the instance group.
   * 
   * @example
   * Available
   */
  stockStatus?: string;
  /**
   * @remarks
   * Zone ID.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stockStatus: 'StockStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stockStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-cuv4scs4obxch****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestCustomAppInfo extends $dara.Model {
  /**
   * @remarks
   * The size of the .apk file. Unit: MB.
   * 
   * @example
   * 10
   */
  apkSize?: string;
  /**
   * @remarks
   * The download URL of the app.
   * 
   * @example
   * http://testApp.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 value of the .apk file.
   * 
   * @example
   * df3f46ce5844ddb278f14c5a9cd2****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the app package.
   * 
   * @example
   * com.example.demo
   */
  packageName?: string;
  /**
   * @remarks
   * The version of the app.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The code of the app version.
   * 
   * @example
   * 10000
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      apkSize: 'ApkSize',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      packageName: 'PackageName',
      version: 'Version',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkSize: 'string',
      downloadUrl: 'string',
      md5: 'string',
      packageName: 'string',
      version: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeRequestDisplayConfig extends $dara.Model {
  dpi?: number;
  fps?: number;
  lockResolution?: string;
  static names(): { [key: string]: string } {
    return {
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpi: 'number',
      fps: 'number',
      lockResolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeRequestTag extends $dara.Model {
  /**
   * @example
   * keyname
   */
  key?: string;
  /**
   * @example
   * valuename
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateCloudPhoneNodeShrinkRequestTag extends $dara.Model {
  /**
   * @example
   * keyname
   */
  key?: string;
  /**
   * @example
   * valuename
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  instanceIds?: string[];
  /**
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the key pair was created.
   * 
   * @example
   * 2024-06-30 08:45:09.0
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The private key of the key pair. The PEM-encoded private key that is in PKCS#8 format and adheres to the ADB connection specification.
   * 
   * @example
   * MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****
   */
  privateKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      privateKeyBody: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestNetRedirectPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The type of the rule.
   * 
   * Valid values:
   * 
   * *   prc: an application package name.
   * *   domain: a domain name.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  /**
   * @remarks
   * The name of the application package or domain name.
   * 
   * @example
   * *.example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to manually configure a custom proxy.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IPv4 address of the custom proxy.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Specifies whether to enable the network redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the custom proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password of the proxy. The password must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The type of the proxy protocol.
   * 
   * Valid values:
   * 
   * *   socks5.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy. The name must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The proxy rules. You can create up to 100 proxy rules.
   */
  rules?: CreatePolicyGroupRequestNetRedirectPolicyRules[];
  static names(): { [key: string]: string } {
    return {
      customProxy: 'CustomProxy',
      hostAddr: 'HostAddr',
      netRedirect: 'NetRedirect',
      port: 'Port',
      proxyPassword: 'ProxyPassword',
      proxyType: 'ProxyType',
      proxyUserName: 'ProxyUserName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProxy: 'string',
      hostAddr: 'string',
      netRedirect: 'string',
      port: 'string',
      proxyPassword: 'string',
      proxyType: 'string',
      proxyUserName: 'string',
      rules: { 'type': 'array', 'itemType': CreatePolicyGroupRequestNetRedirectPolicyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScreenshotResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-bwhtebzah2fse****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The ID of the task. You can use the task ID with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images that failed to be deleted.
   */
  failDeleteImageIds?: string[];
  /**
   * @remarks
   * The IDs of the images that are successfully deleted.
   */
  successDeleteImageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failDeleteImageIds: 'FailDeleteImageIds',
      successDeleteImageIds: 'SuccessDeleteImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
      successDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failDeleteImageIds)) {
      $dara.Model.validateArray(this.failDeleteImageIds);
    }
    if(Array.isArray(this.successDeleteImageIds)) {
      $dara.Model.validateArray(this.successDeleteImageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks extends $dara.Model {
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The type of the architecture.
   * 
   * @example
   * ARM
   */
  architectureType?: string;
  /**
   * @remarks
   * The number of available instances.
   * 
   * >  Available instances are those not in the Deleting or Deleted state.
   * 
   * @example
   * 5
   */
  availableInstanceAmount?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  /**
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The cause of the creation failure.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the instance group was created.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the subscription instance group expires.
   * 
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the instance group was updated.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The list of installed applications.
   * 
   * @example
   * "TikTok","WeChat"
   */
  installedAppList?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The description of the instance group specifications.
   * 
   * @example
   * ARM-2vCPU4GiB 32GiB
   */
  instanceGroupSpecDescribe?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @example
   * 50
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The number of instances in the instance group.
   * 
   * @example
   * 10
   */
  numberOfInstances?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering mode of the instance group.
   * 
   * Valid values:
   * 
   * *   GPURemote: GPU remote rendering.
   * *   CPU: CPU rendering.
   * *   GPUocal: GPU local rendering.
   * 
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The height of the resolution.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * Android 12
   */
  systemVersion?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-t4n0yqs009ho024wt****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      architectureType: 'ArchitectureType',
      availableInstanceAmount: 'AvailableInstanceAmount',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      enableIpv6: 'EnableIpv6',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      installedAppList: 'InstalledAppList',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceGroupSpecDescribe: 'InstanceGroupSpecDescribe',
      instanceGroupStatus: 'InstanceGroupStatus',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      memory: 'Memory',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      saleMode: 'SaleMode',
      systemVersion: 'SystemVersion',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      architectureType: 'string',
      availableInstanceAmount: 'number',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks },
      enableIpv6: 'boolean',
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      installedAppList: 'string',
      instanceGroupId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      instanceGroupSpecDescribe: 'string',
      instanceGroupStatus: 'string',
      ipv6Bandwidth: 'number',
      memory: 'number',
      numberOfInstances: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      renderingType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      saleMode: 'string',
      systemVersion: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeAndroidInstancesResponseBodyInstanceModelDisks extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig extends $dara.Model {
  dpi?: number;
  fps?: number;
  lockResolution?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpi: 'number',
      fps: 'number',
      lockResolution: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeAndroidInstancesResponseBodyInstanceModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-ayyhomlal7po****
   */
  androidInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * AndroidInstanceGroupName
   */
  androidInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-8at8h6ejkadjh****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * RUNNING
   */
  androidInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-i7yv6tkn7kh8dv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the physical instance.
   * 
   * @example
   * ai-9ey6io0q58rcd****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The ID of the user to whom the instance is assigned.
   * 
   * @example
   * test
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * The ID of the bound user.
   * 
   * @example
   * test
   */
  bindUserId?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeAndroidInstancesResponseBodyInstanceModelDisks[];
  displayConfig?: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig;
  /**
   * @remarks
   * The cause of the instance data backup failure or restoration failure.
   * 
   * @example
   * FilePathNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the subscription instance group expires.
   * 
   * @example
   * 2024-07-15T02:03:33Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtModified?: string;
  imageId?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 3.5.3.867
   */
  imageVersion?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * acp.basic.small
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * kp-5hh431emkpucs****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The IP address of the ENI.
   * 
   * @example
   * 192.168.22.48
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  networkInterfaceIpv6Address?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shenzhen+dir-211620****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the persistent session.
   * 
   * @example
   * p-0btrd5zj8epo****
   */
  persistentAppInstanceId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-0bszojpu0seql****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 10.32.1.41
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  publicIpv6Address?: string;
  /**
   * @remarks
   * The progress of instance data backup or restoration.
   * 
   * @example
   * 100
   */
  rate?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering type.
   * 
   * @example
   * local
   */
  renderingType?: string;
  /**
   * @remarks
   * The session status.
   * 
   * Valid values:
   * 
   * *   disConnect: The session is disconnected.
   * *   connect: The session is connected.
   * 
   * @example
   * connect
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeAndroidInstancesResponseBodyInstanceModelTags[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupId: 'AndroidInstanceGroupId',
      androidInstanceGroupName: 'AndroidInstanceGroupName',
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      androidInstanceStatus: 'AndroidInstanceStatus',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      authorizedUserId: 'AuthorizedUserId',
      bindUserId: 'BindUserId',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      displayConfig: 'DisplayConfig',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageVersion: 'ImageVersion',
      instanceType: 'InstanceType',
      keyPairId: 'KeyPairId',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      networkInterfaceIpv6Address: 'NetworkInterfaceIpv6Address',
      officeSiteId: 'OfficeSiteId',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      policyGroupId: 'PolicyGroupId',
      publicIpAddress: 'PublicIpAddress',
      publicIpv6Address: 'PublicIpv6Address',
      rate: 'Rate',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      sessionStatus: 'SessionStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupId: 'string',
      androidInstanceGroupName: 'string',
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      androidInstanceStatus: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      authorizedUserId: 'string',
      bindUserId: 'string',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelDisks },
      displayConfig: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig,
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageVersion: 'string',
      instanceType: 'string',
      keyPairId: 'string',
      memory: 'number',
      networkInterfaceIp: 'string',
      networkInterfaceIpv6Address: 'string',
      officeSiteId: 'string',
      persistentAppInstanceId: 'string',
      policyGroupId: 'string',
      publicIpAddress: 'string',
      publicIpv6Address: 'string',
      rate: 'number',
      regionId: 'string',
      renderingType: 'string',
      sessionStatus: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelTags },
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 1.0.0
   */
  androidAppVersion?: string;
  /**
   * @remarks
   * Apk size.
   * 
   * @example
   * 10244893
   */
  apkSize?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 10404
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * Region id.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the application was last modified.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The installation/uninstallation status of the application.
   * 
   * Valid values:
   * 
   * *   INSTALLFAILED: The application failed to be installed.
   * *   UNINSTALLING: The application is being uninstalled.
   * *   INSTALLING: The application is being installed.
   * *   UNINSTALLED: The application is uninstalled.
   * *   INSTALLED: The application is installed.
   * *   UNINSTALLFAILED: The application failed to be uninstalled.
   * 
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  /**
   * @remarks
   * The list of instance groups where the application is installed.
   */
  instanceGroupList?: string[];
  /**
   * @remarks
   * The value of MD5.
   * 
   * @example
   * THCIEH73KEK3334
   */
  MD5?: string;
  /**
   * @remarks
   * The name of the application package.
   * 
   * @example
   * cn.rdstar.rdstarandroid
   */
  packageName?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * Valid values:
   * 
   * *   FAILED: The application failed to be created.
   * *   NORMAL: The application is available.
   * *   CREATING: The application is being created.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      androidAppVersion: 'AndroidAppVersion',
      apkSize: 'ApkSize',
      appId: 'AppId',
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      installationStatus: 'InstallationStatus',
      instanceGroupList: 'InstanceGroupList',
      MD5: 'MD5',
      packageName: 'PackageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidAppVersion: 'string',
      apkSize: 'string',
      appId: 'number',
      appName: 'string',
      bizRegionId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      installationStatus: 'string',
      instanceGroupList: { 'type': 'array', 'itemType': 'string' },
      MD5: 'string',
      packageName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupList)) {
      $dara.Model.validateArray(this.instanceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * defaultInstanceName
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Indicates whether the whole instance is backed up.
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @remarks
   * The directory in which the backup file is stored.
   * 
   * @example
   * oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is default description.
   */
  description?: string;
  /**
   * @remarks
   * The owner of the backup file.
   * 
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @remarks
   * The total size of the source files.
   * 
   * @example
   * 10227168
   */
  fileSize?: number;
  /**
   * @remarks
   * The time when the backup file was created.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the backup file was last updated.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-58ftsoo90p0qi****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The names of the application packages that are backed up.
   */
  sourceAppInfoList?: string[];
  /**
   * @remarks
   * The directories of the source files.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The status of the backup file.
   * 
   * Valid values:
   * 
   * *   AVAILABLE
   * *   RECOVERING
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket that stores the backup file.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the backup.
   * 
   * Valid values:
   * 
   * *   OSS: backup files are stored in OSS buckets. .
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      endUserId: 'EndUserId',
      fileSize: 'FileSize',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceGroupId: 'InstanceGroupId',
      regionId: 'RegionId',
      sourceAppInfoList: 'SourceAppInfoList',
      sourceFilePathList: 'SourceFilePathList',
      status: 'Status',
      taskId: 'TaskId',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      endUserId: 'string',
      fileSize: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceGroupId: 'string',
      regionId: 'string',
      sourceAppInfoList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      taskId: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceAppInfoList)) {
      $dara.Model.validateArray(this.sourceAppInfoList);
    }
    if(Array.isArray(this.sourceFilePathList)) {
      $dara.Model.validateArray(this.sourceFilePathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBodyNodeModel extends $dara.Model {
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * 2024-11-13 02:03:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-03-09 02:00:34
   */
  gmtExpired?: string;
  /**
   * @example
   * 2025-02-13 02:03:14
   */
  gmtModified?: string;
  instanceType?: string;
  /**
   * @example
   * 32
   */
  memory?: number;
  /**
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  /**
   * @example
   * cpn-ehs0yoedq8ntm****
   */
  nodeId?: string;
  /**
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  /**
   * @example
   * 100
   */
  shareDataVolume?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * vsw-2zeekryyc1q3sm72l****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      instanceType: 'InstanceType',
      memory: 'Memory',
      networkId: 'NetworkId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      phoneCount: 'PhoneCount',
      regionId: 'RegionId',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverType: 'ServerType',
      shareDataVolume: 'ShareDataVolume',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      cpu: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      instanceType: 'string',
      memory: 'number',
      networkId: 'string',
      nodeId: 'string',
      nodeName: 'string',
      phoneCount: 'number',
      regionId: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverType: 'string',
      shareDataVolume: 'number',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 117819727354****
   */
  aliUid?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the image was last modified.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * IMAGE
   */
  imageName?: string;
  /**
   * @remarks
   * The region where the image is distributed. The key is the region and the value is the distribution information.
   */
  imageRegionDistributeMap?: { [key: string]: DataImageRegionDistributeMapValue };
  /**
   * @remarks
   * The list of regions.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The type of the image.
   * 
   * Valid values:
   * 
   * *   User: custom images.
   * *   System: system images.
   * 
   * @example
   * System
   */
  imageType?: string;
  imageVersion?: string;
  /**
   * @remarks
   * The language of the image.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The time when the image was published.
   * 
   * @example
   * 2024-07-25 10:06:45
   */
  releaseTime?: string;
  /**
   * @remarks
   * The rendering type.
   * 
   * Valid values:
   * 
   * *   GPURemote
   * *   CPU
   * *   GPULocal
   * 
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The image is available.
   * *   DELETE: The image is deleted.
   * *   INIT: The image is being initialized.
   * *   CREATE_FAILED: The image failed to be created.
   * *   CREATING: The image is being created.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The OS type of the image.
   * 
   * @example
   * Android 12
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageRegionDistributeMap: 'ImageRegionDistributeMap',
      imageRegionList: 'ImageRegionList',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      language: 'Language',
      releaseTime: 'ReleaseTime',
      renderingType: 'RenderingType',
      status: 'Status',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageName: 'string',
      imageRegionDistributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataImageRegionDistributeMapValue },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      imageVersion: 'string',
      language: 'string',
      releaseTime: 'string',
      renderingType: 'string',
      status: 'string',
      systemType: 'string',
    };
  }

  validate() {
    if(this.imageRegionDistributeMap) {
      $dara.Model.validateMap(this.imageRegionDistributeMap);
    }
    if(Array.isArray(this.imageRegionList)) {
      $dara.Model.validateArray(this.imageRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the command execution.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance on which the command is executed.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * t-15775dc8****
   */
  invocationId?: string;
  /**
   * @remarks
   * The execution state of the command.
   * 
   * Valid values:
   * 
   * *   Failed: The execution of the command failed.
   * *   Timeout: The execution of the command timed out.
   * *   Running: The command is being executed.
   * *   Success: The execution of the command is successful.
   * *   Pending: The command is waiting to be executed.
   * 
   * @example
   * RUNNING
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The output of the command execution.
   * 
   * @example
   * success
   */
  output?: string;
  /**
   * @remarks
   * The start time of the command execution.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationId: 'InvocationId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      instanceId: 'string',
      invocationId: 'string',
      invocationStatus: 'string',
      output: 'string',
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

export class DescribeKeyPairsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the ADB key pair was created.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionModels extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponseBodySpecInfoModel extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 8
   */
  core?: number;
  /**
   * @remarks
   * The maximum number of cloud phone instances.
   * 
   * @example
   * 40
   */
  maxPhoneCount?: string;
  /**
   * @remarks
   * Memory size.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The minimum number of cloud phone instances.
   * 
   * @example
   * 4
   */
  minPhoneCount?: string;
  /**
   * @example
   * 2
   */
  phoneCount?: string;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * Specification ID.
   * 
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @remarks
   * Specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * Specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @remarks
   * System disk size, in GB.
   * 
   * @example
   * 32
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      maxPhoneCount: 'MaxPhoneCount',
      memory: 'Memory',
      minPhoneCount: 'MinPhoneCount',
      phoneCount: 'PhoneCount',
      resolution: 'Resolution',
      specId: 'SpecId',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      maxPhoneCount: 'string',
      memory: 'number',
      minPhoneCount: 'string',
      phoneCount: 'string',
      resolution: 'string',
      specId: 'string',
      specStatus: 'string',
      specType: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SendFileFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connect error.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The total number of failed subtasks.
   * 
   * @example
   * 2
   */
  failedChildCount?: number;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cloud phone instance.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The state of the cloud phone instance.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The ID of the command execution.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The level of the task.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * test
   */
  operator?: string;
  /**
   * @remarks
   * The parameters of the task.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * @example
   * t-41oan3tza16vs****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * acp-25nt4kk9whhok****
   */
  resourceId?: string;
  /**
   * @remarks
   * The execution result of the task.
   * 
   * @example
   * {\\"Success\\": True}
   */
  result?: string;
  /**
   * @remarks
   * The total number of the subtasks that are running.
   * 
   * @example
   * 0
   */
  runningChildCount?: number;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of successfully executed subtasks.
   * 
   * @example
   * 98
   */
  successChildCount?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of subtasks of the current batch task.
   * 
   * @example
   * 100
   */
  totalChildCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      failedChildCount: 'FailedChildCount',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      invokeId: 'InvokeId',
      level: 'Level',
      operator: 'Operator',
      param: 'Param',
      parentTaskId: 'ParentTaskId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      result: 'Result',
      runningChildCount: 'RunningChildCount',
      startTime: 'StartTime',
      successChildCount: 'SuccessChildCount',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      totalChildCount: 'TotalChildCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      failedChildCount: 'number',
      finishTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      invokeId: 'string',
      level: 'number',
      operator: 'string',
      param: 'string',
      parentTaskId: 'string',
      regionId: 'string',
      resourceId: 'string',
      result: 'string',
      runningChildCount: 'number',
      startTime: 'string',
      successChildCount: 'number',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
      totalChildCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances from which the ADB key pair is successfully detached.
   */
  detachedInstanceIds?: string[];
  /**
   * @remarks
   * The number of the cloud phone instances from which the ADB key pair failed to be detached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detachedInstanceIds: 'DetachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detachedInstanceIds)) {
      $dara.Model.validateArray(this.detachedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileResponseBodyData extends $dara.Model {
  androidInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the ADB key pair was created.
   * 
   * @example
   * 2023-03-05T10:29:22Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The type of the rule.
   * 
   * Valid values:
   * 
   * *   prc: an application package name.
   * *   domain: a domain name.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  /**
   * @remarks
   * The name of the application package or domain name.
   * 
   * @example
   * *.example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a custom proxy is manually configured.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IPv4 address of the custom proxy.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Indicates whether the network redirection feature is enabled. When this feature is enabled, network traffic is automatically redirected to the on-premises network by default.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the custom proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password of the proxy. The password must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The type of the proxy protocol.
   * 
   * Valid values:
   * 
   * *   socks5.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy. The name must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The proxy rules.
   */
  rules?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules[];
  static names(): { [key: string]: string } {
    return {
      customProxy: 'CustomProxy',
      hostAddr: 'HostAddr',
      netRedirect: 'NetRedirect',
      port: 'Port',
      proxyPassword: 'ProxyPassword',
      proxyType: 'ProxyType',
      proxyUserName: 'ProxyUserName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProxy: 'string',
      hostAddr: 'string',
      netRedirect: 'string',
      port: 'string',
      proxyPassword: 'string',
      proxyType: 'string',
      proxyUserName: 'string',
      rules: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModel extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: read and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2024-06-04 10:28:54
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The file transfer policy of the HTML5 client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * download
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write denied.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Identifies whether the resolution is locked.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicy?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-9q6o8qpiy8opkj****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * Default Policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The height of the resolution.
   * 
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution.
   * 
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      gmtCreate: 'GmtCreate',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      gmtCreate: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicy: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy,
      policyGroupId: 'string',
      policyGroupName: 'string',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
    };
  }

  validate() {
    if(this.netRedirectPolicy && typeof (this.netRedirectPolicy as any).validate === 'function') {
      (this.netRedirectPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to manually configure a custom proxy.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IPv4 address of the custom proxy.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Specifies whether to enable network redirection.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the custom proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password of the proxy. The password must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The type of the proxy protocol.
   * 
   * Valid values:
   * 
   * *   socks5.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy. The name must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  static names(): { [key: string]: string } {
    return {
      customProxy: 'CustomProxy',
      hostAddr: 'HostAddr',
      netRedirect: 'NetRedirect',
      port: 'Port',
      proxyPassword: 'ProxyPassword',
      proxyType: 'ProxyType',
      proxyUserName: 'ProxyUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProxy: 'string',
      hostAddr: 'string',
      netRedirect: 'string',
      port: 'string',
      proxyPassword: 'string',
      proxyType: 'string',
      proxyUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-5prhfo7wv1gjx****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponseBodyData extends $dara.Model {
  androidInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the cloud phone instances for which the ADB authentication feature failed to be enabled.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The IDs of the cloud phone instances for which the ADB authentication feature is enabled.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      instanceIds: 'InstanceIds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataImageRegionDistributeMapValue extends $dara.Model {
  /**
   * @remarks
   * The status of the image distribution task.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The task is ready.
   * *   DELETE: The task is deleted.
   * *   INIT: The task is being initialized.
   * *   CREATE_FAILED: The task failed to be created.
   * *   CREATING: The task is being created.
   * 
   * @example
   * AVAILABLE
   */
  distributeStatus?: string;
  /**
   * @remarks
   * The distribution progress of the image.
   * 
   * @example
   * 100%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      distributeStatus: 'DistributeStatus',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStatus: 'string',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that is returned.
   */
  data?: AttachKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AttachKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachKeyPairResponseBody;
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
      body: AttachKeyPairResponseBody,
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

export class AuthorizeAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * List of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * User ID to be assigned.
   * 
   * @example
   * test
   */
  authorizeUserId?: string;
  /**
   * @remarks
   * User ID to be unassigned.
   * 
   * @example
   * test
   */
  unAuthorizeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      authorizeUserId: 'AuthorizeUserId',
      unAuthorizeUserId: 'UnAuthorizeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      authorizeUserId: 'string',
      unAuthorizeUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAndroidInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeAndroidInstanceResponseBody;
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
      body: AuthorizeAndroidInstanceResponseBody,
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

export class BackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to back up the whole instance.
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * defaultBackupFile
   */
  backupFileName?: string;
  /**
   * @remarks
   * The OSS path of the backup file.
   * 
   * >  To upload a backup file to an OSS bucket, you must obtain the name of the bucket. When calling the describeBuckets operation to retrieve a bucket name, you must also call the ossObjectList operation to obtain the object key. Combine these to form the full path: oss://${bucketName}/${key}.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is a backup file description.
   */
  description?: string;
  /**
   * @remarks
   * The names of the application packages that you want to back up.
   */
  sourceAppList?: string[];
  /**
   * @remarks
   * The paths to the source files.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The endpoint of the OSS bucket to which you want to upload the backup file.
   * 
   * > : When calling the DescribeBuckets operation to query buckets, retrieve the IntranetEndpoint value if the cloud phone and the OSS bucket are in the same region. If they are in different regions, retrieve the ExtranetEndpoint value instead.
   * 
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the backup.
   * 
   * Valid values:
   * 
   * *   OSS: uploads the backup file to an OSS bucket.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupAll: 'BackupAll',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      sourceAppList: 'SourceAppList',
      sourceFilePathList: 'SourceFilePathList',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupAll: 'boolean',
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      sourceAppList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    if(Array.isArray(this.sourceAppList)) {
      $dara.Model.validateArray(this.sourceAppList);
    }
    if(Array.isArray(this.sourceFilePathList)) {
      $dara.Model.validateArray(this.sourceFilePathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are backed up.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The object that is returned.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  data?: BackupFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-22ex666a5mco5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': BackupFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackupFileResponseBody;
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
      body: BackupFileResponseBody,
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

export class BatchGetAcpConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user to whom the cloud phone instance is assigned.
   * 
   * @example
   * user
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify 1 to 100 IDs of cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instance connection tasks.
   */
  instanceTasks?: BatchGetAcpConnectionTicketRequestInstanceTasks[];
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
      instanceTasks: 'InstanceTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceTasks: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketRequestInstanceTasks },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceTasks)) {
      $dara.Model.validateArray(this.instanceTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAcpConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the instance connection tasks.
   */
  instanceConnectionModels?: BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConnectionModels: 'InstanceConnectionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConnectionModels: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceConnectionModels)) {
      $dara.Model.validateArray(this.instanceConnectionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAcpConnectionTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetAcpConnectionTicketResponseBody;
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
      body: BatchGetAcpConnectionTicketResponseBody,
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

export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @example
   * 20
   */
  phoneCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      nodeId: 'NodeId',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      nodeId: 'string',
      phoneCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponseBody extends $dara.Model {
  nodeInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInfos: 'NodeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfos)) {
      $dara.Model.validateArray(this.nodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeCloudPhoneNodeResponseBody;
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
      body: ChangeCloudPhoneNodeResponseBody,
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

export class CheckResourceStockRequest extends $dara.Model {
  /**
   * @remarks
   * Specification ID.
   * 
   * @example
   * acp.basic.small
   */
  acpSpecId?: string;
  amount?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * The availability zone of the resource.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acpSpecId: 'AcpSpecId',
      amount: 'Amount',
      bizRegionId: 'BizRegionId',
      gpuAcceleration: 'GpuAcceleration',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acpSpecId: 'string',
      amount: 'number',
      bizRegionId: 'string',
      gpuAcceleration: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 805D8FB6-512A-531C-9E4D-2A807D3C****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of resource inventory.
   */
  resourceStockModels?: CheckResourceStockResponseBodyResourceStockModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceStockModels: 'ResourceStockModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceStockModels: { 'type': 'array', 'itemType': CheckResourceStockResponseBodyResourceStockModels },
    };
  }

  validate() {
    if(Array.isArray(this.resourceStockModels)) {
      $dara.Model.validateArray(this.resourceStockModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckResourceStockResponseBody;
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
      body: CheckResourceStockResponseBody,
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

export class CreateAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instance groups. Default value: 1. Maximum value: 1.
   * 
   * @example
   * 8
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: enables automatic payment. Make sure that your Alibaba Cloud account has sufficient balance.
   * *   false: disables automatic payment. You must manually complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: automatically renew resource upon expiration.
   * *   false: manually renew resources upon expiration.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query the regions where Cloud Phone is supported.
   * 
   * Valid values:
   * 
   * *   cn-shenzhen: China (Shenzhen).
   * *   cn-beijing: China (Beijing).
   * *   cn-shanghai: China (Shanghai).
   * *   cn-hongkong: China (Hong Kong).
   * *   ap-southeast-1: Singapore.
   * *   cn-hangzhou: China (Hangzhou).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value cannot exceed 100 characters in length.
   * 
   * @example
   * asadbuvwiabdbvchjsbj
   */
  clientToken?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * Specifies whether to enable GPU acceleration.
   * 
   * Valid values:
   * 
   * *   true: enables GPU acceleration.
   * *   false (default): disables GPU acceleration.
   * 
   * @example
   * false
   */
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * The ID of the image. You can call the [DescribeImageList](https://help.aliyun.com/document_detail/2807324.html) operation to query images.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * >  The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with `http://` or `https://`.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group. You can call the [DescribeSpec](https://help.aliyun.com/document_detail/2807299.html) operation to query the available specifications.
   * 
   * Valid values:
   * 
   * *   acp.perf.large: Performance (8 vCPUs, 16 GiB of memory, and 32 GiB of storage.
   * *   acp.basic.small: Lightweight (2 vCPUs, 4 GiB of memory, and 32 GiB of storage).
   * *   acp.std.large: Standard (4 vCPUs, 8 GiB of memory, and 32 GiB of storage).
   * 
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The ID of the key pair. When you create an instance group and specify a valid key pair ID, all cloud phone instances within the group will automatically be bound to that key pair upon creation. This eliminates the need to manually bind key pairs to individual cloud phone instances.
   * 
   * >  Binding key pairs to cloud phone instances is currently not supported during instance group resizing.
   * 
   * @example
   * kp-7o9xywwfutc1l****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The number of cloud phones in the instance group. Maximum value: 100.
   * 
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @remarks
   * The ID of the network.
   * 
   * *   This parameter is required if you assign a shared network to cloud phones. You can go to the [Network](https://wya.wuying.aliyun.com/network) page of the Cloud Phone console to retrieve the ID of a **shared network**. If no shared network is available in the Cloud Phone console, you can leave this parameter empty. The system automatically creates one when you create an instance group.
   * *   This parameter is required if you assign a virtual private cloud (VPC) to cloud phones. You can go to the [Network](https://wya.wuying.aliyun.com/network) page of the Cloud Phone console to retrieve the ID of a **VPC**. If no VPC is available in the Cloud Phone console, you must first create one.
   * 
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Hour (Note that this unit is supported only by pay-as-you-go.)
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy. You can call the [ListPolicyGroups](https://help.aliyun.com/document_detail/2807352.html) operation to query policies.
   * 
   * @example
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The tags
   */
  tag?: CreateAndroidInstanceGroupRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/448774.html) operation to query vSwitches.
   * 
   * *   This parameter is not required if you assign a shared network to cloud phones.
   * *   This parameter is required if you assign a VPC to cloud phones. The vSwitch specified by this parameter is used to create cloud phones.
   * 
   * @example
   * vsw-uf61uvzhz8ejaw776****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      enableIpv6: 'EnableIpv6',
      gpuAcceleration: 'GpuAcceleration',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      keyPairId: 'KeyPairId',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeType: 'string',
      clientToken: 'string',
      enableIpv6: 'boolean',
      gpuAcceleration: 'boolean',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      ipv6Bandwidth: 'number',
      keyPairId: 'string',
      numberOfInstances: 'number',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAndroidInstanceGroupRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The instance groups.
   */
  instanceGroupInfos?: CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupInfos: 'InstanceGroupInfos',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupInfos: { 'type': 'array', 'itemType': CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    if(Array.isArray(this.instanceGroupInfos)) {
      $dara.Model.validateArray(this.instanceGroupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAndroidInstanceGroupResponseBody;
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
      body: CreateAndroidInstanceGroupResponseBody,
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

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Application Name 1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The information about the custom app.
   * 
   * > 
   * 
   * *   If you want to pass in a custom app, configure the `CustomAppInfo` parameter. Take note that the six fields within it are mandatory.
   * 
   * *   A custom app has a higher priority than an app from the Alibaba Cloud Workspace Application Center. If you configure the `CustomAppInfo` parameter, the `FileName` and `FilePath` pair or the `OssAppUrl` will not take effect.
   */
  customAppInfo?: CreateAppRequestCustomAppInfo;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name used by the app file in Object Storage Service (OSS). This parameter, combined with `FilePath`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [Elastic Desktop Service (EDS) Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * testApp.apk
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS bucket path to the app file. This parameter, combined with `FileName`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   */
  filePath?: string;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://www.example.com/icon.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The parameters used for installing the application. By default, the `-r` parameter is included when you install an application.
   * 
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @remarks
   * The OSS bucket endpoint of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      customAppInfo: 'CustomAppInfo',
      description: 'Description',
      fileName: 'FileName',
      filePath: 'FilePath',
      iconUrl: 'IconUrl',
      installParam: 'InstallParam',
      ossAppUrl: 'OssAppUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      customAppInfo: CreateAppRequestCustomAppInfo,
      description: 'string',
      fileName: 'string',
      filePath: 'string',
      iconUrl: 'string',
      installParam: 'string',
      ossAppUrl: 'string',
    };
  }

  validate() {
    if(this.customAppInfo && typeof (this.customAppInfo as any).validate === 'function') {
      (this.customAppInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Application Name 1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The information about the custom app.
   * 
   * > 
   * 
   * *   If you want to pass in a custom app, configure the `CustomAppInfo` parameter. Take note that the six fields within it are mandatory.
   * 
   * *   A custom app has a higher priority than an app from the Alibaba Cloud Workspace Application Center. If you configure the `CustomAppInfo` parameter, the `FileName` and `FilePath` pair or the `OssAppUrl` will not take effect.
   */
  customAppInfoShrink?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name used by the app file in Object Storage Service (OSS). This parameter, combined with `FilePath`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [Elastic Desktop Service (EDS) Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * testApp.apk
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS bucket path to the app file. This parameter, combined with `FileName`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   */
  filePath?: string;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://www.example.com/icon.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The parameters used for installing the application. By default, the `-r` parameter is included when you install an application.
   * 
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @remarks
   * The OSS bucket endpoint of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      customAppInfoShrink: 'CustomAppInfo',
      description: 'Description',
      fileName: 'FileName',
      filePath: 'FilePath',
      iconUrl: 'IconUrl',
      installParam: 'InstallParam',
      ossAppUrl: 'OssAppUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      customAppInfoShrink: 'string',
      description: 'string',
      fileName: 'string',
      filePath: 'string',
      iconUrl: 'string',
      installParam: 'string',
      ossAppUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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

export class CreateAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
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

export class CreateCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  count?: string;
  displayConfig?: CreateCloudPhoneNodeRequestDisplayConfig;
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  /**
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  tag?: CreateCloudPhoneNodeRequestTag[];
  /**
   * @example
   * vsw-2zeekryyc1q3sm72l****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      count: 'Count',
      displayConfig: 'DisplayConfig',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      networkId: 'NetworkId',
      nodeName: 'NodeName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeType: 'string',
      count: 'string',
      displayConfig: CreateCloudPhoneNodeRequestDisplayConfig,
      imageId: 'string',
      instanceType: 'string',
      networkId: 'string',
      nodeName: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'number',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverShareDataVolume: 'number',
      serverType: 'string',
      tag: { 'type': 'array', 'itemType': CreateCloudPhoneNodeRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  count?: string;
  displayConfigShrink?: string;
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  /**
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  tag?: CreateCloudPhoneNodeShrinkRequestTag[];
  /**
   * @example
   * vsw-2zeekryyc1q3sm72l****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      count: 'Count',
      displayConfigShrink: 'DisplayConfig',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      networkId: 'NetworkId',
      nodeName: 'NodeName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeType: 'string',
      count: 'string',
      displayConfigShrink: 'string',
      imageId: 'string',
      instanceType: 'string',
      networkId: 'string',
      nodeName: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'number',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverShareDataVolume: 'number',
      serverType: 'string',
      tag: { 'type': 'array', 'itemType': CreateCloudPhoneNodeShrinkRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeResponseBody extends $dara.Model {
  nodeInfos?: CreateCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInfos: 'NodeInfos',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfos: { 'type': 'array', 'itemType': CreateCloudPhoneNodeResponseBodyNodeInfos },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfos)) {
      $dara.Model.validateArray(this.nodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCloudPhoneNodeResponseBody;
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
      body: CreateCloudPhoneNodeResponseBody,
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

export class CreateCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. By default, this parameter is left empty. The token cannot exceed 64 characters in length.
   * 
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the custom image.
   * 
   * @example
   * create for cc5g group auth rules test
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * custom image name
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      imageName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

export class CreateCustomImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomImageResponseBody;
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
      body: CreateCustomImageResponseBody,
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

export class CreateKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: CreateKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyPairResponseBody;
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
      body: CreateKeyPairResponseBody,
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

export class CreatePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: read and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The file transfer policy of the Alibaba Cloud Workspace web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicy?: CreatePolicyGroupRequestNetRedirectPolicy;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicy
   */
  policyGroupName?: string;
  policyType?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicy: CreatePolicyGroupRequestNetRedirectPolicy,
      policyGroupName: 'string',
      policyType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    if(this.netRedirectPolicy && typeof (this.netRedirectPolicy as any).validate === 'function') {
      (this.netRedirectPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: read and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The file transfer policy of the Alibaba Cloud Workspace web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicyShrink?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicy
   */
  policyGroupName?: string;
  policyType?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicyShrink: 'NetRedirectPolicy',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicyShrink: 'string',
      policyGroupName: 'string',
      policyType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-exbuu6yrpvb******
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
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

export class CreatePolicyGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyGroupResponseBody;
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
      body: CreatePolicyGroupResponseBody,
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

export class CreateScreenshotRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can create multiple snapshots simultaneously.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The name of the OSS bucket. The name must start with "cloudphone-saved-bucket-". The OSS bucket and the cloud phone instance must be in the same region. If you leave this parameter empty, the system will create a default OSS bucket named “cloudphone-saved-bucket-{Region of the cloud phone instance}-{AliUid}.”
   * 
   * @example
   * cloudphone-saved-bucket-cn-shanghai-default
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Specifies whether to bypass the snapshot policy control. Default value: false.
   * 
   * @example
   * false
   */
  skipCheckPolicyConfig?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      ossBucketName: 'OssBucketName',
      skipCheckPolicyConfig: 'SkipCheckPolicyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      ossBucketName: 'string',
      skipCheckPolicyConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScreenshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. If the request fails, share this ID with technical support to help diagnose the issue.
   * 
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: CreateScreenshotResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateScreenshotResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScreenshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScreenshotResponseBody;
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
      body: CreateScreenshotResponseBody,
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

export class DeleteAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAndroidInstanceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAndroidInstanceGroupResponseBody;
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
      body: DeleteAndroidInstanceGroupResponseBody,
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

export class DeleteAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   */
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppsResponseBody;
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
      body: DeleteAppsResponseBody,
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

export class DeleteCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud phone matrix IDs.
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudPhoneNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudPhoneNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCloudPhoneNodesResponseBody;
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
      body: DeleteCloudPhoneNodesResponseBody,
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

export class DeleteImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images.
   * 
   * This parameter is required.
   */
  imageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageIds)) {
      $dara.Model.validateArray(this.imageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images.
   * 
   * This parameter is required.
   */
  imageIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageIdsShrink: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The images.
   */
  data?: DeleteImagesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F595
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteImagesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImagesResponseBody;
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
      body: DeleteImagesResponseBody,
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

export class DeleteKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ADB key pairs.
   */
  keyPairIds?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyPairIds)) {
      $dara.Model.validateArray(this.keyPairIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeyPairsResponseBody;
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
      body: DeleteKeyPairsResponseBody,
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

export class DeletePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the policies.
   * 
   * This parameter is required.
   */
  policyGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyGroupIds: 'PolicyGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17C731AB-AAEE-5844-A352-D8D0352D3F0B
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyGroupResponseBody;
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
      body: DeletePolicyGroupResponseBody,
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

export class DescribeAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The name of the instance group. Instance groups support fuzzy search by name.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * kp-5htf0ymsrnb7q****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Value range: 0 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-1b77w6xrqfubi****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The purchase mode of cloud phone instances.
   * 
   * Valid values:
   * 
   * *   Instance (default): the instance group mode.
   * *   Node: the matrix mode [whitelisted].
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * Valid values:
   * 
   * *   UPDATING_FAILED: The image update for the instance group failed.
   * *   FAILED: The instance group failed to be created.
   * *   RUNNING: The instance group is available.
   * *   EXPIRED: The instance group expired.
   * *   DELETING: The instance group is being deleted.
   * *   DELETED: The instance group is deleted.
   * *   UPDATING: The instance group is undergoing an image update.
   * *   CREATING: The instance group is being created.
   * 
   * @example
   * CREATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      saleMode: 'SaleMode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: 'string',
      saleMode: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance group.
   */
  instanceGroupModel?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceGroupModel: 'InstanceGroupModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupModel: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupModel)) {
      $dara.Model.validateArray(this.instanceGroupModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAndroidInstanceGroupsResponseBody;
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
      body: DescribeAndroidInstanceGroupsResponseBody,
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

export class DescribeAndroidInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) operation to query the regions where Cloud Phone is supported.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * test
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The ID of the bound key pair.
   * 
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * node_id
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   Instance: the standard mode.
   * *   Node: the node mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * Valid values:
   * 
   * *   BACKUPING: The instance is being backed up.
   * *   STARTING: The instance is being started.
   * *   RUNNING: The instance group is available.
   * *   DELETING: The instance is being deleted.
   * *   BACKUP_FAILED: The backup operation failed.
   * *   DELETED: The instance is deleted.
   * *   FAILED: The instance failed to be created.
   * *   STOPPED: The instance is stopped.
   * *   RECOVERING: The instance has an ongoing file recovery task.
   * *   UNAVAILABLE: The instance has an exception.
   * *   REBOOTING: The instance is being restarted.
   * *   RESETTING: The instance is being reset.
   * *   STOPPING: The instance is being stopped.
   * *   RECOVER_FAILED: The file recovery task failed.
   * *   CREATING: The instance is being created.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resources.
   */
  tag?: DescribeAndroidInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      androidInstanceName: 'AndroidInstanceName',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      saleMode: 'SaleMode',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      androidInstanceName: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeId: 'string',
      nodeName: 'string',
      saleMode: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAndroidInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud phone instances.
   */
  instanceModel?: DescribeAndroidInstancesResponseBodyInstanceModel[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceModel: 'InstanceModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModel: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceModel)) {
      $dara.Model.validateArray(this.instanceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAndroidInstancesResponseBody;
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
      body: DescribeAndroidInstancesResponseBody,
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

export class DescribeAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * defaultAppName
   */
  appName?: string;
  /**
   * @remarks
   * Region id.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The installation/uninstallation status of the application.
   * 
   * Valid values:
   * 
   * *   INSTALLFAILED: The application failed to be installed.
   * *   UNINSTALLING: The application is being uninstalled.
   * *   INSTALLING: The application is being installed.
   * *   UNINSTALLED: The application is uninstalled.
   * *   INSTALLED: The application is installed.
   * *   UNINSTALLFAILED: The application failed to be uninstalled.
   * 
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  /**
   * @remarks
   * The value of MD5.
   * 
   * @example
   * THCIEH73KEK3334
   */
  MD5?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * Valid values:
   * 
   * *   FAILED: The application failed to be created.
   * *   NORMAL: The application is available.
   * *   CREATING: The application is being created.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      installationStatus: 'InstallationStatus',
      MD5: 'MD5',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      appName: 'string',
      bizRegionId: 'string',
      installationStatus: 'string',
      MD5: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: DescribeAppsResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeAppsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppsResponseBody;
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
      body: DescribeAppsResponseBody,
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

export class DescribeBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance. Fuzzy match is supported.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Specifies whether the whole instance is backed up.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-dxrh5jrv0zpb8****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file. Fuzzy match is supported.
   * 
   * @example
   * defaulBackupFile
   */
  backupFileName?: string;
  /**
   * @remarks
   * The description of the backup file. Fuzzy match is supported.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The end of the period for querying generated backup files.
   * 
   * @example
   * 2024-05-20 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The owner of the backup file.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-fxdx91jsfyiy3****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the period for querying generated backup files.
   * 
   * @example
   * 2024-05-23 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the backup files.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      description: 'Description',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFileName: 'string',
      description: 'string',
      endTime: 'string',
      endUserId: 'string',
      instanceGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup files that are returned.
   */
  data?: DescribeBackupFilesResponseBodyData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. If the request fails, provide this ID to technical support to assist in diagnosing the issue.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 91
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyData },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupFilesResponseBody;
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
      body: DescribeBackupFilesResponseBody,
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

export class DescribeCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  nodeIds?: string[];
  /**
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  /**
   * @example
   * CREATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIds: 'NodeIds',
      nodeName: 'NodeName',
      serverType: 'ServerType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      maxResults: 'string',
      nextToken: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeName: 'string',
      serverType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBody extends $dara.Model {
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  nodeModel?: DescribeCloudPhoneNodesResponseBodyNodeModel[];
  /**
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @example
   * 31
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeModel: 'NodeModel',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeModel: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModel },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeModel)) {
      $dara.Model.validateArray(this.nodeModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudPhoneNodesResponseBody;
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
      body: DescribeCloudPhoneNodesResponseBody,
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

export class DescribeImageListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * Android 12 image
   */
  imageName?: string;
  /**
   * @remarks
   * Image package type.
   * 
   * @example
   * VM
   */
  imagePackageType?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * Valid values:
   * 
   * *   User: custom images.
   * *   System: system images.
   * 
   * This parameter is required.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The image is available.
   * *   DELETE: The image is deleted.
   * *   INIT: The image is being initialized.
   * *   CREATE_FAILED: The image failed to be created.
   * *   CREATING: The image is being created.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imagePackageType: 'ImagePackageType',
      imageType: 'ImageType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imagePackageType: 'string',
      imageType: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

export class DescribeImageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The images.
   */
  data?: DescribeImageListResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 620740FF-492F-5956-B1BA-361E966C0269
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeImageListResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageListResponseBody;
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
      body: DescribeImageListResponseBody,
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

export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the execution. You can retrieve the output of a command once by using either the execution ID or the cloud phone instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t-4e98eeb5****
   */
  invocationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      invocationId: 'InvocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      invocationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: DescribeInvocationsResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyData },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationsResponseBody;
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
      body: DescribeInvocationsResponseBody,
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

export class DescribeKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ADB key pairs.
   */
  keyPairIds?: string[];
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZQBUVVbi0GTu8g5****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
      keyPairName: 'KeyPairName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyPairIds)) {
      $dara.Model.validateArray(this.keyPairIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: DescribeKeyPairsResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 565FB06A-AE04-5AD0-8A32-5BA92CA5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyPairsResponseBody;
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
      body: DescribeKeyPairsResponseBody,
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

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The display language of the console. Valid values:
   * 
   * *   cn: Simplified Chinese
   * *   en: English
   * 
   * @example
   * en
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   Instance: the instance group mode. [Default]
   * *   Node: the matrix mode. [Whitelist required]
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      saleMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Available regions.
   */
  regionModels?: DescribeRegionsResponseBodyRegionModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A87B3769-0D05-5383-B236-5798B455****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModels: 'RegionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModels: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModels)) {
      $dara.Model.validateArray(this.regionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
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

export class DescribeSpecRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The matrix specification.
   * 
   * Valid values:
   * 
   * *   cpm.gn6.gx1
   * 
   * @example
   * cpm.gn6.gx1
   */
  matrixSpec?: string;
  /**
   * @remarks
   * The maximum number of items to return per page in a paginated query. The value range is 1 to 100, with a default value of 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the starting position for reading. If left empty, it starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The purchase mode of cloud mobile phones.
   * 
   * Valid values:
   * 
   * *   Instance (default): the instance group mode.
   * *   Node: the matrix mode [whitelisted].
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * List of specification IDs.
   */
  specIds?: string[];
  /**
   * @remarks
   * Specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * Specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      matrixSpec: 'MatrixSpec',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      saleMode: 'SaleMode',
      specIds: 'SpecIds',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      matrixSpec: 'string',
      maxResults: 'number',
      nextToken: 'string',
      saleMode: 'string',
      specIds: { 'type': 'array', 'itemType': 'string' },
      specStatus: 'string',
      specType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specIds)) {
      $dara.Model.validateArray(this.specIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the current read position returned by this call. An empty value means that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications.
   */
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      specInfoModel: 'SpecInfoModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      specInfoModel: { 'type': 'array', 'itemType': DescribeSpecResponseBodySpecInfoModel },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.specInfoModel)) {
      $dara.Model.validateArray(this.specInfoModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSpecResponseBody;
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
      body: DescribeSpecResponseBody,
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

export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cloud phone instance.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the command execution. You can set the value to the last returned request ID.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The level of the task. A value of 1 specifies a batch task. A value of 2 specifies an instance-level task.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * @example
   * t-iaej5dkbnmivx****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The IDs of the resources.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The IDs of the tasks.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The state of the task.
   * 
   * Valid values:
   * 
   * *   PartFinished: The task is partially successful.
   * *   Finished: The task is completed.
   * *   Failed: The task failed.
   * *   Skipped: The task is skipped.
   * *   Processing: The task is running.
   * *   Waiting: The task is in queue.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The status of the tasks.
   */
  taskStatuses?: string[];
  /**
   * @remarks
   * The type of the task.
   * 
   * Valid values:
   * 
   * *   BackupFile: backs up files.
   * *   StopInstance: stops cloud phone instances.
   * *   RebootInstance: restarts cloud phone instances.
   * *   StartApp: starts apps.
   * *   SendFile: uploads files.
   * *   RunCommand: sends remote command.
   * *   RestartApp: restarts apps.
   * *   ResetInstance: resets cloud phone instances.
   * *   RecoverFile: recovers files.
   * *   UninstallApp: uninstalls apps.
   * *   StopApp: stops apps.
   * *   Screenshot: takes screenshots.
   * *   InstallApp: installs apps.
   * *   FetchFile: downloads files.
   * *   UpdateGroupImage: replaces images.
   * *   StartInstance: starts instances.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The types of the tasks.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      invokeId: 'InvokeId',
      level: 'Level',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      param: 'Param',
      parentTaskId: 'ParentTaskId',
      resourceIds: 'ResourceIds',
      taskIds: 'TaskIds',
      taskStatus: 'TaskStatus',
      taskStatuses: 'TaskStatuses',
      taskType: 'TaskType',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      invokeId: 'string',
      level: 'number',
      maxResults: 'number',
      nextToken: 'string',
      param: 'string',
      parentTaskId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
      taskStatuses: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskStatuses)) {
      $dara.Model.validateArray(this.taskStatuses);
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: DescribeTasksResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTasksResponseBody;
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
      body: DescribeTasksResponseBody,
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

export class DetachKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that is returned.
   */
  data?: DetachKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetachKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachKeyPairResponseBody;
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
      body: DetachKeyPairResponseBody,
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

export class DisconnectAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectAndroidInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisconnectAndroidInstanceResponseBody;
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
      body: DisconnectAndroidInstanceResponseBody,
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

export class DistributeImageRequest extends $dara.Model {
  /**
   * @remarks
   * The regions to which you want to distribute an image.
   * 
   * This parameter is required.
   */
  distributeRegionList?: string[];
  /**
   * @remarks
   * The ID of the image that you want to distribute.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      distributeRegionList: 'DistributeRegionList',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeRegionList: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.distributeRegionList)) {
      $dara.Model.validateArray(this.distributeRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 440D7342-5FC2-5E7C-B2DB-D0B4EAC2BDF1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DistributeImageResponseBody;
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
      body: DistributeImageResponseBody,
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

export class DowngradeAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances that you want to delete.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Ensure your account has sufficient balance to use this feature.
   * *   false: disables the auto-payment feature. This requires manual payment each time you place an order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * This parameter is required.
   * 
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      autoPay: 'AutoPay',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      autoPay: 'boolean',
      instanceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

export class DowngradeAndroidInstanceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DowngradeAndroidInstanceGroupResponseBody;
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
      body: DowngradeAndroidInstanceGroupResponseBody,
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

export class EndCoordinationRequest extends $dara.Model {
  /**
   * @example
   * lina
   */
  coordinatorUserId?: string;
  /**
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @example
   * xiaoming
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatorUserId: 'CoordinatorUserId',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatorUserId: 'string',
      instanceId: 'string',
      ownerUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndCoordinationResponseBody extends $dara.Model {
  /**
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndCoordinationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EndCoordinationResponseBody;
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
      body: EndCoordinationResponseBody,
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

export class ExpandDataVolumeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  nodeIds?: string[];
  /**
   * @example
   * 100
   */
  shareDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizRegionId: 'BizRegionId',
      nodeIds: 'NodeIds',
      shareDataVolume: 'ShareDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizRegionId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      shareDataVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandDataVolumeResponseBody extends $dara.Model {
  /**
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

export class ExpandDataVolumeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpandDataVolumeResponseBody;
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
      body: ExpandDataVolumeResponseBody,
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

export class FetchFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The path to the file that you want to pull from the cloud phone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/a.txt
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket in which you want to store the pulled file.
   * 
   * >  Set the value to an internal endpoint when the cloud phone instance and the OSS bucket are in the same region to improve upload speed without incurring public traffic fees. Sample endpoint: `oss-cn-hangzhou-internal.aliyuncs.com`. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the storage service.
   * 
   * >  Currently, only OSS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * The OSS URL of the pulled file.
   * 
   * >  The OSS bucket name must start with "cloudphone-saved-bucket-", for example, "cloudphone-saved-bucket-example". You must also create an OSS directory to store the backup data. Set the value for UploadUrl in this format: oss://\\<BucketName>/\\<OSSDirectoryName>.
   * 
   * This parameter is required.
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      sourceFilePath: 'SourceFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: FetchFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. If the request fails, share this ID with technical support to help diagnose the issue.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-ehs0yoedj0xe9****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': FetchFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchFileResponseBody;
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
      body: FetchFileResponseBody,
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

export class GenerateCoordinationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the user to whom the current instance is assigned.
   * 
   * @example
   * xiaoming
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCoordinationCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collaboration code.
   * 
   * @example
   * CSHGDK
   */
  coordinatorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatorCode: 'CoordinatorCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatorCode: 'string',
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

export class GenerateCoordinationCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCoordinationCodeResponseBody;
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
      body: GenerateCoordinationCodeResponseBody,
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

export class ImportKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The public key of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * ABC1234567*****
   */
  publicKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      publicKeyBody: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that is returned.
   */
  data?: ImportKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ImportKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeyPairResponseBody;
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
      body: ImportKeyPairResponseBody,
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

export class InstallAppRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the apps that you want to install.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIdList?: string[];
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      instanceGroupIdList: 'InstanceGroupIdList',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      instanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    if(Array.isArray(this.instanceGroupIdList)) {
      $dara.Model.validateArray(this.instanceGroupIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-14xwibw7yp73q****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAppResponseBody;
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
      body: InstallAppResponseBody,
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

export class ListPolicyGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. Value range: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the policies.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicyGroup
   */
  policyGroupName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policies.
   */
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 31
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyGroupModel: 'PolicyGroupModel',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyGroupModel: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModel },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupModel)) {
      $dara.Model.validateArray(this.policyGroupModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyGroupsResponseBody;
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
      body: ListPolicyGroupsResponseBody,
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

export class ModifyAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-8v5bjld0r7tkl****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The new name of the cloud phone instance.
   * 
   * >  The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with http:// or https://.
   * 
   * @example
   * new_name
   */
  newAndroidInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      newAndroidInstanceName: 'NewAndroidInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      newAndroidInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAndroidInstanceResponseBody;
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
      body: ModifyAndroidInstanceResponseBody,
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

export class ModifyAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The new name of the instance group.
   * 
   * > 
   * 
   * *   The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with http:// or https://.
   * 
   * @example
   * newName
   */
  newInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-2w97kp89gnsif****
   */
  policyGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      newInstanceGroupName: 'NewInstanceGroupName',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      newInstanceGroupName: 'string',
      policyGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C83EBE3-F267-5F11-ABF8-4E7B90B****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAndroidInstanceGroupResponseBody;
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
      body: ModifyAndroidInstanceGroupResponseBody,
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

export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * defaultAppName
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * https://defaultIcon.png
   */
  iconUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      iconUrl: 'IconUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      iconUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 83418504-5A82-5896-A24C-B2D468F0****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppResponseBody;
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
      body: ModifyAppResponseBody,
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

export class ModifyCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name that you want to assign to the cloud phone matrix.
   * 
   * @example
   * node_name_new
   */
  newNodeName?: string;
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      newNodeName: 'NewNodeName',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newNodeName: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudPhoneNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudPhoneNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCloudPhoneNodeResponseBody;
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
      body: ModifyCloudPhoneNodeResponseBody,
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

export class ModifyInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature. Default value: false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature. Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * >  Currently, this operation only allows you to change the billing method from **pay-as-you-go to subscription**.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   * 
   * This parameter is required.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The subscription duration. The unit is specified by PeriodUnit. Valid values: 1 Month, 2 Months, 3 Months, 6 Months, and 1 Year.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Month**
   * *   **Year**
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      instanceGroupIds: 'InstanceGroupIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceChargeTypeResponseBody;
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
      body: ModifyInstanceChargeTypeResponseBody,
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

export class ModifyKeyPairNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * newKeyPairName
   */
  newKeyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairId: 'KeyPairId',
      newKeyPairName: 'NewKeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairId: 'string',
      newKeyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyKeyPairNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyKeyPairNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyKeyPairNameResponseBody;
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
      body: ModifyKeyPairNameResponseBody,
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

export class ModifyPolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The file transfer policy of the Alibaba Cloud Workspace web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicy?: ModifyPolicyGroupRequestNetRedirectPolicy;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicyGroup
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicy: ModifyPolicyGroupRequestNetRedirectPolicy,
      policyGroupId: 'string',
      policyGroupName: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    if(this.netRedirectPolicy && typeof (this.netRedirectPolicy as any).validate === 'function') {
      (this.netRedirectPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The file transfer policy of the Alibaba Cloud Workspace web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write disabled.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicyShrink?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicyGroup
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicyShrink: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicyShrink: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 552B7EED-D434-511F-B838-29EA4E906034
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyGroupResponseBody;
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
      body: ModifyPolicyGroupResponseBody,
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

export class OperateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The type of the operation.
   * 
   * Valid values:
   * 
   * *   stop: closes the app.
   * *   restart: reopens the app.
   * *   start: open the app.
   * 
   * @example
   * start
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIdList: 'InstanceIdList',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      operateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-imr0fufqgac2z****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateAppResponseBody;
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
      body: OperateAppResponseBody,
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

export class RebootAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enforce a restart operation. If a cloud phone instance fails to stop due to system or network issues, a forced restart can be triggered, though it may result in data loss.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootAndroidInstancesInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 227CBB4C-F5DC-589D-A667-C5CA3D52****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootAndroidInstancesInGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootAndroidInstancesInGroupResponseBody;
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
      body: RebootAndroidInstancesInGroupResponseBody,
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

export class RecoveryFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to back up the whole instance.
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The OSS path to which the backup file is uploaded.
   * 
   * >  When calling the describeBuckets operation to retrieve a bucket name, you must also call the ossObjectList operation to obtain the object key. Combine these to form the full path: oss://${bucketName}/${key}.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket that stores the backup file.
   * 
   * > : When calling the DescribeBuckets operation to query buckets, retrieve the IntranetEndpoint value if the cloud phone and the OSS bucket are in the same region. If they are in different regions, retrieve the ExtranetEndpoint value instead.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the backup.
   * 
   * Valid values:
   * 
   * *   OSS: backup files are stored in OSS buckets.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFilePath: 'BackupFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of restored instances.
   * 
   * @example
   * 97
   */
  count?: number;
  /**
   * @remarks
   * The backup file that is restored.
   * 
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  data?: RecoveryFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-5prhfo7wv1gjx****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': RecoveryFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoveryFileResponseBody;
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
      body: RecoveryFileResponseBody,
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

export class RenewAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Ensure your account has sufficient balance to use this feature.
   * *   false: disables the auto-payment feature. You need to manually complete the payment process.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The duration of the renewal, measured in units defined by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Default value: Month.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceGroupIds: 'InstanceGroupIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAndroidInstanceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B886792-2051-5DB4-8AE6-C8E45D3B4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

export class RenewAndroidInstanceGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewAndroidInstanceGroupsResponseBody;
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
      body: RenewAndroidInstanceGroupsResponseBody,
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

export class RenewCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-renewal feature. In this case, the system automatically renews the instance upon expiration.
   * *   false (default): disables the auto-renewal feature. In this case, you need to manually renew the instance upon expiration.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cloud phone matrix IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. Valid values:
   * 
   * *   When `PeriodUnit` is set to **year**: 1.
   * *   When `PeriodUnit` is set to **month**: 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      nodeIds: 'NodeIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCloudPhoneNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

export class RenewCloudPhoneNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewCloudPhoneNodesResponseBody;
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
      body: RenewCloudPhoneNodesResponseBody,
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

export class ResetAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAndroidInstancesInGroupResponseBody;
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
      body: ResetAndroidInstancesInGroupResponseBody,
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

export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the command.
   * 
   * @example
   * ls
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding method of the command content (`CommandContent`). The value is not case-sensitive.
   * 
   * >  If you set the value to an invalid encoding method, the system will process the command content as `PlainText`.
   * 
   * Valid values:
   * 
   * *   Base64: encodes the command content in Base64.
   * *   PlainText (default): does not encode the command content. The command content is input as plain text.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The timeout period of the command execution. If the command execution exceeds the timeout period, it will be considered timed out. If you leave this parameter empty, it defaults to 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      instanceIds: 'InstanceIds',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      contentEncoding: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command execution. You can use the command execution ID to query the output of a command.
   * 
   * @example
   * t-gov2ujrk32v4****
   */
  invokeId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
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

export class RunCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
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
      body: RunCommandResponseBody,
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

export class SendFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The path to which you want to upload the pushed file in the cloud phone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * /data
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * The name of the file uploaded from the Object Storage Service (OSS) to the cloud phone instance.
   * 
   * >  If UploadType is set to OSS, you must specify TargetFileName. If TargetFileName is empty, the file uploaded from the OSS bucket to the cloud phone instance retains its original name. If TargetFileName is provided with a value, the uploaded file in the SourceFilePath directory uses the specified name (TargetFileName). If UploadType is set to DOWNLOAD_URL, TargetFileName does not take effect.
   * 
   * @example
   * test.txt
   */
  targetFileName?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket in which the file is stored.
   * 
   * >  Set the value to an internal endpoint when the cloud phone instance and the OSS bucket are in the same region to improve transfer speed without incurring public traffic fees. Sample endpoint: `oss-cn-hangzhou-internal.aliyuncs.com`. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The storage type of the file that you want to upload.
   * 
   * *   Set the value to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * >  The OSS bucket name must start with "cloudphone-saved-bucket-", for example, "cloudphone-saved-bucket-example". You must also create an OSS directory to store the backup data. Set the value for UploadUrl in this format: oss://\\<BucketName>/\\<OSSDirectoryName>\\<FileName>.
   * 
   * This parameter is required.
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      sourceFilePath: 'SourceFilePath',
      targetFileName: 'TargetFileName',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePath: 'string',
      targetFileName: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: SendFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. If the request fails, share this ID with technical support to help diagnose the issue.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-ehs0yoedj0xe9****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SendFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendFileResponseBody;
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
      body: SendFileResponseBody,
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

export class SetAdbSecureRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The status of the ADB authentication feature.
   * 
   * Valid values:
   * 
   * *   0: The ADB authentication feature is disabled.
   * *   1: The ADB authentication feature is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned object.
   */
  data?: SetAdbSecureResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetAdbSecureResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAdbSecureResponseBody;
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
      body: SetAdbSecureResponseBody,
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

export class StartAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * List of instances.
   */
  androidInstanceIds?: string[];
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 17C731AB-AAEE-5844-A352-D8D0352D****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAndroidInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAndroidInstanceResponseBody;
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
      body: StartAndroidInstanceResponseBody,
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

export class StopAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enforce a stop operation. If a cloud phone instance fails to stop due to system or network issues, a forced stop can be triggered, though it may result in data loss.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E38B41A8-8E00-5AE4-A957-6636ACB8****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAndroidInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAndroidInstanceResponseBody;
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
      body: StopAndroidInstanceResponseBody,
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

export class UninstallAppRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the apps.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The ID of the instance groups. If you specify this parameter, you cannot specify InstanceIdList.
   */
  instanceGroupIdList?: string[];
  /**
   * @remarks
   * The IDs of the cloud phone instances. If you specify this parameter, you cannot specify InstanceGroupIdList.
   */
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      instanceGroupIdList: 'InstanceGroupIdList',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      instanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    if(Array.isArray(this.instanceGroupIdList)) {
      $dara.Model.validateArray(this.instanceGroupIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-1ljew7on6ay0j****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallAppResponseBody;
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
      body: UninstallAppResponseBody,
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

export class UpdateCustomImageNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * imagename
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomImageNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 552B7EED-D434-511F-B838-29EA4E906034
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomImageNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomImageNameResponseBody;
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
      body: UpdateCustomImageNameResponseBody,
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

export class UpdateInstanceGroupImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   * 
   * This parameter is required.
   */
  instanceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceGroupIds: 'InstanceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceGroupImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55726272-E40B-530D-914F-5126B19C79B3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceGroupImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceGroupImageResponseBody;
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
      body: UpdateInstanceGroupImageResponseBody,
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

export class UpgradeAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Make sure that your Alibaba Cloud account has sufficient balance.
   * *   false: disables the auto-payment feature. You need to manually complete the payment process.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The number of instances that you want to increase.
   * 
   * @example
   * 10
   */
  increaseNumberOfInstance?: number;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-asguicdjh****
   */
  instanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      increaseNumberOfInstance: 'IncreaseNumberOfInstance',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      increaseNumberOfInstance: 'number',
      instanceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * [\\"acp-3vzqq4y3f31f3z3df\\"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB59****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      orderId: 'string',
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

export class UpgradeAndroidInstanceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeAndroidInstanceGroupResponseBody;
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
      body: UpgradeAndroidInstanceGroupResponseBody,
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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-aic", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attaches an Android Debug Bridge (ADB) key pair to one or more cloud phone instances.
   * 
   * @remarks
   *   You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * *   After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the ~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
   * 
   * @param request - AttachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKeyPairResponse
   */
  async attachKeyPairWithOptions(request: AttachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<AttachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachKeyPairResponse>(await this.callApi(params, req, runtime), new AttachKeyPairResponse({}));
    } else {
      return $dara.cast<AttachKeyPairResponse>(await this.execute(params, req, runtime), new AttachKeyPairResponse({}));
    }

  }

  /**
   * Attaches an Android Debug Bridge (ADB) key pair to one or more cloud phone instances.
   * 
   * @remarks
   *   You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * *   After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the ~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * Authorize/unauthorize Android instances for users.
   * 
   * @remarks
   * Instance states that support user assignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed.
   * Instance states that support unassignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed, Expired, Overdue, Deleted.
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstanceWithOptions(request: AuthorizeAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<AuthorizeAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.authorizeUserId)) {
      query["AuthorizeUserId"] = request.authorizeUserId;
    }

    if (!$dara.isNull(request.unAuthorizeUserId)) {
      query["UnAuthorizeUserId"] = request.unAuthorizeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AuthorizeAndroidInstanceResponse>(await this.callApi(params, req, runtime), new AuthorizeAndroidInstanceResponse({}));
    } else {
      return $dara.cast<AuthorizeAndroidInstanceResponse>(await this.execute(params, req, runtime), new AuthorizeAndroidInstanceResponse({}));
    }

  }

  /**
   * Authorize/unauthorize Android instances for users.
   * 
   * @remarks
   * Instance states that support user assignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed.
   * Instance states that support unassignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed, Expired, Overdue, Deleted.
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstance(request: AuthorizeAndroidInstanceRequest): Promise<AuthorizeAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Generates and uploads backup files.
   * 
   * @remarks
   * Currently, this operation allows you to upload only backup files generated by cloud phones to Object Storage Service (OSS) buckets.
   * 
   * @param request - BackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackupFileResponse
   */
  async backupFileWithOptions(request: BackupFileRequest, runtime: $dara.RuntimeOptions): Promise<BackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileName)) {
      query["BackupFileName"] = request.backupFileName;
    }

    if (!$dara.isNull(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.sourceAppList)) {
      query["SourceAppList"] = request.sourceAppList;
    }

    if (!$dara.isNull(request.sourceFilePathList)) {
      query["SourceFilePathList"] = request.sourceFilePathList;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackupFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BackupFileResponse>(await this.callApi(params, req, runtime), new BackupFileResponse({}));
    } else {
      return $dara.cast<BackupFileResponse>(await this.execute(params, req, runtime), new BackupFileResponse({}));
    }

  }

  /**
   * Generates and uploads backup files.
   * 
   * @remarks
   * Currently, this operation allows you to upload only backup files generated by cloud phones to Object Storage Service (OSS) buckets.
   * 
   * @param request - BackupFileRequest
   * @returns BackupFileResponse
   */
  async backupFile(request: BackupFileRequest): Promise<BackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * Retrieves connection tickets in batch.
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicketWithOptions(request: BatchGetAcpConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<BatchGetAcpConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceTasks)) {
      query["InstanceTasks"] = request.instanceTasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetAcpConnectionTicket",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchGetAcpConnectionTicketResponse>(await this.callApi(params, req, runtime), new BatchGetAcpConnectionTicketResponse({}));
    } else {
      return $dara.cast<BatchGetAcpConnectionTicketResponse>(await this.execute(params, req, runtime), new BatchGetAcpConnectionTicketResponse({}));
    }

  }

  /**
   * Retrieves connection tickets in batch.
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicket(request: BatchGetAcpConnectionTicketRequest): Promise<BatchGetAcpConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetAcpConnectionTicketWithOptions(request, runtime);
  }

  /**
   * 修改云手机矩阵的配置
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNodeWithOptions(request: ChangeCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<ChangeCloudPhoneNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new ChangeCloudPhoneNodeResponse({}));
    } else {
      return $dara.cast<ChangeCloudPhoneNodeResponse>(await this.execute(params, req, runtime), new ChangeCloudPhoneNodeResponse({}));
    }

  }

  /**
   * 修改云手机矩阵的配置
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNode(request: ChangeCloudPhoneNodeRequest): Promise<ChangeCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Check the resource inventory.
   * 
   * @param request - CheckResourceStockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourceStockResponse
   */
  async checkResourceStockWithOptions(request: CheckResourceStockRequest, runtime: $dara.RuntimeOptions): Promise<CheckResourceStockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acpSpecId)) {
      query["AcpSpecId"] = request.acpSpecId;
    }

    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResourceStock",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckResourceStockResponse>(await this.callApi(params, req, runtime), new CheckResourceStockResponse({}));
    } else {
      return $dara.cast<CheckResourceStockResponse>(await this.execute(params, req, runtime), new CheckResourceStockResponse({}));
    }

  }

  /**
   * Check the resource inventory.
   * 
   * @param request - CheckResourceStockRequest
   * @returns CheckResourceStockResponse
   */
  async checkResourceStock(request: CheckResourceStockRequest): Promise<CheckResourceStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * Creates pay-as-you-go or subscription instance groups.
   * 
   * @remarks
   * Before creating an instance group, ensure you understand the [billing methods](https://help.aliyun.com/document_detail/2807121.html) supported by Cloud Phone.
   * *   If the billing method of an instance group is PrePaid, AutoPay is set to false by default. In this case, you need to go to [Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually complete the payment.
   * *   You can also set AutoPay to true based on your business requirements.
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroupWithOptions(request: CreateAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableIpv6)) {
      query["EnableIpv6"] = request.enableIpv6;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.instanceGroupSpec)) {
      query["InstanceGroupSpec"] = request.instanceGroupSpec;
    }

    if (!$dara.isNull(request.ipv6Bandwidth)) {
      query["Ipv6Bandwidth"] = request.ipv6Bandwidth;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.numberOfInstances)) {
      query["NumberOfInstances"] = request.numberOfInstances;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new CreateAndroidInstanceGroupResponse({}));
    } else {
      return $dara.cast<CreateAndroidInstanceGroupResponse>(await this.execute(params, req, runtime), new CreateAndroidInstanceGroupResponse({}));
    }

  }

  /**
   * Creates pay-as-you-go or subscription instance groups.
   * 
   * @remarks
   * Before creating an instance group, ensure you understand the [billing methods](https://help.aliyun.com/document_detail/2807121.html) supported by Cloud Phone.
   * *   If the billing method of an instance group is PrePaid, AutoPay is set to false by default. In this case, you need to go to [Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually complete the payment.
   * *   You can also set AutoPay to true based on your business requirements.
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroup(request: CreateAndroidInstanceGroupRequest): Promise<CreateAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an Android application.
   * 
   * @remarks
   * When creating an app, you can provide app information to the system in one of the following ways:
   * *   Way 1: Apps from the Application Center
   *     *   You can use one of the following methods:
   *         *   Method 1: Pass in the `FileName` and `FilePath` parameters at the same time.
   *         *   Method 2: Pass in the `OssAppUrl` parameter
   *     *   Rule: If your app is from the Alibaba Cloud Workspace Application Center, you must use either Method 1 or Method 2. If both are used, Method 1 takes priority.
   *     *   Condition: Before you proceed, log on to the [Elastic Desktop Service (EDS) Enterprise console](https://eds.console.aliyun.com/osshelp) and follow the on-screen instructions to upload the app file to the Application Center to obtain the values of the `FileName`, `FilePath`, and `OssAppUrl` parameters.
   * *   Way 2: Custom apps
   *     *   Pass in the `CustomAppInfo` parameter.
   *     *   Rule: If you pass in the `CustomAppInfo` parameter, all six fields within it are required.
   * >  If Way 1 and Way 2 are adopted simultaneously, the information from Way 2 takes priority.
   * 
   * @param tmpReq - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(tmpReq: CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppResponse> {
    tmpReq.validate();
    let request = new CreateAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customAppInfo)) {
      request.customAppInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customAppInfo, "CustomAppInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.customAppInfoShrink)) {
      query["CustomAppInfo"] = request.customAppInfoShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!$dara.isNull(request.installParam)) {
      query["InstallParam"] = request.installParam;
    }

    if (!$dara.isNull(request.ossAppUrl)) {
      query["OssAppUrl"] = request.ossAppUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
    } else {
      return $dara.cast<CreateAppResponse>(await this.execute(params, req, runtime), new CreateAppResponse({}));
    }

  }

  /**
   * Creates an Android application.
   * 
   * @remarks
   * When creating an app, you can provide app information to the system in one of the following ways:
   * *   Way 1: Apps from the Application Center
   *     *   You can use one of the following methods:
   *         *   Method 1: Pass in the `FileName` and `FilePath` parameters at the same time.
   *         *   Method 2: Pass in the `OssAppUrl` parameter
   *     *   Rule: If your app is from the Alibaba Cloud Workspace Application Center, you must use either Method 1 or Method 2. If both are used, Method 1 takes priority.
   *     *   Condition: Before you proceed, log on to the [Elastic Desktop Service (EDS) Enterprise console](https://eds.console.aliyun.com/osshelp) and follow the on-screen instructions to upload the app file to the Application Center to obtain the values of the `FileName`, `FilePath`, and `OssAppUrl` parameters.
   * *   Way 2: Custom apps
   *     *   Pass in the `CustomAppInfo` parameter.
   *     *   Rule: If you pass in the `CustomAppInfo` parameter, all six fields within it are required.
   * >  If Way 1 and Way 2 are adopted simultaneously, the information from Way 2 takes priority.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建云机节点
   * 
   * @param tmpReq - CreateCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudPhoneNodeResponse
   */
  async createCloudPhoneNodeWithOptions(tmpReq: CreateCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<CreateCloudPhoneNodeResponse> {
    tmpReq.validate();
    let request = new CreateCloudPhoneNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.displayConfig)) {
      request.displayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.displayConfig, "DisplayConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      query["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      query["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.serverShareDataVolume)) {
      query["ServerShareDataVolume"] = request.serverShareDataVolume;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayConfigShrink)) {
      body["DisplayConfig"] = request.displayConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new CreateCloudPhoneNodeResponse({}));
    } else {
      return $dara.cast<CreateCloudPhoneNodeResponse>(await this.execute(params, req, runtime), new CreateCloudPhoneNodeResponse({}));
    }

  }

  /**
   * 创建云机节点
   * 
   * @param request - CreateCloudPhoneNodeRequest
   * @returns CreateCloudPhoneNodeResponse
   */
  async createCloudPhoneNode(request: CreateCloudPhoneNodeRequest): Promise<CreateCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Creates a custom image from a cloud phone instance.
   * 
   * @param request - CreateCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: CreateCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<CreateCustomImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCustomImageResponse>(await this.callApi(params, req, runtime), new CreateCustomImageResponse({}));
    } else {
      return $dara.cast<CreateCustomImageResponse>(await this.execute(params, req, runtime), new CreateCustomImageResponse({}));
    }

  }

  /**
   * Creates a custom image from a cloud phone instance.
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * Creates an Android Debug Bridge (ADB) key pair. The system retains the public key and provides a PEM-encoded private key in PKCS#8 format, adhering to the ADB connection specification. You must securely store the private key.
   * 
   * @remarks
   * In addition to using the CreateKeyPair operation to generate a key pair, you can also create one by using the ADB tool and upload it to the Cloud Phone console. The usage of this key pair is identical to that of a system-generated key pair.
   * Each tenant can create up to 500 key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<CreateKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateKeyPairResponse>(await this.callApi(params, req, runtime), new CreateKeyPairResponse({}));
    } else {
      return $dara.cast<CreateKeyPairResponse>(await this.execute(params, req, runtime), new CreateKeyPairResponse({}));
    }

  }

  /**
   * Creates an Android Debug Bridge (ADB) key pair. The system retains the public key and provides a PEM-encoded private key in PKCS#8 format, adhering to the ADB connection specification. You must securely store the private key.
   * 
   * @remarks
   * In addition to using the CreateKeyPair operation to generate a key pair, you can also create one by using the ADB tool and upload it to the Cloud Phone console. The usage of this key pair is identical to that of a system-generated key pair.
   * Each tenant can create up to 500 key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates a policy.
   * 
   * @param tmpReq - CreatePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroupWithOptions(tmpReq: CreatePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    tmpReq.validate();
    let request = new CreatePolicyGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.netRedirectPolicy)) {
      request.netRedirectPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.netRedirectPolicy, "NetRedirectPolicy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.lockResolution)) {
      body["LockResolution"] = request.lockResolution;
    }

    if (!$dara.isNull(request.netRedirectPolicyShrink)) {
      body["NetRedirectPolicy"] = request.netRedirectPolicyShrink;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new CreatePolicyGroupResponse({}));
    } else {
      return $dara.cast<CreatePolicyGroupResponse>(await this.execute(params, req, runtime), new CreatePolicyGroupResponse({}));
    }

  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Creates a screenshot of a cloud phone instance.
   * 
   * @remarks
   * You can call this operation to create a screenshot of a cloud phone instance and upload it to the default Object Storage Service (OSS) bucket. The operation returns a task ID, which you can use with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @param request - CreateScreenshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScreenshotResponse
   */
  async createScreenshotWithOptions(request: CreateScreenshotRequest, runtime: $dara.RuntimeOptions): Promise<CreateScreenshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.skipCheckPolicyConfig)) {
      query["SkipCheckPolicyConfig"] = request.skipCheckPolicyConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScreenshot",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateScreenshotResponse>(await this.callApi(params, req, runtime), new CreateScreenshotResponse({}));
    } else {
      return $dara.cast<CreateScreenshotResponse>(await this.execute(params, req, runtime), new CreateScreenshotResponse({}));
    }

  }

  /**
   * Creates a screenshot of a cloud phone instance.
   * 
   * @remarks
   * You can call this operation to create a screenshot of a cloud phone instance and upload it to the default Object Storage Service (OSS) bucket. The operation returns a task ID, which you can use with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @param request - CreateScreenshotRequest
   * @returns CreateScreenshotResponse
   */
  async createScreenshot(request: CreateScreenshotRequest): Promise<CreateScreenshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScreenshotWithOptions(request, runtime);
  }

  /**
   * Delete an instance group.
   * 
   * @remarks
   * You can delete only pay-as-you-go instance groups.
   * You can delete subscription instance groups only after they expire.
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroupWithOptions(request: DeleteAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new DeleteAndroidInstanceGroupResponse({}));
    } else {
      return $dara.cast<DeleteAndroidInstanceGroupResponse>(await this.execute(params, req, runtime), new DeleteAndroidInstanceGroupResponse({}));
    }

  }

  /**
   * Delete an instance group.
   * 
   * @remarks
   * You can delete only pay-as-you-go instance groups.
   * You can delete subscription instance groups only after they expire.
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroup(request: DeleteAndroidInstanceGroupRequest): Promise<DeleteAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an application. Before you delete an application, make sure that the application is not installed on any instances.
   * 
   * @param request - DeleteAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppsResponse
   */
  async deleteAppsWithOptions(request: DeleteAppsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppsResponse>(await this.callApi(params, req, runtime), new DeleteAppsResponse({}));
    } else {
      return $dara.cast<DeleteAppsResponse>(await this.execute(params, req, runtime), new DeleteAppsResponse({}));
    }

  }

  /**
   * Deletes an application. Before you delete an application, make sure that the application is not installed on any instances.
   * 
   * @param request - DeleteAppsRequest
   * @returns DeleteAppsResponse
   */
  async deleteApps(request: DeleteAppsRequest): Promise<DeleteAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppsWithOptions(request, runtime);
  }

  /**
   * Deletes a cloud phone matrix.
   * 
   * @remarks
   * Before you proceed, make sure that the cloud phone matrix that you want to delete expired.
   * 
   * @param request - DeleteCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudPhoneNodesResponse
   */
  async deleteCloudPhoneNodesWithOptions(request: DeleteCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCloudPhoneNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new DeleteCloudPhoneNodesResponse({}));
    } else {
      return $dara.cast<DeleteCloudPhoneNodesResponse>(await this.execute(params, req, runtime), new DeleteCloudPhoneNodesResponse({}));
    }

  }

  /**
   * Deletes a cloud phone matrix.
   * 
   * @remarks
   * Before you proceed, make sure that the cloud phone matrix that you want to delete expired.
   * 
   * @param request - DeleteCloudPhoneNodesRequest
   * @returns DeleteCloudPhoneNodesResponse
   */
  async deleteCloudPhoneNodes(request: DeleteCloudPhoneNodesRequest): Promise<DeleteCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You cannot delete an image that is currently in use by an instance group.
   * 
   * @param tmpReq - DeleteImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesResponse
   */
  async deleteImagesWithOptions(tmpReq: DeleteImagesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteImagesResponse> {
    tmpReq.validate();
    let request = new DeleteImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageIdsShrink)) {
      body["ImageIds"] = request.imageIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImages",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteImagesResponse>(await this.callApi(params, req, runtime), new DeleteImagesResponse({}));
    } else {
      return $dara.cast<DeleteImagesResponse>(await this.execute(params, req, runtime), new DeleteImagesResponse({}));
    }

  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You cannot delete an image that is currently in use by an instance group.
   * 
   * @param request - DeleteImagesRequest
   * @returns DeleteImagesResponse
   */
  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * Deletes Android Debug Bridge (ADB) key pairs.
   * 
   * @remarks
   *   If a cloud phone instance is currently associated with the ADB key pair you intend to delete, the ADB key pair cannot be deleted.
   * *   Once an ADB key pair is deleted, it cannot be retrieved or queried by using the DescribeKeyPairs operation.
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new DeleteKeyPairsResponse({}));
    } else {
      return $dara.cast<DeleteKeyPairsResponse>(await this.execute(params, req, runtime), new DeleteKeyPairsResponse({}));
    }

  }

  /**
   * Deletes Android Debug Bridge (ADB) key pairs.
   * 
   * @remarks
   *   If a cloud phone instance is currently associated with the ADB key pair you intend to delete, the ADB key pair cannot be deleted.
   * *   Once an ADB key pair is deleted, it cannot be retrieved or queried by using the DescribeKeyPairs operation.
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * Deletes a policy.
   * 
   * @param request - DeletePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroupWithOptions(request: DeletePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyGroupResponse>(await this.callApi(params, req, runtime), new DeletePolicyGroupResponse({}));
    } else {
      return $dara.cast<DeletePolicyGroupResponse>(await this.execute(params, req, runtime), new DeletePolicyGroupResponse({}));
    }

  }

  /**
   * Deletes a policy.
   * 
   * @param request - DeletePolicyGroupRequest
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance group.
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroupsWithOptions(request: DescribeAndroidInstanceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAndroidInstanceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new DescribeAndroidInstanceGroupsResponse({}));
    } else {
      return $dara.cast<DescribeAndroidInstanceGroupsResponse>(await this.execute(params, req, runtime), new DescribeAndroidInstanceGroupsResponse({}));
    }

  }

  /**
   * Queries the details of an instance group.
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: DescribeAndroidInstanceGroupsRequest): Promise<DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries cloud phone instances.
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstancesWithOptions(request: DescribeAndroidInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAndroidInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAndroidInstances",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAndroidInstancesResponse>(await this.callApi(params, req, runtime), new DescribeAndroidInstancesResponse({}));
    } else {
      return $dara.cast<DescribeAndroidInstancesResponse>(await this.execute(params, req, runtime), new DescribeAndroidInstancesResponse({}));
    }

  }

  /**
   * Queries cloud phone instances.
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstances(request: DescribeAndroidInstancesRequest): Promise<DescribeAndroidInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstancesWithOptions(request, runtime);
  }

  /**
   * Queries applications.
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.installationStatus)) {
      query["InstallationStatus"] = request.installationStatus;
    }

    if (!$dara.isNull(request.MD5)) {
      query["MD5"] = request.MD5;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
    } else {
      return $dara.cast<DescribeAppsResponse>(await this.execute(params, req, runtime), new DescribeAppsResponse({}));
    }

  }

  /**
   * Queries applications.
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * Queries backup files.
   * 
   * @remarks
   * Currently, this operation allows you to query only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - DescribeBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFilesWithOptions(request: DescribeBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!$dara.isNull(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!$dara.isNull(request.backupFileName)) {
      query["BackupFileName"] = request.backupFileName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupFiles",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupFilesResponse>(await this.callApi(params, req, runtime), new DescribeBackupFilesResponse({}));
    } else {
      return $dara.cast<DescribeBackupFilesResponse>(await this.execute(params, req, runtime), new DescribeBackupFilesResponse({}));
    }

  }

  /**
   * Queries backup files.
   * 
   * @remarks
   * Currently, this operation allows you to query only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - DescribeBackupFilesRequest
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * 查询云手机节点
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodesWithOptions(request: DescribeCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudPhoneNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new DescribeCloudPhoneNodesResponse({}));
    } else {
      return $dara.cast<DescribeCloudPhoneNodesResponse>(await this.execute(params, req, runtime), new DescribeCloudPhoneNodesResponse({}));
    }

  }

  /**
   * 查询云手机节点
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodes(request: DescribeCloudPhoneNodesRequest): Promise<DescribeCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Queries images.
   * 
   * @param request - DescribeImageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageListResponse
   */
  async describeImageListWithOptions(request: DescribeImageListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeImageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imagePackageType)) {
      query["ImagePackageType"] = request.imagePackageType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.imageType)) {
      body["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeImageListResponse>(await this.callApi(params, req, runtime), new DescribeImageListResponse({}));
    } else {
      return $dara.cast<DescribeImageListResponse>(await this.execute(params, req, runtime), new DescribeImageListResponse({}));
    }

  }

  /**
   * Queries images.
   * 
   * @param request - DescribeImageListRequest
   * @returns DescribeImageListResponse
   */
  async describeImageList(request: DescribeImageListRequest): Promise<DescribeImageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageListWithOptions(request, runtime);
  }

  /**
   * Queries the execution results of commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.invocationId)) {
      query["InvocationId"] = request.invocationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
    } else {
      return $dara.cast<DescribeInvocationsResponse>(await this.execute(params, req, runtime), new DescribeInvocationsResponse({}));
    }

  }

  /**
   * Queries the execution results of commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeKeyPairsResponse>(await this.callApi(params, req, runtime), new DescribeKeyPairsResponse({}));
    } else {
      return $dara.cast<DescribeKeyPairsResponse>(await this.execute(params, req, runtime), new DescribeKeyPairsResponse({}));
    }

  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * Query available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Query available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Query available specifications.
   * 
   * @param request - DescribeSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpecResponse
   */
  async describeSpecWithOptions(request: DescribeSpecRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.matrixSpec)) {
      query["MatrixSpec"] = request.matrixSpec;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.specIds)) {
      query["SpecIds"] = request.specIds;
    }

    if (!$dara.isNull(request.specStatus)) {
      query["SpecStatus"] = request.specStatus;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSpec",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSpecResponse>(await this.callApi(params, req, runtime), new DescribeSpecResponse({}));
    } else {
      return $dara.cast<DescribeSpecResponse>(await this.execute(params, req, runtime), new DescribeSpecResponse({}));
    }

  }

  /**
   * Query available specifications.
   * 
   * @param request - DescribeSpecRequest
   * @returns DescribeSpecResponse
   */
  async describeSpec(request: DescribeSpecRequest): Promise<DescribeSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * Queries tasks created for a cloud phone instance.
   * 
   * @remarks
   *   You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * *   The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * *   You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
   * **Example**
   * Assume you restart two cloud phone instances with the instance IDs acp-25nt4kk9whhok\\*\\*\\*\\* and acp-j2taq887orj8l\\*\\*\\*\\*, and the returned request ID is B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you want to check the operation outcomes of the two cloud phone instances, you can call the DescribeTasks operation. You need to set the InvokeId request parameter to B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you only want to check the cloud phone instance with the ID acp-25nt4kk9whhok\\*\\*\\*\\*, you must set the ParentTaskId request parameter to the ID of the batch task and the AndroidInstanceId request parameter to acp-25nt4kk9whhok\\*\\*\\*\\* when calling the DescribeTasks operation.
   * 
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      query["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskStatuses)) {
      query["TaskStatuses"] = request.taskStatuses;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.taskTypes)) {
      query["TaskTypes"] = request.taskTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
    } else {
      return $dara.cast<DescribeTasksResponse>(await this.execute(params, req, runtime), new DescribeTasksResponse({}));
    }

  }

  /**
   * Queries tasks created for a cloud phone instance.
   * 
   * @remarks
   *   You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * *   The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * *   You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
   * **Example**
   * Assume you restart two cloud phone instances with the instance IDs acp-25nt4kk9whhok\\*\\*\\*\\* and acp-j2taq887orj8l\\*\\*\\*\\*, and the returned request ID is B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you want to check the operation outcomes of the two cloud phone instances, you can call the DescribeTasks operation. You need to set the InvokeId request parameter to B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you only want to check the cloud phone instance with the ID acp-25nt4kk9whhok\\*\\*\\*\\*, you must set the ParentTaskId request parameter to the ID of the batch task and the AndroidInstanceId request parameter to acp-25nt4kk9whhok\\*\\*\\*\\* when calling the DescribeTasks operation.
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * Detaches an Android Debug Bridge (ADB) key pair from one or more cloud phone instances.
   * 
   * @remarks
   *   After you detach an ADB key pair from a cloud phone instance, the ADB connection will fail. This occurs because the system can no longer authenticate using a valid ADB public key, leading to authentication errors.
   * 
   * @param request - DetachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKeyPairResponse
   */
  async detachKeyPairWithOptions(request: DetachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<DetachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachKeyPairResponse>(await this.callApi(params, req, runtime), new DetachKeyPairResponse({}));
    } else {
      return $dara.cast<DetachKeyPairResponse>(await this.execute(params, req, runtime), new DetachKeyPairResponse({}));
    }

  }

  /**
   * Detaches an Android Debug Bridge (ADB) key pair from one or more cloud phone instances.
   * 
   * @remarks
   *   After you detach an ADB key pair from a cloud phone instance, the ADB connection will fail. This occurs because the system can no longer authenticate using a valid ADB public key, leading to authentication errors.
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * 实例断开连接
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstanceWithOptions(request: DisconnectAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DisconnectAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisconnectAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisconnectAndroidInstanceResponse>(await this.callApi(params, req, runtime), new DisconnectAndroidInstanceResponse({}));
    } else {
      return $dara.cast<DisconnectAndroidInstanceResponse>(await this.execute(params, req, runtime), new DisconnectAndroidInstanceResponse({}));
    }

  }

  /**
   * 实例断开连接
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstance(request: DisconnectAndroidInstanceRequest): Promise<DisconnectAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disconnectAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Distributes an image.
   * 
   * @remarks
   * After you distribute an image in supported regions, the distribution cannot be canceled.
   * 
   * @param request - DistributeImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DistributeImageResponse
   */
  async distributeImageWithOptions(request: DistributeImageRequest, runtime: $dara.RuntimeOptions): Promise<DistributeImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.distributeRegionList)) {
      body["DistributeRegionList"] = request.distributeRegionList;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DistributeImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DistributeImageResponse>(await this.callApi(params, req, runtime), new DistributeImageResponse({}));
    } else {
      return $dara.cast<DistributeImageResponse>(await this.execute(params, req, runtime), new DistributeImageResponse({}));
    }

  }

  /**
   * Distributes an image.
   * 
   * @remarks
   * After you distribute an image in supported regions, the distribution cannot be canceled.
   * 
   * @param request - DistributeImageRequest
   * @returns DistributeImageResponse
   */
  async distributeImage(request: DistributeImageRequest): Promise<DistributeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.distributeImageWithOptions(request, runtime);
  }

  /**
   * Downgrades an instance group. Currently, this operation allows you to only delete specific cloud phone instances from an instance group.
   * 
   * @remarks
   * This operation only allows you to scale down an instance group.
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroupWithOptions(request: DowngradeAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<DowngradeAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DowngradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new DowngradeAndroidInstanceGroupResponse({}));
    } else {
      return $dara.cast<DowngradeAndroidInstanceGroupResponse>(await this.execute(params, req, runtime), new DowngradeAndroidInstanceGroupResponse({}));
    }

  }

  /**
   * Downgrades an instance group. Currently, this operation allows you to only delete specific cloud phone instances from an instance group.
   * 
   * @remarks
   * This operation only allows you to scale down an instance group.
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroup(request: DowngradeAndroidInstanceGroupRequest): Promise<DowngradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 结束协同
   * 
   * @param request - EndCoordinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndCoordinationResponse
   */
  async endCoordinationWithOptions(request: EndCoordinationRequest, runtime: $dara.RuntimeOptions): Promise<EndCoordinationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coordinatorUserId)) {
      query["CoordinatorUserId"] = request.coordinatorUserId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndCoordination",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EndCoordinationResponse>(await this.callApi(params, req, runtime), new EndCoordinationResponse({}));
    } else {
      return $dara.cast<EndCoordinationResponse>(await this.execute(params, req, runtime), new EndCoordinationResponse({}));
    }

  }

  /**
   * 结束协同
   * 
   * @param request - EndCoordinationRequest
   * @returns EndCoordinationResponse
   */
  async endCoordination(request: EndCoordinationRequest): Promise<EndCoordinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endCoordinationWithOptions(request, runtime);
  }

  /**
   * 存储扩容
   * 
   * @param request - ExpandDataVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandDataVolumeResponse
   */
  async expandDataVolumeWithOptions(request: ExpandDataVolumeRequest, runtime: $dara.RuntimeOptions): Promise<ExpandDataVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.shareDataVolume)) {
      query["ShareDataVolume"] = request.shareDataVolume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandDataVolume",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExpandDataVolumeResponse>(await this.callApi(params, req, runtime), new ExpandDataVolumeResponse({}));
    } else {
      return $dara.cast<ExpandDataVolumeResponse>(await this.execute(params, req, runtime), new ExpandDataVolumeResponse({}));
    }

  }

  /**
   * 存储扩容
   * 
   * @param request - ExpandDataVolumeRequest
   * @returns ExpandDataVolumeResponse
   */
  async expandDataVolume(request: ExpandDataVolumeRequest): Promise<ExpandDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expandDataVolumeWithOptions(request, runtime);
  }

  /**
   * Pulls a file from a cloud phone instance and stores it in Object Storage Service (OSS).
   * 
   * @remarks
   * Currently, this operation allows you to retrieve files or folders from cloud phone instances and save them directly to OSS.
   * 
   * @param request - FetchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchFileResponse
   */
  async fetchFileWithOptions(request: FetchFileRequest, runtime: $dara.RuntimeOptions): Promise<FetchFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FetchFileResponse>(await this.callApi(params, req, runtime), new FetchFileResponse({}));
    } else {
      return $dara.cast<FetchFileResponse>(await this.execute(params, req, runtime), new FetchFileResponse({}));
    }

  }

  /**
   * Pulls a file from a cloud phone instance and stores it in Object Storage Service (OSS).
   * 
   * @remarks
   * Currently, this operation allows you to retrieve files or folders from cloud phone instances and save them directly to OSS.
   * 
   * @param request - FetchFileRequest
   * @returns FetchFileResponse
   */
  async fetchFile(request: FetchFileRequest): Promise<FetchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * Generates a collaboration code for the cloud phone being accessed by using the current convenience account, and shares this code with other convenience accounts to allow them to access the same cloud phone.
   * 
   * @remarks
   * You can call this operation to generate a collaboration code for a cloud phone accessed by your current account and share this code with other convenience users to allow them to access the same cloud phone over the desktop, mobile, or web client. They can then call the [ApplyCoordinationWithCode](https://help.aliyun.com/zh/wuying-workspace/developer-reference/api-metaspace-2022-03-07-applycoordinationwithcode?spm=a2c4g.11174283.help-menu-68242.d_5_3_2_1.70e5e380fUFgOH\\&scm=20140722.H_2863194._.OR_help-T_cn~zh-V_1) operation to initiate a coordination request, which will provide them with a connection token.
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCodeWithOptions(request: GenerateCoordinationCodeRequest, runtime: $dara.RuntimeOptions): Promise<GenerateCoordinationCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCoordinationCode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateCoordinationCodeResponse>(await this.callApi(params, req, runtime), new GenerateCoordinationCodeResponse({}));
    } else {
      return $dara.cast<GenerateCoordinationCodeResponse>(await this.execute(params, req, runtime), new GenerateCoordinationCodeResponse({}));
    }

  }

  /**
   * Generates a collaboration code for the cloud phone being accessed by using the current convenience account, and shares this code with other convenience accounts to allow them to access the same cloud phone.
   * 
   * @remarks
   * You can call this operation to generate a collaboration code for a cloud phone accessed by your current account and share this code with other convenience users to allow them to access the same cloud phone over the desktop, mobile, or web client. They can then call the [ApplyCoordinationWithCode](https://help.aliyun.com/zh/wuying-workspace/developer-reference/api-metaspace-2022-03-07-applycoordinationwithcode?spm=a2c4g.11174283.help-menu-68242.d_5_3_2_1.70e5e380fUFgOH\\&scm=20140722.H_2863194._.OR_help-T_cn~zh-V_1) operation to initiate a coordination request, which will provide them with a connection token.
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCode(request: GenerateCoordinationCodeRequest): Promise<GenerateCoordinationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCoordinationCodeWithOptions(request, runtime);
  }

  /**
   * Imports the public key of an Android Debug Bridge (ADB) key pair.
   * 
   * @remarks
   * To avoid authorization errors that could cause ADB connection failures, you must import the public key of an ADB key pair.
   * 
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<ImportKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportKeyPairResponse>(await this.callApi(params, req, runtime), new ImportKeyPairResponse({}));
    } else {
      return $dara.cast<ImportKeyPairResponse>(await this.execute(params, req, runtime), new ImportKeyPairResponse({}));
    }

  }

  /**
   * Imports the public key of an Android Debug Bridge (ADB) key pair.
   * 
   * @remarks
   * To avoid authorization errors that could cause ADB connection failures, you must import the public key of an ADB key pair.
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * Installs an app on multiple cloud phone instances at the same time.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - InstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAppResponse
   */
  async installAppWithOptions(request: InstallAppRequest, runtime: $dara.RuntimeOptions): Promise<InstallAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallAppResponse>(await this.callApi(params, req, runtime), new InstallAppResponse({}));
    } else {
      return $dara.cast<InstallAppResponse>(await this.execute(params, req, runtime), new InstallAppResponse({}));
    }

  }

  /**
   * Installs an app on multiple cloud phone instances at the same time.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - InstallAppRequest
   * @returns InstallAppResponse
   */
  async installApp(request: InstallAppRequest): Promise<InstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * Queries policies.
   * 
   * @param request - ListPolicyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroupsWithOptions(request: ListPolicyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicyGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupIds)) {
      body["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicyGroupsResponse>(await this.callApi(params, req, runtime), new ListPolicyGroupsResponse({}));
    } else {
      return $dara.cast<ListPolicyGroupsResponse>(await this.execute(params, req, runtime), new ListPolicyGroupsResponse({}));
    }

  }

  /**
   * Queries policies.
   * 
   * @param request - ListPolicyGroupsRequest
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroups(request: ListPolicyGroupsRequest): Promise<ListPolicyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyGroupsWithOptions(request, runtime);
  }

  /**
   * Modifies attributes of a cloud phone instance. Currently, this operation allows you to modify only the name of a cloud phone instance.
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstanceWithOptions(request: ModifyAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!$dara.isNull(request.newAndroidInstanceName)) {
      query["NewAndroidInstanceName"] = request.newAndroidInstanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAndroidInstanceResponse>(await this.callApi(params, req, runtime), new ModifyAndroidInstanceResponse({}));
    } else {
      return $dara.cast<ModifyAndroidInstanceResponse>(await this.execute(params, req, runtime), new ModifyAndroidInstanceResponse({}));
    }

  }

  /**
   * Modifies attributes of a cloud phone instance. Currently, this operation allows you to modify only the name of a cloud phone instance.
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstance(request: ModifyAndroidInstanceRequest): Promise<ModifyAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies attributes of an instance group.
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroupWithOptions(request: ModifyAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.newInstanceGroupName)) {
      query["NewInstanceGroupName"] = request.newInstanceGroupName;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new ModifyAndroidInstanceGroupResponse({}));
    } else {
      return $dara.cast<ModifyAndroidInstanceGroupResponse>(await this.execute(params, req, runtime), new ModifyAndroidInstanceGroupResponse({}));
    }

  }

  /**
   * Modifies attributes of an instance group.
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroup(request: ModifyAndroidInstanceGroupRequest): Promise<ModifyAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Modify attributes of an application.
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
    } else {
      return $dara.cast<ModifyAppResponse>(await this.execute(params, req, runtime), new ModifyAppResponse({}));
    }

  }

  /**
   * Modify attributes of an application.
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNodeWithOptions(request: ModifyCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyCloudPhoneNodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new ModifyCloudPhoneNodeResponse({}));
    } else {
      return $dara.cast<ModifyCloudPhoneNodeResponse>(await this.execute(params, req, runtime), new ModifyCloudPhoneNodeResponse({}));
    }

  }

  /**
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNode(request: ModifyCloudPhoneNodeRequest): Promise<ModifyCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Modifies the billing method. Currently, this operation only allows you to change the billing method from pay-as-you-go to subscription.
   * 
   * @param request - ModifyInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeTypeWithOptions(request: ModifyInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyInstanceChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceChargeType",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceChargeTypeResponse({}));
    } else {
      return $dara.cast<ModifyInstanceChargeTypeResponse>(await this.execute(params, req, runtime), new ModifyInstanceChargeTypeResponse({}));
    }

  }

  /**
   * Modifies the billing method. Currently, this operation only allows you to change the billing method from pay-as-you-go to subscription.
   * 
   * @param request - ModifyInstanceChargeTypeRequest
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeType(request: ModifyInstanceChargeTypeRequest): Promise<ModifyInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies Android Debug Bridge (ADB) key pairs.
   * 
   * @param request - ModifyKeyPairNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairNameWithOptions(request: ModifyKeyPairNameRequest, runtime: $dara.RuntimeOptions): Promise<ModifyKeyPairNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.newKeyPairName)) {
      query["NewKeyPairName"] = request.newKeyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyKeyPairName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyKeyPairNameResponse>(await this.callApi(params, req, runtime), new ModifyKeyPairNameResponse({}));
    } else {
      return $dara.cast<ModifyKeyPairNameResponse>(await this.execute(params, req, runtime), new ModifyKeyPairNameResponse({}));
    }

  }

  /**
   * Modifies Android Debug Bridge (ADB) key pairs.
   * 
   * @param request - ModifyKeyPairNameRequest
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairName(request: ModifyKeyPairNameRequest): Promise<ModifyKeyPairNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyKeyPairNameWithOptions(request, runtime);
  }

  /**
   * Modifies a policy.
   * 
   * @param tmpReq - ModifyPolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroupWithOptions(tmpReq: ModifyPolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    tmpReq.validate();
    let request = new ModifyPolicyGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.netRedirectPolicy)) {
      request.netRedirectPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.netRedirectPolicy, "NetRedirectPolicy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.lockResolution)) {
      body["LockResolution"] = request.lockResolution;
    }

    if (!$dara.isNull(request.netRedirectPolicyShrink)) {
      body["NetRedirectPolicy"] = request.netRedirectPolicyShrink;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      body["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyPolicyGroupResponse({}));
    } else {
      return $dara.cast<ModifyPolicyGroupResponse>(await this.execute(params, req, runtime), new ModifyPolicyGroupResponse({}));
    }

  }

  /**
   * Modifies a policy.
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Operates apps in a cloud phone, such as opening, closing, and reopening apps.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - OperateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppResponse
   */
  async operateAppWithOptions(request: OperateAppRequest, runtime: $dara.RuntimeOptions): Promise<OperateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OperateAppResponse>(await this.callApi(params, req, runtime), new OperateAppResponse({}));
    } else {
      return $dara.cast<OperateAppResponse>(await this.execute(params, req, runtime), new OperateAppResponse({}));
    }

  }

  /**
   * Operates apps in a cloud phone, such as opening, closing, and reopening apps.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - OperateAppRequest
   * @returns OperateAppResponse
   */
  async operateApp(request: OperateAppRequest): Promise<OperateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppWithOptions(request, runtime);
  }

  /**
   * Restarts one or more cloud phone instances.
   * 
   * @remarks
   * Before you restart a cloud phone instance, make sure it is in one of the following states: **Available, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroupWithOptions(request: RebootAndroidInstancesInGroupRequest, runtime: $dara.RuntimeOptions): Promise<RebootAndroidInstancesInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RebootAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new RebootAndroidInstancesInGroupResponse({}));
    } else {
      return $dara.cast<RebootAndroidInstancesInGroupResponse>(await this.execute(params, req, runtime), new RebootAndroidInstancesInGroupResponse({}));
    }

  }

  /**
   * Restarts one or more cloud phone instances.
   * 
   * @remarks
   * Before you restart a cloud phone instance, make sure it is in one of the following states: **Available, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroup(request: RebootAndroidInstancesInGroupRequest): Promise<RebootAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Restores backup files.
   * 
   * @remarks
   * Currently, this operation allows you to restore only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - RecoveryFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoveryFileResponse
   */
  async recoveryFileWithOptions(request: RecoveryFileRequest, runtime: $dara.RuntimeOptions): Promise<RecoveryFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!$dara.isNull(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoveryFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RecoveryFileResponse>(await this.callApi(params, req, runtime), new RecoveryFileResponse({}));
    } else {
      return $dara.cast<RecoveryFileResponse>(await this.execute(params, req, runtime), new RecoveryFileResponse({}));
    }

  }

  /**
   * Restores backup files.
   * 
   * @remarks
   * Currently, this operation allows you to restore only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - RecoveryFileRequest
   * @returns RecoveryFileResponse
   */
  async recoveryFile(request: RecoveryFileRequest): Promise<RecoveryFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoveryFileWithOptions(request, runtime);
  }

  /**
   * Renews instance groups.
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroupsWithOptions(request: RenewAndroidInstanceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<RenewAndroidInstanceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenewAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new RenewAndroidInstanceGroupsResponse({}));
    } else {
      return $dara.cast<RenewAndroidInstanceGroupsResponse>(await this.execute(params, req, runtime), new RenewAndroidInstanceGroupsResponse({}));
    }

  }

  /**
   * Renews instance groups.
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: RenewAndroidInstanceGroupsRequest): Promise<RenewAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Renews a cloud mobile matrix.
   * 
   * @param request - RenewCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewCloudPhoneNodesResponse
   */
  async renewCloudPhoneNodesWithOptions(request: RenewCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<RenewCloudPhoneNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenewCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new RenewCloudPhoneNodesResponse({}));
    } else {
      return $dara.cast<RenewCloudPhoneNodesResponse>(await this.execute(params, req, runtime), new RenewCloudPhoneNodesResponse({}));
    }

  }

  /**
   * Renews a cloud mobile matrix.
   * 
   * @param request - RenewCloudPhoneNodesRequest
   * @returns RenewCloudPhoneNodesResponse
   */
  async renewCloudPhoneNodes(request: RenewCloudPhoneNodesRequest): Promise<RenewCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Resets one or more cloud phone instances.
   * 
   * @remarks
   * Before you reset a cloud phone instance, make sure it is in one of the following states: **Available, Stopped, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroupWithOptions(request: ResetAndroidInstancesInGroupRequest, runtime: $dara.RuntimeOptions): Promise<ResetAndroidInstancesInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new ResetAndroidInstancesInGroupResponse({}));
    } else {
      return $dara.cast<ResetAndroidInstancesInGroupResponse>(await this.execute(params, req, runtime), new ResetAndroidInstancesInGroupResponse({}));
    }

  }

  /**
   * Resets one or more cloud phone instances.
   * 
   * @remarks
   * Before you reset a cloud phone instance, make sure it is in one of the following states: **Available, Stopped, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: ResetAndroidInstancesInGroupRequest): Promise<ResetAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Executes a command on a cloud phone instance.
   * 
   * @param request - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(request: RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<RunCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
    } else {
      return $dara.cast<RunCommandResponse>(await this.execute(params, req, runtime), new RunCommandResponse({}));
    }

  }

  /**
   * Executes a command on a cloud phone instance.
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Pushes files from Object Storage Service (OSS) buckets to cloud phone instances.
   * 
   * @remarks
   * Currently, this operation allows you to only push files or folders from OSS buckets to cloud phone instances.
   * 
   * @param request - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
   */
  async sendFileWithOptions(request: SendFileRequest, runtime: $dara.RuntimeOptions): Promise<SendFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!$dara.isNull(request.targetFileName)) {
      query["TargetFileName"] = request.targetFileName;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendFileResponse>(await this.callApi(params, req, runtime), new SendFileResponse({}));
    } else {
      return $dara.cast<SendFileResponse>(await this.execute(params, req, runtime), new SendFileResponse({}));
    }

  }

  /**
   * Pushes files from Object Storage Service (OSS) buckets to cloud phone instances.
   * 
   * @remarks
   * Currently, this operation allows you to only push files or folders from OSS buckets to cloud phone instances.
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * Sets the authentication status for cloud phone instances. If you enable Android Debug Bridge (ADB) authentication for cloud phone instances, the system will verify the validity of the ADB key pairs provided by end users when they connect to the instances over ADB. To ensure successful authentication and a proper connection, we recommend that you attach ADB key pairs to cloud phone instances. If you disable ADB authentication for cloud phone instances, the system will no longer verify the validity of any ADB key pairs. As a result, end users can connect to the cloud phone instances over ADB without authentication, provided the network connection is functioning properly.
   * 
   * @remarks
   * Before you call this operation, make sure that the desired cloud phone instance is in the Running state.
   * 
   * @param request - SetAdbSecureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAdbSecureResponse
   */
  async setAdbSecureWithOptions(request: SetAdbSecureRequest, runtime: $dara.RuntimeOptions): Promise<SetAdbSecureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAdbSecure",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetAdbSecureResponse>(await this.callApi(params, req, runtime), new SetAdbSecureResponse({}));
    } else {
      return $dara.cast<SetAdbSecureResponse>(await this.execute(params, req, runtime), new SetAdbSecureResponse({}));
    }

  }

  /**
   * Sets the authentication status for cloud phone instances. If you enable Android Debug Bridge (ADB) authentication for cloud phone instances, the system will verify the validity of the ADB key pairs provided by end users when they connect to the instances over ADB. To ensure successful authentication and a proper connection, we recommend that you attach ADB key pairs to cloud phone instances. If you disable ADB authentication for cloud phone instances, the system will no longer verify the validity of any ADB key pairs. As a result, end users can connect to the cloud phone instances over ADB without authentication, provided the network connection is functioning properly.
   * 
   * @remarks
   * Before you call this operation, make sure that the desired cloud phone instance is in the Running state.
   * 
   * @param request - SetAdbSecureRequest
   * @returns SetAdbSecureResponse
   */
  async setAdbSecure(request: SetAdbSecureRequest): Promise<SetAdbSecureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAdbSecureWithOptions(request, runtime);
  }

  /**
   * Start instances.
   * 
   * @remarks
   * Only supports starting when the instance is in the **Stopped, Backup Failed, or Recovery Failed** state.
   * 
   * @param request - StartAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstanceWithOptions(request: StartAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartAndroidInstanceResponse>(await this.callApi(params, req, runtime), new StartAndroidInstanceResponse({}));
    } else {
      return $dara.cast<StartAndroidInstanceResponse>(await this.execute(params, req, runtime), new StartAndroidInstanceResponse({}));
    }

  }

  /**
   * Start instances.
   * 
   * @remarks
   * Only supports starting when the instance is in the **Stopped, Backup Failed, or Recovery Failed** state.
   * 
   * @param request - StartAndroidInstanceRequest
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstance(request: StartAndroidInstanceRequest): Promise<StartAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a cloud phone instance.
   * 
   * @remarks
   * Before you stop a cloud phone instance, make sure it is in one of the following states: **Available, Backup failure, and Restoration failure**.
   * 
   * @param request - StopAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstanceWithOptions(request: StopAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAndroidInstanceResponse>(await this.callApi(params, req, runtime), new StopAndroidInstanceResponse({}));
    } else {
      return $dara.cast<StopAndroidInstanceResponse>(await this.execute(params, req, runtime), new StopAndroidInstanceResponse({}));
    }

  }

  /**
   * Stops a cloud phone instance.
   * 
   * @remarks
   * Before you stop a cloud phone instance, make sure it is in one of the following states: **Available, Backup failure, and Restoration failure**.
   * 
   * @param request - StopAndroidInstanceRequest
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstance(request: StopAndroidInstanceRequest): Promise<StopAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Uninstalls an app from multiple cloud phone instances.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, you can visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - UninstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAppResponse
   */
  async uninstallAppWithOptions(request: UninstallAppRequest, runtime: $dara.RuntimeOptions): Promise<UninstallAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallAppResponse>(await this.callApi(params, req, runtime), new UninstallAppResponse({}));
    } else {
      return $dara.cast<UninstallAppResponse>(await this.execute(params, req, runtime), new UninstallAppResponse({}));
    }

  }

  /**
   * Uninstalls an app from multiple cloud phone instances.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, you can visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - UninstallAppRequest
   * @returns UninstallAppResponse
   */
  async uninstallApp(request: UninstallAppRequest): Promise<UninstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * Updates the name of a custom image.
   * 
   * @param request - UpdateCustomImageNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageNameWithOptions(request: UpdateCustomImageNameRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCustomImageNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomImageName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCustomImageNameResponse>(await this.callApi(params, req, runtime), new UpdateCustomImageNameResponse({}));
    } else {
      return $dara.cast<UpdateCustomImageNameResponse>(await this.execute(params, req, runtime), new UpdateCustomImageNameResponse({}));
    }

  }

  /**
   * Updates the name of a custom image.
   * 
   * @param request - UpdateCustomImageNameRequest
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageName(request: UpdateCustomImageNameRequest): Promise<UpdateCustomImageNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomImageNameWithOptions(request, runtime);
  }

  /**
   * Changes the image of an instance group.
   * 
   * @remarks
   * Before you call this operation, make sure the image is in the Available state and the region of the image is included in the region list of the desired instance group. In addition, the instance group itself is available.
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImageWithOptions(request: UpdateInstanceGroupImageRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceGroupImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      body["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceGroupImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceGroupImageResponse>(await this.callApi(params, req, runtime), new UpdateInstanceGroupImageResponse({}));
    } else {
      return $dara.cast<UpdateInstanceGroupImageResponse>(await this.execute(params, req, runtime), new UpdateInstanceGroupImageResponse({}));
    }

  }

  /**
   * Changes the image of an instance group.
   * 
   * @remarks
   * Before you call this operation, make sure the image is in the Available state and the region of the image is included in the region list of the desired instance group. In addition, the instance group itself is available.
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: UpdateInstanceGroupImageRequest): Promise<UpdateInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * Upgrades an instance group. Currently, this operation allows you to only increase the number of instances in an instance group.
   * 
   * @remarks
   * Currently, this operation allows you to only increase the size of an instance group.
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroupWithOptions(request: UpgradeAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.increaseNumberOfInstance)) {
      query["IncreaseNumberOfInstance"] = request.increaseNumberOfInstance;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new UpgradeAndroidInstanceGroupResponse({}));
    } else {
      return $dara.cast<UpgradeAndroidInstanceGroupResponse>(await this.execute(params, req, runtime), new UpgradeAndroidInstanceGroupResponse({}));
    }

  }

  /**
   * Upgrades an instance group. Currently, this operation allows you to only increase the number of instances in an instance group.
   * 
   * @remarks
   * Currently, this operation allows you to only increase the size of an instance group.
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: UpgradeAndroidInstanceGroupRequest): Promise<UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
