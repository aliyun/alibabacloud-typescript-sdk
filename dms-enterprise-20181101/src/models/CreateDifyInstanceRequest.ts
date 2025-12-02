// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDifyInstanceRequest extends $dara.Model {
  adbpgInstanceMode?: string;
  backupVSwitchId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataRegion?: string;
  databaseOption?: string;
  dbEngineType?: string;
  dbEngineVersion?: string;
  dbInstanceAccount?: string;
  dbInstanceCategory?: string;
  dbInstanceClass?: string;
  dbInstancePassword?: string;
  dbResourceId?: number;
  dbStorageSize?: string;
  dbStorageType?: string;
  dryRun?: boolean;
  /**
   * @example
   * Community
   */
  edition?: string;
  enableExtraEndpoint?: boolean;
  gpuNodeSpec?: string;
  kvStoreAccount?: string;
  kvStoreEngineVersion?: string;
  kvStoreInstanceClass?: string;
  kvStoreNodeType?: string;
  kvStoreOption?: string;
  kvStorePassword?: string;
  kvStoreResourceId?: number;
  kvStoreType?: string;
  majorVersion?: string;
  modelId?: string;
  /**
   * @example
   * Disable
   */
  modelOption?: string;
  natGatewayOption?: string;
  onlyIntranet?: boolean;
  ossPath?: string;
  ossResourceId?: number;
  payPeriod?: number;
  payPeriodType?: string;
  payType?: string;
  replicas?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceQuota?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityGroupId?: string;
  segDiskPerformanceLevel?: string;
  segNodeNum?: number;
  storageType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchId?: string;
  vectordbAccount?: string;
  vectordbCategory?: string;
  vectordbEngineVersion?: string;
  vectordbInstanceSpec?: string;
  vectordbOption?: string;
  vectordbPassword?: string;
  vectordbResourceId?: number;
  vectordbStorageSize?: string;
  vectordbStorageType?: string;
  vectordbType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
  workspaceDescription?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceOption?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adbpgInstanceMode: 'AdbpgInstanceMode',
      backupVSwitchId: 'BackupVSwitchId',
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
      databaseOption: 'DatabaseOption',
      dbEngineType: 'DbEngineType',
      dbEngineVersion: 'DbEngineVersion',
      dbInstanceAccount: 'DbInstanceAccount',
      dbInstanceCategory: 'DbInstanceCategory',
      dbInstanceClass: 'DbInstanceClass',
      dbInstancePassword: 'DbInstancePassword',
      dbResourceId: 'DbResourceId',
      dbStorageSize: 'DbStorageSize',
      dbStorageType: 'DbStorageType',
      dryRun: 'DryRun',
      edition: 'Edition',
      enableExtraEndpoint: 'EnableExtraEndpoint',
      gpuNodeSpec: 'GpuNodeSpec',
      kvStoreAccount: 'KvStoreAccount',
      kvStoreEngineVersion: 'KvStoreEngineVersion',
      kvStoreInstanceClass: 'KvStoreInstanceClass',
      kvStoreNodeType: 'KvStoreNodeType',
      kvStoreOption: 'KvStoreOption',
      kvStorePassword: 'KvStorePassword',
      kvStoreResourceId: 'KvStoreResourceId',
      kvStoreType: 'KvStoreType',
      majorVersion: 'MajorVersion',
      modelId: 'ModelId',
      modelOption: 'ModelOption',
      natGatewayOption: 'NatGatewayOption',
      onlyIntranet: 'OnlyIntranet',
      ossPath: 'OssPath',
      ossResourceId: 'OssResourceId',
      payPeriod: 'PayPeriod',
      payPeriodType: 'PayPeriodType',
      payType: 'PayType',
      replicas: 'Replicas',
      resourceQuota: 'ResourceQuota',
      securityGroupId: 'SecurityGroupId',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      storageType: 'StorageType',
      vSwitchId: 'VSwitchId',
      vectordbAccount: 'VectordbAccount',
      vectordbCategory: 'VectordbCategory',
      vectordbEngineVersion: 'VectordbEngineVersion',
      vectordbInstanceSpec: 'VectordbInstanceSpec',
      vectordbOption: 'VectordbOption',
      vectordbPassword: 'VectordbPassword',
      vectordbResourceId: 'VectordbResourceId',
      vectordbStorageSize: 'VectordbStorageSize',
      vectordbStorageType: 'VectordbStorageType',
      vectordbType: 'VectordbType',
      vpcId: 'VpcId',
      workspaceDescription: 'WorkspaceDescription',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceOption: 'WorkspaceOption',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbpgInstanceMode: 'string',
      backupVSwitchId: 'string',
      clientToken: 'string',
      dataRegion: 'string',
      databaseOption: 'string',
      dbEngineType: 'string',
      dbEngineVersion: 'string',
      dbInstanceAccount: 'string',
      dbInstanceCategory: 'string',
      dbInstanceClass: 'string',
      dbInstancePassword: 'string',
      dbResourceId: 'number',
      dbStorageSize: 'string',
      dbStorageType: 'string',
      dryRun: 'boolean',
      edition: 'string',
      enableExtraEndpoint: 'boolean',
      gpuNodeSpec: 'string',
      kvStoreAccount: 'string',
      kvStoreEngineVersion: 'string',
      kvStoreInstanceClass: 'string',
      kvStoreNodeType: 'string',
      kvStoreOption: 'string',
      kvStorePassword: 'string',
      kvStoreResourceId: 'number',
      kvStoreType: 'string',
      majorVersion: 'string',
      modelId: 'string',
      modelOption: 'string',
      natGatewayOption: 'string',
      onlyIntranet: 'boolean',
      ossPath: 'string',
      ossResourceId: 'number',
      payPeriod: 'number',
      payPeriodType: 'string',
      payType: 'string',
      replicas: 'number',
      resourceQuota: 'string',
      securityGroupId: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'number',
      storageType: 'string',
      vSwitchId: 'string',
      vectordbAccount: 'string',
      vectordbCategory: 'string',
      vectordbEngineVersion: 'string',
      vectordbInstanceSpec: 'string',
      vectordbOption: 'string',
      vectordbPassword: 'string',
      vectordbResourceId: 'number',
      vectordbStorageSize: 'string',
      vectordbStorageType: 'string',
      vectordbType: 'string',
      vpcId: 'string',
      workspaceDescription: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceOption: 'string',
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

