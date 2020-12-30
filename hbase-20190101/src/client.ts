// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserHdfsInfoRequest extends $tea.Model {
  clusterId?: string;
  extInfo?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      extInfo: 'ExtInfo',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      extInfo: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserHdfsInfoResponseBody extends $tea.Model {
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

export class AddUserHdfsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUserHdfsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUserHdfsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressRequest extends $tea.Model {
  clusterId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressResponseBody extends $tea.Model {
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

export class AllocatePublicNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocatePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocatePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionRequest extends $tea.Model {
  clusterId?: string;
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBody extends $tea.Model {
  components?: CheckComponentsVersionResponseBodyComponents;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: CheckComponentsVersionResponseBodyComponents,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckComponentsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckComponentsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBackupRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBackupResponseBody extends $tea.Model {
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

export class CloseBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequest extends $tea.Model {
  clusterId?: string;
  pricingCycle?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pricingCycle: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
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

export class CreateBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  clusterName?: string;
  vpcId?: string;
  vSwitchId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  diskType?: string;
  diskSize?: number;
  nodeCount?: number;
  payType?: string;
  engine?: string;
  securityIPList?: string;
  engineVersion?: string;
  coldStorageSize?: number;
  periodUnit?: string;
  period?: number;
  autoRenewPeriod?: number;
  clientToken?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      engine: 'Engine',
      securityIPList: 'SecurityIPList',
      engineVersion: 'EngineVersion',
      coldStorageSize: 'ColdStorageSize',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      clusterName: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      diskType: 'string',
      diskSize: 'number',
      nodeCount: 'number',
      payType: 'string',
      engine: 'string',
      securityIPList: 'string',
      engineVersion: 'string',
      coldStorageSize: 'number',
      periodUnit: 'string',
      period: 'number',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalResourceRequest extends $tea.Model {
  clusterId?: string;
  resourceName?: string;
  resourceType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalResourceResponseBody extends $tea.Model {
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

export class CreateGlobalResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGlobalResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGlobalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHbaseHaSlbRequest extends $tea.Model {
  bdsId?: string;
  haId?: string;
  haTypes?: string;
  hbaseType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
      haTypes: 'string',
      hbaseType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHbaseHaSlbResponseBody extends $tea.Model {
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

export class CreateHbaseHaSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHBaseSlbServerRequest extends $tea.Model {
  clusterId?: string;
  slbServer?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      slbServer: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHBaseSlbServerResponseBody extends $tea.Model {
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

export class CreateHBaseSlbServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHBaseSlbServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHBaseSlbServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterRequest extends $tea.Model {
  engine?: string;
  engineVersion?: string;
  archVersion?: string;
  clusterName?: string;
  regionId?: string;
  vpcId?: string;
  multiZoneCombination?: string;
  primaryZoneId?: string;
  primaryVSwitchId?: string;
  standbyZoneId?: string;
  standbyVSwitchId?: string;
  arbiterZoneId?: string;
  arbiterVSwitchId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  coreDiskType?: string;
  coreDiskSize?: number;
  coreNodeCount?: number;
  logInstanceType?: string;
  logDiskType?: string;
  logDiskSize?: number;
  logNodeCount?: number;
  securityIPList?: string;
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenewPeriod?: number;
  clientToken?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      archVersion: 'ArchVersion',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      multiZoneCombination: 'MultiZoneCombination',
      primaryZoneId: 'PrimaryZoneId',
      primaryVSwitchId: 'PrimaryVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      standbyVSwitchId: 'StandbyVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      arbiterVSwitchId: 'ArbiterVSwitchId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      coreDiskType: 'CoreDiskType',
      coreDiskSize: 'CoreDiskSize',
      coreNodeCount: 'CoreNodeCount',
      logInstanceType: 'LogInstanceType',
      logDiskType: 'LogDiskType',
      logDiskSize: 'LogDiskSize',
      logNodeCount: 'LogNodeCount',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      archVersion: 'string',
      clusterName: 'string',
      regionId: 'string',
      vpcId: 'string',
      multiZoneCombination: 'string',
      primaryZoneId: 'string',
      primaryVSwitchId: 'string',
      standbyZoneId: 'string',
      standbyVSwitchId: 'string',
      arbiterZoneId: 'string',
      arbiterVSwitchId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      coreDiskType: 'string',
      coreDiskSize: 'number',
      coreNodeCount: 'number',
      logInstanceType: 'string',
      logDiskType: 'string',
      logDiskSize: 'number',
      logNodeCount: 'number',
      securityIPList: 'string',
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestorePlanRequest extends $tea.Model {
  clusterId?: string;
  targetClusterId?: string;
  restoreAllTable?: boolean;
  restoreByCopy?: boolean;
  restoreToDate?: string;
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      targetClusterId: 'TargetClusterId',
      restoreAllTable: 'RestoreAllTable',
      restoreByCopy: 'RestoreByCopy',
      restoreToDate: 'RestoreToDate',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      targetClusterId: 'string',
      restoreAllTable: 'boolean',
      restoreByCopy: 'boolean',
      restoreToDate: 'string',
      tables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestorePlanResponseBody extends $tea.Model {
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

export class CreateRestorePlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRestorePlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRestorePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  clusterName?: string;
  vpcId?: string;
  vSwitchId?: string;
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenewPeriod?: number;
  serverlessSpec?: string;
  serverlessCapability?: number;
  serverlessStorage?: number;
  engine?: string;
  engineVersion?: string;
  clientToken?: string;
  clientType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenewPeriod: 'AutoRenewPeriod',
      serverlessSpec: 'ServerlessSpec',
      serverlessCapability: 'ServerlessCapability',
      serverlessStorage: 'ServerlessStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      clientToken: 'ClientToken',
      clientType: 'ClientType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      clusterName: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenewPeriod: 'number',
      serverlessSpec: 'string',
      serverlessCapability: 'number',
      serverlessStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      clientToken: 'string',
      clientType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  orderId?: string;
  passWord?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      passWord: 'PassWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      orderId: 'string',
      passWord: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServerlessClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServerlessClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalResourceRequest extends $tea.Model {
  clusterId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalResourceResponseBody extends $tea.Model {
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

export class DeleteGlobalResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGlobalResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGlobalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseHaDBRequest extends $tea.Model {
  bdsId?: string;
  haId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseHaDBResponseBody extends $tea.Model {
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

export class DeleteHBaseHaDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHBaseHaDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHBaseHaDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHbaseHaSlbRequest extends $tea.Model {
  bdsId?: string;
  haId?: string;
  haTypes?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
      haTypes: 'HaTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
      haTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHbaseHaSlbResponseBody extends $tea.Model {
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

export class DeleteHbaseHaSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseSlbServerRequest extends $tea.Model {
  clusterId?: string;
  slbServer?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      slbServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseSlbServerResponseBody extends $tea.Model {
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

export class DeleteHBaseSlbServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHBaseSlbServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHBaseSlbServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  clusterId?: string;
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultiZoneClusterRequest extends $tea.Model {
  clusterId?: string;
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultiZoneClusterResponseBody extends $tea.Model {
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

export class DeleteMultiZoneClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerlessClusterRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerlessClusterResponseBody extends $tea.Model {
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

export class DeleteServerlessClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServerlessClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServerlessClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserHdfsInfoRequest extends $tea.Model {
  clusterId?: string;
  nameService?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nameService: 'NameService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nameService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserHdfsInfoResponseBody extends $tea.Model {
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

export class DeleteUserHdfsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserHdfsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserHdfsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  chargeType?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponseBody extends $tea.Model {
  requestId?: string;
  fullBackupCycle?: number;
  nextFullBackupDate?: string;
  tables?: DescribeBackupPlanConfigResponseBodyTables;
  minHFileBackupCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullBackupCycle: 'FullBackupCycle',
      nextFullBackupDate: 'NextFullBackupDate',
      tables: 'Tables',
      minHFileBackupCount: 'MinHFileBackupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullBackupCycle: 'number',
      nextFullBackupDate: 'string',
      tables: DescribeBackupPlanConfigResponseBodyTables,
      minHFileBackupCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPlanConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPlanConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  preferredBackupPeriod?: string;
  preferredBackupEndTimeUTC?: string;
  preferredBackupStartTimeUTC?: string;
  requestId?: string;
  preferredBackupTime?: string;
  backupRetentionPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      requestId: 'RequestId',
      preferredBackupTime: 'PreferredBackupTime',
      backupRetentionPeriod: 'BackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferredBackupPeriod: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupStartTimeUTC: 'string',
      requestId: 'string',
      preferredBackupTime: 'string',
      backupRetentionPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  clusterId?: string;
  backupId?: string;
  pageNumber?: string;
  pageSize?: string;
  startTime?: string;
  endTime?: string;
  startTimeUTC?: string;
  endTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      backupId: 'BackupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      startTimeUTC: 'StartTimeUTC',
      endTimeUTC: 'EndTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      backupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      startTime: 'string',
      endTime: 'string',
      startTimeUTC: 'string',
      endTimeUTC: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  enableStatus?: string;
  backups?: DescribeBackupsResponseBodyBackups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      enableStatus: 'EnableStatus',
      backups: 'Backups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      enableStatus: 'string',
      backups: DescribeBackupsResponseBodyBackups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStatusRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStatusResponseBody extends $tea.Model {
  requestId?: string;
  bdsClusterId?: string;
  clusterId?: string;
  backupStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bdsClusterId: 'BdsClusterId',
      clusterId: 'ClusterId',
      backupStatus: 'BackupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bdsClusterId: 'string',
      clusterId: 'string',
      backupStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBody extends $tea.Model {
  requestId?: string;
  incr?: DescribeBackupSummaryResponseBodyIncr;
  full?: DescribeBackupSummaryResponseBodyFull;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      incr: 'Incr',
      full: 'Full',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      incr: DescribeBackupSummaryResponseBodyIncr,
      full: DescribeBackupSummaryResponseBodyFull,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesRequest extends $tea.Model {
  clusterId?: string;
  backupRecordId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      backupRecordId: 'BackupRecordId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      backupRecordId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  backupRecords?: DescribeBackupTablesResponseBodyBackupRecords;
  pageNumber?: number;
  total?: number;
  tables?: DescribeBackupTablesResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      backupRecords: 'BackupRecords',
      pageNumber: 'PageNumber',
      total: 'Total',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      backupRecords: DescribeBackupTablesResponseBodyBackupRecords,
      pageNumber: 'number',
      total: 'number',
      tables: DescribeBackupTablesResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBody extends $tea.Model {
  isMultimod?: string;
  vpcId?: string;
  requestId?: string;
  uiProxyConnAddrInfo?: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo;
  vSwitchId?: string;
  serviceConnAddrs?: DescribeClusterConnectionResponseBodyServiceConnAddrs;
  netType?: string;
  dbType?: string;
  thriftConn?: DescribeClusterConnectionResponseBodyThriftConn;
  zkConnAddrs?: DescribeClusterConnectionResponseBodyZkConnAddrs;
  slbConnAddrs?: DescribeClusterConnectionResponseBodySlbConnAddrs;
  static names(): { [key: string]: string } {
    return {
      isMultimod: 'IsMultimod',
      vpcId: 'VpcId',
      requestId: 'RequestId',
      uiProxyConnAddrInfo: 'UiProxyConnAddrInfo',
      vSwitchId: 'VSwitchId',
      serviceConnAddrs: 'ServiceConnAddrs',
      netType: 'NetType',
      dbType: 'DbType',
      thriftConn: 'ThriftConn',
      zkConnAddrs: 'ZkConnAddrs',
      slbConnAddrs: 'SlbConnAddrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMultimod: 'string',
      vpcId: 'string',
      requestId: 'string',
      uiProxyConnAddrInfo: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo,
      vSwitchId: 'string',
      serviceConnAddrs: DescribeClusterConnectionResponseBodyServiceConnAddrs,
      netType: 'string',
      dbType: 'string',
      thriftConn: DescribeClusterConnectionResponseBodyThriftConn,
      zkConnAddrs: DescribeClusterConnectionResponseBodyZkConnAddrs,
      slbConnAddrs: DescribeClusterConnectionResponseBodySlbConnAddrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageResponseBody extends $tea.Model {
  coldStorageUsePercent?: string;
  coldStorageSize?: string;
  requestId?: string;
  clusterId?: string;
  payType?: string;
  openStatus?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorageUsePercent: 'ColdStorageUsePercent',
      coldStorageSize: 'ColdStorageSize',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      payType: 'PayType',
      openStatus: 'OpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageUsePercent: 'string',
      coldStorageSize: 'string',
      requestId: 'string',
      clusterId: 'string',
      payType: 'string',
      openStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeColdStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeColdStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBody extends $tea.Model {
  instances?: DescribeDeletedInstancesResponseBodyInstances;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDeletedInstancesResponseBodyInstances,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeletedInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeletedInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineResponseBody extends $tea.Model {
  requestId?: string;
  warningLine?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warningLine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiskWarningLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiskWarningLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $tea.Model {
  vpcId?: string;
  requestId?: string;
  connAddrs?: DescribeEndpointsResponseBodyConnAddrs;
  vSwitchId?: string;
  netType?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      requestId: 'RequestId',
      connAddrs: 'ConnAddrs',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      requestId: 'string',
      connAddrs: DescribeEndpointsResponseBodyConnAddrs,
      vSwitchId: 'string',
      netType: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  moduleStackVersion?: string;
  isHa?: boolean;
  createdTime?: string;
  resourceGroupId?: string;
  masterInstanceType?: string;
  isDeletionProtection?: boolean;
  moduleId?: number;
  isLatestVersion?: boolean;
  maintainEndTime?: string;
  networkType?: string;
  coreInstanceType?: string;
  clusterName?: string;
  masterDiskType?: string;
  maintainStartTime?: string;
  engine?: string;
  tags?: DescribeInstanceResponseBodyTags;
  status?: string;
  coldStorageSize?: number;
  parentId?: string;
  majorVersion?: string;
  coreDiskCount?: string;
  expireTimeUTC?: string;
  masterDiskSize?: number;
  requestId?: string;
  zoneId?: string;
  clusterId?: string;
  instanceId?: string;
  coreNodeCount?: number;
  coldStorageStatus?: string;
  createdTimeUTC?: string;
  minorVersion?: string;
  duration?: number;
  payType?: string;
  isMultiModel?: boolean;
  clusterType?: string;
  vswitchId?: string;
  masterNodeCount?: number;
  instanceName?: string;
  vpcId?: string;
  autoRenewal?: boolean;
  coreDiskType?: string;
  regionId?: string;
  expireTime?: string;
  backupStatus?: string;
  coreDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      moduleStackVersion: 'ModuleStackVersion',
      isHa: 'IsHa',
      createdTime: 'CreatedTime',
      resourceGroupId: 'ResourceGroupId',
      masterInstanceType: 'MasterInstanceType',
      isDeletionProtection: 'IsDeletionProtection',
      moduleId: 'ModuleId',
      isLatestVersion: 'IsLatestVersion',
      maintainEndTime: 'MaintainEndTime',
      networkType: 'NetworkType',
      coreInstanceType: 'CoreInstanceType',
      clusterName: 'ClusterName',
      masterDiskType: 'MasterDiskType',
      maintainStartTime: 'MaintainStartTime',
      engine: 'Engine',
      tags: 'Tags',
      status: 'Status',
      coldStorageSize: 'ColdStorageSize',
      parentId: 'ParentId',
      majorVersion: 'MajorVersion',
      coreDiskCount: 'CoreDiskCount',
      expireTimeUTC: 'ExpireTimeUTC',
      masterDiskSize: 'MasterDiskSize',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      coreNodeCount: 'CoreNodeCount',
      coldStorageStatus: 'ColdStorageStatus',
      createdTimeUTC: 'CreatedTimeUTC',
      minorVersion: 'MinorVersion',
      duration: 'Duration',
      payType: 'PayType',
      isMultiModel: 'IsMultiModel',
      clusterType: 'ClusterType',
      vswitchId: 'VswitchId',
      masterNodeCount: 'MasterNodeCount',
      instanceName: 'InstanceName',
      vpcId: 'VpcId',
      autoRenewal: 'AutoRenewal',
      coreDiskType: 'CoreDiskType',
      regionId: 'RegionId',
      expireTime: 'ExpireTime',
      backupStatus: 'BackupStatus',
      coreDiskSize: 'CoreDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleStackVersion: 'string',
      isHa: 'boolean',
      createdTime: 'string',
      resourceGroupId: 'string',
      masterInstanceType: 'string',
      isDeletionProtection: 'boolean',
      moduleId: 'number',
      isLatestVersion: 'boolean',
      maintainEndTime: 'string',
      networkType: 'string',
      coreInstanceType: 'string',
      clusterName: 'string',
      masterDiskType: 'string',
      maintainStartTime: 'string',
      engine: 'string',
      tags: DescribeInstanceResponseBodyTags,
      status: 'string',
      coldStorageSize: 'number',
      parentId: 'string',
      majorVersion: 'string',
      coreDiskCount: 'string',
      expireTimeUTC: 'string',
      masterDiskSize: 'number',
      requestId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      instanceId: 'string',
      coreNodeCount: 'number',
      coldStorageStatus: 'string',
      createdTimeUTC: 'string',
      minorVersion: 'string',
      duration: 'number',
      payType: 'string',
      isMultiModel: 'boolean',
      clusterType: 'string',
      vswitchId: 'string',
      masterNodeCount: 'number',
      instanceName: 'string',
      vpcId: 'string',
      autoRenewal: 'boolean',
      coreDiskType: 'string',
      regionId: 'string',
      expireTime: 'string',
      backupStatus: 'string',
      coreDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  dbType?: string;
  clusterName?: string;
  resourceGroupId?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dbType: 'DbType',
      clusterName: 'ClusterName',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      dbType: 'string',
      clusterName: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeRequest extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBody extends $tea.Model {
  requestId?: string;
  instanceTypeSpecList?: DescribeInstanceTypeResponseBodyInstanceTypeSpecList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceTypeSpecList: 'InstanceTypeSpecList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceTypeSpecList: DescribeInstanceTypeResponseBodyInstanceTypeSpecList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  groups?: DescribeIpWhitelistResponseBodyGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: DescribeIpWhitelistResponseBodyGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeMultiZoneAvailableRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeMultiZoneAvailableRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMultiZoneAvailableRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMultiZoneAvailableRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceRequest extends $tea.Model {
  chargeType?: string;
  regionId?: string;
  zoneCombination?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      zoneCombination: 'ZoneCombination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      regionId: 'string',
      zoneCombination: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  availableZones?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMultiZoneAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMultiZoneAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBody extends $tea.Model {
  standbyZoneId?: string;
  moduleStackVersion?: string;
  createdTime?: string;
  resourceGroupId?: string;
  primaryVSwitchIds?: string;
  masterInstanceType?: string;
  logDiskCount?: string;
  isDeletionProtection?: boolean;
  logDiskSize?: number;
  moduleId?: number;
  arbiterVSwitchIds?: string;
  maintainEndTime?: string;
  standbyVSwitchIds?: string;
  networkType?: string;
  coreInstanceType?: string;
  clusterName?: string;
  masterDiskType?: string;
  maintainStartTime?: string;
  engine?: string;
  tags?: DescribeMultiZoneClusterResponseBodyTags;
  arbiterZoneId?: string;
  status?: string;
  parentId?: string;
  majorVersion?: string;
  coreDiskCount?: string;
  multiZoneInstanceModels?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels;
  expireTimeUTC?: string;
  primaryZoneId?: string;
  masterDiskSize?: number;
  requestId?: string;
  multiZoneCombination?: string;
  clusterId?: string;
  instanceId?: string;
  coreNodeCount?: number;
  createdTimeUTC?: string;
  logInstanceType?: string;
  duration?: number;
  payType?: string;
  masterNodeCount?: number;
  instanceName?: string;
  vpcId?: string;
  autoRenewal?: boolean;
  coreDiskType?: string;
  logNodeCount?: number;
  logDiskType?: string;
  regionId?: string;
  expireTime?: string;
  coreDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      standbyZoneId: 'StandbyZoneId',
      moduleStackVersion: 'ModuleStackVersion',
      createdTime: 'CreatedTime',
      resourceGroupId: 'ResourceGroupId',
      primaryVSwitchIds: 'PrimaryVSwitchIds',
      masterInstanceType: 'MasterInstanceType',
      logDiskCount: 'LogDiskCount',
      isDeletionProtection: 'IsDeletionProtection',
      logDiskSize: 'LogDiskSize',
      moduleId: 'ModuleId',
      arbiterVSwitchIds: 'ArbiterVSwitchIds',
      maintainEndTime: 'MaintainEndTime',
      standbyVSwitchIds: 'StandbyVSwitchIds',
      networkType: 'NetworkType',
      coreInstanceType: 'CoreInstanceType',
      clusterName: 'ClusterName',
      masterDiskType: 'MasterDiskType',
      maintainStartTime: 'MaintainStartTime',
      engine: 'Engine',
      tags: 'Tags',
      arbiterZoneId: 'ArbiterZoneId',
      status: 'Status',
      parentId: 'ParentId',
      majorVersion: 'MajorVersion',
      coreDiskCount: 'CoreDiskCount',
      multiZoneInstanceModels: 'MultiZoneInstanceModels',
      expireTimeUTC: 'ExpireTimeUTC',
      primaryZoneId: 'PrimaryZoneId',
      masterDiskSize: 'MasterDiskSize',
      requestId: 'RequestId',
      multiZoneCombination: 'MultiZoneCombination',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      coreNodeCount: 'CoreNodeCount',
      createdTimeUTC: 'CreatedTimeUTC',
      logInstanceType: 'LogInstanceType',
      duration: 'Duration',
      payType: 'PayType',
      masterNodeCount: 'MasterNodeCount',
      instanceName: 'InstanceName',
      vpcId: 'VpcId',
      autoRenewal: 'AutoRenewal',
      coreDiskType: 'CoreDiskType',
      logNodeCount: 'LogNodeCount',
      logDiskType: 'LogDiskType',
      regionId: 'RegionId',
      expireTime: 'ExpireTime',
      coreDiskSize: 'CoreDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standbyZoneId: 'string',
      moduleStackVersion: 'string',
      createdTime: 'string',
      resourceGroupId: 'string',
      primaryVSwitchIds: 'string',
      masterInstanceType: 'string',
      logDiskCount: 'string',
      isDeletionProtection: 'boolean',
      logDiskSize: 'number',
      moduleId: 'number',
      arbiterVSwitchIds: 'string',
      maintainEndTime: 'string',
      standbyVSwitchIds: 'string',
      networkType: 'string',
      coreInstanceType: 'string',
      clusterName: 'string',
      masterDiskType: 'string',
      maintainStartTime: 'string',
      engine: 'string',
      tags: DescribeMultiZoneClusterResponseBodyTags,
      arbiterZoneId: 'string',
      status: 'string',
      parentId: 'string',
      majorVersion: 'string',
      coreDiskCount: 'string',
      multiZoneInstanceModels: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels,
      expireTimeUTC: 'string',
      primaryZoneId: 'string',
      masterDiskSize: 'number',
      requestId: 'string',
      multiZoneCombination: 'string',
      clusterId: 'string',
      instanceId: 'string',
      coreNodeCount: 'number',
      createdTimeUTC: 'string',
      logInstanceType: 'string',
      duration: 'number',
      payType: 'string',
      masterNodeCount: 'number',
      instanceName: 'string',
      vpcId: 'string',
      autoRenewal: 'boolean',
      coreDiskType: 'string',
      logNodeCount: 'number',
      logDiskType: 'string',
      regionId: 'string',
      expireTime: 'string',
      coreDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeResponseBody extends $tea.Model {
  requestId?: string;
  timeEnd?: string;
  timeBegin?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeEnd: 'TimeEnd',
      timeBegin: 'TimeBegin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeEnd: 'string',
      timeBegin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecoverableTimeRangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecoverableTimeRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsRequest extends $tea.Model {
  clusterId?: string;
  restoreRecordId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBody extends $tea.Model {
  restoreFull?: DescribeRestoreFullDetailsResponseBodyRestoreFull;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      restoreFull: 'RestoreFull',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFull: DescribeRestoreFullDetailsResponseBodyRestoreFull,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreFullDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreFullDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailRequest extends $tea.Model {
  clusterId?: string;
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponseBody extends $tea.Model {
  requestId?: string;
  restoreIncrDetail?: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreIncrDetail: 'RestoreIncrDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreIncrDetail: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreIncrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreIncrDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsRequest extends $tea.Model {
  clusterId?: string;
  restoreRecordId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBody extends $tea.Model {
  restoreSchema?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      restoreSchema: 'RestoreSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchema: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreSchemaDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreSchemaDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  hasMoreRestoreRecord?: number;
  rescords?: DescribeRestoreSummaryResponseBodyRescords;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      hasMoreRestoreRecord: 'HasMoreRestoreRecord',
      rescords: 'Rescords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      hasMoreRestoreRecord: 'number',
      rescords: DescribeRestoreSummaryResponseBodyRescords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesRequest extends $tea.Model {
  clusterId?: string;
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBody extends $tea.Model {
  restoreSchema?: DescribeRestoreTablesResponseBodyRestoreSchema;
  restoreFull?: DescribeRestoreTablesResponseBodyRestoreFull;
  requestId?: string;
  tables?: DescribeRestoreTablesResponseBodyTables;
  restoreSummary?: DescribeRestoreTablesResponseBodyRestoreSummary;
  restoreIncrDetail?: DescribeRestoreTablesResponseBodyRestoreIncrDetail;
  static names(): { [key: string]: string } {
    return {
      restoreSchema: 'RestoreSchema',
      restoreFull: 'RestoreFull',
      requestId: 'RequestId',
      tables: 'Tables',
      restoreSummary: 'RestoreSummary',
      restoreIncrDetail: 'RestoreIncrDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchema: DescribeRestoreTablesResponseBodyRestoreSchema,
      restoreFull: DescribeRestoreTablesResponseBodyRestoreFull,
      requestId: 'string',
      tables: DescribeRestoreTablesResponseBodyTables,
      restoreSummary: DescribeRestoreTablesResponseBodyRestoreSummary,
      restoreIncrDetail: DescribeRestoreTablesResponseBodyRestoreIncrDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityGroupIds?: DescribeSecurityGroupsResponseBodySecurityGroupIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupIds: DescribeSecurityGroupsResponseBodySecurityGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRequest extends $tea.Model {
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

export class DescribeSubDomainResponseBody extends $tea.Model {
  subDomain?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      subDomain: 'SubDomain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subDomain: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupRequest extends $tea.Model {
  hbaseueClusterId?: string;
  nodeCount?: number;
  coldStorageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      hbaseueClusterId: 'HbaseueClusterId',
      nodeCount: 'NodeCount',
      coldStorageSize: 'ColdStorageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseueClusterId: 'string',
      nodeCount: 'number',
      coldStorageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableHBaseueBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableHBaseueBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleRequest extends $tea.Model {
  moduleClusterName?: string;
  vpcId?: string;
  vswitchId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  diskType?: string;
  diskSize?: number;
  nodeCount?: number;
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenewPeriod?: number;
  clientToken?: string;
  hbaseueClusterId?: string;
  bdsId?: string;
  moduleTypeName?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleClusterName: 'ModuleClusterName',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      hbaseueClusterId: 'HbaseueClusterId',
      bdsId: 'BdsId',
      moduleTypeName: 'ModuleTypeName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleClusterName: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      diskType: 'string',
      diskSize: 'number',
      nodeCount: 'number',
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      hbaseueClusterId: 'string',
      bdsId: 'string',
      moduleTypeName: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableHBaseueModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableHBaseueModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceRequest extends $tea.Model {
  engine?: string;
  engineVersion?: string;
  archVersion?: string;
  clusterName?: string;
  regionId?: string;
  vpcId?: string;
  multiZoneCombination?: string;
  primaryZoneId?: string;
  primaryVSwitchId?: string;
  standbyZoneId?: string;
  standbyVSwitchId?: string;
  arbiterZoneId?: string;
  arbiterVSwitchId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  coreDiskType?: string;
  coreDiskSize?: number;
  coreNodeCount?: number;
  logInstanceType?: string;
  logDiskType?: string;
  logDiskSize?: number;
  logNodeCount?: number;
  securityIPList?: string;
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenewPeriod?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      archVersion: 'ArchVersion',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      multiZoneCombination: 'MultiZoneCombination',
      primaryZoneId: 'PrimaryZoneId',
      primaryVSwitchId: 'PrimaryVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      standbyVSwitchId: 'StandbyVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      arbiterVSwitchId: 'ArbiterVSwitchId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      coreDiskType: 'CoreDiskType',
      coreDiskSize: 'CoreDiskSize',
      coreNodeCount: 'CoreNodeCount',
      logInstanceType: 'LogInstanceType',
      logDiskType: 'LogDiskType',
      logDiskSize: 'LogDiskSize',
      logNodeCount: 'LogNodeCount',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      archVersion: 'string',
      clusterName: 'string',
      regionId: 'string',
      vpcId: 'string',
      multiZoneCombination: 'string',
      primaryZoneId: 'string',
      primaryVSwitchId: 'string',
      standbyZoneId: 'string',
      standbyVSwitchId: 'string',
      arbiterZoneId: 'string',
      arbiterVSwitchId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      coreDiskType: 'string',
      coreDiskSize: 'number',
      coreNodeCount: 'number',
      logInstanceType: 'string',
      logDiskType: 'string',
      logDiskSize: 'number',
      logNodeCount: 'number',
      securityIPList: 'string',
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenewPeriod: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EvaluateMultiZoneResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EvaluateMultiZoneResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  multimodCmsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      multimodCmsUrl: 'MultimodCmsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      multimodCmsUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMultimodeCmsUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMultimodeCmsUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesRequest extends $tea.Model {
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBody extends $tea.Model {
  instances?: ListHBaseInstancesResponseBodyInstances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: ListHBaseInstancesResponseBodyInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHBaseInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHBaseInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesRequest extends $tea.Model {
  clusterId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  configureHistoryList?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      configureHistoryList: 'ConfigureHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      configureHistoryList: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceServiceConfigHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceServiceConfigHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsRequest extends $tea.Model {
  clusterId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  configureList?: ListInstanceServiceConfigurationsResponseBodyConfigureList;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      configureList: 'ConfigureList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      configureList: ListInstanceServiceConfigurationsResponseBodyConfigureList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceServiceConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceServiceConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: ListTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: ListTagsResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanConfigRequest extends $tea.Model {
  clusterId?: string;
  tables?: string;
  fullBackupCycle?: string;
  minHFileBackupCount?: string;
  nextFullBackupDate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      tables: 'Tables',
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      tables: 'string',
      fullBackupCycle: 'string',
      minHFileBackupCount: 'string',
      nextFullBackupDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanConfigResponseBody extends $tea.Model {
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

export class ModifyBackupPlanConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPlanConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPlanConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  clusterId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  preferredBackupStartTimeUTC?: string;
  preferredBackupEndTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
      preferredBackupEndTimeUTC: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDeletionProtectionRequest extends $tea.Model {
  clusterId?: string;
  protection?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      protection: 'Protection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      protection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDeletionProtectionResponseBody extends $tea.Model {
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

export class ModifyClusterDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskWarningLineRequest extends $tea.Model {
  clusterId?: string;
  warningLine?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      warningLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskWarningLineResponseBody extends $tea.Model {
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

export class ModifyDiskWarningLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDiskWarningLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDiskWarningLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeRequest extends $tea.Model {
  clusterId?: string;
  maintainStartTime?: string;
  maintainEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maintainStartTime: 'MaintainStartTime',
      maintainEndTime: 'MaintainEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maintainStartTime: 'string',
      maintainEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyInstanceMaintainTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  zoneId?: string;
  clusterId?: string;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $tea.Model {
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

export class ModifyInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceServiceConfigRequest extends $tea.Model {
  clusterId?: string;
  restart?: boolean;
  configureName?: string;
  configureValue?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restart: 'Restart',
      configureName: 'ConfigureName',
      configureValue: 'ConfigureValue',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restart: 'boolean',
      configureName: 'string',
      configureValue: 'string',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceServiceConfigResponseBody extends $tea.Model {
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

export class ModifyInstanceServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeRequest extends $tea.Model {
  clusterId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhitelistRequest extends $tea.Model {
  clusterId?: string;
  ipList?: string;
  groupName?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ipList: 'IpList',
      groupName: 'GroupName',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ipList: 'string',
      groupName: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhitelistResponseBody extends $tea.Model {
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

export class ModifyIpWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeRequest extends $tea.Model {
  clusterId?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  logInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      logInstanceType: 'LogInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      logInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMultiZoneClusterNodeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMultiZoneClusterNodeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupsRequest extends $tea.Model {
  clusterId?: string;
  securityGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupsResponseBody extends $tea.Model {
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

export class ModifySecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUIAccountPasswordRequest extends $tea.Model {
  clusterId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      accountName: 'string',
      accountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUIAccountPasswordResponseBody extends $tea.Model {
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

export class ModifyUIAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUIAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUIAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  clusterId?: string;
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      newResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBackupRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBackupResponseBody extends $tea.Model {
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

export class OpenBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeInstanceRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeInstanceResponseBody extends $tea.Model {
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

export class PurgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PurgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PurgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBRequest extends $tea.Model {
  bdsId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBody extends $tea.Model {
  totalCount?: number;
  clusterList?: QueryHBaseHaDBResponseBodyClusterList;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      clusterList: 'ClusterList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      clusterList: QueryHBaseHaDBResponseBodyClusterList,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHBaseHaDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHBaseHaDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBRequest extends $tea.Model {
  clusterId?: string;
  relateDbType?: string;
  hasSingleNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      relateDbType: 'RelateDbType',
      hasSingleNode: 'HasSingleNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      relateDbType: 'string',
      hasSingleNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBody extends $tea.Model {
  clusterList?: QueryXpackRelateDBResponseBodyClusterList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryXpackRelateDBResponseBodyClusterList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryXpackRelateDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryXpackRelateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelateDbForHBaseHaRequest extends $tea.Model {
  clusterId?: string;
  haTables?: string;
  haActiveHdfsUri?: string;
  haActiveHbaseFsDir?: string;
  haActiveClusterKey?: string;
  haActiveVersion?: string;
  haActiveUser?: string;
  haActivePassword?: string;
  haStandbyHdfsUri?: string;
  haStandbyHbaseFsDir?: string;
  haStandbyClusterKey?: string;
  haStandbyVersion?: string;
  haStandbyUser?: string;
  haStandbyPassword?: string;
  haActive?: string;
  haStandby?: string;
  haActiveDBType?: string;
  haStandbyDBType?: string;
  isActiveStandard?: boolean;
  isStandbyStandard?: boolean;
  haMigrateType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      haTables: 'HaTables',
      haActiveHdfsUri: 'HaActiveHdfsUri',
      haActiveHbaseFsDir: 'HaActiveHbaseFsDir',
      haActiveClusterKey: 'HaActiveClusterKey',
      haActiveVersion: 'HaActiveVersion',
      haActiveUser: 'HaActiveUser',
      haActivePassword: 'HaActivePassword',
      haStandbyHdfsUri: 'HaStandbyHdfsUri',
      haStandbyHbaseFsDir: 'HaStandbyHbaseFsDir',
      haStandbyClusterKey: 'HaStandbyClusterKey',
      haStandbyVersion: 'HaStandbyVersion',
      haStandbyUser: 'HaStandbyUser',
      haStandbyPassword: 'HaStandbyPassword',
      haActive: 'HaActive',
      haStandby: 'HaStandby',
      haActiveDBType: 'HaActiveDBType',
      haStandbyDBType: 'HaStandbyDBType',
      isActiveStandard: 'IsActiveStandard',
      isStandbyStandard: 'IsStandbyStandard',
      haMigrateType: 'HaMigrateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      haTables: 'string',
      haActiveHdfsUri: 'string',
      haActiveHbaseFsDir: 'string',
      haActiveClusterKey: 'string',
      haActiveVersion: 'string',
      haActiveUser: 'string',
      haActivePassword: 'string',
      haStandbyHdfsUri: 'string',
      haStandbyHbaseFsDir: 'string',
      haStandbyClusterKey: 'string',
      haStandbyVersion: 'string',
      haStandbyUser: 'string',
      haStandbyPassword: 'string',
      haActive: 'string',
      haStandby: 'string',
      haActiveDBType: 'string',
      haStandbyDBType: 'string',
      isActiveStandard: 'boolean',
      isStandbyStandard: 'boolean',
      haMigrateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelateDbForHBaseHaResponseBody extends $tea.Model {
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

export class RelateDbForHBaseHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RelateDbForHBaseHaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RelateDbForHBaseHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressResponseBody extends $tea.Model {
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

export class ReleasePublicNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleasePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleasePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clusterId?: string;
  pricingCycle?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pricingCycle: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeColdStorageSizeRequest extends $tea.Model {
  clusterId?: string;
  coldStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeColdStorageSizeResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeColdStorageSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeColdStorageSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeColdStorageSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeRequest extends $tea.Model {
  clusterId?: string;
  nodeDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeDiskSize: 'NodeDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeDiskSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeDiskSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeRequest extends $tea.Model {
  clusterId?: string;
  coreDiskSize?: number;
  logDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreDiskSize: 'CoreDiskSize',
      logDiskSize: 'LogDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreDiskSize: 'number',
      logDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeMultiZoneClusterDiskSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeMultiZoneClusterDiskSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountRequest extends $tea.Model {
  clusterId?: string;
  primaryVSwitchId?: string;
  standbyVSwitchId?: string;
  arbiterVSwitchId?: string;
  coreNodeCount?: number;
  primaryCoreNodeCount?: number;
  standbyCoreNodeCount?: number;
  logNodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      primaryVSwitchId: 'PrimaryVSwitchId',
      standbyVSwitchId: 'StandbyVSwitchId',
      arbiterVSwitchId: 'ArbiterVSwitchId',
      coreNodeCount: 'CoreNodeCount',
      primaryCoreNodeCount: 'PrimaryCoreNodeCount',
      standbyCoreNodeCount: 'StandbyCoreNodeCount',
      logNodeCount: 'LogNodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      primaryVSwitchId: 'string',
      standbyVSwitchId: 'string',
      arbiterVSwitchId: 'string',
      coreNodeCount: 'number',
      primaryCoreNodeCount: 'number',
      standbyCoreNodeCount: 'number',
      logNodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeMultiZoneClusterNodeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeMultiZoneClusterNodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountRequest extends $tea.Model {
  clusterId?: string;
  nodeCount?: number;
  zoneId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeCount: 'NodeCount',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeCount: 'number',
      zoneId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeNodeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeNodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  clusterId?: string;
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
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

export class RestartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHbaseHaSlbRequest extends $tea.Model {
  bdsId?: string;
  haId?: string;
  haTypes?: string;
  hbaseType?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
      haTypes: 'string',
      hbaseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHbaseHaSlbResponseBody extends $tea.Model {
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

export class SwitchHbaseHaSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $tea.Model {
  regionId?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
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

export class UnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionRequest extends $tea.Model {
  clusterId?: string;
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBody extends $tea.Model {
  requestId?: string;
  upgradingComponents?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradingComponents: 'UpgradingComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradingComponents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeMinorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterRequest extends $tea.Model {
  clusterId?: string;
  runMode?: string;
  upgradeInsName?: string;
  components?: string;
  versions?: string;
  restartComponents?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      runMode: 'RunMode',
      upgradeInsName: 'UpgradeInsName',
      components: 'Components',
      versions: 'Versions',
      restartComponents: 'RestartComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      runMode: 'string',
      upgradeInsName: 'string',
      components: 'string',
      versions: 'string',
      restartComponents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterResponseBody extends $tea.Model {
  requestId?: string;
  upgradingComponents?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradingComponents: 'UpgradingComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradingComponents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class XpackRelateDBRequest extends $tea.Model {
  clusterId?: string;
  dbClusterIds?: string;
  relateDbType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbClusterIds: 'DbClusterIds',
      relateDbType: 'RelateDbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbClusterIds: 'string',
      relateDbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class XpackRelateDBResponseBody extends $tea.Model {
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

export class XpackRelateDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: XpackRelateDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: XpackRelateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBodyComponentsComponent extends $tea.Model {
  isLatestVersion?: string;
  component?: string;
  static names(): { [key: string]: string } {
    return {
      isLatestVersion: 'IsLatestVersion',
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatestVersion: 'string',
      component: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBodyComponents extends $tea.Model {
  component?: CheckComponentsVersionResponseBodyComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': CheckComponentsVersionResponseBodyComponentsComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange extends $tea.Model {
  maxSize?: number;
  stepSize?: number;
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      stepSize: 'StepSize',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      stepSize: 'number',
      minSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource extends $tea.Model {
  instanceTypeDetail?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail;
  DBInstanceStorageRange?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange;
  maxCoreCount?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeDetail: 'InstanceTypeDetail',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      maxCoreCount: 'MaxCoreCount',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeDetail: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail,
      DBInstanceStorageRange: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange,
      maxCoreCount: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources extends $tea.Model {
  coreResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource[];
  static names(): { [key: string]: string } {
    return {
      coreResource: 'CoreResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType extends $tea.Model {
  coreResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coreResources: 'CoreResources',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources,
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes extends $tea.Model {
  supportedStorageType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories extends $tea.Model {
  supportedStorageTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      supportedStorageTypes: 'SupportedStorageTypes',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes,
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories extends $tea.Model {
  supportedCategories?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories[];
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  version?: string;
  supportedCategories?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      supportedCategories: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  supportedEngineVersions?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersions: 'SupportedEngineVersions',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersions: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource extends $tea.Model {
  instanceTypeDetail?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeDetail: 'InstanceTypeDetail',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeDetail: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail,
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources extends $tea.Model {
  masterResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource[];
  static names(): { [key: string]: string } {
    return {
      masterResource: 'MasterResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  supportedEngines?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  zoneId?: string;
  masterResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
      masterResources: 'MasterResources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneId: 'string',
      masterResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponseBodyTables extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackupsBackup extends $tea.Model {
  backupStatus?: string;
  backupType?: string;
  backupStartTime?: string;
  backupDownloadURL?: string;
  backupStartTimeUTC?: string;
  backupEndTime?: string;
  backupId?: number;
  backupDBNames?: string;
  backupEndTimeUTC?: string;
  backupSize?: string;
  backupMode?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      backupDownloadURL: 'BackupDownloadURL',
      backupStartTimeUTC: 'BackupStartTimeUTC',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupDBNames: 'BackupDBNames',
      backupEndTimeUTC: 'BackupEndTimeUTC',
      backupSize: 'BackupSize',
      backupMode: 'BackupMode',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      backupDownloadURL: 'string',
      backupStartTimeUTC: 'string',
      backupEndTime: 'string',
      backupId: 'number',
      backupDBNames: 'string',
      backupEndTimeUTC: 'string',
      backupSize: 'string',
      backupMode: 'string',
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $tea.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyIncr extends $tea.Model {
  status?: string;
  speed?: string;
  pos?: string;
  queueLogNum?: string;
  backupLogSize?: string;
  runningLogNum?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      speed: 'Speed',
      pos: 'Pos',
      queueLogNum: 'QueueLogNum',
      backupLogSize: 'BackupLogSize',
      runningLogNum: 'RunningLogNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      speed: 'string',
      pos: 'string',
      queueLogNum: 'string',
      backupLogSize: 'string',
      runningLogNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFullRecordsRecord extends $tea.Model {
  status?: string;
  finishTime?: string;
  process?: string;
  dataSize?: string;
  speed?: string;
  recordId?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      process: 'Process',
      dataSize: 'DataSize',
      speed: 'Speed',
      recordId: 'RecordId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      process: 'string',
      dataSize: 'string',
      speed: 'string',
      recordId: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFullRecords extends $tea.Model {
  record?: DescribeBackupSummaryResponseBodyFullRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeBackupSummaryResponseBodyFullRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFull extends $tea.Model {
  nextFullBackupDate?: string;
  records?: DescribeBackupSummaryResponseBodyFullRecords;
  hasMore?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextFullBackupDate: 'NextFullBackupDate',
      records: 'Records',
      hasMore: 'HasMore',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextFullBackupDate: 'string',
      records: DescribeBackupSummaryResponseBodyFullRecords,
      hasMore: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyBackupRecordsBackupRecord extends $tea.Model {
  endTime?: string;
  startTime?: string;
  process?: string;
  dataSize?: string;
  speed?: string;
  state?: string;
  message?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      process: 'Process',
      dataSize: 'DataSize',
      speed: 'Speed',
      state: 'State',
      message: 'Message',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      process: 'string',
      dataSize: 'string',
      speed: 'string',
      state: 'string',
      message: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyBackupRecords extends $tea.Model {
  backupRecord?: DescribeBackupTablesResponseBodyBackupRecordsBackupRecord[];
  static names(): { [key: string]: string } {
    return {
      backupRecord: 'BackupRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecord: { 'type': 'array', 'itemType': DescribeBackupTablesResponseBodyBackupRecordsBackupRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyTables extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr extends $tea.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo;
  connType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      connType: 'ConnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo,
      connType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrs extends $tea.Model {
  serviceConnAddr?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr[];
  static names(): { [key: string]: string } {
    return {
      serviceConnAddr: 'ServiceConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyThriftConn extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyZkConnAddrs extends $tea.Model {
  zkConnAddr?: DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr[];
  static names(): { [key: string]: string } {
    return {
      zkConnAddr: 'ZkConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zkConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr extends $tea.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo,
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrs extends $tea.Model {
  slbConnAddr?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr[];
  static names(): { [key: string]: string } {
    return {
      slbConnAddr: 'SlbConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBodyInstancesInstance extends $tea.Model {
  status?: string;
  instanceId?: string;
  regionId?: string;
  parentId?: string;
  clusterType?: string;
  instanceName?: string;
  deleteTime?: string;
  zoneId?: string;
  moduleStackVersion?: string;
  engine?: string;
  majorVersion?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      parentId: 'ParentId',
      clusterType: 'ClusterType',
      instanceName: 'InstanceName',
      deleteTime: 'DeleteTime',
      zoneId: 'ZoneId',
      moduleStackVersion: 'ModuleStackVersion',
      engine: 'Engine',
      majorVersion: 'MajorVersion',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceId: 'string',
      regionId: 'string',
      parentId: 'string',
      clusterType: 'string',
      instanceName: 'string',
      deleteTime: 'string',
      zoneId: 'string',
      moduleStackVersion: 'string',
      engine: 'string',
      majorVersion: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeDeletedInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDeletedInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyConnAddrsConnAddrInfo extends $tea.Model {
  connAddrPort?: string;
  netType?: string;
  connAddr?: string;
  connType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
      connAddr: 'ConnAddr',
      connType: 'ConnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrPort: 'string',
      netType: 'string',
      connAddr: 'string',
      connType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyConnAddrs extends $tea.Model {
  connAddrInfo?: DescribeEndpointsResponseBodyConnAddrsConnAddrInfo[];
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyConnAddrsConnAddrInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyTagsTag extends $tea.Model {
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

export class DescribeInstanceResponseBodyTags extends $tea.Model {
  tag?: DescribeInstanceResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceTagsTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceTags extends $tea.Model {
  tag?: DescribeInstancesResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstance extends $tea.Model {
  vpcId?: string;
  status?: string;
  moduleId?: number;
  vswitchId?: string;
  backupStatus?: string;
  payType?: string;
  coreDiskType?: string;
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  masterNodeCount?: number;
  networkType?: string;
  createdTimeUTC?: string;
  parentId?: string;
  expireTimeUTC?: string;
  instanceName?: string;
  masterInstanceType?: string;
  coreInstanceType?: string;
  createdTime?: string;
  coreDiskSize?: number;
  clusterId?: string;
  expireTime?: string;
  isHa?: boolean;
  instanceId?: string;
  coldStorageStatus?: string;
  isDeletionProtection?: boolean;
  regionId?: string;
  masterDiskSize?: number;
  masterDiskType?: string;
  autoRenewal?: boolean;
  clusterType?: string;
  resourceGroupId?: string;
  clusterName?: string;
  zoneId?: string;
  duration?: number;
  moduleStackVersion?: string;
  engine?: string;
  majorVersion?: string;
  coreDiskCount?: string;
  coreNodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      moduleId: 'ModuleId',
      vswitchId: 'VswitchId',
      backupStatus: 'BackupStatus',
      payType: 'PayType',
      coreDiskType: 'CoreDiskType',
      tags: 'Tags',
      masterNodeCount: 'MasterNodeCount',
      networkType: 'NetworkType',
      createdTimeUTC: 'CreatedTimeUTC',
      parentId: 'ParentId',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceName: 'InstanceName',
      masterInstanceType: 'MasterInstanceType',
      coreInstanceType: 'CoreInstanceType',
      createdTime: 'CreatedTime',
      coreDiskSize: 'CoreDiskSize',
      clusterId: 'ClusterId',
      expireTime: 'ExpireTime',
      isHa: 'IsHa',
      instanceId: 'InstanceId',
      coldStorageStatus: 'ColdStorageStatus',
      isDeletionProtection: 'IsDeletionProtection',
      regionId: 'RegionId',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      autoRenewal: 'AutoRenewal',
      clusterType: 'ClusterType',
      resourceGroupId: 'ResourceGroupId',
      clusterName: 'ClusterName',
      zoneId: 'ZoneId',
      duration: 'Duration',
      moduleStackVersion: 'ModuleStackVersion',
      engine: 'Engine',
      majorVersion: 'MajorVersion',
      coreDiskCount: 'CoreDiskCount',
      coreNodeCount: 'CoreNodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      moduleId: 'number',
      vswitchId: 'string',
      backupStatus: 'string',
      payType: 'string',
      coreDiskType: 'string',
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
      masterNodeCount: 'number',
      networkType: 'string',
      createdTimeUTC: 'string',
      parentId: 'string',
      expireTimeUTC: 'string',
      instanceName: 'string',
      masterInstanceType: 'string',
      coreInstanceType: 'string',
      createdTime: 'string',
      coreDiskSize: 'number',
      clusterId: 'string',
      expireTime: 'string',
      isHa: 'boolean',
      instanceId: 'string',
      coldStorageStatus: 'string',
      isDeletionProtection: 'boolean',
      regionId: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      autoRenewal: 'boolean',
      clusterType: 'string',
      resourceGroupId: 'string',
      clusterName: 'string',
      zoneId: 'string',
      duration: 'number',
      moduleStackVersion: 'string',
      engine: 'string',
      majorVersion: 'string',
      coreDiskCount: 'string',
      coreNodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec extends $tea.Model {
  cpuSize?: number;
  memSize?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuSize: 'CpuSize',
      memSize: 'MemSize',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuSize: 'number',
      memSize: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBodyInstanceTypeSpecList extends $tea.Model {
  instanceTypeSpec?: DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeSpec: 'InstanceTypeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeSpec: { 'type': 'array', 'itemType': DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroupsGroupIpList extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroupsGroup extends $tea.Model {
  ipVersion?: number;
  groupName?: string;
  ipList?: DescribeIpWhitelistResponseBodyGroupsGroupIpList;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      groupName: 'GroupName',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'number',
      groupName: 'string',
      ipList: DescribeIpWhitelistResponseBodyGroupsGroupIpList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroups extends $tea.Model {
  group?: DescribeIpWhitelistResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': DescribeIpWhitelistResponseBodyGroupsGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones extends $tea.Model {
  zone?: string[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine extends $tea.Model {
  zones?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines extends $tea.Model {
  availableCombine?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine[];
  static names(): { [key: string]: string } {
    return {
      availableCombine: 'AvailableCombine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCombine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  availableCombines?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      availableCombines: 'AvailableCombines',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      availableCombines: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange extends $tea.Model {
  maxSize?: number;
  stepSize?: number;
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      stepSize: 'StepSize',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      stepSize: 'number',
      minSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource extends $tea.Model {
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail;
  DBInstanceStorageRange?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange;
  maxCoreCount?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeDetail: 'InstanceTypeDetail',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      maxCoreCount: 'MaxCoreCount',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail,
      DBInstanceStorageRange: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange,
      maxCoreCount: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources extends $tea.Model {
  coreResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource[];
  static names(): { [key: string]: string } {
    return {
      coreResource: 'CoreResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType extends $tea.Model {
  coreResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coreResources: 'CoreResources',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources,
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes extends $tea.Model {
  supportedStorageType?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories extends $tea.Model {
  supportedStorageTypes?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      supportedStorageTypes: 'SupportedStorageTypes',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageTypes: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes,
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories extends $tea.Model {
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories[];
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  version?: string;
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      supportedCategories: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  supportedEngineVersions?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersions: 'SupportedEngineVersions',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersions: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource extends $tea.Model {
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeDetail: 'InstanceTypeDetail',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail,
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources extends $tea.Model {
  masterResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource[];
  static names(): { [key: string]: string } {
    return {
      masterResource: 'MasterResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  supportedEngines?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  zoneCombination?: string;
  masterResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneCombination: 'ZoneCombination',
      masterResources: 'MasterResources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneCombination: 'string',
      masterResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyTagsTag extends $tea.Model {
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

export class DescribeMultiZoneClusterResponseBodyTags extends $tea.Model {
  tag?: DescribeMultiZoneClusterResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel extends $tea.Model {
  status?: string;
  isLatestVersion?: boolean;
  insName?: string;
  role?: string;
  minorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isLatestVersion: 'IsLatestVersion',
      insName: 'InsName',
      role: 'Role',
      minorVersion: 'MinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isLatestVersion: 'boolean',
      insName: 'string',
      role: 'string',
      minorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels extends $tea.Model {
  multiZoneInstanceModel?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel[];
  static names(): { [key: string]: string } {
    return {
      multiZoneInstanceModel: 'MultiZoneInstanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiZoneInstanceModel: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZones extends $tea.Model {
  zone?: DescribeRegionsResponseBodyRegionsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: DescribeRegionsResponseBodyRegionsRegionZones,
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  process?: string;
  dataSize?: string;
  speed?: string;
  state?: string;
  message?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      process: 'Process',
      dataSize: 'DataSize',
      speed: 'Speed',
      state: 'State',
      message: 'Message',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      process: 'string',
      dataSize: 'string',
      speed: 'string',
      state: 'string',
      message: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails extends $tea.Model {
  restoreFullDetail?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFull extends $tea.Model {
  succeed?: number;
  dataSize?: string;
  speed?: string;
  restoreFullDetails?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails;
  pageSize?: number;
  fail?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      succeed: 'Succeed',
      dataSize: 'DataSize',
      speed: 'Speed',
      restoreFullDetails: 'RestoreFullDetails',
      pageSize: 'PageSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeed: 'number',
      dataSize: 'string',
      speed: 'string',
      restoreFullDetails: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails,
      pageSize: 'number',
      fail: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  process?: string;
  restoreStartTs?: string;
  state?: string;
  restoredTs?: string;
  restoreDelay?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      process: 'Process',
      restoreStartTs: 'RestoreStartTs',
      state: 'State',
      restoredTs: 'RestoredTs',
      restoreDelay: 'RestoreDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      process: 'string',
      restoreStartTs: 'string',
      state: 'string',
      restoredTs: 'string',
      restoreDelay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  state?: string;
  message?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      state: 'State',
      message: 'Message',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      state: 'string',
      message: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails extends $tea.Model {
  restoreSchemaDetail?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchema extends $tea.Model {
  succeed?: number;
  restoreSchemaDetails?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails;
  pageSize?: number;
  pageNumber?: number;
  fail?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      succeed: 'Succeed',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fail: 'Fail',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeed: 'number',
      restoreSchemaDetails: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails,
      pageSize: 'number',
      pageNumber: 'number',
      fail: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBodyRescordsRescord extends $tea.Model {
  status?: string;
  finishTime?: string;
  schemaProcess?: string;
  bulkLoadProcess?: string;
  recordId?: string;
  createTime?: string;
  logProcess?: string;
  hfileRestoreProcess?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      schemaProcess: 'SchemaProcess',
      bulkLoadProcess: 'BulkLoadProcess',
      recordId: 'RecordId',
      createTime: 'CreateTime',
      logProcess: 'LogProcess',
      hfileRestoreProcess: 'HfileRestoreProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      schemaProcess: 'string',
      bulkLoadProcess: 'string',
      recordId: 'string',
      createTime: 'string',
      logProcess: 'string',
      hfileRestoreProcess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBodyRescords extends $tea.Model {
  rescord?: DescribeRestoreSummaryResponseBodyRescordsRescord[];
  static names(): { [key: string]: string } {
    return {
      rescord: 'Rescord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rescord: { 'type': 'array', 'itemType': DescribeRestoreSummaryResponseBodyRescordsRescord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  state?: string;
  message?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      state: 'State',
      message: 'Message',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      state: 'string',
      message: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails extends $tea.Model {
  restoreSchemaDetail?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchema extends $tea.Model {
  succeed?: number;
  restoreSchemaDetails?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails;
  pageSize?: number;
  pageNumber?: number;
  fail?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      succeed: 'Succeed',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fail: 'Fail',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeed: 'number',
      restoreSchemaDetails: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails,
      pageSize: 'number',
      pageNumber: 'number',
      fail: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  process?: string;
  dataSize?: string;
  speed?: string;
  state?: string;
  message?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      process: 'Process',
      dataSize: 'DataSize',
      speed: 'Speed',
      state: 'State',
      message: 'Message',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      process: 'string',
      dataSize: 'string',
      speed: 'string',
      state: 'string',
      message: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails extends $tea.Model {
  restoreFullDetail?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFull extends $tea.Model {
  succeed?: number;
  dataSize?: string;
  speed?: string;
  restoreFullDetails?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails;
  pageSize?: number;
  fail?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      succeed: 'Succeed',
      dataSize: 'DataSize',
      speed: 'Speed',
      restoreFullDetails: 'RestoreFullDetails',
      pageSize: 'PageSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeed: 'number',
      dataSize: 'string',
      speed: 'string',
      restoreFullDetails: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails,
      pageSize: 'number',
      fail: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyTables extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSummary extends $tea.Model {
  endTime?: string;
  startTime?: string;
  state?: string;
  recordId?: string;
  restoreToDate?: string;
  targetCluster?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      state: 'State',
      recordId: 'RecordId',
      restoreToDate: 'RestoreToDate',
      targetCluster: 'TargetCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      state: 'string',
      recordId: 'string',
      restoreToDate: 'string',
      targetCluster: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreIncrDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  process?: string;
  restoreStartTs?: string;
  state?: string;
  restoredTs?: string;
  restoreDelay?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      process: 'Process',
      restoreStartTs: 'RestoreStartTs',
      state: 'State',
      restoredTs: 'RestoredTs',
      restoreDelay: 'RestoreDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      process: 'string',
      restoreStartTs: 'string',
      state: 'string',
      restoredTs: 'string',
      restoreDelay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupIds extends $tea.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBodyInstancesInstance extends $tea.Model {
  isDefault?: boolean;
  instanceName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      instanceName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBodyInstances extends $tea.Model {
  instance?: ListHBaseInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListHBaseInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig extends $tea.Model {
  effective?: string;
  oldValue?: string;
  createTime?: string;
  configureName?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      effective: 'Effective',
      oldValue: 'OldValue',
      createTime: 'CreateTime',
      configureName: 'ConfigureName',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effective: 'string',
      oldValue: 'string',
      createTime: 'string',
      configureName: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList extends $tea.Model {
  config?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBodyConfigureListConfig extends $tea.Model {
  description?: string;
  runningValue?: string;
  configureUnit?: string;
  configureName?: string;
  valueRange?: string;
  defaultValue?: string;
  needRestart?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      runningValue: 'RunningValue',
      configureUnit: 'ConfigureUnit',
      configureName: 'ConfigureName',
      valueRange: 'ValueRange',
      defaultValue: 'DefaultValue',
      needRestart: 'NeedRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      runningValue: 'string',
      configureUnit: 'string',
      configureName: 'string',
      valueRange: 'string',
      defaultValue: 'string',
      needRestart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBodyConfigureList extends $tea.Model {
  config?: ListInstanceServiceConfigurationsResponseBodyConfigureListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigurationsResponseBodyConfigureListConfig },
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTags extends $tea.Model {
  tag?: ListTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListTagsResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn extends $tea.Model {
  slbConnAddr?: string;
  hbaseType?: string;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      slbConnAddr: 'SlbConnAddr',
      hbaseType: 'HbaseType',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbConnAddr: 'string',
      hbaseType: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList extends $tea.Model {
  haSlbConn?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn[];
  static names(): { [key: string]: string } {
    return {
      haSlbConn: 'HaSlbConn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haSlbConn: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListCluster extends $tea.Model {
  haName?: string;
  bdsName?: string;
  haSlbConnList?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList;
  activeName?: string;
  standbyName?: string;
  static names(): { [key: string]: string } {
    return {
      haName: 'HaName',
      bdsName: 'BdsName',
      haSlbConnList: 'HaSlbConnList',
      activeName: 'ActiveName',
      standbyName: 'StandbyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haName: 'string',
      bdsName: 'string',
      haSlbConnList: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList,
      activeName: 'string',
      standbyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterList extends $tea.Model {
  cluster?: QueryHBaseHaDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBodyClusterListCluster extends $tea.Model {
  status?: string;
  DBVersion?: string;
  isRelated?: boolean;
  clusterName?: string;
  DBType?: string;
  lockMode?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      DBVersion: 'DBVersion',
      isRelated: 'IsRelated',
      clusterName: 'ClusterName',
      DBType: 'DBType',
      lockMode: 'LockMode',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      DBVersion: 'string',
      isRelated: 'boolean',
      clusterName: 'string',
      DBType: 'string',
      lockMode: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBodyClusterList extends $tea.Model {
  cluster?: QueryXpackRelateDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryXpackRelateDBResponseBodyClusterListCluster },
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "hbase.aliyuncs.com",
      'ap-southeast-1': "hbase.aliyuncs.com",
      'cn-beijing': "hbase.aliyuncs.com",
      'cn-beijing-finance-1': "hbase.aliyuncs.com",
      'cn-beijing-finance-pop': "hbase.aliyuncs.com",
      'cn-beijing-gov-1': "hbase.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbase.aliyuncs.com",
      'cn-edge-1': "hbase.aliyuncs.com",
      'cn-fujian': "hbase.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbase.aliyuncs.com",
      'cn-hangzhou': "hbase.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbase.aliyuncs.com",
      'cn-hangzhou-finance': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbase.aliyuncs.com",
      'cn-hangzhou-test-306': "hbase.aliyuncs.com",
      'cn-hongkong': "hbase.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbase.aliyuncs.com",
      'cn-north-2-gov-1': "hbase.aliyuncs.com",
      'cn-qingdao': "hbase.aliyuncs.com",
      'cn-qingdao-nebula': "hbase.aliyuncs.com",
      'cn-shanghai': "hbase.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbase.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbase.aliyuncs.com",
      'cn-shanghai-finance-1': "hbase.aliyuncs.com",
      'cn-shanghai-inner': "hbase.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbase.aliyuncs.com",
      'cn-shenzhen': "hbase.aliyuncs.com",
      'cn-shenzhen-finance-1': "hbase.aliyuncs.com",
      'cn-shenzhen-inner': "hbase.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbase.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbase.aliyuncs.com",
      'cn-wuhan': "hbase.aliyuncs.com",
      'cn-yushanfang': "hbase.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbase.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbase.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbase.aliyuncs.com",
      'eu-west-1-oxs': "hbase.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "hbase.ap-northeast-1.aliyuncs.com",
      'us-east-1': "hbase.aliyuncs.com",
      'us-west-1': "hbase.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbase", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addUserHdfsInfoWithOptions(request: AddUserHdfsInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddUserHdfsInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserHdfsInfoResponse>(await this.doRPCRequest("AddUserHdfsInfo", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserHdfsInfoResponse({}));
  }

  async addUserHdfsInfo(request: AddUserHdfsInfoRequest): Promise<AddUserHdfsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserHdfsInfoWithOptions(request, runtime);
  }

  async allocatePublicNetworkAddressWithOptions(request: AllocatePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocatePublicNetworkAddressResponse>(await this.doRPCRequest("AllocatePublicNetworkAddress", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocatePublicNetworkAddressResponse({}));
  }

  async allocatePublicNetworkAddress(request: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  async checkComponentsVersionWithOptions(request: CheckComponentsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CheckComponentsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckComponentsVersionResponse>(await this.doRPCRequest("CheckComponentsVersion", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckComponentsVersionResponse({}));
  }

  async checkComponentsVersion(request: CheckComponentsVersionRequest): Promise<CheckComponentsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkComponentsVersionWithOptions(request, runtime);
  }

  async closeBackupWithOptions(request: CloseBackupRequest, runtime: $Util.RuntimeOptions): Promise<CloseBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseBackupResponse>(await this.doRPCRequest("CloseBackup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CloseBackupResponse({}));
  }

  async closeBackup(request: CloseBackupRequest): Promise<CloseBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeBackupWithOptions(request, runtime);
  }

  async convertInstanceWithOptions(request: ConvertInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertInstanceResponse>(await this.doRPCRequest("ConvertInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertInstanceResponse({}));
  }

  async convertInstance(request: ConvertInstanceRequest): Promise<ConvertInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  async createBackupPlanWithOptions(request: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupPlanResponse>(await this.doRPCRequest("CreateBackupPlan", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupPlanResponse({}));
  }

  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterResponse>(await this.doRPCRequest("CreateCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createGlobalResourceWithOptions(request: CreateGlobalResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGlobalResourceResponse>(await this.doRPCRequest("CreateGlobalResource", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGlobalResourceResponse({}));
  }

  async createGlobalResource(request: CreateGlobalResourceRequest): Promise<CreateGlobalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalResourceWithOptions(request, runtime);
  }

  async createHbaseHaSlbWithOptions(request: CreateHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<CreateHbaseHaSlbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHbaseHaSlbResponse>(await this.doRPCRequest("CreateHbaseHaSlb", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHbaseHaSlbResponse({}));
  }

  async createHbaseHaSlb(request: CreateHbaseHaSlbRequest): Promise<CreateHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHbaseHaSlbWithOptions(request, runtime);
  }

  async createHBaseSlbServerWithOptions(request: CreateHBaseSlbServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateHBaseSlbServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHBaseSlbServerResponse>(await this.doRPCRequest("CreateHBaseSlbServer", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHBaseSlbServerResponse({}));
  }

  async createHBaseSlbServer(request: CreateHBaseSlbServerRequest): Promise<CreateHBaseSlbServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHBaseSlbServerWithOptions(request, runtime);
  }

  async createMultiZoneClusterWithOptions(request: CreateMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateMultiZoneClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMultiZoneClusterResponse>(await this.doRPCRequest("CreateMultiZoneCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMultiZoneClusterResponse({}));
  }

  async createMultiZoneCluster(request: CreateMultiZoneClusterRequest): Promise<CreateMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMultiZoneClusterWithOptions(request, runtime);
  }

  async createRestorePlanWithOptions(request: CreateRestorePlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestorePlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRestorePlanResponse>(await this.doRPCRequest("CreateRestorePlan", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRestorePlanResponse({}));
  }

  async createRestorePlan(request: CreateRestorePlanRequest): Promise<CreateRestorePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestorePlanWithOptions(request, runtime);
  }

  async createServerlessClusterWithOptions(request: CreateServerlessClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerlessClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServerlessClusterResponse>(await this.doRPCRequest("CreateServerlessCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServerlessClusterResponse({}));
  }

  async createServerlessCluster(request: CreateServerlessClusterRequest): Promise<CreateServerlessClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerlessClusterWithOptions(request, runtime);
  }

  async deleteGlobalResourceWithOptions(request: DeleteGlobalResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGlobalResourceResponse>(await this.doRPCRequest("DeleteGlobalResource", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGlobalResourceResponse({}));
  }

  async deleteGlobalResource(request: DeleteGlobalResourceRequest): Promise<DeleteGlobalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalResourceWithOptions(request, runtime);
  }

  async deleteHBaseHaDBWithOptions(request: DeleteHBaseHaDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHBaseHaDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHBaseHaDBResponse>(await this.doRPCRequest("DeleteHBaseHaDB", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHBaseHaDBResponse({}));
  }

  async deleteHBaseHaDB(request: DeleteHBaseHaDBRequest): Promise<DeleteHBaseHaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHBaseHaDBWithOptions(request, runtime);
  }

  async deleteHbaseHaSlbWithOptions(request: DeleteHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHbaseHaSlbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHbaseHaSlbResponse>(await this.doRPCRequest("DeleteHbaseHaSlb", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHbaseHaSlbResponse({}));
  }

  async deleteHbaseHaSlb(request: DeleteHbaseHaSlbRequest): Promise<DeleteHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHbaseHaSlbWithOptions(request, runtime);
  }

  async deleteHBaseSlbServerWithOptions(request: DeleteHBaseSlbServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHBaseSlbServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHBaseSlbServerResponse>(await this.doRPCRequest("DeleteHBaseSlbServer", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHBaseSlbServerResponse({}));
  }

  async deleteHBaseSlbServer(request: DeleteHBaseSlbServerRequest): Promise<DeleteHBaseSlbServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHBaseSlbServerWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteMultiZoneClusterWithOptions(request: DeleteMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMultiZoneClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMultiZoneClusterResponse>(await this.doRPCRequest("DeleteMultiZoneCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMultiZoneClusterResponse({}));
  }

  async deleteMultiZoneCluster(request: DeleteMultiZoneClusterRequest): Promise<DeleteMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMultiZoneClusterWithOptions(request, runtime);
  }

  async deleteServerlessClusterWithOptions(request: DeleteServerlessClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerlessClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServerlessClusterResponse>(await this.doRPCRequest("DeleteServerlessCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServerlessClusterResponse({}));
  }

  async deleteServerlessCluster(request: DeleteServerlessClusterRequest): Promise<DeleteServerlessClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerlessClusterWithOptions(request, runtime);
  }

  async deleteUserHdfsInfoWithOptions(request: DeleteUserHdfsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserHdfsInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserHdfsInfoResponse>(await this.doRPCRequest("DeleteUserHdfsInfo", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserHdfsInfoResponse({}));
  }

  async deleteUserHdfsInfo(request: DeleteUserHdfsInfoRequest): Promise<DeleteUserHdfsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserHdfsInfoWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeBackupPlanConfigWithOptions(request: DescribeBackupPlanConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPlanConfigResponse>(await this.doRPCRequest("DescribeBackupPlanConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPlanConfigResponse({}));
  }

  async describeBackupPlanConfig(request: DescribeBackupPlanConfigRequest): Promise<DescribeBackupPlanConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanConfigWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
  }

  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  async describeBackupStatusWithOptions(request: DescribeBackupStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupStatusResponse>(await this.doRPCRequest("DescribeBackupStatus", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupStatusResponse({}));
  }

  async describeBackupStatus(request: DescribeBackupStatusRequest): Promise<DescribeBackupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupStatusWithOptions(request, runtime);
  }

  async describeBackupSummaryWithOptions(request: DescribeBackupSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupSummaryResponse>(await this.doRPCRequest("DescribeBackupSummary", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupSummaryResponse({}));
  }

  async describeBackupSummary(request: DescribeBackupSummaryRequest): Promise<DescribeBackupSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSummaryWithOptions(request, runtime);
  }

  async describeBackupTablesWithOptions(request: DescribeBackupTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupTablesResponse>(await this.doRPCRequest("DescribeBackupTables", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupTablesResponse({}));
  }

  async describeBackupTables(request: DescribeBackupTablesRequest): Promise<DescribeBackupTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTablesWithOptions(request, runtime);
  }

  async describeClusterConnectionWithOptions(request: DescribeClusterConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterConnectionResponse>(await this.doRPCRequest("DescribeClusterConnection", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterConnectionResponse({}));
  }

  async describeClusterConnection(request: DescribeClusterConnectionRequest): Promise<DescribeClusterConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterConnectionWithOptions(request, runtime);
  }

  async describeColdStorageWithOptions(request: DescribeColdStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColdStorageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeColdStorageResponse>(await this.doRPCRequest("DescribeColdStorage", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeColdStorageResponse({}));
  }

  async describeColdStorage(request: DescribeColdStorageRequest): Promise<DescribeColdStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColdStorageWithOptions(request, runtime);
  }

  async describeDBInstanceUsageWithOptions(request: DescribeDBInstanceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceUsageResponse>(await this.doRPCRequest("DescribeDBInstanceUsage", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceUsageResponse({}));
  }

  async describeDBInstanceUsage(request: DescribeDBInstanceUsageRequest): Promise<DescribeDBInstanceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceUsageWithOptions(request, runtime);
  }

  async describeDeletedInstancesWithOptions(request: DescribeDeletedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeletedInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeletedInstancesResponse>(await this.doRPCRequest("DescribeDeletedInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeletedInstancesResponse({}));
  }

  async describeDeletedInstances(request: DescribeDeletedInstancesRequest): Promise<DescribeDeletedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeletedInstancesWithOptions(request, runtime);
  }

  async describeDiskWarningLineWithOptions(request: DescribeDiskWarningLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskWarningLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDiskWarningLineResponse>(await this.doRPCRequest("DescribeDiskWarningLine", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDiskWarningLineResponse({}));
  }

  async describeDiskWarningLine(request: DescribeDiskWarningLineRequest): Promise<DescribeDiskWarningLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskWarningLineWithOptions(request, runtime);
  }

  async describeEndpointsWithOptions(request: DescribeEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEndpointsResponse>(await this.doRPCRequest("DescribeEndpoints", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEndpointsResponse({}));
  }

  async describeEndpoints(request: DescribeEndpointsRequest): Promise<DescribeEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doRPCRequest("DescribeInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceTypeWithOptions(request: DescribeInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceTypeResponse>(await this.doRPCRequest("DescribeInstanceType", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceTypeResponse({}));
  }

  async describeInstanceType(request: DescribeInstanceTypeRequest): Promise<DescribeInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypeWithOptions(request, runtime);
  }

  async describeIpWhitelistWithOptions(request: DescribeIpWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpWhitelistResponse>(await this.doRPCRequest("DescribeIpWhitelist", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpWhitelistResponse({}));
  }

  async describeIpWhitelist(request: DescribeIpWhitelistRequest): Promise<DescribeIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpWhitelistWithOptions(request, runtime);
  }

  async describeMultiZoneAvailableRegionsWithOptions(request: DescribeMultiZoneAvailableRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneAvailableRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMultiZoneAvailableRegionsResponse>(await this.doRPCRequest("DescribeMultiZoneAvailableRegions", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMultiZoneAvailableRegionsResponse({}));
  }

  async describeMultiZoneAvailableRegions(request: DescribeMultiZoneAvailableRegionsRequest): Promise<DescribeMultiZoneAvailableRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableRegionsWithOptions(request, runtime);
  }

  async describeMultiZoneAvailableResourceWithOptions(request: DescribeMultiZoneAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMultiZoneAvailableResourceResponse>(await this.doRPCRequest("DescribeMultiZoneAvailableResource", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMultiZoneAvailableResourceResponse({}));
  }

  async describeMultiZoneAvailableResource(request: DescribeMultiZoneAvailableResourceRequest): Promise<DescribeMultiZoneAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableResourceWithOptions(request, runtime);
  }

  async describeMultiZoneClusterWithOptions(request: DescribeMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMultiZoneClusterResponse>(await this.doRPCRequest("DescribeMultiZoneCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMultiZoneClusterResponse({}));
  }

  async describeMultiZoneCluster(request: DescribeMultiZoneClusterRequest): Promise<DescribeMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneClusterWithOptions(request, runtime);
  }

  async describeRecoverableTimeRangeWithOptions(request: DescribeRecoverableTimeRangeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoverableTimeRangeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecoverableTimeRangeResponse>(await this.doRPCRequest("DescribeRecoverableTimeRange", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecoverableTimeRangeResponse({}));
  }

  async describeRecoverableTimeRange(request: DescribeRecoverableTimeRangeRequest): Promise<DescribeRecoverableTimeRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoverableTimeRangeWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRestoreFullDetailsWithOptions(request: DescribeRestoreFullDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreFullDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreFullDetailsResponse>(await this.doRPCRequest("DescribeRestoreFullDetails", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreFullDetailsResponse({}));
  }

  async describeRestoreFullDetails(request: DescribeRestoreFullDetailsRequest): Promise<DescribeRestoreFullDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreFullDetailsWithOptions(request, runtime);
  }

  async describeRestoreIncrDetailWithOptions(request: DescribeRestoreIncrDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreIncrDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreIncrDetailResponse>(await this.doRPCRequest("DescribeRestoreIncrDetail", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreIncrDetailResponse({}));
  }

  async describeRestoreIncrDetail(request: DescribeRestoreIncrDetailRequest): Promise<DescribeRestoreIncrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreIncrDetailWithOptions(request, runtime);
  }

  async describeRestoreSchemaDetailsWithOptions(request: DescribeRestoreSchemaDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreSchemaDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreSchemaDetailsResponse>(await this.doRPCRequest("DescribeRestoreSchemaDetails", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreSchemaDetailsResponse({}));
  }

  async describeRestoreSchemaDetails(request: DescribeRestoreSchemaDetailsRequest): Promise<DescribeRestoreSchemaDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreSchemaDetailsWithOptions(request, runtime);
  }

  async describeRestoreSummaryWithOptions(request: DescribeRestoreSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreSummaryResponse>(await this.doRPCRequest("DescribeRestoreSummary", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreSummaryResponse({}));
  }

  async describeRestoreSummary(request: DescribeRestoreSummaryRequest): Promise<DescribeRestoreSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreSummaryWithOptions(request, runtime);
  }

  async describeRestoreTablesWithOptions(request: DescribeRestoreTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreTablesResponse>(await this.doRPCRequest("DescribeRestoreTables", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreTablesResponse({}));
  }

  async describeRestoreTables(request: DescribeRestoreTablesRequest): Promise<DescribeRestoreTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreTablesWithOptions(request, runtime);
  }

  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.doRPCRequest("DescribeSecurityGroups", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupsResponse({}));
  }

  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  async describeSubDomainWithOptions(request: DescribeSubDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubDomainResponse>(await this.doRPCRequest("DescribeSubDomain", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubDomainResponse({}));
  }

  async describeSubDomain(request: DescribeSubDomainRequest): Promise<DescribeSubDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubDomainWithOptions(request, runtime);
  }

  async enableHBaseueBackupWithOptions(request: EnableHBaseueBackupRequest, runtime: $Util.RuntimeOptions): Promise<EnableHBaseueBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableHBaseueBackupResponse>(await this.doRPCRequest("EnableHBaseueBackup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableHBaseueBackupResponse({}));
  }

  async enableHBaseueBackup(request: EnableHBaseueBackupRequest): Promise<EnableHBaseueBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHBaseueBackupWithOptions(request, runtime);
  }

  async enableHBaseueModuleWithOptions(request: EnableHBaseueModuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableHBaseueModuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableHBaseueModuleResponse>(await this.doRPCRequest("EnableHBaseueModule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableHBaseueModuleResponse({}));
  }

  async enableHBaseueModule(request: EnableHBaseueModuleRequest): Promise<EnableHBaseueModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHBaseueModuleWithOptions(request, runtime);
  }

  async evaluateMultiZoneResourceWithOptions(request: EvaluateMultiZoneResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateMultiZoneResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EvaluateMultiZoneResourceResponse>(await this.doRPCRequest("EvaluateMultiZoneResource", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EvaluateMultiZoneResourceResponse({}));
  }

  async evaluateMultiZoneResource(request: EvaluateMultiZoneResourceRequest): Promise<EvaluateMultiZoneResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateMultiZoneResourceWithOptions(request, runtime);
  }

  async getMultimodeCmsUrlWithOptions(request: GetMultimodeCmsUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMultimodeCmsUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMultimodeCmsUrlResponse>(await this.doRPCRequest("GetMultimodeCmsUrl", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMultimodeCmsUrlResponse({}));
  }

  async getMultimodeCmsUrl(request: GetMultimodeCmsUrlRequest): Promise<GetMultimodeCmsUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultimodeCmsUrlWithOptions(request, runtime);
  }

  async listHBaseInstancesWithOptions(request: ListHBaseInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListHBaseInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHBaseInstancesResponse>(await this.doRPCRequest("ListHBaseInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHBaseInstancesResponse({}));
  }

  async listHBaseInstances(request: ListHBaseInstancesRequest): Promise<ListHBaseInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHBaseInstancesWithOptions(request, runtime);
  }

  async listInstanceServiceConfigHistoriesWithOptions(request: ListInstanceServiceConfigHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceServiceConfigHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceServiceConfigHistoriesResponse>(await this.doRPCRequest("ListInstanceServiceConfigHistories", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceServiceConfigHistoriesResponse({}));
  }

  async listInstanceServiceConfigHistories(request: ListInstanceServiceConfigHistoriesRequest): Promise<ListInstanceServiceConfigHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceServiceConfigHistoriesWithOptions(request, runtime);
  }

  async listInstanceServiceConfigurationsWithOptions(request: ListInstanceServiceConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceServiceConfigurationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceServiceConfigurationsResponse>(await this.doRPCRequest("ListInstanceServiceConfigurations", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceServiceConfigurationsResponse({}));
  }

  async listInstanceServiceConfigurations(request: ListInstanceServiceConfigurationsRequest): Promise<ListInstanceServiceConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceServiceConfigurationsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagsResponse>(await this.doRPCRequest("ListTags", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagsResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  async modifyBackupPlanConfigWithOptions(request: ModifyBackupPlanConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPlanConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPlanConfigResponse>(await this.doRPCRequest("ModifyBackupPlanConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPlanConfigResponse({}));
  }

  async modifyBackupPlanConfig(request: ModifyBackupPlanConfigRequest): Promise<ModifyBackupPlanConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPlanConfigWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyClusterDeletionProtectionWithOptions(request: ModifyClusterDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterDeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterDeletionProtectionResponse>(await this.doRPCRequest("ModifyClusterDeletionProtection", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterDeletionProtectionResponse({}));
  }

  async modifyClusterDeletionProtection(request: ModifyClusterDeletionProtectionRequest): Promise<ModifyClusterDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterDeletionProtectionWithOptions(request, runtime);
  }

  async modifyDiskWarningLineWithOptions(request: ModifyDiskWarningLineRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskWarningLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDiskWarningLineResponse>(await this.doRPCRequest("ModifyDiskWarningLine", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDiskWarningLineResponse({}));
  }

  async modifyDiskWarningLine(request: ModifyDiskWarningLineRequest): Promise<ModifyDiskWarningLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskWarningLineWithOptions(request, runtime);
  }

  async modifyInstanceMaintainTimeWithOptions(request: ModifyInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceMaintainTimeResponse>(await this.doRPCRequest("ModifyInstanceMaintainTime", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceMaintainTimeResponse({}));
  }

  async modifyInstanceMaintainTime(request: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceNameResponse>(await this.doRPCRequest("ModifyInstanceName", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceNameResponse({}));
  }

  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  async modifyInstanceServiceConfigWithOptions(request: ModifyInstanceServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceServiceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceServiceConfigResponse>(await this.doRPCRequest("ModifyInstanceServiceConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceServiceConfigResponse({}));
  }

  async modifyInstanceServiceConfig(request: ModifyInstanceServiceConfigRequest): Promise<ModifyInstanceServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceServiceConfigWithOptions(request, runtime);
  }

  async modifyInstanceTypeWithOptions(request: ModifyInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceTypeResponse>(await this.doRPCRequest("ModifyInstanceType", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceTypeResponse({}));
  }

  async modifyInstanceType(request: ModifyInstanceTypeRequest): Promise<ModifyInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTypeWithOptions(request, runtime);
  }

  async modifyIpWhitelistWithOptions(request: ModifyIpWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpWhitelistResponse>(await this.doRPCRequest("ModifyIpWhitelist", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpWhitelistResponse({}));
  }

  async modifyIpWhitelist(request: ModifyIpWhitelistRequest): Promise<ModifyIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpWhitelistWithOptions(request, runtime);
  }

  async modifyMultiZoneClusterNodeTypeWithOptions(request: ModifyMultiZoneClusterNodeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMultiZoneClusterNodeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMultiZoneClusterNodeTypeResponse>(await this.doRPCRequest("ModifyMultiZoneClusterNodeType", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMultiZoneClusterNodeTypeResponse({}));
  }

  async modifyMultiZoneClusterNodeType(request: ModifyMultiZoneClusterNodeTypeRequest): Promise<ModifyMultiZoneClusterNodeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMultiZoneClusterNodeTypeWithOptions(request, runtime);
  }

  async modifySecurityGroupsWithOptions(request: ModifySecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityGroupsResponse>(await this.doRPCRequest("ModifySecurityGroups", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityGroupsResponse({}));
  }

  async modifySecurityGroups(request: ModifySecurityGroupsRequest): Promise<ModifySecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupsWithOptions(request, runtime);
  }

  async modifyUIAccountPasswordWithOptions(request: ModifyUIAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUIAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUIAccountPasswordResponse>(await this.doRPCRequest("ModifyUIAccountPassword", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUIAccountPasswordResponse({}));
  }

  async modifyUIAccountPassword(request: ModifyUIAccountPasswordRequest): Promise<ModifyUIAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUIAccountPasswordWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async openBackupWithOptions(request: OpenBackupRequest, runtime: $Util.RuntimeOptions): Promise<OpenBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenBackupResponse>(await this.doRPCRequest("OpenBackup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new OpenBackupResponse({}));
  }

  async openBackup(request: OpenBackupRequest): Promise<OpenBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openBackupWithOptions(request, runtime);
  }

  async purgeInstanceWithOptions(request: PurgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<PurgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PurgeInstanceResponse>(await this.doRPCRequest("PurgeInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PurgeInstanceResponse({}));
  }

  async purgeInstance(request: PurgeInstanceRequest): Promise<PurgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purgeInstanceWithOptions(request, runtime);
  }

  async queryHBaseHaDBWithOptions(request: QueryHBaseHaDBRequest, runtime: $Util.RuntimeOptions): Promise<QueryHBaseHaDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryHBaseHaDBResponse>(await this.doRPCRequest("QueryHBaseHaDB", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryHBaseHaDBResponse({}));
  }

  async queryHBaseHaDB(request: QueryHBaseHaDBRequest): Promise<QueryHBaseHaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHBaseHaDBWithOptions(request, runtime);
  }

  async queryXpackRelateDBWithOptions(request: QueryXpackRelateDBRequest, runtime: $Util.RuntimeOptions): Promise<QueryXpackRelateDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryXpackRelateDBResponse>(await this.doRPCRequest("QueryXpackRelateDB", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryXpackRelateDBResponse({}));
  }

  async queryXpackRelateDB(request: QueryXpackRelateDBRequest): Promise<QueryXpackRelateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryXpackRelateDBWithOptions(request, runtime);
  }

  async relateDbForHBaseHaWithOptions(request: RelateDbForHBaseHaRequest, runtime: $Util.RuntimeOptions): Promise<RelateDbForHBaseHaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RelateDbForHBaseHaResponse>(await this.doRPCRequest("RelateDbForHBaseHa", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RelateDbForHBaseHaResponse({}));
  }

  async relateDbForHBaseHa(request: RelateDbForHBaseHaRequest): Promise<RelateDbForHBaseHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.relateDbForHBaseHaWithOptions(request, runtime);
  }

  async releasePublicNetworkAddressWithOptions(request: ReleasePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleasePublicNetworkAddressResponse>(await this.doRPCRequest("ReleasePublicNetworkAddress", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleasePublicNetworkAddressResponse({}));
  }

  async releasePublicNetworkAddress(request: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async resizeColdStorageSizeWithOptions(request: ResizeColdStorageSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeColdStorageSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeColdStorageSizeResponse>(await this.doRPCRequest("ResizeColdStorageSize", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeColdStorageSizeResponse({}));
  }

  async resizeColdStorageSize(request: ResizeColdStorageSizeRequest): Promise<ResizeColdStorageSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeColdStorageSizeWithOptions(request, runtime);
  }

  async resizeDiskSizeWithOptions(request: ResizeDiskSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeDiskSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeDiskSizeResponse>(await this.doRPCRequest("ResizeDiskSize", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeDiskSizeResponse({}));
  }

  async resizeDiskSize(request: ResizeDiskSizeRequest): Promise<ResizeDiskSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDiskSizeWithOptions(request, runtime);
  }

  async resizeMultiZoneClusterDiskSizeWithOptions(request: ResizeMultiZoneClusterDiskSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeMultiZoneClusterDiskSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeMultiZoneClusterDiskSizeResponse>(await this.doRPCRequest("ResizeMultiZoneClusterDiskSize", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeMultiZoneClusterDiskSizeResponse({}));
  }

  async resizeMultiZoneClusterDiskSize(request: ResizeMultiZoneClusterDiskSizeRequest): Promise<ResizeMultiZoneClusterDiskSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterDiskSizeWithOptions(request, runtime);
  }

  async resizeMultiZoneClusterNodeCountWithOptions(request: ResizeMultiZoneClusterNodeCountRequest, runtime: $Util.RuntimeOptions): Promise<ResizeMultiZoneClusterNodeCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeMultiZoneClusterNodeCountResponse>(await this.doRPCRequest("ResizeMultiZoneClusterNodeCount", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeMultiZoneClusterNodeCountResponse({}));
  }

  async resizeMultiZoneClusterNodeCount(request: ResizeMultiZoneClusterNodeCountRequest): Promise<ResizeMultiZoneClusterNodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterNodeCountWithOptions(request, runtime);
  }

  async resizeNodeCountWithOptions(request: ResizeNodeCountRequest, runtime: $Util.RuntimeOptions): Promise<ResizeNodeCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeNodeCountResponse>(await this.doRPCRequest("ResizeNodeCount", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeNodeCountResponse({}));
  }

  async resizeNodeCount(request: ResizeNodeCountRequest): Promise<ResizeNodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeNodeCountWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartInstanceResponse>(await this.doRPCRequest("RestartInstance", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async switchHbaseHaSlbWithOptions(request: SwitchHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<SwitchHbaseHaSlbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchHbaseHaSlbResponse>(await this.doRPCRequest("SwitchHbaseHaSlb", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchHbaseHaSlbResponse({}));
  }

  async switchHbaseHaSlb(request: SwitchHbaseHaSlbRequest): Promise<SwitchHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchHbaseHaSlbWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnTagResourcesResponse>(await this.doRPCRequest("UnTagResources", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnTagResourcesResponse({}));
  }

  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  async upgradeMinorVersionWithOptions(request: UpgradeMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMinorVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeMinorVersionResponse>(await this.doRPCRequest("UpgradeMinorVersion", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeMinorVersionResponse({}));
  }

  async upgradeMinorVersion(request: UpgradeMinorVersionRequest): Promise<UpgradeMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

  async upgradeMultiZoneClusterWithOptions(request: UpgradeMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMultiZoneClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeMultiZoneClusterResponse>(await this.doRPCRequest("UpgradeMultiZoneCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeMultiZoneClusterResponse({}));
  }

  async upgradeMultiZoneCluster(request: UpgradeMultiZoneClusterRequest): Promise<UpgradeMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMultiZoneClusterWithOptions(request, runtime);
  }

  async xpackRelateDBWithOptions(request: XpackRelateDBRequest, runtime: $Util.RuntimeOptions): Promise<XpackRelateDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<XpackRelateDBResponse>(await this.doRPCRequest("XpackRelateDB", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new XpackRelateDBResponse({}));
  }

  async xpackRelateDB(request: XpackRelateDBRequest): Promise<XpackRelateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.xpackRelateDBWithOptions(request, runtime);
  }

}
