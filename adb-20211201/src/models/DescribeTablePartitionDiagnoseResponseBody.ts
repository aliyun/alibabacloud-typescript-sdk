// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablePartitionDiagnoseResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The check result message.
   * 
   * @example
   * Unreasonable partitions detected in the table
   */
  message?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Table partition rationality check
   */
  name?: string;
  /**
   * @remarks
   * The status of the check result. Valid values:
   * 
   * - NORMAL
   * - WARNING
   * - CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The unreasonable partitions.
   * 
   * @example
   * [20210110, 20210113,20210123]
   */
  partitionDetail?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partitionNumber?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The table storage proportion. Unit: %.
   * 
   * > Calculation formula: Table storage proportion = Total data volume of the table / Total data volume of the instance × 100.
   * 
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * user
   */
  tableName?: string;
  /**
   * @remarks
   * The total data volume. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      partitionDetail: 'PartitionDetail',
      partitionNumber: 'PartitionNumber',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionDetail: 'string',
      partitionNumber: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp171g24yvbxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of check items and check results.
   */
  detectionItems?: DescribeTablePartitionDiagnoseResponseBodyDetectionItems[];
  /**
   * @remarks
   * The details.
   */
  items?: DescribeTablePartitionDiagnoseResponseBodyItems[];
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
   * The number of entries per page.
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
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The recommended maximum number of rows for subpartitions.
   * 
   * @example
   * 640000000
   */
  suggestMaxRecordsPerPartition?: number;
  /**
   * @remarks
   * The recommended minimum number of rows for subpartitions.
   * 
   * @example
   * 64000000
   */
  suggestMinRecordsPerPartition?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 185
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suggestMaxRecordsPerPartition: 'SuggestMaxRecordsPerPartition',
      suggestMinRecordsPerPartition: 'SuggestMinRecordsPerPartition',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyDetectionItems },
      items: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      suggestMaxRecordsPerPartition: 'number',
      suggestMinRecordsPerPartition: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

