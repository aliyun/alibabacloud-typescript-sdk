// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId extends $dara.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeDbInstancesResponseBodyItemsDBInstance extends $dara.Model {
  allowAllCategory?: boolean;
  /**
   * @remarks
   * The description of the storage instance.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the storage instance.
   * 
   * @example
   * rm-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Storage layer instance status. Valid values:
   * 
   * *   **0**: creating
   * *   **1**: In use
   * *   **3**: Deleting
   * *   **5**: restarting
   * *   **6**: upgrading /Downgrading
   * *   **7**: Recovering
   * *   **8**: switching the Internet and intranet
   * 
   * @example
   * 0
   */
  DBInstanceStatus?: number;
  /**
   * @remarks
   * The storage layer instance type.
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The engine of the storage instance.
   */
  engine?: string;
  /**
   * @remarks
   * The version of the engine for the storage instance.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The network type of the storage layer. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **CLASSIC **: Classic Network
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The details about a read-only storage instance.
   */
  readOnlyDBInstanceId?: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId;
  /**
   * @remarks
   * The ID of the region where the storage instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the zone where the storage instance resides.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAllCategory: 'AllowAllCategory',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAllCategory: 'boolean',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'number',
      DBInstanceType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      readOnlyDBInstanceId: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceId && typeof (this.readOnlyDBInstanceId as any).validate === 'function') {
      (this.readOnlyDBInstanceId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDbInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDbInstancesResponseBodyItemsDBInstance },
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

export class DescribeDbInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  items?: DescribeDbInstancesResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 293275B3-8FC0-4619-A26E-6F062FASD56R
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
      items: DescribeDbInstancesResponseBodyItems,
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

