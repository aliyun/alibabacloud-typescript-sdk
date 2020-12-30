// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocatePublicContactPointsRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicContactPointsResponseBody extends $tea.Model {
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

export class AllocatePublicContactPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocatePublicContactPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocatePublicContactPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  backupTime?: string;
  backupPeriod?: string;
  retentionPeriod?: number;
  active?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      backupTime: 'BackupTime',
      backupPeriod: 'BackupPeriod',
      retentionPeriod: 'RetentionPeriod',
      active: 'Active',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      backupTime: 'string',
      backupPeriod: 'string',
      retentionPeriod: 'number',
      active: 'boolean',
      clientToken: 'string',
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
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  clientToken?: string;
  regionId?: string;
  zoneId?: string;
  clusterName?: string;
  dataCenterName?: string;
  majorVersion?: string;
  instanceType?: string;
  nodeCount?: number;
  diskType?: string;
  diskSize?: number;
  vpcId?: string;
  vswitchId?: string;
  password?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      dataCenterName: 'DataCenterName',
      majorVersion: 'MajorVersion',
      instanceType: 'InstanceType',
      nodeCount: 'NodeCount',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      clusterName: 'string',
      dataCenterName: 'string',
      majorVersion: 'string',
      instanceType: 'string',
      nodeCount: 'number',
      diskType: 'string',
      diskSize: 'number',
      vpcId: 'string',
      vswitchId: 'string',
      password: 'string',
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
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

export class CreateDataCenterRequest extends $tea.Model {
  payType?: string;
  periodUnit?: string;
  period?: number;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  clientToken?: string;
  regionId?: string;
  zoneId?: string;
  clusterId?: string;
  dataCenterName?: string;
  instanceType?: string;
  nodeCount?: number;
  diskType?: string;
  diskSize?: number;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      dataCenterName: 'DataCenterName',
      instanceType: 'InstanceType',
      nodeCount: 'NodeCount',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
      periodUnit: 'string',
      period: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      dataCenterName: 'string',
      instanceType: 'string',
      nodeCount: 'number',
      diskType: 'string',
      diskSize: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCenterResponseBody extends $tea.Model {
  dataCenterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenterId: 'DataCenterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanResponseBody extends $tea.Model {
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

export class DeleteBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
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

export class DeleteClusterResponseBody extends $tea.Model {
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

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataCenterRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataCenterResponseBody extends $tea.Model {
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

export class DeleteDataCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeToolExecutionHistoryRequest extends $tea.Model {
  clusterId?: string;
  jobId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeToolExecutionHistoryResponseBody extends $tea.Model {
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

export class DeleteNodeToolExecutionHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNodeToolExecutionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNodeToolExecutionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
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

export class DescribeAccountsResponseBody extends $tea.Model {
  requestId?: string;
  accounts?: DescribeAccountsResponseBodyAccounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accounts: DescribeAccountsResponseBodyAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  backupId?: string;
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      backupId: 'BackupId',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      backupId: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupResponseBody extends $tea.Model {
  requestId?: string;
  backup?: DescribeBackupResponseBodyBackup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backup: DescribeBackupResponseBodyBackup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  backupPlan?: DescribeBackupPlanResponseBodyBackupPlan;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupPlan: DescribeBackupPlanResponseBodyBackupPlan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansRequest extends $tea.Model {
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

export class DescribeBackupPlansResponseBody extends $tea.Model {
  requestId?: string;
  backupPlans?: DescribeBackupPlansResponseBodyBackupPlans;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupPlans: 'BackupPlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupPlans: DescribeBackupPlansResponseBodyBackupPlans,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  requestId?: string;
  backups?: DescribeBackupsResponseBodyBackups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backups: 'Backups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class DescribeClusterRequest extends $tea.Model {
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

export class DescribeClusterResponseBody extends $tea.Model {
  requestId?: string;
  cluster?: DescribeClusterResponseBodyCluster;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cluster: DescribeClusterResponseBodyCluster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardRequest extends $tea.Model {
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

export class DescribeClusterDashboardResponseBody extends $tea.Model {
  requestId?: string;
  dashboard?: DescribeClusterDashboardResponseBodyDashboard;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboard: 'Dashboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboard: DescribeClusterDashboardResponseBodyDashboard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterDashboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  clusterName?: string;
  resourceGroupId?: string;
  tag?: DescribeClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      clusterName: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: DescribeClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: DescribeClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterStatusRequest extends $tea.Model {
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

export class DescribeClusterStatusResponseBody extends $tea.Model {
  status?: string;
  createdTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createdTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsRequest extends $tea.Model {
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

export class DescribeContactPointsResponseBody extends $tea.Model {
  requestId?: string;
  contactPoints?: DescribeContactPointsResponseBodyContactPoints;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactPoints: 'ContactPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactPoints: DescribeContactPointsResponseBodyContactPoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContactPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContactPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCenterRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCenterResponseBody extends $tea.Model {
  status?: string;
  autoRenewPeriod?: number;
  dataCenterId?: string;
  commodityInstance?: string;
  createdTime?: string;
  requestId?: string;
  nodeCount?: number;
  zoneId?: string;
  clusterId?: string;
  payType?: string;
  lockMode?: string;
  vswitchId?: string;
  dataCenterName?: string;
  diskType?: string;
  vpcId?: string;
  autoRenewal?: boolean;
  diskSize?: number;
  regionId?: string;
  expireTime?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataCenterId: 'DataCenterId',
      commodityInstance: 'CommodityInstance',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      nodeCount: 'NodeCount',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      payType: 'PayType',
      lockMode: 'LockMode',
      vswitchId: 'VswitchId',
      dataCenterName: 'DataCenterName',
      diskType: 'DiskType',
      vpcId: 'VpcId',
      autoRenewal: 'AutoRenewal',
      diskSize: 'DiskSize',
      regionId: 'RegionId',
      expireTime: 'ExpireTime',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      autoRenewPeriod: 'number',
      dataCenterId: 'string',
      commodityInstance: 'string',
      createdTime: 'string',
      requestId: 'string',
      nodeCount: 'number',
      zoneId: 'string',
      clusterId: 'string',
      payType: 'string',
      lockMode: 'string',
      vswitchId: 'string',
      dataCenterName: 'string',
      diskType: 'string',
      vpcId: 'string',
      autoRenewal: 'boolean',
      diskSize: 'number',
      regionId: 'string',
      expireTime: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCentersRequest extends $tea.Model {
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

export class DescribeDataCentersResponseBody extends $tea.Model {
  dataCenters?: DescribeDataCentersResponseBodyDataCenters;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenters: 'DataCenters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenters: DescribeDataCentersResponseBodyDataCenters,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCentersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataCentersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataCentersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedClustersRequest extends $tea.Model {
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

export class DescribeDeletedClustersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: DescribeDeletedClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: DescribeDeletedClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeletedClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeletedClustersResponseBody,
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
  ipList?: DescribeIpWhitelistResponseBodyIpList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipList: DescribeIpWhitelistResponseBodyIpList,
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

export class DescribeIpWhitelistGroupsRequest extends $tea.Model {
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

export class DescribeIpWhitelistGroupsResponseBody extends $tea.Model {
  requestId?: string;
  groups?: DescribeIpWhitelistGroupsResponseBodyGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: DescribeIpWhitelistGroupsResponseBodyGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpWhitelistGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpWhitelistGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoriesRequest extends $tea.Model {
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

export class DescribeNodeToolExecutionHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  histories?: DescribeNodeToolExecutionHistoriesResponseBodyHistories;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      histories: 'Histories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      histories: DescribeNodeToolExecutionHistoriesResponseBodyHistories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNodeToolExecutionHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNodeToolExecutionHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoryRequest extends $tea.Model {
  clusterId?: string;
  dcId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dcId: 'DcId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dcId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoryResponseBody extends $tea.Model {
  modifyTime?: number;
  dataCenterId?: string;
  requestId?: string;
  isEnded?: boolean;
  command?: string;
  createTime?: number;
  arguments?: string;
  regionId?: string;
  errorMessage?: string;
  nodes?: string;
  jobId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      dataCenterId: 'DataCenterId',
      requestId: 'RequestId',
      isEnded: 'IsEnded',
      command: 'Command',
      createTime: 'CreateTime',
      arguments: 'Arguments',
      regionId: 'RegionId',
      errorMessage: 'ErrorMessage',
      nodes: 'Nodes',
      jobId: 'JobId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'number',
      dataCenterId: 'string',
      requestId: 'string',
      isEnded: 'boolean',
      command: 'string',
      createTime: 'number',
      arguments: 'string',
      regionId: 'string',
      errorMessage: 'string',
      nodes: 'string',
      jobId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNodeToolExecutionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNodeToolExecutionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoriesRequest extends $tea.Model {
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

export class DescribeParameterModificationHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  histories?: DescribeParameterModificationHistoriesResponseBodyHistories;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      histories: 'Histories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      histories: DescribeParameterModificationHistoriesResponseBodyHistories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParameterModificationHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParameterModificationHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
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

export class DescribeParametersResponseBody extends $tea.Model {
  totalCount?: number;
  parameters?: DescribeParametersResponseBodyParameters;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      parameters: DescribeParametersResponseBodyParameters,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParametersResponseBody,
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

export class ExecuteNodeToolRequest extends $tea.Model {
  clusterId?: string;
  command?: string;
  arguments?: string;
  dataCenterId?: string;
  executeNodes?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      command: 'Command',
      arguments: 'Arguments',
      dataCenterId: 'DataCenterId',
      executeNodes: 'ExecuteNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      command: 'string',
      arguments: 'string',
      dataCenterId: 'string',
      executeNodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeToolResponseBody extends $tea.Model {
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

export class ExecuteNodeToolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteNodeToolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteNodeToolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCmsUrlRequest extends $tea.Model {
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

export class GetCmsUrlResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCmsUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCmsUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCmsUrlResponseBody,
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

export class ModifyAccountPasswordRequest extends $tea.Model {
  clusterId?: string;
  account?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      account: 'Account',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      account: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordResponseBody extends $tea.Model {
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

export class ModifyAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  backupTime?: string;
  backupPeriod?: string;
  retentionPeriod?: number;
  active?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      backupTime: 'BackupTime',
      backupPeriod: 'BackupPeriod',
      retentionPeriod: 'RetentionPeriod',
      active: 'Active',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      backupTime: 'string',
      backupPeriod: 'string',
      retentionPeriod: 'number',
      active: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanResponseBody extends $tea.Model {
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

export class ModifyBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequest extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterResponseBody extends $tea.Model {
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

export class ModifyClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataCenterRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  dataCenterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      dataCenterName: 'DataCenterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      dataCenterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataCenterResponseBody extends $tea.Model {
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

export class ModifyDataCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataCenterResponseBody,
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

export class ModifyInstanceTypeRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeResponseBody extends $tea.Model {
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ipList: 'string',
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

export class ModifyIpWhitelistGroupRequest extends $tea.Model {
  clusterId?: string;
  ipList?: string;
  groupName?: string;
  ipVersion?: number;
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
      ipVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhitelistGroupResponseBody extends $tea.Model {
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

export class ModifyIpWhitelistGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpWhitelistGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpWhitelistGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterResponseBody extends $tea.Model {
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

export class ModifyParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyParameterResponseBody,
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

export class PurgeClusterRequest extends $tea.Model {
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

export class PurgeClusterResponseBody extends $tea.Model {
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

export class PurgeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PurgeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PurgeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootClusterRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootClusterResponseBody extends $tea.Model {
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

export class RebootClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebootClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebootClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicContactPointsRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicContactPointsResponseBody extends $tea.Model {
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

export class ReleasePublicContactPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleasePublicContactPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleasePublicContactPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  diskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      diskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeResponseBody extends $tea.Model {
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

export class ResizeNodeCountRequest extends $tea.Model {
  clusterId?: string;
  dataCenterId?: string;
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataCenterId: 'string',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountResponseBody extends $tea.Model {
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

export class UpgradeClusterVersionRequest extends $tea.Model {
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

export class UpgradeClusterVersionResponseBody extends $tea.Model {
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

export class UpgradeClusterVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeClusterVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeClusterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  account?: DescribeAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupResponseBodyBackup extends $tea.Model {
  endTime?: string;
  status?: string;
  startTime?: string;
  size?: number;
  backupType?: string;
  backupId?: string;
  details?: string;
  dataCenterId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      size: 'Size',
      backupType: 'BackupType',
      backupId: 'BackupId',
      details: 'Details',
      dataCenterId: 'DataCenterId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      startTime: 'string',
      size: 'number',
      backupType: 'string',
      backupId: 'string',
      details: 'string',
      dataCenterId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanResponseBodyBackupPlan extends $tea.Model {
  active?: boolean;
  backupPeriod?: string;
  retentionPeriod?: number;
  createdTime?: string;
  backupTime?: string;
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      backupPeriod: 'BackupPeriod',
      retentionPeriod: 'RetentionPeriod',
      createdTime: 'CreatedTime',
      backupTime: 'BackupTime',
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      backupPeriod: 'string',
      retentionPeriod: 'number',
      createdTime: 'string',
      backupTime: 'string',
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlan extends $tea.Model {
  active?: boolean;
  backupPeriod?: string;
  retentionPeriod?: number;
  createdTime?: string;
  backupTime?: string;
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      backupPeriod: 'BackupPeriod',
      retentionPeriod: 'RetentionPeriod',
      createdTime: 'CreatedTime',
      backupTime: 'BackupTime',
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      backupPeriod: 'string',
      retentionPeriod: 'number',
      createdTime: 'string',
      backupTime: 'string',
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlans extends $tea.Model {
  backupPlan?: DescribeBackupPlansResponseBodyBackupPlansBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlan: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackupsBackup extends $tea.Model {
  endTime?: string;
  status?: string;
  startTime?: string;
  size?: number;
  backupType?: string;
  backupId?: string;
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      size: 'Size',
      backupType: 'BackupType',
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      startTime: 'string',
      size: 'number',
      backupType: 'string',
      backupId: 'string',
      clusterId: 'string',
      dataCenterId: 'string',
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

export class DescribeClusterResponseBodyClusterTagsTag extends $tea.Model {
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

export class DescribeClusterResponseBodyClusterTags extends $tea.Model {
  tag?: DescribeClusterResponseBodyClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyCluster extends $tea.Model {
  status?: string;
  expireTime?: string;
  maintainStartTime?: string;
  payType?: string;
  maintainEndTime?: string;
  tags?: DescribeClusterResponseBodyClusterTags;
  lockMode?: string;
  minorVersion?: string;
  autoRenewPeriod?: number;
  isLatestVersion?: boolean;
  dataCenterCount?: number;
  autoRenewal?: boolean;
  resourceGroupId?: string;
  clusterName?: string;
  majorVersion?: string;
  createdTime?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      maintainStartTime: 'MaintainStartTime',
      payType: 'PayType',
      maintainEndTime: 'MaintainEndTime',
      tags: 'Tags',
      lockMode: 'LockMode',
      minorVersion: 'MinorVersion',
      autoRenewPeriod: 'AutoRenewPeriod',
      isLatestVersion: 'IsLatestVersion',
      dataCenterCount: 'DataCenterCount',
      autoRenewal: 'AutoRenewal',
      resourceGroupId: 'ResourceGroupId',
      clusterName: 'ClusterName',
      majorVersion: 'MajorVersion',
      createdTime: 'CreatedTime',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      maintainStartTime: 'string',
      payType: 'string',
      maintainEndTime: 'string',
      tags: DescribeClusterResponseBodyClusterTags,
      lockMode: 'string',
      minorVersion: 'string',
      autoRenewPeriod: 'number',
      isLatestVersion: 'boolean',
      dataCenterCount: 'number',
      autoRenewal: 'boolean',
      resourceGroupId: 'string',
      clusterName: 'string',
      majorVersion: 'string',
      createdTime: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodesNode extends $tea.Model {
  status?: string;
  address?: string;
  load?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      address: 'Address',
      load: 'Load',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      address: 'string',
      load: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodes extends $tea.Model {
  node?: DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodesNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenter extends $tea.Model {
  nodes?: DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodes;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenterNodes,
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponseBodyDashboardDataCenters extends $tea.Model {
  dataCenter?: DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenter[];
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: { 'type': 'array', 'itemType': DescribeClusterDashboardResponseBodyDashboardDataCentersDataCenter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDashboardResponseBodyDashboard extends $tea.Model {
  dataCenters?: DescribeClusterDashboardResponseBodyDashboardDataCenters;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenters: 'DataCenters',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenters: DescribeClusterDashboardResponseBodyDashboardDataCenters,
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequestTag extends $tea.Model {
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

export class DescribeClustersResponseBodyClustersClusterTagsTag extends $tea.Model {
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

export class DescribeClustersResponseBodyClustersClusterTags extends $tea.Model {
  tag?: DescribeClustersResponseBodyClustersClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClustersClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyClustersCluster extends $tea.Model {
  status?: string;
  expireTime?: string;
  payType?: string;
  tags?: DescribeClustersResponseBodyClustersClusterTags;
  lockMode?: string;
  autoRenewPeriod?: number;
  minorVersion?: string;
  dataCenterCount?: number;
  autoRenewal?: boolean;
  resourceGroupId?: string;
  clusterName?: string;
  majorVersion?: string;
  createdTime?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      tags: 'Tags',
      lockMode: 'LockMode',
      autoRenewPeriod: 'AutoRenewPeriod',
      minorVersion: 'MinorVersion',
      dataCenterCount: 'DataCenterCount',
      autoRenewal: 'AutoRenewal',
      resourceGroupId: 'ResourceGroupId',
      clusterName: 'ClusterName',
      majorVersion: 'MajorVersion',
      createdTime: 'CreatedTime',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      payType: 'string',
      tags: DescribeClustersResponseBodyClustersClusterTags,
      lockMode: 'string',
      autoRenewPeriod: 'number',
      minorVersion: 'string',
      dataCenterCount: 'number',
      autoRenewal: 'boolean',
      resourceGroupId: 'string',
      clusterName: 'string',
      majorVersion: 'string',
      createdTime: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyClusters extends $tea.Model {
  cluster?: DescribeClustersResponseBodyClustersCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClustersCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsResponseBodyContactPointsContactPointPublicAddresses extends $tea.Model {
  publicAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      publicAddress: 'PublicAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsResponseBodyContactPointsContactPointPrivateAddresses extends $tea.Model {
  privateAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      privateAddress: 'PrivateAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsResponseBodyContactPointsContactPoint extends $tea.Model {
  publicAddresses?: DescribeContactPointsResponseBodyContactPointsContactPointPublicAddresses;
  port?: number;
  privateAddresses?: DescribeContactPointsResponseBodyContactPointsContactPointPrivateAddresses;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      publicAddresses: 'PublicAddresses',
      port: 'Port',
      privateAddresses: 'PrivateAddresses',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicAddresses: DescribeContactPointsResponseBodyContactPointsContactPointPublicAddresses,
      port: 'number',
      privateAddresses: DescribeContactPointsResponseBodyContactPointsContactPointPrivateAddresses,
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactPointsResponseBodyContactPoints extends $tea.Model {
  contactPoint?: DescribeContactPointsResponseBodyContactPointsContactPoint[];
  static names(): { [key: string]: string } {
    return {
      contactPoint: 'ContactPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactPoint: { 'type': 'array', 'itemType': DescribeContactPointsResponseBodyContactPointsContactPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCentersResponseBodyDataCentersDataCenter extends $tea.Model {
  status?: string;
  vpcId?: string;
  vswitchId?: string;
  expireTime?: string;
  diskSize?: number;
  payType?: string;
  diskType?: string;
  instanceType?: string;
  lockMode?: string;
  autoRenewPeriod?: number;
  regionId?: string;
  autoRenewal?: boolean;
  commodityInstance?: string;
  nodeCount?: number;
  dataCenterName?: string;
  zoneId?: string;
  createdTime?: string;
  clusterId?: string;
  dataCenterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      expireTime: 'ExpireTime',
      diskSize: 'DiskSize',
      payType: 'PayType',
      diskType: 'DiskType',
      instanceType: 'InstanceType',
      lockMode: 'LockMode',
      autoRenewPeriod: 'AutoRenewPeriod',
      regionId: 'RegionId',
      autoRenewal: 'AutoRenewal',
      commodityInstance: 'CommodityInstance',
      nodeCount: 'NodeCount',
      dataCenterName: 'DataCenterName',
      zoneId: 'ZoneId',
      createdTime: 'CreatedTime',
      clusterId: 'ClusterId',
      dataCenterId: 'DataCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      expireTime: 'string',
      diskSize: 'number',
      payType: 'string',
      diskType: 'string',
      instanceType: 'string',
      lockMode: 'string',
      autoRenewPeriod: 'number',
      regionId: 'string',
      autoRenewal: 'boolean',
      commodityInstance: 'string',
      nodeCount: 'number',
      dataCenterName: 'string',
      zoneId: 'string',
      createdTime: 'string',
      clusterId: 'string',
      dataCenterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCentersResponseBodyDataCenters extends $tea.Model {
  dataCenter?: DescribeDataCentersResponseBodyDataCentersDataCenter[];
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: { 'type': 'array', 'itemType': DescribeDataCentersResponseBodyDataCentersDataCenter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedClustersResponseBodyClustersCluster extends $tea.Model {
  status?: string;
  dataCenterCount?: number;
  expireTime?: string;
  payType?: string;
  clusterName?: string;
  majorVersion?: string;
  createdTime?: string;
  minorVersion?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dataCenterCount: 'DataCenterCount',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      clusterName: 'ClusterName',
      majorVersion: 'MajorVersion',
      createdTime: 'CreatedTime',
      minorVersion: 'MinorVersion',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dataCenterCount: 'number',
      expireTime: 'string',
      payType: 'string',
      clusterName: 'string',
      majorVersion: 'string',
      createdTime: 'string',
      minorVersion: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedClustersResponseBodyClusters extends $tea.Model {
  cluster?: DescribeDeletedClustersResponseBodyClustersCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': DescribeDeletedClustersResponseBodyClustersCluster },
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

export class DescribeIpWhitelistResponseBodyIpList extends $tea.Model {
  IP?: string[];
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistGroupsResponseBodyGroupsGroupIpList extends $tea.Model {
  IP?: string[];
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistGroupsResponseBodyGroupsGroup extends $tea.Model {
  ipVersion?: number;
  groupName?: string;
  ipList?: DescribeIpWhitelistGroupsResponseBodyGroupsGroupIpList;
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
      ipList: DescribeIpWhitelistGroupsResponseBodyGroupsGroupIpList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistGroupsResponseBodyGroups extends $tea.Model {
  group?: DescribeIpWhitelistGroupsResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': DescribeIpWhitelistGroupsResponseBodyGroupsGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoriesResponseBodyHistoriesHistory extends $tea.Model {
  nodes?: string;
  errorMessage?: string;
  isEnded?: boolean;
  createTime?: number;
  jobId?: string;
  command?: string;
  dataCenterId?: string;
  arguments?: string;
  regionId?: string;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      errorMessage: 'ErrorMessage',
      isEnded: 'IsEnded',
      createTime: 'CreateTime',
      jobId: 'JobId',
      command: 'Command',
      dataCenterId: 'DataCenterId',
      arguments: 'Arguments',
      regionId: 'RegionId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: 'string',
      errorMessage: 'string',
      isEnded: 'boolean',
      createTime: 'number',
      jobId: 'string',
      command: 'string',
      dataCenterId: 'string',
      arguments: 'string',
      regionId: 'string',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeToolExecutionHistoriesResponseBodyHistories extends $tea.Model {
  history?: DescribeNodeToolExecutionHistoriesResponseBodyHistoriesHistory[];
  static names(): { [key: string]: string } {
    return {
      history: 'History',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': DescribeNodeToolExecutionHistoriesResponseBodyHistoriesHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoriesResponseBodyHistoriesHistory extends $tea.Model {
  time?: number;
  oldValue?: string;
  name?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      oldValue: 'OldValue',
      name: 'Name',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      oldValue: 'string',
      name: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoriesResponseBodyHistories extends $tea.Model {
  history?: DescribeParameterModificationHistoriesResponseBodyHistoriesHistory[];
  static names(): { [key: string]: string } {
    return {
      history: 'History',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': DescribeParameterModificationHistoriesResponseBodyHistoriesHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParametersParameter extends $tea.Model {
  value?: string;
  dataType?: string;
  description?: string;
  name?: string;
  defaultValue?: string;
  allowedValues?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      defaultValue: 'DefaultValue',
      allowedValues: 'AllowedValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      dataType: 'string',
      description: 'string',
      name: 'string',
      defaultValue: 'string',
      allowedValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParameters extends $tea.Model {
  parameter?: DescribeParametersResponseBodyParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParametersParameter },
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cassandra", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allocatePublicContactPointsWithOptions(request: AllocatePublicContactPointsRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicContactPointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocatePublicContactPointsResponse>(await this.doRPCRequest("AllocatePublicContactPoints", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocatePublicContactPointsResponse({}));
  }

  async allocatePublicContactPoints(request: AllocatePublicContactPointsRequest): Promise<AllocatePublicContactPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicContactPointsWithOptions(request, runtime);
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

  async createDataCenterWithOptions(request: CreateDataCenterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataCenterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataCenterResponse>(await this.doRPCRequest("CreateDataCenter", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataCenterResponse({}));
  }

  async createDataCenter(request: CreateDataCenterRequest): Promise<CreateDataCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataCenterWithOptions(request, runtime);
  }

  async deleteBackupPlanWithOptions(request: DeleteBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBackupPlanResponse>(await this.doRPCRequest("DeleteBackupPlan", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupPlanResponse({}));
  }

  async deleteBackupPlan(request: DeleteBackupPlanRequest): Promise<DeleteBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPlanWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterResponse>(await this.doRPCRequest("DeleteCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteDataCenterWithOptions(request: DeleteDataCenterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataCenterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataCenterResponse>(await this.doRPCRequest("DeleteDataCenter", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataCenterResponse({}));
  }

  async deleteDataCenter(request: DeleteDataCenterRequest): Promise<DeleteDataCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataCenterWithOptions(request, runtime);
  }

  async deleteNodeToolExecutionHistoryWithOptions(request: DeleteNodeToolExecutionHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeToolExecutionHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNodeToolExecutionHistoryResponse>(await this.doRPCRequest("DeleteNodeToolExecutionHistory", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNodeToolExecutionHistoryResponse({}));
  }

  async deleteNodeToolExecutionHistory(request: DeleteNodeToolExecutionHistoryRequest): Promise<DeleteNodeToolExecutionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeToolExecutionHistoryWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeBackupWithOptions(request: DescribeBackupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupResponse>(await this.doRPCRequest("DescribeBackup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupResponse({}));
  }

  async describeBackup(request: DescribeBackupRequest): Promise<DescribeBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupWithOptions(request, runtime);
  }

  async describeBackupPlanWithOptions(request: DescribeBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPlanResponse>(await this.doRPCRequest("DescribeBackupPlan", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPlanResponse({}));
  }

  async describeBackupPlan(request: DescribeBackupPlanRequest): Promise<DescribeBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanWithOptions(request, runtime);
  }

  async describeBackupPlansWithOptions(request: DescribeBackupPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPlansResponse>(await this.doRPCRequest("DescribeBackupPlans", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPlansResponse({}));
  }

  async describeBackupPlans(request: DescribeBackupPlansRequest): Promise<DescribeBackupPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlansWithOptions(request, runtime);
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

  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterResponse>(await this.doRPCRequest("DescribeCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterResponse({}));
  }

  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  async describeClusterDashboardWithOptions(request: DescribeClusterDashboardRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterDashboardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterDashboardResponse>(await this.doRPCRequest("DescribeClusterDashboard", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterDashboardResponse({}));
  }

  async describeClusterDashboard(request: DescribeClusterDashboardRequest): Promise<DescribeClusterDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterDashboardWithOptions(request, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClustersResponse>(await this.doRPCRequest("DescribeClusters", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClustersResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

  async describeClusterStatusWithOptions(request: DescribeClusterStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterStatusResponse>(await this.doRPCRequest("DescribeClusterStatus", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterStatusResponse({}));
  }

  async describeClusterStatus(request: DescribeClusterStatusRequest): Promise<DescribeClusterStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterStatusWithOptions(request, runtime);
  }

  async describeContactPointsWithOptions(request: DescribeContactPointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactPointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContactPointsResponse>(await this.doRPCRequest("DescribeContactPoints", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContactPointsResponse({}));
  }

  async describeContactPoints(request: DescribeContactPointsRequest): Promise<DescribeContactPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactPointsWithOptions(request, runtime);
  }

  async describeDataCenterWithOptions(request: DescribeDataCenterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCenterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataCenterResponse>(await this.doRPCRequest("DescribeDataCenter", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataCenterResponse({}));
  }

  async describeDataCenter(request: DescribeDataCenterRequest): Promise<DescribeDataCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCenterWithOptions(request, runtime);
  }

  async describeDataCentersWithOptions(request: DescribeDataCentersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCentersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataCentersResponse>(await this.doRPCRequest("DescribeDataCenters", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataCentersResponse({}));
  }

  async describeDataCenters(request: DescribeDataCentersRequest): Promise<DescribeDataCentersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCentersWithOptions(request, runtime);
  }

  async describeDeletedClustersWithOptions(request: DescribeDeletedClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeletedClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeletedClustersResponse>(await this.doRPCRequest("DescribeDeletedClusters", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeletedClustersResponse({}));
  }

  async describeDeletedClusters(request: DescribeDeletedClustersRequest): Promise<DescribeDeletedClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeletedClustersWithOptions(request, runtime);
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

  async describeIpWhitelistGroupsWithOptions(request: DescribeIpWhitelistGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpWhitelistGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpWhitelistGroupsResponse>(await this.doRPCRequest("DescribeIpWhitelistGroups", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpWhitelistGroupsResponse({}));
  }

  async describeIpWhitelistGroups(request: DescribeIpWhitelistGroupsRequest): Promise<DescribeIpWhitelistGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpWhitelistGroupsWithOptions(request, runtime);
  }

  async describeNodeToolExecutionHistoriesWithOptions(request: DescribeNodeToolExecutionHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeToolExecutionHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNodeToolExecutionHistoriesResponse>(await this.doRPCRequest("DescribeNodeToolExecutionHistories", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNodeToolExecutionHistoriesResponse({}));
  }

  async describeNodeToolExecutionHistories(request: DescribeNodeToolExecutionHistoriesRequest): Promise<DescribeNodeToolExecutionHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeToolExecutionHistoriesWithOptions(request, runtime);
  }

  async describeNodeToolExecutionHistoryWithOptions(request: DescribeNodeToolExecutionHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeToolExecutionHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNodeToolExecutionHistoryResponse>(await this.doRPCRequest("DescribeNodeToolExecutionHistory", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNodeToolExecutionHistoryResponse({}));
  }

  async describeNodeToolExecutionHistory(request: DescribeNodeToolExecutionHistoryRequest): Promise<DescribeNodeToolExecutionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeToolExecutionHistoryWithOptions(request, runtime);
  }

  async describeParameterModificationHistoriesWithOptions(request: DescribeParameterModificationHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterModificationHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterModificationHistoriesResponse>(await this.doRPCRequest("DescribeParameterModificationHistories", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterModificationHistoriesResponse({}));
  }

  async describeParameterModificationHistories(request: DescribeParameterModificationHistoriesRequest): Promise<DescribeParameterModificationHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterModificationHistoriesWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
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

  async executeNodeToolWithOptions(request: ExecuteNodeToolRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteNodeToolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteNodeToolResponse>(await this.doRPCRequest("ExecuteNodeTool", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteNodeToolResponse({}));
  }

  async executeNodeTool(request: ExecuteNodeToolRequest): Promise<ExecuteNodeToolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeNodeToolWithOptions(request, runtime);
  }

  async getCmsUrlWithOptions(request: GetCmsUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetCmsUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCmsUrlResponse>(await this.doRPCRequest("GetCmsUrl", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCmsUrlResponse({}));
  }

  async getCmsUrl(request: GetCmsUrlRequest): Promise<GetCmsUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCmsUrlWithOptions(request, runtime);
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

  async modifyAccountPasswordWithOptions(request: ModifyAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountPasswordResponse>(await this.doRPCRequest("ModifyAccountPassword", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountPasswordResponse({}));
  }

  async modifyAccountPassword(request: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  async modifyBackupPlanWithOptions(request: ModifyBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPlanResponse>(await this.doRPCRequest("ModifyBackupPlan", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPlanResponse({}));
  }

  async modifyBackupPlan(request: ModifyBackupPlanRequest): Promise<ModifyBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPlanWithOptions(request, runtime);
  }

  async modifyClusterWithOptions(request: ModifyClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterResponse>(await this.doRPCRequest("ModifyCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterResponse({}));
  }

  async modifyCluster(request: ModifyClusterRequest): Promise<ModifyClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterWithOptions(request, runtime);
  }

  async modifyDataCenterWithOptions(request: ModifyDataCenterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataCenterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDataCenterResponse>(await this.doRPCRequest("ModifyDataCenter", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDataCenterResponse({}));
  }

  async modifyDataCenter(request: ModifyDataCenterRequest): Promise<ModifyDataCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataCenterWithOptions(request, runtime);
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

  async modifyIpWhitelistGroupWithOptions(request: ModifyIpWhitelistGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpWhitelistGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpWhitelistGroupResponse>(await this.doRPCRequest("ModifyIpWhitelistGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpWhitelistGroupResponse({}));
  }

  async modifyIpWhitelistGroup(request: ModifyIpWhitelistGroupRequest): Promise<ModifyIpWhitelistGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpWhitelistGroupWithOptions(request, runtime);
  }

  async modifyParameterWithOptions(request: ModifyParameterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParameterResponse>(await this.doRPCRequest("ModifyParameter", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParameterResponse({}));
  }

  async modifyParameter(request: ModifyParameterRequest): Promise<ModifyParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
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

  async purgeClusterWithOptions(request: PurgeClusterRequest, runtime: $Util.RuntimeOptions): Promise<PurgeClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PurgeClusterResponse>(await this.doRPCRequest("PurgeCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PurgeClusterResponse({}));
  }

  async purgeCluster(request: PurgeClusterRequest): Promise<PurgeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purgeClusterWithOptions(request, runtime);
  }

  async rebootClusterWithOptions(request: RebootClusterRequest, runtime: $Util.RuntimeOptions): Promise<RebootClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebootClusterResponse>(await this.doRPCRequest("RebootCluster", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RebootClusterResponse({}));
  }

  async rebootCluster(request: RebootClusterRequest): Promise<RebootClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootClusterWithOptions(request, runtime);
  }

  async releasePublicContactPointsWithOptions(request: ReleasePublicContactPointsRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicContactPointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleasePublicContactPointsResponse>(await this.doRPCRequest("ReleasePublicContactPoints", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleasePublicContactPointsResponse({}));
  }

  async releasePublicContactPoints(request: ReleasePublicContactPointsRequest): Promise<ReleasePublicContactPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicContactPointsWithOptions(request, runtime);
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

  async upgradeClusterVersionWithOptions(request: UpgradeClusterVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeClusterVersionResponse>(await this.doRPCRequest("UpgradeClusterVersion", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeClusterVersionResponse({}));
  }

  async upgradeClusterVersion(request: UpgradeClusterVersionRequest): Promise<UpgradeClusterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClusterVersionWithOptions(request, runtime);
  }

}
