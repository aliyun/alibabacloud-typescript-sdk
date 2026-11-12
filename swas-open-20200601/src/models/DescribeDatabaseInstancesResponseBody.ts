// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseInstancesResponseBodyDatabaseInstances extends $dara.Model {
  /**
   * @remarks
   * The business status of the instance. Valid values:
   * 
   * - normal: Normal.
   * - expired: Expired.
   * - overdue: Overdue payment.
   * 
   * @example
   * normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the lightweight database instance. Only the subscription billing method is supported. Set the value to PrePaid.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC+0.
   * 
   * @example
   * 2022-09-01T02:39:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The plan ID of the lightweight database instance. Valid values:
   * 
   * - swas.db.c1m1s25: CNY 35 per month.
   * 
   * - swas.db.c1m2s80: CNY 100 per month.
   * 
   * - swas.db.c2m4s120: CNY 200 per month.
   * - swas.db.c2m8s240: CNY 300 per month.
   * 
   * @example
   * swas.db.c1m1s25
   */
  databaseInstanceEdition?: string;
  /**
   * @remarks
   * The instance ID of the lightweight database.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The name of the lightweight database instance.
   * 
   * @example
   * My database
   */
  databaseInstanceName?: string;
  /**
   * @remarks
   * The status of the lightweight database instance. Valid values:
   * 
   * - Pending: The instance is being created.
   * - Restarting: The instance is being restarted.
   * - Running: The instance is running.
   * - Stopping: The instance is being stopped.
   * - Stopped: The instance is stopped.
   * - UPGRADING: The instance is being upgraded.
   * - DISABLED: The instance is disabled.
   * 
   * @example
   * Running
   */
  databaseInstanceStatus?: string;
  /**
   * @remarks
   * The database version. Valid values:
   * 
   * - 5.7: MySQL 5.7.
   * - 8.0: MySQL 8.0.
   * 
   * @example
   * 5.7
   */
  databaseVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC+0.
   * 
   * > The expiration time displayed in the console is 8 hours ahead of the UTC time.
   * 
   * @example
   * 2022-10-01T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 1
   */
  memory?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * rm-bp1d39opj7906****.mysql.rds.aliyuncs.com
   */
  privateConnection?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * > This parameter is returned only if a public endpoint is applied for. You can call the [AllocatePublicConnection](https://help.aliyun.com/document_detail/451413.html) operation to apply for a public endpoint.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com
   */
  publicConnection?: string;
  /**
   * @remarks
   * The region ID of the lightweight database instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The capacity of the ESSD cloud disk. Unit: GB.
   * 
   * @example
   * 25
   */
  storage?: number;
  /**
   * @remarks
   * The name of the privileged account of the lightweight database instance.
   * 
   * @example
   * administrator
   */
  superAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      databaseInstanceEdition: 'DatabaseInstanceEdition',
      databaseInstanceId: 'DatabaseInstanceId',
      databaseInstanceName: 'DatabaseInstanceName',
      databaseInstanceStatus: 'DatabaseInstanceStatus',
      databaseVersion: 'DatabaseVersion',
      expiredTime: 'ExpiredTime',
      memory: 'Memory',
      privateConnection: 'PrivateConnection',
      publicConnection: 'PublicConnection',
      regionId: 'RegionId',
      storage: 'Storage',
      superAccountName: 'SuperAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      cpu: 'string',
      creationTime: 'string',
      databaseInstanceEdition: 'string',
      databaseInstanceId: 'string',
      databaseInstanceName: 'string',
      databaseInstanceStatus: 'string',
      databaseVersion: 'string',
      expiredTime: 'string',
      memory: 'string',
      privateConnection: 'string',
      publicConnection: 'string',
      regionId: 'string',
      storage: 'number',
      superAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the lightweight database instances.
   */
  databaseInstances?: DescribeDatabaseInstancesResponseBodyDatabaseInstances[];
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in the lightweight database instance list.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseInstances: 'DatabaseInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstances: { 'type': 'array', 'itemType': DescribeDatabaseInstancesResponseBodyDatabaseInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databaseInstances)) {
      $dara.Model.validateArray(this.databaseInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

