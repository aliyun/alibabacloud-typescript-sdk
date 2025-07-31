// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreDBInstanceListResponseBodyDBInstancesDBInstance extends $dara.Model {
  /**
   * @remarks
   * The time of instance creation, formatted as <i>yyyy-MM-dd</i>T<i>HH:00:00</i>Z (UTC time).
   * 
   * @example
   * 2022-01-02T07:43:59Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test-database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   **7.0**
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The secondary availability zone 2 for the instance when implementing multi-AZ deployment.
   * 
   * @example
   * cn-hangzhou-h
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * Specifies whether the instance is deleted. Valid values:
   * 
   * *   **0**: not deleted
   * *   **1**: deleted
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  /**
   * @remarks
   * The locked state of the instance, value description:
   * - Unlock: Normal.
   * - ManualLock: Manually triggered lock.
   * - LockByExpiration: Automatically locked due to expiration.
   * - LockByRestoration: Automatically locked before restoration.
   * - LockByDiskQuota: Automatically locked due to disk quota exceeded.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The secondary availability zone 1 for the instance when implementing multi-AZ deployment.
   * 
   * @example
   * cn-hangzhou-i
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engineVersion: 'EngineVersion',
      hiddenZoneId: 'HiddenZoneId',
      isDeleted: 'IsDeleted',
      lockMode: 'LockMode',
      regionId: 'RegionId',
      secondaryZoneId: 'SecondaryZoneId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      engineVersion: 'string',
      hiddenZoneId: 'string',
      isDeleted: 'number',
      lockMode: 'string',
      regionId: 'string',
      secondaryZoneId: 'string',
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

export class DescribeRestoreDBInstanceListResponseBodyDBInstances extends $dara.Model {
  DBInstance?: DescribeRestoreDBInstanceListResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeRestoreDBInstanceListResponseBodyDBInstancesDBInstance },
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

export class DescribeRestoreDBInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * DB instances list.
   */
  DBInstances?: DescribeRestoreDBInstanceListResponseBodyDBInstances;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AF0AD89-ED4F-44AD-B65F-BFC1D5Cxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeRestoreDBInstanceListResponseBodyDBInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.DBInstances && typeof (this.DBInstances as any).validate === 'function') {
      (this.DBInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

