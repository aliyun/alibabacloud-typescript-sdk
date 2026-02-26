// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
  slaveRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      slaveRegion: 'slaveRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.slaveRegion)) {
      $dara.Model.validateArray(this.slaveRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute extends $dara.Model {
  accountMaxQuantity?: number;
  accountType?: string;
  availabilityValue?: string;
  category?: string;
  connectionMode?: string;
  connectionString?: string;
  creationTime?: string;
  DBInstanceCPU?: string;
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  DBInstanceType?: string;
  DBMaxQuantity?: number;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  exportKey?: string;
  guardDBInstanceId?: string;
  incrementSourceDBInstanceId?: string;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  maintainTime?: string;
  masterInstanceId?: string;
  maxConnections?: number;
  maxIOPS?: number;
  payType?: string;
  port?: string;
  readDelayTime?: string;
  regionId?: string;
  securityIPList?: string;
  slaveZones?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones;
  supportUpgradeAccountType?: string;
  tags?: string;
  tempDBInstanceId?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountMaxQuantity: 'AccountMaxQuantity',
      accountType: 'AccountType',
      availabilityValue: 'AvailabilityValue',
      category: 'Category',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceType: 'DBInstanceType',
      DBMaxQuantity: 'DBMaxQuantity',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      exportKey: 'ExportKey',
      guardDBInstanceId: 'GuardDBInstanceId',
      incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      masterInstanceId: 'MasterInstanceId',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      payType: 'PayType',
      port: 'Port',
      readDelayTime: 'ReadDelayTime',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      slaveZones: 'SlaveZones',
      supportUpgradeAccountType: 'SupportUpgradeAccountType',
      tags: 'Tags',
      tempDBInstanceId: 'TempDBInstanceId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountMaxQuantity: 'number',
      accountType: 'string',
      availabilityValue: 'string',
      category: 'string',
      connectionMode: 'string',
      connectionString: 'string',
      creationTime: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBInstanceType: 'string',
      DBMaxQuantity: 'number',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      exportKey: 'string',
      guardDBInstanceId: 'string',
      incrementSourceDBInstanceId: 'string',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      masterInstanceId: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      payType: 'string',
      port: 'string',
      readDelayTime: 'string',
      regionId: 'string',
      securityIPList: 'string',
      slaveZones: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones,
      supportUpgradeAccountType: 'string',
      tags: 'string',
      tempDBInstanceId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.slaveZones && typeof (this.slaveZones as any).validate === 'function') {
      (this.slaveZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBodyItems extends $dara.Model {
  DBInstanceAttribute?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAttribute)) {
      $dara.Model.validateArray(this.DBInstanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBody extends $dara.Model {
  items?: DescribeDBInstancesAsCsvResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A444291****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesAsCsvResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

