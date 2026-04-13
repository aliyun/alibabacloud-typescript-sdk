// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreDBInstanceListResponseBodyDBInstancesDBInstance extends $dara.Model {
  creationTime?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  DBInstanceType?: string;
  engineVersion?: string;
  hiddenZoneId?: string;
  isDeleted?: number;
  lockMode?: string;
  regionId?: string;
  secondaryZoneId?: string;
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

