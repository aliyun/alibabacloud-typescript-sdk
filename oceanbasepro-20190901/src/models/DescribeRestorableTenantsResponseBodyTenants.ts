// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRestorableTenantsResponseBodyTenantsBackupSets } from "./DescribeRestorableTenantsResponseBodyTenantsBackupSets";
import { DescribeRestorableTenantsResponseBodyTenantsTimeIntervalList } from "./DescribeRestorableTenantsResponseBodyTenantsTimeIntervalList";


export class DescribeRestorableTenantsResponseBodyTenants extends $dara.Model {
  /**
   * @remarks
   * The name of the backup directory.
   * 
   * @example
   * backup
   */
  backupBucketName?: string;
  /**
   * @remarks
   * The list of backup sets.
   */
  backupSets?: DescribeRestorableTenantsResponseBodyTenantsBackupSets[];
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * objnf3b2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * testCluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpuNum?: number;
  /**
   * @remarks
   * The size of memory for the tenant.
   * 
   * @example
   * 100
   */
  memoryNum?: number;
  /**
   * @remarks
   * The backup method.
   * 
   * @example
   * logical
   */
  method?: string;
  /**
   * @remarks
   * The version of the OceanBase Database RPM package.
   * 
   * @example
   * 3.2.3.1-2022080510****
   */
  obRpmVersion?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * tvd43v****
   */
  obTenantId?: string;
  /**
   * @remarks
   * The major version of OceanBase Database.
   * 
   * @example
   * 3.2.3.1
   */
  obVersion?: string;
  /**
   * @remarks
   * The region of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The alias of the tenant.
   * 
   * @example
   * aaa
   */
  tenantAlias?: string;
  /**
   * @remarks
   * The remaining validity period, in days, of the backup data of the tenant.
   * 
   * @example
   * 7
   */
  tenantDataBackupRemainDays?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * ob317v4uif****
   */
  tenantId?: string;
  /**
   * @remarks
   * The mode of the tenant.
   * 
   * @example
   * Oracle
   */
  tenantMode?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * sbtest1
   */
  tenantName?: string;
  /**
   * @remarks
   * The list of restorable periods of the tenant.
   */
  timeIntervalList?: DescribeRestorableTenantsResponseBodyTenantsTimeIntervalList[];
  /**
   * @remarks
   * The number of nodes of the tenant.
   * 
   * @example
   * 2
   */
  unitNum?: number;
  /**
   * @remarks
   * The size of disk space for the tenant.
   * 
   * @example
   * 50
   */
  usedDisk?: number;
  static names(): { [key: string]: string } {
    return {
      backupBucketName: 'BackupBucketName',
      backupSets: 'BackupSets',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuNum: 'CpuNum',
      memoryNum: 'MemoryNum',
      method: 'Method',
      obRpmVersion: 'ObRpmVersion',
      obTenantId: 'ObTenantId',
      obVersion: 'ObVersion',
      sourceRegion: 'SourceRegion',
      tenantAlias: 'TenantAlias',
      tenantDataBackupRemainDays: 'TenantDataBackupRemainDays',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      timeIntervalList: 'TimeIntervalList',
      unitNum: 'UnitNum',
      usedDisk: 'UsedDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupBucketName: 'string',
      backupSets: { 'type': 'array', 'itemType': DescribeRestorableTenantsResponseBodyTenantsBackupSets },
      clusterId: 'string',
      clusterName: 'string',
      cpuNum: 'number',
      memoryNum: 'number',
      method: 'string',
      obRpmVersion: 'string',
      obTenantId: 'string',
      obVersion: 'string',
      sourceRegion: 'string',
      tenantAlias: 'string',
      tenantDataBackupRemainDays: 'number',
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      timeIntervalList: { 'type': 'array', 'itemType': DescribeRestorableTenantsResponseBodyTenantsTimeIntervalList },
      unitNum: 'number',
      usedDisk: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backupSets)) {
      $dara.Model.validateArray(this.backupSets);
    }
    if(Array.isArray(this.timeIntervalList)) {
      $dara.Model.validateArray(this.timeIntervalList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

