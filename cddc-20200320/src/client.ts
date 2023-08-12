// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDedicatedHostRequest extends $tea.Model {
  autoRenew?: string;
  clientToken?: string;
  dedicatedHostGroupId?: string;
  hostClass?: string;
  hostStorage?: string;
  hostStorageType?: string;
  imageCategory?: string;
  osPassword?: string;
  ownerId?: number;
  payType?: string;
  period?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  usedTime?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hostClass: 'HostClass',
      hostStorage: 'HostStorage',
      hostStorageType: 'HostStorageType',
      imageCategory: 'ImageCategory',
      osPassword: 'OsPassword',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clientToken: 'string',
      dedicatedHostGroupId: 'string',
      hostClass: 'string',
      hostStorage: 'string',
      hostStorageType: 'string',
      imageCategory: 'string',
      osPassword: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      usedTime: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBody extends $tea.Model {
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostList;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicateHostList: 'DedicateHostList',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicateHostList: CreateDedicatedHostResponseBodyDedicateHostList,
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  accountType?: string;
  bastionInstanceId?: string;
  clientToken?: string;
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      bastionInstanceId: 'BastionInstanceId',
      clientToken: 'ClientToken',
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      bastionInstanceId: 'string',
      clientToken: 'string',
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountResponseBody extends $tea.Model {
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

export class CreateDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupRequest extends $tea.Model {
  allocationPolicy?: string;
  clientToken?: string;
  cpuAllocationRatio?: number;
  dedicatedHostGroupDesc?: string;
  diskAllocationRatio?: number;
  engine?: string;
  hostReplacePolicy?: string;
  memAllocationRatio?: number;
  openPermission?: number;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VPCId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationPolicy: 'AllocationPolicy',
      clientToken: 'ClientToken',
      cpuAllocationRatio: 'CpuAllocationRatio',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      diskAllocationRatio: 'DiskAllocationRatio',
      engine: 'Engine',
      hostReplacePolicy: 'HostReplacePolicy',
      memAllocationRatio: 'MemAllocationRatio',
      openPermission: 'OpenPermission',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationPolicy: 'string',
      clientToken: 'string',
      cpuAllocationRatio: 'number',
      dedicatedHostGroupDesc: 'string',
      diskAllocationRatio: 'number',
      engine: 'string',
      hostReplacePolicy: 'string',
      memAllocationRatio: 'number',
      openPermission: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponseBody extends $tea.Model {
  dedicatedHostGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseRequest extends $tea.Model {
  autoRenew?: string;
  clientToken?: string;
  dedicatedHostGroupDescription?: string;
  dedicatedHostGroupId?: string;
  ECSClassList?: CreateMyBaseRequestECSClassList[];
  ecsDeploymentSetId?: string;
  ecsHostName?: string;
  ecsInstanceName?: string;
  ecsUniqueSuffix?: string;
  engine?: string;
  imageId?: string;
  keyPairName?: string;
  osPassword?: string;
  ownerId?: number;
  passwordInherit?: string;
  payType?: string;
  period?: string;
  periodType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      dedicatedHostGroupDescription: 'DedicatedHostGroupDescription',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      ECSClassList: 'ECSClassList',
      ecsDeploymentSetId: 'EcsDeploymentSetId',
      ecsHostName: 'EcsHostName',
      ecsInstanceName: 'EcsInstanceName',
      ecsUniqueSuffix: 'EcsUniqueSuffix',
      engine: 'Engine',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      osPassword: 'OsPassword',
      ownerId: 'OwnerId',
      passwordInherit: 'PasswordInherit',
      payType: 'PayType',
      period: 'Period',
      periodType: 'PeriodType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clientToken: 'string',
      dedicatedHostGroupDescription: 'string',
      dedicatedHostGroupId: 'string',
      ECSClassList: { 'type': 'array', 'itemType': CreateMyBaseRequestECSClassList },
      ecsDeploymentSetId: 'string',
      ecsHostName: 'string',
      ecsInstanceName: 'string',
      ecsUniqueSuffix: 'string',
      engine: 'string',
      imageId: 'string',
      keyPairName: 'string',
      osPassword: 'string',
      ownerId: 'number',
      passwordInherit: 'string',
      payType: 'string',
      period: 'string',
      periodType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseShrinkRequest extends $tea.Model {
  autoRenew?: string;
  clientToken?: string;
  dedicatedHostGroupDescription?: string;
  dedicatedHostGroupId?: string;
  ECSClassListShrink?: string;
  ecsDeploymentSetId?: string;
  ecsHostName?: string;
  ecsInstanceName?: string;
  ecsUniqueSuffix?: string;
  engine?: string;
  imageId?: string;
  keyPairName?: string;
  osPassword?: string;
  ownerId?: number;
  passwordInherit?: string;
  payType?: string;
  period?: string;
  periodType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      dedicatedHostGroupDescription: 'DedicatedHostGroupDescription',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      ECSClassListShrink: 'ECSClassList',
      ecsDeploymentSetId: 'EcsDeploymentSetId',
      ecsHostName: 'EcsHostName',
      ecsInstanceName: 'EcsInstanceName',
      ecsUniqueSuffix: 'EcsUniqueSuffix',
      engine: 'Engine',
      imageId: 'ImageId',
      keyPairName: 'KeyPairName',
      osPassword: 'OsPassword',
      ownerId: 'OwnerId',
      passwordInherit: 'PasswordInherit',
      payType: 'PayType',
      period: 'Period',
      periodType: 'PeriodType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clientToken: 'string',
      dedicatedHostGroupDescription: 'string',
      dedicatedHostGroupId: 'string',
      ECSClassListShrink: 'string',
      ecsDeploymentSetId: 'string',
      ecsHostName: 'string',
      ecsInstanceName: 'string',
      ecsUniqueSuffix: 'string',
      engine: 'string',
      imageId: 'string',
      keyPairName: 'string',
      osPassword: 'string',
      ownerId: 'number',
      passwordInherit: 'string',
      payType: 'string',
      period: 'string',
      periodType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseResponseBody extends $tea.Model {
  orderList?: CreateMyBaseResponseBodyOrderList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderList: 'OrderList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: CreateMyBaseResponseBodyOrderList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMyBaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMyBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountRequest extends $tea.Model {
  accountName?: string;
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountResponseBody extends $tea.Model {
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

export class DeleteDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupRequest extends $tea.Model {
  dedicatedHostGroupId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupResponseBody extends $tea.Model {
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

export class DeleteDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeRequest extends $tea.Model {
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponseBody extends $tea.Model {
  accountName?: string;
  accountType?: string;
  allocationStatus?: string;
  autoRenew?: string;
  CPUAllocationRatio?: string;
  cpuUsed?: string;
  createdTime?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  diskAllocationRatio?: string;
  distributionTag?: string;
  ecsClassCode?: string;
  expiredTime?: string;
  hostCPU?: number;
  hostClass?: string;
  hostMem?: number;
  hostName?: string;
  hostStatus?: string;
  hostStorage?: number;
  hostType?: string;
  IPAddress?: string;
  imageCategory?: string;
  instanceNumber?: number;
  instanceNumberMaster?: number;
  instanceNumberROMaster?: number;
  instanceNumberROSlave?: number;
  instanceNumberSlave?: number;
  memAllocationRatio?: string;
  memoryUsed?: string;
  openPermission?: string;
  regionId?: string;
  requestId?: string;
  storageUsed?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      allocationStatus: 'AllocationStatus',
      autoRenew: 'AutoRenew',
      CPUAllocationRatio: 'CPUAllocationRatio',
      cpuUsed: 'CpuUsed',
      createdTime: 'CreatedTime',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      diskAllocationRatio: 'DiskAllocationRatio',
      distributionTag: 'DistributionTag',
      ecsClassCode: 'EcsClassCode',
      expiredTime: 'ExpiredTime',
      hostCPU: 'HostCPU',
      hostClass: 'HostClass',
      hostMem: 'HostMem',
      hostName: 'HostName',
      hostStatus: 'HostStatus',
      hostStorage: 'HostStorage',
      hostType: 'HostType',
      IPAddress: 'IPAddress',
      imageCategory: 'ImageCategory',
      instanceNumber: 'InstanceNumber',
      instanceNumberMaster: 'InstanceNumberMaster',
      instanceNumberROMaster: 'InstanceNumberROMaster',
      instanceNumberROSlave: 'InstanceNumberROSlave',
      instanceNumberSlave: 'InstanceNumberSlave',
      memAllocationRatio: 'MemAllocationRatio',
      memoryUsed: 'MemoryUsed',
      openPermission: 'OpenPermission',
      regionId: 'RegionId',
      requestId: 'RequestId',
      storageUsed: 'StorageUsed',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      allocationStatus: 'string',
      autoRenew: 'string',
      CPUAllocationRatio: 'string',
      cpuUsed: 'string',
      createdTime: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      diskAllocationRatio: 'string',
      distributionTag: 'string',
      ecsClassCode: 'string',
      expiredTime: 'string',
      hostCPU: 'number',
      hostClass: 'string',
      hostMem: 'number',
      hostName: 'string',
      hostStatus: 'string',
      hostStorage: 'number',
      hostType: 'string',
      IPAddress: 'string',
      imageCategory: 'string',
      instanceNumber: 'number',
      instanceNumberMaster: 'number',
      instanceNumberROMaster: 'number',
      instanceNumberROSlave: 'number',
      instanceNumberSlave: 'number',
      memAllocationRatio: 'string',
      memoryUsed: 'string',
      openPermission: 'string',
      regionId: 'string',
      requestId: 'string',
      storageUsed: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksRequest extends $tea.Model {
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  disks?: DescribeDedicatedHostDisksResponseBodyDisks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      disks: 'Disks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDedicatedHostDisksResponseBodyDisks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedHostDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedHostDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsRequest extends $tea.Model {
  dedicatedHostGroupId?: string;
  engine?: string;
  imageCategory?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      engine: 'Engine',
      imageCategory: 'ImageCategory',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      engine: 'string',
      imageCategory: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBody extends $tea.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedHostGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedHostGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsRequest extends $tea.Model {
  allocationStatus?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  hostStatus?: string;
  hostType?: string;
  orderId?: number;
  ownerId?: number;
  pageNumbers?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      hostStatus: 'HostStatus',
      hostType: 'HostType',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      pageNumbers: 'PageNumbers',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      hostStatus: 'string',
      hostType: 'string',
      orderId: 'number',
      ownerId: 'number',
      pageNumbers: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBody extends $tea.Model {
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  maxAutoScaleHostStorage?: number;
  pageNumbers?: number;
  pageSize?: number;
  requestId?: string;
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
      maxAutoScaleHostStorage: 'MaxAutoScaleHostStorage',
      pageNumbers: 'PageNumbers',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
      maxAutoScaleHostStorage: 'number',
      pageNumbers: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoRequest extends $tea.Model {
  dbType?: string;
  imageCategory?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  storageType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      imageCategory: 'ImageCategory',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      imageCategory: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBody extends $tea.Model {
  hostEcsLevelInfos?: DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostEcsLevelInfos: 'HostEcsLevelInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostEcsLevelInfos: { 'type': 'array', 'itemType': DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHostEcsLevelInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHostEcsLevelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellRequest extends $tea.Model {
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellResponseBody extends $tea.Model {
  loginUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginUrl: 'LoginUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHostWebShellResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHostWebShellResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeRequest extends $tea.Model {
  allocationStatus?: string;
  dedicatedHostId?: string;
  hostName?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      dedicatedHostId: 'DedicatedHostId',
      hostName: 'HostName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      dedicatedHostId: 'string',
      hostName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassRequest extends $tea.Model {
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  switchTime?: string;
  switchTimeMode?: string;
  targetClassCode?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetClassCode: 'TargetClassCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetClassCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedHostClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedHostClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeRequest extends $tea.Model {
  allocationPolicy?: string;
  cpuAllocationRatio?: number;
  dedicatedHostGroupDesc?: string;
  dedicatedHostGroupId?: string;
  diskAllocationRatio?: number;
  hostReplacePolicy?: string;
  memAllocationRatio?: number;
  openPermission?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationPolicy: 'AllocationPolicy',
      cpuAllocationRatio: 'CpuAllocationRatio',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      diskAllocationRatio: 'DiskAllocationRatio',
      hostReplacePolicy: 'HostReplacePolicy',
      memAllocationRatio: 'MemAllocationRatio',
      openPermission: 'OpenPermission',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationPolicy: 'string',
      cpuAllocationRatio: 'number',
      dedicatedHostGroupDesc: 'string',
      dedicatedHostGroupId: 'string',
      diskAllocationRatio: 'number',
      hostReplacePolicy: 'string',
      memAllocationRatio: 'number',
      openPermission: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedHostGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedHostGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordRequest extends $tea.Model {
  dedicatedHostId?: string;
  newPassword?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      newPassword: 'NewPassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      newPassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordResponseBody extends $tea.Model {
  dedicatedHostName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostName: 'DedicatedHostName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedHostPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedHostPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponseBody extends $tea.Model {
  hostInstanceConsoleInfos?: QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostInstanceConsoleInfos: 'HostInstanceConsoleInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostInstanceConsoleInfos: { 'type': 'array', 'itemType': QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHostBaseInfoByInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHostBaseInfoByInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoRequest extends $tea.Model {
  dedicatedHostId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBody extends $tea.Model {
  hostInstanceConsoleInfos?: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostInstanceConsoleInfos: 'HostInstanceConsoleInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostInstanceConsoleInfos: { 'type': 'array', 'itemType': QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHostInstanceConsoleInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHostInstanceConsoleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostRequest extends $tea.Model {
  dedicatedHostId?: string;
  failoverMode?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      failoverMode: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplaceDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReplaceDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostRequest extends $tea.Model {
  dedicatedHostId?: string;
  failoverMode?: string;
  forceStop?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
      forceStop: 'ForceStop',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      failoverMode: 'string',
      forceStop: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList extends $tea.Model {
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBodyDedicateHostList extends $tea.Model {
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList[];
  static names(): { [key: string]: string } {
    return {
      dedicateHostList: 'DedicateHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicateHostList: { 'type': 'array', 'itemType': CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseRequestECSClassList extends $tea.Model {
  dataDiskPerformanceLevel?: string;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  instanceType?: string;
  nodeCount?: number;
  sysDiskCapacity?: number;
  sysDiskType?: string;
  systemDiskPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskPerformanceLevel: 'dataDiskPerformanceLevel',
      diskCapacity: 'diskCapacity',
      diskCount: 'diskCount',
      diskType: 'diskType',
      instanceType: 'instanceType',
      nodeCount: 'nodeCount',
      sysDiskCapacity: 'sysDiskCapacity',
      sysDiskType: 'sysDiskType',
      systemDiskPerformanceLevel: 'systemDiskPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskPerformanceLevel: 'string',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      instanceType: 'string',
      nodeCount: 'number',
      sysDiskCapacity: 'number',
      sysDiskType: 'string',
      systemDiskPerformanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseResponseBodyOrderListOrderList extends $tea.Model {
  createTimestamp?: number;
  dedicatedHostGroupName?: string;
  ECSInstanceIds?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      dedicatedHostGroupName: 'DedicatedHostGroupName',
      ECSInstanceIds: 'ECSInstanceIds',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      dedicatedHostGroupName: 'string',
      ECSInstanceIds: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyBaseResponseBodyOrderList extends $tea.Model {
  orderList?: CreateMyBaseResponseBodyOrderListOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'OrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': CreateMyBaseResponseBodyOrderListOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponseBodyDisks extends $tea.Model {
  category?: string;
  DBInstanceId?: string;
  device?: string;
  diskId?: string;
  hasDBInstance?: boolean;
  maxIOPS?: number;
  maxThroughput?: number;
  performanceLevel?: string;
  size?: number;
  status?: string;
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      DBInstanceId: 'DBInstanceId',
      device: 'Device',
      diskId: 'DiskId',
      hasDBInstance: 'HasDBInstance',
      maxIOPS: 'MaxIOPS',
      maxThroughput: 'MaxThroughput',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      status: 'Status',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      DBInstanceId: 'string',
      device: 'string',
      diskId: 'string',
      hasDBInstance: 'boolean',
      maxIOPS: 'number',
      maxThroughput: 'number',
      performanceLevel: 'string',
      size: 'number',
      status: 'string',
      type: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $tea.Model {
  zoneIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $tea.Model {
  allocationPolicy?: string;
  bastionInstanceId?: string;
  category?: string;
  cpuAllocateRation?: number;
  cpuAllocatedAmount?: number;
  cpuAllocationRatio?: number;
  createTime?: string;
  dedicatedHostCountGroupByHostType?: { [key: string]: any };
  dedicatedHostGroupDesc?: string;
  dedicatedHostGroupId?: string;
  deployType?: string;
  diskAllocateRation?: number;
  diskAllocatedAmount?: number;
  diskAllocationRatio?: number;
  diskUsedAmount?: number;
  diskUtility?: number;
  engine?: string;
  hostNumber?: number;
  hostReplacePolicy?: string;
  instanceNumber?: number;
  memAllocateRation?: number;
  memAllocatedAmount?: number;
  memAllocationRatio?: number;
  memUsedAmount?: number;
  memUtility?: number;
  openPermission?: string;
  text?: string;
  VPCId?: string;
  zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
  static names(): { [key: string]: string } {
    return {
      allocationPolicy: 'AllocationPolicy',
      bastionInstanceId: 'BastionInstanceId',
      category: 'Category',
      cpuAllocateRation: 'CpuAllocateRation',
      cpuAllocatedAmount: 'CpuAllocatedAmount',
      cpuAllocationRatio: 'CpuAllocationRatio',
      createTime: 'CreateTime',
      dedicatedHostCountGroupByHostType: 'DedicatedHostCountGroupByHostType',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deployType: 'DeployType',
      diskAllocateRation: 'DiskAllocateRation',
      diskAllocatedAmount: 'DiskAllocatedAmount',
      diskAllocationRatio: 'DiskAllocationRatio',
      diskUsedAmount: 'DiskUsedAmount',
      diskUtility: 'DiskUtility',
      engine: 'Engine',
      hostNumber: 'HostNumber',
      hostReplacePolicy: 'HostReplacePolicy',
      instanceNumber: 'InstanceNumber',
      memAllocateRation: 'MemAllocateRation',
      memAllocatedAmount: 'MemAllocatedAmount',
      memAllocationRatio: 'MemAllocationRatio',
      memUsedAmount: 'MemUsedAmount',
      memUtility: 'MemUtility',
      openPermission: 'OpenPermission',
      text: 'Text',
      VPCId: 'VPCId',
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationPolicy: 'string',
      bastionInstanceId: 'string',
      category: 'string',
      cpuAllocateRation: 'number',
      cpuAllocatedAmount: 'number',
      cpuAllocationRatio: 'number',
      createTime: 'string',
      dedicatedHostCountGroupByHostType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dedicatedHostGroupDesc: 'string',
      dedicatedHostGroupId: 'string',
      deployType: 'string',
      diskAllocateRation: 'number',
      diskAllocatedAmount: 'number',
      diskAllocationRatio: 'number',
      diskUsedAmount: 'number',
      diskUtility: 'number',
      engine: 'string',
      hostNumber: 'number',
      hostReplacePolicy: 'string',
      instanceNumber: 'number',
      memAllocateRation: 'number',
      memAllocatedAmount: 'number',
      memAllocationRatio: 'number',
      memUsedAmount: 'number',
      memUtility: 'number',
      openPermission: 'string',
      text: 'string',
      VPCId: 'string',
      zoneIDList: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $tea.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $tea.Model {
  accountName?: string;
  accountType?: string;
  allocationStatus?: string;
  bastionInstanceId?: string;
  CPUAllocationRatio?: string;
  category?: string;
  chargeType?: string;
  cpuUsed?: string;
  createdTime?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  diskAllocationRatio?: string;
  diskInfo?: string;
  distributionSymbol?: string;
  distributionTag?: string;
  ecsClassCode?: string;
  ecsId?: string;
  endTime?: string;
  engine?: string;
  hostCPU?: string;
  hostClass?: string;
  hostMem?: string;
  hostName?: string;
  hostStatus?: string;
  hostStorage?: string;
  hostType?: string;
  IPAddress?: string;
  imageCategory?: string;
  instanceNumber?: string;
  memAllocationRatio?: string;
  memoryUsed?: string;
  mssqlSupportVersion?: string;
  openPermission?: string;
  storageUsed?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      allocationStatus: 'AllocationStatus',
      bastionInstanceId: 'BastionInstanceId',
      CPUAllocationRatio: 'CPUAllocationRatio',
      category: 'Category',
      chargeType: 'ChargeType',
      cpuUsed: 'CpuUsed',
      createdTime: 'CreatedTime',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      diskAllocationRatio: 'DiskAllocationRatio',
      diskInfo: 'DiskInfo',
      distributionSymbol: 'DistributionSymbol',
      distributionTag: 'DistributionTag',
      ecsClassCode: 'EcsClassCode',
      ecsId: 'EcsId',
      endTime: 'EndTime',
      engine: 'Engine',
      hostCPU: 'HostCPU',
      hostClass: 'HostClass',
      hostMem: 'HostMem',
      hostName: 'HostName',
      hostStatus: 'HostStatus',
      hostStorage: 'HostStorage',
      hostType: 'HostType',
      IPAddress: 'IPAddress',
      imageCategory: 'ImageCategory',
      instanceNumber: 'InstanceNumber',
      memAllocationRatio: 'MemAllocationRatio',
      memoryUsed: 'MemoryUsed',
      mssqlSupportVersion: 'MssqlSupportVersion',
      openPermission: 'OpenPermission',
      storageUsed: 'StorageUsed',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      allocationStatus: 'string',
      bastionInstanceId: 'string',
      CPUAllocationRatio: 'string',
      category: 'string',
      chargeType: 'string',
      cpuUsed: 'string',
      createdTime: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      diskAllocationRatio: 'string',
      diskInfo: 'string',
      distributionSymbol: 'string',
      distributionTag: 'string',
      ecsClassCode: 'string',
      ecsId: 'string',
      endTime: 'string',
      engine: 'string',
      hostCPU: 'string',
      hostClass: 'string',
      hostMem: 'string',
      hostName: 'string',
      hostStatus: 'string',
      hostStorage: 'string',
      hostType: 'string',
      IPAddress: 'string',
      imageCategory: 'string',
      instanceNumber: 'string',
      memAllocationRatio: 'string',
      memoryUsed: 'string',
      mssqlSupportVersion: 'string',
      openPermission: 'string',
      storageUsed: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $tea.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems extends $tea.Model {
  cloudStorageBandwidth?: number;
  cpu?: number;
  cpuFrequency?: string;
  cpuVersion?: string;
  description?: string;
  ecsClass?: string;
  ecsClassCode?: string;
  isCloudDisk?: number;
  localStorage?: string;
  memory?: number;
  netBandWidth?: number;
  netPackage?: number;
  rdsClassCode?: string;
  storageIops?: number;
  static names(): { [key: string]: string } {
    return {
      cloudStorageBandwidth: 'CloudStorageBandwidth',
      cpu: 'Cpu',
      cpuFrequency: 'CpuFrequency',
      cpuVersion: 'CpuVersion',
      description: 'Description',
      ecsClass: 'EcsClass',
      ecsClassCode: 'EcsClassCode',
      isCloudDisk: 'IsCloudDisk',
      localStorage: 'LocalStorage',
      memory: 'Memory',
      netBandWidth: 'NetBandWidth',
      netPackage: 'NetPackage',
      rdsClassCode: 'RdsClassCode',
      storageIops: 'StorageIops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudStorageBandwidth: 'number',
      cpu: 'number',
      cpuFrequency: 'string',
      cpuVersion: 'string',
      description: 'string',
      ecsClass: 'string',
      ecsClassCode: 'string',
      isCloudDisk: 'number',
      localStorage: 'string',
      memory: 'number',
      netBandWidth: 'number',
      netPackage: 'number',
      rdsClassCode: 'string',
      storageIops: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos extends $tea.Model {
  cddcHostType?: string;
  items?: DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems[];
  static names(): { [key: string]: string } {
    return {
      cddcHostType: 'CddcHostType',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cddcHostType: 'string',
      items: { 'type': 'array', 'itemType': DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRDSRegion extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  RDSRegion?: DescribeRegionsResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRDSRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos extends $tea.Model {
  clusterName?: string;
  engine?: string;
  engineVersion?: string;
  expiredTime?: string;
  hostName?: string;
  ip?: string;
  port?: string;
  role?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      ip: 'Ip',
      port: 'Port',
      role: 'Role',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      engine: 'string',
      engineVersion: 'string',
      expiredTime: 'string',
      hostName: 'string',
      ip: 'string',
      port: 'string',
      role: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo extends $tea.Model {
  cpuRatio?: number;
  diskCurr?: number;
  memRatio?: number;
  perfIdbPio?: number;
  static names(): { [key: string]: string } {
    return {
      cpuRatio: 'CpuRatio',
      diskCurr: 'DiskCurr',
      memRatio: 'MemRatio',
      perfIdbPio: 'PerfIdbPio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuRatio: 'number',
      diskCurr: 'number',
      memRatio: 'number',
      perfIdbPio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos extends $tea.Model {
  cpuCores?: number;
  cpuIncreaseRatioValue?: number;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  diskSize?: number;
  engine?: string;
  engineVersion?: string;
  ip?: string;
  levelName?: string;
  maxConnIncreaseRatioValue?: number;
  memSize?: number;
  memoryIncreaseRatioValue?: number;
  perfInfo?: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo;
  port?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'CpuCores',
      cpuIncreaseRatioValue: 'CpuIncreaseRatioValue',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      diskSize: 'DiskSize',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ip: 'Ip',
      levelName: 'LevelName',
      maxConnIncreaseRatioValue: 'MaxConnIncreaseRatioValue',
      memSize: 'MemSize',
      memoryIncreaseRatioValue: 'MemoryIncreaseRatioValue',
      perfInfo: 'PerfInfo',
      port: 'Port',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      cpuIncreaseRatioValue: 'number',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      diskSize: 'number',
      engine: 'string',
      engineVersion: 'string',
      ip: 'string',
      levelName: 'string',
      maxConnIncreaseRatioValue: 'number',
      memSize: 'number',
      memoryIncreaseRatioValue: 'number',
      perfInfo: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo,
      port: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cddc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createDedicatedHostWithOptions(request: CreateDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.hostClass)) {
      query["HostClass"] = request.hostClass;
    }

    if (!Util.isUnset(request.hostStorage)) {
      query["HostStorage"] = request.hostStorage;
    }

    if (!Util.isUnset(request.hostStorageType)) {
      query["HostStorageType"] = request.hostStorageType;
    }

    if (!Util.isUnset(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!Util.isUnset(request.osPassword)) {
      query["OsPassword"] = request.osPassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
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

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedHost",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedHostResponse>(await this.callApi(params, req, runtime), new CreateDedicatedHostResponse({}));
  }

  async createDedicatedHost(request: CreateDedicatedHostRequest): Promise<CreateDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostWithOptions(request, runtime);
  }

  async createDedicatedHostAccountWithOptions(request: CreateDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bastionInstanceId)) {
      query["BastionInstanceId"] = request.bastionInstanceId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedHostAccount",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedHostAccountResponse>(await this.callApi(params, req, runtime), new CreateDedicatedHostAccountResponse({}));
  }

  async createDedicatedHostAccount(request: CreateDedicatedHostAccountRequest): Promise<CreateDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostAccountWithOptions(request, runtime);
  }

  async createDedicatedHostGroupWithOptions(request: CreateDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationPolicy)) {
      query["AllocationPolicy"] = request.allocationPolicy;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cpuAllocationRatio)) {
      query["CpuAllocationRatio"] = request.cpuAllocationRatio;
    }

    if (!Util.isUnset(request.dedicatedHostGroupDesc)) {
      query["DedicatedHostGroupDesc"] = request.dedicatedHostGroupDesc;
    }

    if (!Util.isUnset(request.diskAllocationRatio)) {
      query["DiskAllocationRatio"] = request.diskAllocationRatio;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.hostReplacePolicy)) {
      query["HostReplacePolicy"] = request.hostReplacePolicy;
    }

    if (!Util.isUnset(request.memAllocationRatio)) {
      query["MemAllocationRatio"] = request.memAllocationRatio;
    }

    if (!Util.isUnset(request.openPermission)) {
      query["OpenPermission"] = request.openPermission;
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

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedHostGroup",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedHostGroupResponse>(await this.callApi(params, req, runtime), new CreateDedicatedHostGroupResponse({}));
  }

  async createDedicatedHostGroup(request: CreateDedicatedHostGroupRequest): Promise<CreateDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostGroupWithOptions(request, runtime);
  }

  async createMyBaseWithOptions(tmpReq: CreateMyBaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateMyBaseResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateMyBaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ECSClassList)) {
      request.ECSClassListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ECSClassList, "ECSClassList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedHostGroupDescription)) {
      query["DedicatedHostGroupDescription"] = request.dedicatedHostGroupDescription;
    }

    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.ECSClassListShrink)) {
      query["ECSClassList"] = request.ECSClassListShrink;
    }

    if (!Util.isUnset(request.ecsDeploymentSetId)) {
      query["EcsDeploymentSetId"] = request.ecsDeploymentSetId;
    }

    if (!Util.isUnset(request.ecsHostName)) {
      query["EcsHostName"] = request.ecsHostName;
    }

    if (!Util.isUnset(request.ecsInstanceName)) {
      query["EcsInstanceName"] = request.ecsInstanceName;
    }

    if (!Util.isUnset(request.ecsUniqueSuffix)) {
      query["EcsUniqueSuffix"] = request.ecsUniqueSuffix;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.osPassword)) {
      query["OsPassword"] = request.osPassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
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

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMyBase",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMyBaseResponse>(await this.callApi(params, req, runtime), new CreateMyBaseResponse({}));
  }

  async createMyBase(request: CreateMyBaseRequest): Promise<CreateMyBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMyBaseWithOptions(request, runtime);
  }

  async deleteDedicatedHostAccountWithOptions(request: DeleteDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDedicatedHostAccount",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDedicatedHostAccountResponse>(await this.callApi(params, req, runtime), new DeleteDedicatedHostAccountResponse({}));
  }

  async deleteDedicatedHostAccount(request: DeleteDedicatedHostAccountRequest): Promise<DeleteDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostAccountWithOptions(request, runtime);
  }

  async deleteDedicatedHostGroupWithOptions(request: DeleteDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDedicatedHostGroup",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDedicatedHostGroupResponse>(await this.callApi(params, req, runtime), new DeleteDedicatedHostGroupResponse({}));
  }

  async deleteDedicatedHostGroup(request: DeleteDedicatedHostGroupRequest): Promise<DeleteDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostGroupWithOptions(request, runtime);
  }

  async describeDedicatedHostAttributeWithOptions(request: DescribeDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedHostAttribute",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedHostAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedHostAttributeResponse({}));
  }

  async describeDedicatedHostAttribute(request: DescribeDedicatedHostAttributeRequest): Promise<DescribeDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostAttributeWithOptions(request, runtime);
  }

  async describeDedicatedHostDisksWithOptions(request: DescribeDedicatedHostDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedHostDisks",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedHostDisksResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedHostDisksResponse({}));
  }

  async describeDedicatedHostDisks(request: DescribeDedicatedHostDisksRequest): Promise<DescribeDedicatedHostDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostDisksWithOptions(request, runtime);
  }

  async describeDedicatedHostGroupsWithOptions(request: DescribeDedicatedHostGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedHostGroups",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedHostGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedHostGroupsResponse({}));
  }

  async describeDedicatedHostGroups(request: DescribeDedicatedHostGroupsRequest): Promise<DescribeDedicatedHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostGroupsWithOptions(request, runtime);
  }

  async describeDedicatedHostsWithOptions(request: DescribeDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationStatus)) {
      query["AllocationStatus"] = request.allocationStatus;
    }

    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.hostStatus)) {
      query["HostStatus"] = request.hostStatus;
    }

    if (!Util.isUnset(request.hostType)) {
      query["HostType"] = request.hostType;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumbers)) {
      query["PageNumbers"] = request.pageNumbers;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedHosts",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedHostsResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedHostsResponse({}));
  }

  async describeDedicatedHosts(request: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsWithOptions(request, runtime);
  }

  async describeHostEcsLevelInfoWithOptions(request: DescribeHostEcsLevelInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostEcsLevelInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
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

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHostEcsLevelInfo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHostEcsLevelInfoResponse>(await this.callApi(params, req, runtime), new DescribeHostEcsLevelInfoResponse({}));
  }

  async describeHostEcsLevelInfo(request: DescribeHostEcsLevelInfoRequest): Promise<DescribeHostEcsLevelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostEcsLevelInfoWithOptions(request, runtime);
  }

  async describeHostWebShellWithOptions(request: DescribeHostWebShellRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostWebShellResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHostWebShell",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHostWebShellResponse>(await this.callApi(params, req, runtime), new DescribeHostWebShellResponse({}));
  }

  async describeHostWebShell(request: DescribeHostWebShellRequest): Promise<DescribeHostWebShellResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostWebShellWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
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

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyDedicatedHostAccountWithOptions(request: ModifyDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedHostAccount",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedHostAccountResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedHostAccountResponse({}));
  }

  async modifyDedicatedHostAccount(request: ModifyDedicatedHostAccountRequest): Promise<ModifyDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAccountWithOptions(request, runtime);
  }

  async modifyDedicatedHostAttributeWithOptions(request: ModifyDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationStatus)) {
      query["AllocationStatus"] = request.allocationStatus;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedHostAttribute",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedHostAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedHostAttributeResponse({}));
  }

  async modifyDedicatedHostAttribute(request: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAttributeWithOptions(request, runtime);
  }

  async modifyDedicatedHostClassWithOptions(request: ModifyDedicatedHostClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!Util.isUnset(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!Util.isUnset(request.targetClassCode)) {
      query["TargetClassCode"] = request.targetClassCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedHostClass",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedHostClassResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedHostClassResponse({}));
  }

  async modifyDedicatedHostClass(request: ModifyDedicatedHostClassRequest): Promise<ModifyDedicatedHostClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostClassWithOptions(request, runtime);
  }

  async modifyDedicatedHostGroupAttributeWithOptions(request: ModifyDedicatedHostGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationPolicy)) {
      query["AllocationPolicy"] = request.allocationPolicy;
    }

    if (!Util.isUnset(request.cpuAllocationRatio)) {
      query["CpuAllocationRatio"] = request.cpuAllocationRatio;
    }

    if (!Util.isUnset(request.dedicatedHostGroupDesc)) {
      query["DedicatedHostGroupDesc"] = request.dedicatedHostGroupDesc;
    }

    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!Util.isUnset(request.diskAllocationRatio)) {
      query["DiskAllocationRatio"] = request.diskAllocationRatio;
    }

    if (!Util.isUnset(request.hostReplacePolicy)) {
      query["HostReplacePolicy"] = request.hostReplacePolicy;
    }

    if (!Util.isUnset(request.memAllocationRatio)) {
      query["MemAllocationRatio"] = request.memAllocationRatio;
    }

    if (!Util.isUnset(request.openPermission)) {
      query["OpenPermission"] = request.openPermission;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedHostGroupAttribute",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedHostGroupAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedHostGroupAttributeResponse({}));
  }

  async modifyDedicatedHostGroupAttribute(request: ModifyDedicatedHostGroupAttributeRequest): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostGroupAttributeWithOptions(request, runtime);
  }

  async modifyDedicatedHostPasswordWithOptions(request: ModifyDedicatedHostPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedHostPassword",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedHostPasswordResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedHostPasswordResponse({}));
  }

  async modifyDedicatedHostPassword(request: ModifyDedicatedHostPasswordRequest): Promise<ModifyDedicatedHostPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostPasswordWithOptions(request, runtime);
  }

  async queryHostBaseInfoByInstanceWithOptions(request: QueryHostBaseInfoByInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryHostBaseInfoByInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHostBaseInfoByInstance",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHostBaseInfoByInstanceResponse>(await this.callApi(params, req, runtime), new QueryHostBaseInfoByInstanceResponse({}));
  }

  async queryHostBaseInfoByInstance(request: QueryHostBaseInfoByInstanceRequest): Promise<QueryHostBaseInfoByInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHostBaseInfoByInstanceWithOptions(request, runtime);
  }

  async queryHostInstanceConsoleInfoWithOptions(request: QueryHostInstanceConsoleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryHostInstanceConsoleInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHostInstanceConsoleInfo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHostInstanceConsoleInfoResponse>(await this.callApi(params, req, runtime), new QueryHostInstanceConsoleInfoResponse({}));
  }

  async queryHostInstanceConsoleInfo(request: QueryHostInstanceConsoleInfoRequest): Promise<QueryHostInstanceConsoleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHostInstanceConsoleInfoWithOptions(request, runtime);
  }

  async replaceDedicatedHostWithOptions(request: ReplaceDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceDedicatedHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.failoverMode)) {
      query["FailoverMode"] = request.failoverMode;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceDedicatedHost",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceDedicatedHostResponse>(await this.callApi(params, req, runtime), new ReplaceDedicatedHostResponse({}));
  }

  async replaceDedicatedHost(request: ReplaceDedicatedHostRequest): Promise<ReplaceDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceDedicatedHostWithOptions(request, runtime);
  }

  async restartDedicatedHostWithOptions(request: RestartDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<RestartDedicatedHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.failoverMode)) {
      query["FailoverMode"] = request.failoverMode;
    }

    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDedicatedHost",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDedicatedHostResponse>(await this.callApi(params, req, runtime), new RestartDedicatedHostResponse({}));
  }

  async restartDedicatedHost(request: RestartDedicatedHostRequest): Promise<RestartDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDedicatedHostWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
