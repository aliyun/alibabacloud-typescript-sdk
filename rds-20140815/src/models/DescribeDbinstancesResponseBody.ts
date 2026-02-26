// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
  autoRenewal?: boolean;
  blueGreenDeploymentName?: string;
  blueInstanceName?: string;
  bpeEnabled?: string;
  burstingEnabled?: boolean;
  category?: string;
  coldDataEnabled?: boolean;
  connectionMode?: string;
  connectionString?: string;
  createTime?: string;
  DBInstanceCPU?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorageType?: string;
  DBInstanceType?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostGroupName?: string;
  dedicatedHostIdForLog?: string;
  dedicatedHostIdForMaster?: string;
  dedicatedHostIdForSlave?: string;
  dedicatedHostNameForLog?: string;
  dedicatedHostNameForMaster?: string;
  dedicatedHostNameForSlave?: string;
  dedicatedHostZoneIdForLog?: string;
  dedicatedHostZoneIdForMaster?: string;
  dedicatedHostZoneIdForSlave?: string;
  deletionProtection?: boolean;
  destroyTime?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  generalGroupName?: string;
  greenInstanceName?: string;
  guardDBInstanceId?: string;
  instanceNetworkType?: string;
  ioAccelerationEnabled?: string;
  isAnalyticIns?: string;
  isAnalyticReadOnlyIns?: boolean;
  lockMode?: string;
  lockReason?: string;
  masterInstanceId?: string;
  mutriORsignle?: boolean;
  payType?: string;
  readOnlyDBInstanceIds?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
  regionId?: string;
  resourceGroupId?: string;
  switchWeight?: number;
  tempDBInstanceId?: string;
  tips?: string;
  tipsLevel?: number;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  vpcName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      blueGreenDeploymentName: 'BlueGreenDeploymentName',
      blueInstanceName: 'BlueInstanceName',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceType: 'DBInstanceType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostGroupName: 'DedicatedHostGroupName',
      dedicatedHostIdForLog: 'DedicatedHostIdForLog',
      dedicatedHostIdForMaster: 'DedicatedHostIdForMaster',
      dedicatedHostIdForSlave: 'DedicatedHostIdForSlave',
      dedicatedHostNameForLog: 'DedicatedHostNameForLog',
      dedicatedHostNameForMaster: 'DedicatedHostNameForMaster',
      dedicatedHostNameForSlave: 'DedicatedHostNameForSlave',
      dedicatedHostZoneIdForLog: 'DedicatedHostZoneIdForLog',
      dedicatedHostZoneIdForMaster: 'DedicatedHostZoneIdForMaster',
      dedicatedHostZoneIdForSlave: 'DedicatedHostZoneIdForSlave',
      deletionProtection: 'DeletionProtection',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      generalGroupName: 'GeneralGroupName',
      greenInstanceName: 'GreenInstanceName',
      guardDBInstanceId: 'GuardDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      isAnalyticIns: 'IsAnalyticIns',
      isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      masterInstanceId: 'MasterInstanceId',
      mutriORsignle: 'MutriORsignle',
      payType: 'PayType',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      switchWeight: 'SwitchWeight',
      tempDBInstanceId: 'TempDBInstanceId',
      tips: 'Tips',
      tipsLevel: 'TipsLevel',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      blueGreenDeploymentName: 'string',
      blueInstanceName: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      connectionMode: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorageType: 'string',
      DBInstanceType: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostGroupName: 'string',
      dedicatedHostIdForLog: 'string',
      dedicatedHostIdForMaster: 'string',
      dedicatedHostIdForSlave: 'string',
      dedicatedHostNameForLog: 'string',
      dedicatedHostNameForMaster: 'string',
      dedicatedHostNameForSlave: 'string',
      dedicatedHostZoneIdForLog: 'string',
      dedicatedHostZoneIdForMaster: 'string',
      dedicatedHostZoneIdForSlave: 'string',
      deletionProtection: 'boolean',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      generalGroupName: 'string',
      greenInstanceName: 'string',
      guardDBInstanceId: 'string',
      instanceNetworkType: 'string',
      ioAccelerationEnabled: 'string',
      isAnalyticIns: 'string',
      isAnalyticReadOnlyIns: 'boolean',
      lockMode: 'string',
      lockReason: 'string',
      masterInstanceId: 'string',
      mutriORsignle: 'boolean',
      payType: 'string',
      readOnlyDBInstanceIds: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      switchWeight: 'number',
      tempDBInstanceId: 'string',
      tips: 'string',
      tipsLevel: 'number',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDBInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $dara.Model {
  items?: DescribeDBInstancesResponseBodyItems;
  /**
   * @remarks
   * The token that is used to display the next page. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with **NextToken** specified.
   * 
   * @example
   * o7PORW5o2TJg**********
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the value **1** is returned. You can ignore the value 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the number of entries on the current page is returned. You can ignore the number.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesResponseBodyItems,
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

