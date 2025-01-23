// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AttachKeyPairResponseBodyData extends $dara.Model {
  attachedInstanceIds?: string[];
  /**
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
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
  androidInstanceId?: string;
  backupFileId?: string;
  backupFileName?: string;
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
   * @example
   * acp-fkuit0cmyfvzz****
   */
  instanceId?: string;
  /**
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
   * @example
   * aig-1uzb6heg797z3****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * acp-ajxvwo1u0hqvd****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou@c9f5c2e8-f5c4-4b01-8602-000cae94****
   */
  taskId?: string;
  /**
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
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

export class CheckResourceStockResponseBodyResourceStockModels extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * Available
   */
  stockStatus?: string;
  /**
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

export class CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos extends $dara.Model {
  instanceGroupId?: string;
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

export class CreateKeyPairResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-06-30 08:45:09.0
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
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
  ruleType?: string;
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
  customProxy?: string;
  hostAddr?: string;
  netRedirect?: string;
  port?: string;
  proxyPassword?: string;
  proxyType?: string;
  proxyUserName?: string;
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
   * @example
   * acp-bwhtebzah2fse****
   */
  androidInstanceId?: string;
  /**
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
  failDeleteImageIds?: string[];
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
   * @example
   * 32
   */
  diskSize?: number;
  /**
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
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ARM
   */
  architectureType?: string;
  availableInstanceAmount?: number;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 8
   */
  cpu?: string;
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  errorCode?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  installedAppList?: string;
  /**
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  instanceGroupName?: string;
  /**
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @example
   * ARM-2vCPU4GiB 32GiB
   */
  instanceGroupSpecDescribe?: string;
  /**
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @example
   * 8
   */
  memory?: number;
  /**
   * @example
   * 10
   */
  numberOfInstances?: string;
  /**
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  /**
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  renderingType?: string;
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
   * standard
   */
  saleMode?: string;
  /**
   * @example
   * Android 12
   */
  systemVersion?: string;
  /**
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
  key?: string;
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
  diskSize?: number;
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

export class DescribeAndroidInstancesResponseBodyInstanceModelTags extends $dara.Model {
  key?: string;
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
   * @example
   * ag-ayyhomlal7po****
   */
  androidInstanceGroupId?: string;
  androidInstanceGroupName?: string;
  /**
   * @example
   * acp-8at8h6ejkadjh****
   */
  androidInstanceId?: string;
  /**
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @example
   * RUNNING
   */
  androidInstanceStatus?: string;
  /**
   * @example
   * aig-i7yv6tkn7kh8dv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-9ey6io0q58rcd****
   */
  appInstanceId?: string;
  /**
   * @example
   * test
   */
  authorizedUserId?: string;
  /**
   * @example
   * test
   */
  bindUserId?: string;
  chargeType?: string;
  cpu?: string;
  disks?: DescribeAndroidInstancesResponseBodyInstanceModelDisks[];
  /**
   * @example
   * FilePathNotFound
   */
  errorCode?: string;
  /**
   * @example
   * 2023-05-06 10:42:10
   */
  gmtCreate?: string;
  gmtExpired?: string;
  /**
   * @example
   * 2023-05-06 10:42:10
   */
  gmtModified?: string;
  imageVersion?: string;
  instanceType?: string;
  /**
   * @example
   * kp-5hh431emkpucs****
   */
  keyPairId?: string;
  memory?: number;
  /**
   * @example
   * 192.168.22.48
   */
  networkInterfaceIp?: string;
  officeSiteId?: string;
  /**
   * @example
   * p-0btrd5zj8epo****
   */
  persistentAppInstanceId?: string;
  policyGroupId?: string;
  publicIpAddress?: string;
  /**
   * @example
   * 100
   */
  rate?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  renderingType?: string;
  sessionStatus?: string;
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
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageVersion: 'ImageVersion',
      instanceType: 'InstanceType',
      keyPairId: 'KeyPairId',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      policyGroupId: 'PolicyGroupId',
      publicIpAddress: 'PublicIpAddress',
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
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageVersion: 'string',
      instanceType: 'string',
      keyPairId: 'string',
      memory: 'number',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      persistentAppInstanceId: 'string',
      policyGroupId: 'string',
      publicIpAddress: 'string',
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
   * @example
   * 1.0.0
   */
  androidAppVersion?: string;
  apkSize?: string;
  /**
   * @example
   * 10404
   */
  appId?: number;
  /**
   * @example
   * testapp
   */
  appName?: string;
  bizRegionId?: string;
  description?: string;
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  gmtModified?: string;
  /**
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  instanceGroupList?: string[];
  MD5?: string;
  packageName?: string;
  /**
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
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  androidInstanceName?: string;
  backupAll?: boolean;
  /**
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @example
   * oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab
   */
  backupFilePath?: string;
  description?: string;
  /**
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @example
   * 10227168
   */
  fileSize?: number;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @example
   * ag-58ftsoo90p0qi****
   */
  instanceGroupId?: string;
  regionId?: string;
  sourceAppInfoList?: string[];
  sourceFilePathList?: string[];
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  taskId?: string;
  /**
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
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

export class DescribeImageListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 117819727354****
   */
  aliUid?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @example
   * IMAGE
   */
  imageName?: string;
  imageRegionDistributeMap?: { [key: string]: DataImageRegionDistributeMapValue };
  imageRegionList?: string[];
  /**
   * @example
   * System
   */
  imageType?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  releaseTime?: string;
  renderingType?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
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
   * @example
   * 2022-08-11 17:45:03
   */
  finishTime?: string;
  /**
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @example
   * t-15775dc8****
   */
  invocationId?: string;
  /**
   * @example
   * RUNNING
   */
  invocationStatus?: string;
  /**
   * @example
   * success
   */
  output?: string;
  /**
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
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * @example
   * 8
   */
  core?: number;
  /**
   * @example
   * 16
   */
  memory?: number;
  phoneCount?: string;
  resolution?: string;
  /**
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @example
   * 32
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      memory: 'Memory',
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
      memory: 'number',
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
  errorCode?: string;
  errorMsg?: string;
  failedChildCount?: number;
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  finishTime?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  level?: number;
  operator?: string;
  param?: string;
  parentTaskId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * acp-25nt4kk9whhok****
   */
  resourceId?: string;
  result?: string;
  runningChildCount?: number;
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  successChildCount?: number;
  /**
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @example
   * StartInstance
   */
  taskType?: string;
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
  detachedInstanceIds?: string[];
  /**
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
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
   * @example
   * 2023-03-05T10:29:22Z
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
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
  ruleType?: string;
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
  customProxy?: string;
  hostAddr?: string;
  netRedirect?: string;
  port?: string;
  proxyPassword?: string;
  proxyType?: string;
  proxyUserName?: string;
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
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * 2024-06-04 10:28:54
   */
  gmtCreate?: string;
  /**
   * @example
   * download
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  lockResolution?: string;
  netRedirectPolicy?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy;
  /**
   * @example
   * pg-9q6o8qpiy8opkj****
   */
  policyGroupId?: string;
  policyGroupName?: string;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
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
  customProxy?: string;
  hostAddr?: string;
  netRedirect?: string;
  port?: string;
  proxyPassword?: string;
  proxyType?: string;
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

export class DataImageRegionDistributeMapValue extends $dara.Model {
  /**
   * @example
   * AVAILABLE
   */
  distributeStatus?: string;
  /**
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
  instanceIds?: string[];
  /**
   * @remarks
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
  data?: AttachKeyPairResponseBodyData;
  /**
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
  androidInstanceIds?: string[];
  /**
   * @example
   * test
   */
  authorizeUserId?: string;
  /**
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
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  backupAll?: boolean;
  backupFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  backupFilePath?: string;
  description?: string;
  sourceAppList?: string[];
  sourceFilePathList?: string[];
  /**
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
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
  count?: number;
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  data?: BackupFileResponseBodyData[];
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
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
   * @example
   * user
   */
  endUserId?: string;
  /**
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  instanceIds?: string[];
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
  instanceConnectionModels?: BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels[];
  /**
   * @remarks
   * Id of the request
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

export class CheckResourceStockRequest extends $dara.Model {
  /**
   * @example
   * acp.basic.small
   */
  acpSpecId?: string;
  amount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  gpuAcceleration?: boolean;
  /**
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
   * @example
   * 805D8FB6-512A-531C-9E4D-2A807D3C****
   */
  requestId?: string;
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
  amount?: number;
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * false
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
   * PostPaid
   */
  chargeType?: string;
  clientToken?: string;
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  instanceGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  keyPairId?: string;
  /**
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
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
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  /**
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
      gpuAcceleration: 'GpuAcceleration',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      keyPairId: 'KeyPairId',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
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
      gpuAcceleration: 'boolean',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      keyPairId: 'string',
      numberOfInstances: 'number',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
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

export class CreateAndroidInstanceGroupResponseBody extends $dara.Model {
  instanceGroupIds?: string[];
  instanceGroupInfos?: CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos[];
  /**
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
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
  appName?: string;
  bizRegionId?: string;
  description?: string;
  /**
   * @example
   * testApp.apk
   */
  fileName?: string;
  filePath?: string;
  /**
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
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
   * @example
   * 1234
   */
  appId?: number;
  /**
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

export class CreateCustomImageRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @example
   * create for cc5g group auth rules test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom image name
   */
  imageName?: string;
  /**
   * @remarks
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
  imageId?: string;
  /**
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
  data?: CreateKeyPairResponseBodyData;
  /**
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
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  lockResolution?: string;
  netRedirectPolicy?: CreatePolicyGroupRequestNetRedirectPolicy;
  policyGroupName?: string;
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
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
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
      netRedirectPolicy: CreatePolicyGroupRequestNetRedirectPolicy,
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

export class CreatePolicyGroupShrinkRequest extends $dara.Model {
  /**
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  lockResolution?: string;
  netRedirectPolicyShrink?: string;
  policyGroupName?: string;
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
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicyShrink: 'NetRedirectPolicy',
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

export class CreatePolicyGroupResponseBody extends $dara.Model {
  /**
   * @example
   * pg-exbuu6yrpvb******
   */
  policyGroupId?: string;
  /**
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
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @example
   * cloudphone-saved-bucket-cn-shanghai-default
   */
  ossBucketName?: string;
  /**
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
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
  requestId?: string;
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

export class DeleteImagesRequest extends $dara.Model {
  /**
   * @remarks
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
  data?: DeleteImagesResponseBodyData;
  /**
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
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  instanceGroupIds?: string[];
  instanceGroupName?: string;
  /**
   * @example
   * kp-5htf0ymsrnb7q****
   */
  keyPairId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @example
   * pg-1b77w6xrqfubi****
   */
  policyGroupId?: string;
  /**
   * @example
   * standard
   */
  saleMode?: string;
  /**
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
  instanceGroupModel?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
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
  androidInstanceIds?: string[];
  /**
   * @example
   * name
   */
  androidInstanceName?: string;
  bizRegionId?: string;
  chargeType?: string;
  /**
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  instanceGroupIds?: string[];
  instanceGroupName?: string;
  /**
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
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
  instanceModel?: DescribeAndroidInstancesResponseBodyInstanceModel[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****
   */
  nextToken?: string;
  /**
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
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
  appIdList?: string[];
  appName?: string;
  bizRegionId?: string;
  /**
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  MD5?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
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
  data?: DescribeAppsResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
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
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceName?: string;
  backupAll?: boolean;
  /**
   * @example
   * bf-dxrh5jrv0zpb8****
   */
  backupFileId?: string;
  backupFileName?: string;
  description?: string;
  /**
   * @example
   * 2024-05-20 10:00:00
   */
  endTime?: string;
  /**
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @example
   * ag-fxdx91jsfyiy3****
   */
  instanceGroupId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 2024-05-23 10:00:00
   */
  startTime?: string;
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
  data?: DescribeBackupFilesResponseBodyData[];
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
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

export class DescribeImageListRequest extends $dara.Model {
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  imageName?: string;
  imagePackageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @example
   * 20
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
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
  data?: DescribeImageListResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 620740FF-492F-5956-B1BA-361E966C0269
   */
  requestId?: string;
  /**
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
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
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
  data?: DescribeInvocationsResponseBodyData[];
  /**
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  /**
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
  keyPairIds?: string[];
  /**
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
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
  data?: DescribeKeyPairsResponseBodyData[];
  /**
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @example
   * 565FB06A-AE04-5AD0-8A32-5BA92CA5****
   */
  requestId?: string;
  /**
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
  acceptLanguage?: string;
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
  regionModels?: DescribeRegionsResponseBodyRegionModels[];
  /**
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
  bizRegionId?: string;
  matrixSpec?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  saleMode?: string;
  specIds?: string[];
  /**
   * @example
   * Available
   */
  specStatus?: string;
  /**
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
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
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
  instanceId?: string;
  instanceName?: string;
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  level?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  param?: string;
  parentTaskId?: string;
  resourceIds?: string[];
  taskIds?: string[];
  /**
   * @example
   * Processing
   */
  taskStatus?: string;
  taskStatuses?: string[];
  /**
   * @example
   * StartInstance
   */
  taskType?: string;
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
  data?: DescribeTasksResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  requestId?: string;
  /**
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
  instanceIds?: string[];
  /**
   * @remarks
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
  data?: DetachKeyPairResponseBodyData;
  /**
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

export class DistributeImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  distributeRegionList?: string[];
  /**
   * @remarks
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
  androidInstanceIds?: string[];
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
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
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
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

export class FetchFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data/a.txt
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
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
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: FetchFileResponseBodyData[];
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
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

export class ImportKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
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
  data?: ImportKeyPairResponseBodyData;
  /**
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
  appIdList?: string[];
  instanceGroupIdList?: string[];
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
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  policyGroupIds?: string[];
  policyGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
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
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  /**
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  /**
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
   * @example
   * acp-8v5bjld0r7tkl****
   */
  androidInstanceId?: string;
  /**
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
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  /**
   * @example
   * newName
   */
  newInstanceGroupName?: string;
  /**
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
   * @example
   * 1234
   */
  appId?: number;
  appName?: string;
  description?: string;
  /**
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

export class ModifyKeyPairNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
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
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  lockResolution?: string;
  netRedirectPolicy?: ModifyPolicyGroupRequestNetRedirectPolicy;
  /**
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
  policyGroupName?: string;
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
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  lockResolution?: string;
  netRedirectPolicyShrink?: string;
  /**
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
  policyGroupName?: string;
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
   * @example
   * 1234
   */
  appId?: number;
  instanceIdList?: string[];
  /**
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
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
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
  androidInstanceIds?: string[];
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
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
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  backupAll?: boolean;
  /**
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  backupFilePath?: string;
  /**
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
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
  count?: number;
  /**
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  data?: RecoveryFileResponseBodyData[];
  /**
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  requestId?: string;
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
   * @example
   * true
   */
  autoPay?: boolean;
  instanceGroupIds?: string[];
  /**
   * @example
   * 6
   */
  period?: number;
  /**
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
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
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

export class ResetAndroidInstancesInGroupRequest extends $dara.Model {
  androidInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
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
   * @example
   * ls
   */
  commandContent?: string;
  contentEncoding?: string;
  instanceIds?: string[];
  /**
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
   * @example
   * t-gov2ujrk32v4****
   */
  invokeId?: string;
  /**
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
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
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

export class SendFileResponseBody extends $dara.Model {
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: SendFileResponseBodyData[];
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
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

export class StartAndroidInstanceRequest extends $dara.Model {
  androidInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
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
  androidInstanceIds?: string[];
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
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
  appIdList?: string[];
  instanceGroupIdList?: string[];
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
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
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
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
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
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * 10
   */
  increaseNumberOfInstance?: number;
  /**
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
  instanceIds?: string;
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
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
   * 绑定密钥对
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
   * 绑定密钥对
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * 为用户授权/解授权安卓实例
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
   * 为用户授权/解授权安卓实例
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstance(request: AuthorizeAndroidInstanceRequest): Promise<AuthorizeAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 数据备份
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
   * 数据备份
   * 
   * @param request - BackupFileRequest
   * @returns BackupFileResponse
   */
  async backupFile(request: BackupFileRequest): Promise<BackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * 批量获取ticket
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
   * 批量获取ticket
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicket(request: BatchGetAcpConnectionTicketRequest): Promise<BatchGetAcpConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetAcpConnectionTicketWithOptions(request, runtime);
  }

  /**
   * 检查资源库存
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
   * 检查资源库存
   * 
   * @param request - CheckResourceStockRequest
   * @returns CheckResourceStockResponse
   */
  async checkResourceStock(request: CheckResourceStockRequest): Promise<CheckResourceStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * 创建安卓实例组
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
   * 创建安卓实例组
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroup(request: CreateAndroidInstanceGroupRequest): Promise<CreateAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
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
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建自定义镜像
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
   * 创建自定义镜像
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * 创建密钥对
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
   * 创建密钥对
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * 创建策略
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
   * 创建策略
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * 创建云手机截图接口
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
   * 创建云手机截图接口
   * 
   * @param request - CreateScreenshotRequest
   * @returns CreateScreenshotResponse
   */
  async createScreenshot(request: CreateScreenshotRequest): Promise<CreateScreenshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScreenshotWithOptions(request, runtime);
  }

  /**
   * 删除安卓实例组
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
   * 删除安卓实例组
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroup(request: DeleteAndroidInstanceGroupRequest): Promise<DeleteAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 删除app
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
   * 删除app
   * 
   * @param request - DeleteAppsRequest
   * @returns DeleteAppsResponse
   */
  async deleteApps(request: DeleteAppsRequest): Promise<DeleteAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppsWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteImagesRequest
   * @returns DeleteImagesResponse
   */
  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * 删除密钥对
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
   * 删除密钥对
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * 删除策略
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
   * 删除策略
   * 
   * @param request - DeletePolicyGroupRequest
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * 查询实例组
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
   * 查询实例组
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: DescribeAndroidInstanceGroupsRequest): Promise<DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * 查询安卓的实例列表
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
   * 查询安卓的实例列表
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstances(request: DescribeAndroidInstancesRequest): Promise<DescribeAndroidInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstancesWithOptions(request, runtime);
  }

  /**
   * 查询app
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
   * 查询app
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * 查询备份文件列表
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
   * 查询备份文件列表
   * 
   * @param request - DescribeBackupFilesRequest
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * 查询镜像列表
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
   * 查询镜像列表
   * 
   * @param request - DescribeImageListRequest
   * @returns DescribeImageListResponse
   */
  async describeImageList(request: DescribeImageListRequest): Promise<DescribeImageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageListWithOptions(request, runtime);
  }

  /**
   * 查询命令结果
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
   * 查询命令结果
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * 查询密钥对
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
   * 查询密钥对
   * 
   * @param request - DescribeKeyPairsRequest
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * 查询地域
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
   * 查询地域
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 查询规格
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
   * 查询规格
   * 
   * @param request - DescribeSpecRequest
   * @returns DescribeSpecResponse
   */
  async describeSpec(request: DescribeSpecRequest): Promise<DescribeSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * 查询异步任务
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
   * 查询异步任务
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * 解绑密钥对
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
   * 解绑密钥对
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * 自定义镜像分发
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
   * 自定义镜像分发
   * 
   * @param request - DistributeImageRequest
   * @returns DistributeImageResponse
   */
  async distributeImage(request: DistributeImageRequest): Promise<DistributeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.distributeImageWithOptions(request, runtime);
  }

  /**
   * 实例组缩容
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
   * 实例组缩容
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroup(request: DowngradeAndroidInstanceGroupRequest): Promise<DowngradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 云手机拉取文件到OSS
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
   * 云手机拉取文件到OSS
   * 
   * @param request - FetchFileRequest
   * @returns FetchFileResponse
   */
  async fetchFile(request: FetchFileRequest): Promise<FetchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * 导入秘钥
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
   * 导入秘钥
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * 安装app到实例组
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
   * 安装app到实例组
   * 
   * @param request - InstallAppRequest
   * @returns InstallAppResponse
   */
  async installApp(request: InstallAppRequest): Promise<InstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * 查询Policy列表
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
   * 查询Policy列表
   * 
   * @param request - ListPolicyGroupsRequest
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroups(request: ListPolicyGroupsRequest): Promise<ListPolicyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyGroupsWithOptions(request, runtime);
  }

  /**
   * 修改安卓实例信息
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
   * 修改安卓实例信息
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstance(request: ModifyAndroidInstanceRequest): Promise<ModifyAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 修改安卓实例组
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
   * 修改安卓实例组
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroup(request: ModifyAndroidInstanceGroupRequest): Promise<ModifyAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 修改app
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
   * 修改app
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 修改密钥对名称
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
   * 修改密钥对名称
   * 
   * @param request - ModifyKeyPairNameRequest
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairName(request: ModifyKeyPairNameRequest): Promise<ModifyKeyPairNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyKeyPairNameWithOptions(request, runtime);
  }

  /**
   * 修改policy
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
   * 修改policy
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * 操作App
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
   * 操作App
   * 
   * @param request - OperateAppRequest
   * @returns OperateAppResponse
   */
  async operateApp(request: OperateAppRequest): Promise<OperateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppWithOptions(request, runtime);
  }

  /**
   * 重启安卓实例
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
   * 重启安卓实例
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroup(request: RebootAndroidInstancesInGroupRequest): Promise<RebootAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * 数据恢复
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
   * 数据恢复
   * 
   * @param request - RecoveryFileRequest
   * @returns RecoveryFileResponse
   */
  async recoveryFile(request: RecoveryFileRequest): Promise<RecoveryFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoveryFileWithOptions(request, runtime);
  }

  /**
   * 续费安卓实例组
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
   * 续费安卓实例组
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: RenewAndroidInstanceGroupsRequest): Promise<RenewAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * 重置安卓实例
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
   * 重置安卓实例
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: ResetAndroidInstancesInGroupRequest): Promise<ResetAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * 通过eds agent通道下发命令
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
   * 通过eds agent通道下发命令
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * 推送文件到云手机
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
   * 推送文件到云手机
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * 实例开机
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
   * 实例开机
   * 
   * @param request - StartAndroidInstanceRequest
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstance(request: StartAndroidInstanceRequest): Promise<StartAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 实例关机
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
   * 实例关机
   * 
   * @param request - StopAndroidInstanceRequest
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstance(request: StopAndroidInstanceRequest): Promise<StopAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 卸载app
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
   * 卸载app
   * 
   * @param request - UninstallAppRequest
   * @returns UninstallAppResponse
   */
  async uninstallApp(request: UninstallAppRequest): Promise<UninstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * 修改自定义镜像名称
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
   * 修改自定义镜像名称
   * 
   * @param request - UpdateCustomImageNameRequest
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageName(request: UpdateCustomImageNameRequest): Promise<UpdateCustomImageNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomImageNameWithOptions(request, runtime);
  }

  /**
   * 实例组变更镜像
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
   * 实例组变更镜像
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: UpdateInstanceGroupImageRequest): Promise<UpdateInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * 安卓实例组扩容
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
   * 安卓实例组扩容
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: UpgradeAndroidInstanceGroupRequest): Promise<UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
