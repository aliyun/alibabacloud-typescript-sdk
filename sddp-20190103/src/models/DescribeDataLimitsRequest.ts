// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * The audit status. Valid values:
   * 
   * - **1**: Auditing enabled.
   * 
   * - **0**: Auditing disabled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The connectivity test status. Valid values:
   * 
   * - **0**: Ready.
   * 
   * - **1**: Running.
   * 
   * - **2**: Connectivity test in progress.
   * 
   * - **3**: Connectivity test passed.
   * 
   * - **4**: Connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data masking status. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * The sensitive data detection status. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the database engine. Examples: **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent asset to which the data asset belongs. Valid values:
   * 
   * - The name or ID of a MaxCompute project.
   * 
   * - The name or ID of an OSS bucket.
   * 
   * - The name or ID of an RDS instance or database.
   * 
   * @example
   * 1112
   */
  parentId?: string;
  /**
   * @remarks
   * The type of service to which the data asset belongs. Data assets can be instances, databases, or buckets. Valid values:
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
   * - **6**: A self-managed database
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The ID of the region where the data asset is located.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      checkStatus: 'CheckStatus',
      currentPage: 'CurrentPage',
      datamaskStatus: 'DatamaskStatus',
      enable: 'Enable',
      endTime: 'EndTime',
      engineType: 'EngineType',
      featureType: 'FeatureType',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      checkStatus: 'number',
      currentPage: 'number',
      datamaskStatus: 'number',
      enable: 'number',
      endTime: 'number',
      engineType: 'string',
      featureType: 'number',
      lang: 'string',
      memberAccount: 'number',
      pageSize: 'number',
      parentId: 'string',
      resourceType: 'number',
      serviceRegionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

