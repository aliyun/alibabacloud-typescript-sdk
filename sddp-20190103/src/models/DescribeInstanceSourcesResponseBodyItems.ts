// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSourcesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the security audit feature is enabled. Valid values:
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
   * Indicates whether the automatic scan feature is enabled to detect sensitive data. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  autoScan?: number;
  /**
   * @remarks
   * Indicates whether the username and password can be changed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  canModifyUserName?: boolean;
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
   * Indicates whether DSC has the data de-identification permissions on the data asset. Valid values:
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
   * The name of the database to which the data asset belongs.
   * 
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether sensitive data detection is enabled for the data asset. Valid values:
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
   * The type of the database engine. Valid values: **MySQL, MariaDB, Oracle, PostgreSQL, and SQLServer**.
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
   * The password is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The unique ID of the data asset.
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
   * Test
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * rm-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage space size of the instance. This parameter is valid only if the value of the ProductId parameter is 2. Unit: bytes.
   * 
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @remarks
   * The time when the data asset was last modified. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The ID of the account that is last used to modify the data asset.
   * 
   * @example
   * demo
   */
  lastModifyUserId?: string;
  /**
   * @remarks
   * The retention period of raw logs. Unit: days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Indicates whether the password is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  passwordStatus?: number;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
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
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The number of sensitive data samples. Valid values: **0**, **5**, and **10**. Unit: data entries.
   * 
   * @example
   * 10
   */
  samplingSize?: number;
  /**
   * @remarks
   * The ID of the tenant.
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

