// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDifyInstanceRequestTag extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
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

export class CreateDifyInstanceRequest extends $dara.Model {
  /**
   * @example
   * null
   */
  adbpgInstanceMode?: string;
  autoRenew?: boolean;
  /**
   * @example
   * vsw-j6cq3nmsk8qcamo2rc6yc
   */
  backupVSwitchId?: string;
  /**
   * @example
   * abc
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  dataRegion?: string;
  /**
   * @example
   * CreateNewInstance
   */
  databaseOption?: string;
  /**
   * @example
   * PostgreSQL
   */
  dbEngineType?: string;
  /**
   * @example
   * 14.0
   */
  dbEngineVersion?: string;
  /**
   * @example
   * dify_user
   */
  dbInstanceAccount?: string;
  /**
   * @example
   * 1c4g
   */
  dbInstanceCategory?: string;
  /**
   * @example
   * pg.n2.2c.1m
   */
  dbInstanceClass?: string;
  /**
   * @example
   * password
   */
  dbInstancePassword?: string;
  /**
   * @example
   * 2764278
   */
  dbResourceId?: number;
  /**
   * @example
   * 60
   */
  dbStorageSize?: string;
  /**
   * @example
   * general_essd
   */
  dbStorageType?: string;
  /**
   * @example
   * Dify Instance
   */
  difyInstanceName?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * Community
   */
  edition?: string;
  /**
   * @example
   * true
   */
  enableExtraEndpoint?: boolean;
  /**
   * @example
   * 16C62G.1T4
   */
  gpuNodeSpec?: string;
  /**
   * @example
   * dify_user
   */
  kvStoreAccount?: string;
  /**
   * @example
   * 6.0
   */
  kvStoreEngineVersion?: string;
  /**
   * @example
   * redis.master.stand.default
   */
  kvStoreInstanceClass?: string;
  /**
   * @example
   * MASTER_SLAVE
   */
  kvStoreNodeType?: string;
  /**
   * @example
   * CreateNewInstance
   */
  kvStoreOption?: string;
  /**
   * @example
   * password
   */
  kvStorePassword?: string;
  /**
   * @example
   * 2829493
   */
  kvStoreResourceId?: number;
  /**
   * @example
   * REDIS
   */
  kvStoreType?: string;
  /**
   * @example
   * 1.6.x
   */
  majorVersion?: string;
  /**
   * @example
   * Qwen3-4B
   */
  modelId?: string;
  /**
   * @example
   * Disable
   */
  modelOption?: string;
  /**
   * @example
   * Enable
   */
  natGatewayOption?: string;
  /**
   * @example
   * false
   */
  onlyIntranet?: boolean;
  /**
   * @example
   * /
   */
  ossPath?: string;
  /**
   * @example
   * 2764233
   */
  ossResourceId?: number;
  /**
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @example
   * Year
   */
  payPeriodType?: string;
  /**
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4CU
   */
  resourceQuota?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-2ze6dig8uby0a3zt4a0h
   */
  securityGroupId?: string;
  /**
   * @example
   * pl0
   */
  segDiskPerformanceLevel?: string;
  /**
   * @example
   * 2
   */
  segNodeNum?: number;
  /**
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @example
   * [{key:,value:}]
   */
  tag?: CreateDifyInstanceRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp1i05wremlxcy8z5e2im
   */
  vSwitchId?: string;
  /**
   * @example
   * dify_user
   */
  vectordbAccount?: string;
  /**
   * @example
   * adbpg
   */
  vectordbCategory?: string;
  /**
   * @example
   * 6.0
   */
  vectordbEngineVersion?: string;
  /**
   * @example
   * 4C16G
   */
  vectordbInstanceSpec?: string;
  /**
   * @example
   * CreateNewInstance
   */
  vectordbOption?: string;
  /**
   * @example
   * password
   */
  vectordbPassword?: string;
  /**
   * @example
   * 2798885
   */
  vectordbResourceId?: number;
  /**
   * @example
   * 60
   */
  vectordbStorageSize?: string;
  /**
   * @example
   * cloud_essd
   */
  vectordbStorageType?: string;
  /**
   * @example
   * createnew
   */
  vectordbType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-k1a8ha7m1atealnysybeu
   */
  vpcId?: string;
  /**
   * @example
   * this is my workspace
   */
  workspaceDescription?: string;
  /**
   * @example
   * 8640136033018977
   */
  workspaceId?: string;
  /**
   * @example
   * dify_default
   */
  workspaceName?: string;
  /**
   * @example
   * UseExistingInstance
   */
  workspaceOption?: string;
  /**
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adbpgInstanceMode: 'AdbpgInstanceMode',
      autoRenew: 'AutoRenew',
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
      difyInstanceName: 'DifyInstanceName',
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
      tag: 'Tag',
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
      autoRenew: 'boolean',
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
      difyInstanceName: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateDifyInstanceRequestTag },
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

