// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The data detection status. Valid values:
   * 
   * *   **0**: The data detection is ready.
   * *   **1**: The data detection is running.
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether DSC has the data de-identification permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * Specifies whether DSC has the data detection permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The end of the time range to query The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values include **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
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
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member.
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
   * The parent ID of the data asset to be queried. Valid values:
   * 
   * *   The name or ID of the MaxCompute project.
   * *   The name or ID of the OSS bucket.
   * *   The name or ID of the ApsaraDB RDS instance or database.
   * 
   * @example
   * 1112
   */
  parentId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. This parameter is required. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query The value is a UNIX timestamp. Unit: milliseconds.
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

