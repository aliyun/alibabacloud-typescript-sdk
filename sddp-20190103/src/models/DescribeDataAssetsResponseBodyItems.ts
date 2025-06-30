// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAssetsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) that controls the access permissions on the OSS bucket.
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **21**.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The time when the data asset was created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The data type of the data asset.
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
   * The sensitivity tag of the data. The value is fixed as **0**. **0**, **1**, **2**, or **3** is returned for this parameter only when you set the parameter **RangeId** to **1**.
   * 
   * *   **0**: unclassified
   * *   **1**: confidential
   * *   **2**: sensitive
   * *   **3**: highly sensitive
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
   * The key value of the OSS object.
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **22**.
   * 
   * @example
   * Internal
   */
  objectKey?: string;
  /**
   * @remarks
   * The sensitivity level of the MaxCompute data asset. Valid values:
   * 
   * *   **S1**: low sensitivity level
   * *   **S2**: medium sensitivity level
   * *   **S3**: high sensitivity level
   * *   **S4**: highest sensitivity level
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **1**.
   * 
   * @example
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The account that owns the data asset.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * Indicates whether the data protection mechanism is enabled for the data asset. The value is fixed as **false**. **true** or **false** is returned for this parameter only when you set the parameter **RangeId** to **1**.
   * 
   * *   **false**: The data protection mechanism is disabled.
   * *   **true**: The data protection mechanism is enabled. Only data inbound is supported. Data outbound is not supported.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The sensitivity level of the data asset. A higher sensitivity level indicates that the identified data is more sensitive. Valid values:
   * 
   * *   **1**: No sensitive data is identified.
   * *   **2**: sensitive data at level 1.
   * *   **3**: sensitive data at level 2.
   * *   **3**: sensitive data at level 3.
   * *   **5**: sensitive data at level 4.
   * *   **6**: sensitive data at level 5.
   * *   **7**: sensitive data at level 6.
   * *   **8**: sensitive data at level 7.
   * *   **9**: sensitive data at level 8.
   * *   **10**: sensitive data at level 9.
   * *   **11**: sensitive data at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the data asset.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset hits.
   * 
   * @example
   * \\*\\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset contains sensitive data. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive data assets. For example, the value can be the total number of sensitive MaxCompute projects, packages, or tables, the total number of sensitive ApsaraDB RDS databases or tables, or the total number of sensitive OSS buckets or objects.
   * 
   * @example
   * 24
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive data in all data assets.
   * 
   * @example
   * 45%
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The total number of data assets. For example, the value can be the total number of MaxCompute projects, packages, or tables, the total number of ApsaraDB RDS databases or tables, or the total number of OSS buckets or objects.
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

