// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExcessivePrimaryKeysResponseBodyDetectionItems } from "./DescribeExcessivePrimaryKeysResponseBodyDetectionItems";
import { DescribeExcessivePrimaryKeysResponseBodyTables } from "./DescribeExcessivePrimaryKeysResponseBodyTables";


export class DescribeExcessivePrimaryKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1906102576997697",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcNqPqHV6lwR4INiAGjIvK1ngXxN1O+6ORRB6A8YvztEOGywOk81ZmuNk0YrNy+qk7+UVDTHeXKsy8h9e/ePY/LMidj0RCmDpo/YpCumd0UGe0qEPe2U+UJAm/+UHlnEFLVg6BP3yIB5D++MCy7mgWm8Kwyhk62IeYly4hQ+5IpXjkh1GQXuDgLVVPVpxEek9n30vnCUL4KsaMgfa7dgojb+3TM8xGsD2zVK5STJNrsXclscIJEqyNXd7CBYiRJVZi1HPO6drN9WW0chLpCSTgjO8n0bNanZaxXKumW9PSwV58UoSFASeMWfZK3TLngX+oq8nGmnTwcJosVjfF4RGzAnS1IXt0Q9N2WHDnpwyLBU/nOz7Hsy8IZ+h+OVjsBTXSM9688/vOF707a5mNzpETvQeGRcua3A5livcKAM2cML0yeUs/Zyj/+BGqtVa+wektspDHC/CECh6R5lxQjRmUdPawY8VDs2onmdLuEH8DdmYt+Yv/jBFBUMWOyAluzkPYcX5nuQKouCIUJUFTSbsJsuH5CTIh7Ls5rbmkj+T1qTVz8gnDR8LxwaqoMSna+elXgVyOOxXtMkenVntsmoC3p/4G7yTPL1hu8JyWGIIvZHZGGLXGEH7FeSuMV8buKxPGFWG3arG8e9LGvDdz5dgTien4y6G5AQ0o1iQdXDos5VWdH3u7k5PrsvdEOpvMi6uSd8a42na80FsYlgGlwM5upydcWUC5Un2HCkJpT1xgk2L6shdVTrK6bidRrqE784FhW9bBQePzGaxSupPENZya0VUctRt+7uq3QwIn4y5jzjgX0E0jgmqPrgiVDjBesMQZYfGPCGysWYWYzfoh+G6V7N2VVGtNnGUwNWzM0WJBPONAgxPv+AmixFRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "202515810214480629",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeExcessivePrimaryKeysResponseBodyDetectionItems[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 10
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
   * The queried tables.
   */
  tables?: DescribeExcessivePrimaryKeysResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyDetectionItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyTables },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

