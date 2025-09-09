// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsResponseBodyItems extends $dara.Model {
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
   * Indicates whether the data asset can be automatically scanned. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The data detection status. Valid values:
   * 
   * *   **0**: The data detection is ready.
   * *   **1**: The data detection is running.
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test is passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The name of the data detection status.
   * 
   * @example
   * Connectivity test status
   */
  checkStatusName?: string;
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
   * The database engine version.
   * 
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * Indicates whether DSC has the data identification permissions on the data asset. Valid values:
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
   * The type of the database engine. Valid values include **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * connect_network_error
   */
  errorCode?: string;
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
   * Indicates whether the data leak prevention feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes (default)
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 145600000
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
   * 123
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs.
   * 
   * @example
   * 12332
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the last scan is performed.
   * 
   * *   The value is a UNIX timestamp.
   * *   Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  lastFinishedTime?: number;
  /**
   * @remarks
   * The last scan start time of data assets, in milliseconds.
   * 
   * @example
   * 145600000
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
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
   * The ID of the member.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The next time when the data asset is scanned. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1676620236000
   */
  nextStartTime?: number;
  /**
   * @remarks
   * Indicates whether the optical character recognition (OCR) feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The parent ID of the data asset that you want to query. Valid values include **bucket, db, and project**.
   * 
   * @example
   * project
   */
  parentId?: string;
  /**
   * @remarks
   * The port number of the self-managed database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The status of the data asset scan. Valid values:
   * 
   * *   **-1**: invalid
   * *   **0**: waiting
   * *   **1**: being scanned
   * *   **2**: suspended
   * *   **3**: completed
   * 
   * @example
   * 3
   */
  processStatus?: number;
  /**
   * @remarks
   * The total number of data tables or files.
   * 
   * @example
   * 100
   */
  processTotalCount?: number;
  /**
   * @remarks
   * The region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The code of the service to which the data asset belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The number of sensitive data samples. Valid values: **0**, **5**, and **10**. Unit: data entries.
   * 
   * @example
   * 5
   */
  samplingSize?: number;
  /**
   * @remarks
   * A list of the IDs of the security groups that are used by PrivateLink when you install the DSC agent.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * Indicates whether the security audit feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportAudit?: boolean;
  /**
   * @remarks
   * Indicates whether the data de-identification feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportDatamask?: boolean;
  /**
   * @remarks
   * Indicates whether anomalous event detection is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  supportEvent?: boolean;
  /**
   * @remarks
   * Indicates whether OCR is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportOcr?: boolean;
  /**
   * @remarks
   * Indicates whether the data asset scan feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportScan?: boolean;
  /**
   * @remarks
   * The alias of the tenant.
   * 
   * @example
   * insta_gram
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the table.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The username that is used to access the data asset.
   * 
   * @example
   * tsts
   */
  userName?: string;
  /**
   * @remarks
   * A list of the IDs of the vSwitches that are used by PrivateLink when you install the DSC agent.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the data asset belongs.
   * 
   * @example
   * vpc-2zevcqke6hh09c41****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      datamaskStatus: 'DatamaskStatus',
      dbVersion: 'DbVersion',
      enable: 'Enable',
      engineType: 'EngineType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      eventStatus: 'EventStatus',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      lastFinishedTime: 'LastFinishedTime',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      logStoreDay: 'LogStoreDay',
      memberAccount: 'MemberAccount',
      nextStartTime: 'NextStartTime',
      ocrStatus: 'OcrStatus',
      parentId: 'ParentId',
      port: 'Port',
      processStatus: 'ProcessStatus',
      processTotalCount: 'ProcessTotalCount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      samplingSize: 'SamplingSize',
      securityGroupIdList: 'SecurityGroupIdList',
      supportAudit: 'SupportAudit',
      supportDatamask: 'SupportDatamask',
      supportEvent: 'SupportEvent',
      supportOcr: 'SupportOcr',
      supportScan: 'SupportScan',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
      userName: 'UserName',
      vSwitchIdList: 'VSwitchIdList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      checkStatus: 'number',
      checkStatusName: 'string',
      datamaskStatus: 'number',
      dbVersion: 'string',
      enable: 'number',
      engineType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      eventStatus: 'number',
      gmtCreate: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      lastFinishedTime: 'number',
      lastStartTime: 'number',
      localName: 'string',
      logStoreDay: 'number',
      memberAccount: 'number',
      nextStartTime: 'number',
      ocrStatus: 'number',
      parentId: 'string',
      port: 'number',
      processStatus: 'number',
      processTotalCount: 'number',
      regionId: 'string',
      resourceType: 'number',
      resourceTypeCode: 'string',
      samplingSize: 'number',
      securityGroupIdList: { 'type': 'array', 'itemType': 'string' },
      supportAudit: 'boolean',
      supportDatamask: 'boolean',
      supportEvent: 'boolean',
      supportOcr: 'boolean',
      supportScan: 'boolean',
      tenantName: 'string',
      totalCount: 'number',
      userName: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIdList)) {
      $dara.Model.validateArray(this.securityGroupIdList);
    }
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsResponseBody extends $dara.Model {
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
   * The data assets.
   */
  items?: DescribeDataLimitsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
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
      items: { 'type': 'array', 'itemType': DescribeDataLimitsResponseBodyItems },
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

