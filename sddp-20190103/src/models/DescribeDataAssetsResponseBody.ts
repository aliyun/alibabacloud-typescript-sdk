// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAssetsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) of the OSS bucket.
   * 
   * > This parameter is returned only when **RangeId** is **21&#x20;**(OSS buckets).
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The type of the data asset.
   * 
   * @example
   * OSS_BUCKET
   */
  dataType?: string;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The sensitivity level of the data. This is a static field and is returned only when **RangeId** is **1** (MaxCompute projects).
   * 
   * - **0**: Unclassified
   * 
   * - **1**: Confidential
   * 
   * - **2**: Sensitive
   * 
   * - **3**: Highly sensitive
   * 
   * @example
   * 0
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The key of the OSS object.
   * 
   * > This parameter is returned only when **RangeId** is **22** (OSS objects).
   * 
   * @example
   * test.txt
   */
  objectKey?: string;
  /**
   * @remarks
   * The name of the risk level for the MaxCompute data asset. Valid values:
   * 
   * - **S1**: Low
   * 
   * - **S2**: Medium
   * 
   * - **S3**: High
   * 
   * - **S4**: Highest
   * 
   * > This parameter is returned only when \\`RangeId\\` is \\`1\\` (MaxCompute projects).
   * 
   * @example
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The owner of the data asset.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The code of the service to which the data asset belongs.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: AnalyticDB for MySQL
   * 
   * - **4**: Tablestore
   * 
   * - **5**: RDS
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * Indicates whether data protection is enabled. This is a static field and is returned only when **RangeId** is **1** (MaxCompute projects).
   * 
   * - **false**: Data protection is disabled.
   * 
   * - **true**: Data protection is enabled. Data can only flow into the project, not out of it.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The ID of the risk level. A larger value indicates a higher risk level. Valid values:
   * 
   * - **1**: No sensitive data detected
   * 
   * - **2**: Level 1
   * 
   * - **3**: Level 2
   * 
   * - **4**: Level 3
   * 
   * - **5**: Level 4
   * 
   * - **6**: Level 5
   * 
   * - **7**: Level 6
   * 
   * - **8**: Level 7
   * 
   * - **9**: Level 8
   * 
   * - **10**: Level 9
   * 
   * - **11**: Level 10
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level.
   * 
   * @example
   * High risk
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset matches.
   * 
   * @example
   * ***Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset contains sensitive data. Valid values:
   * 
   * - **true**: Yes
   * 
   * - **false**: No
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive items in the data asset. For example, the total number of sensitive projects, packages, or tables in MaxCompute, the total number of sensitive databases or tables in RDS, or the total number of sensitive buckets or objects in OSS.
   * 
   * @example
   * 24
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive data in the data asset.
   * 
   * @example
   * 45%
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The total number of items in the data asset. For example, the total number of projects, packages, or tables in MaxCompute, the total number of databases or tables in RDS, or the total number of buckets or objects in OSS.
   * 
   * @example
   * 432
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      creationTime: 'CreationTime',
      dataType: 'DataType',
      id: 'Id',
      labelsec: 'Labelsec',
      name: 'Name',
      objectKey: 'ObjectKey',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      protection: 'Protection',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      sensitiveRatio: 'SensitiveRatio',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      creationTime: 'number',
      dataType: 'string',
      id: 'string',
      labelsec: 'boolean',
      name: 'string',
      objectKey: 'string',
      odpsRiskLevelName: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      protection: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      sensitiveRatio: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array of data assets.
   */
  items?: DescribeDataAssetsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data assets that contain sensitive data.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataAssetsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

