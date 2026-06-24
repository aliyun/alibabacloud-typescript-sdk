// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSourcesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The audit authorization status. Valid values:
   * 
   * - **1**: Authorized.
   * 
   * - **0**: Unauthorized.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Indicates whether automatic scanning for sensitive data is enabled. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  autoScan?: number;
  /**
   * @remarks
   * Indicates whether the username and password can be modified. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  canModifyUserName?: boolean;
  /**
   * @remarks
   * The data check status. Valid values:
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
   * The status of data masking authorization. Valid values:
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
   * The name of the database to which the asset belongs.
   * 
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether sensitive data detection is enabled for the asset. Valid values:
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
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MariaDB**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * password error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the asset was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The unique ID of the asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * instance test
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The size of the instance. This parameter is valid only for OSS assets. Unit: bytes.
   * 
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @remarks
   * The timestamp when the asset was last modified. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The ID of the account that last modified the asset.
   * 
   * @example
   * demo
   */
  lastModifyUserId?: string;
  /**
   * @remarks
   * The storage duration of raw logs. Unit: days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * The status of the password. Valid values:
   * 
   * - **1**: In use.
   * 
   * - **0**: Not in use.
   * 
   * @example
   * 1
   */
  passwordStatus?: number;
  /**
   * @remarks
   * The product type ID. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * The sensitive data sampling size. Valid values: **0**, **5**, and **10**. Unit: number of entries.
   * 
   * @example
   * 10
   */
  samplingSize?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 11
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * user1
   */
  tenantName?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * User01
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      canModifyUserName: 'CanModifyUserName',
      checkStatus: 'CheckStatus',
      datamaskStatus: 'DatamaskStatus',
      dbName: 'DbName',
      enable: 'Enable',
      engineType: 'EngineType',
      errorMessage: 'ErrorMessage',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceSize: 'InstanceSize',
      lastModifyTime: 'LastModifyTime',
      lastModifyUserId: 'LastModifyUserId',
      logStoreDay: 'LogStoreDay',
      passwordStatus: 'PasswordStatus',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      samplingSize: 'SamplingSize',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      canModifyUserName: 'boolean',
      checkStatus: 'number',
      datamaskStatus: 'number',
      dbName: 'string',
      enable: 'number',
      engineType: 'string',
      errorMessage: 'string',
      gmtCreate: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceSize: 'number',
      lastModifyTime: 'number',
      lastModifyUserId: 'string',
      logStoreDay: 'number',
      passwordStatus: 'number',
      productId: 'number',
      regionId: 'string',
      regionName: 'string',
      samplingSize: 'number',
      tenantId: 'string',
      tenantName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of assets.
   */
  items?: DescribeInstanceSourcesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
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
   * 5A7E8FB9-5011-5A90-97D9-AE587047****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 2
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
      items: { 'type': 'array', 'itemType': DescribeInstanceSourcesResponseBodyItems },
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

