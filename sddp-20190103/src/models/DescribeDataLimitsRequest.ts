// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * The audit status. Valid values:
   * - **1**: audit enabled.
   * - **0**: audit disabled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The data detection status. Valid values:
   * - **0**: ready.
   * - **1**: running.
   * - **2**: connectivity test in progress.
   * - **3**: connectivity test passed.
   * - **4**: connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * Settings the page number of the current page when you perform a paged query. For more information about paging, refer to the paging parameters.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data masking permission status. Valid values:
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * The detection permission status. Valid values:
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The end of the creation time range. Format: timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
  endTime?: number;
  /**
   * @remarks
   * The database type. Valid values: **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, **MongoDB**, and others.
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
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member accounts.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page when you perform a paged query. For more information about paging, refer to the paging parameters.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent asset to which the data asset belongs. Valid values:
   * - The project name or ID for MaxCompute.
   * - The bucket name or ID for OSS.
   * - The instance name or ID, or the database name or ID for RDS.
   * 
   * @example
   * 1112
   */
  parentId?: string;
  /**
   * @remarks
   * Required. The type of the product to which the data asset belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADS
   * - **4**: OTS
   * - **5**: RDS
   * - **6**: SELF_DB
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The region where the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The start of the creation time range. Format: timestamp. Unit: milliseconds.
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

