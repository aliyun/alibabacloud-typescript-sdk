// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsResponseBodyItems extends $dara.Model {
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
   * Indicates whether automatic scanning is enabled. Valid values:
   * 
   * - **0**: No.
   * 
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  autoScan?: number;
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
   * The name of the connectivity test status.
   * 
   * @example
   * Connectivity detection status
   */
  checkStatusName?: string;
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
   * The database version.
   * 
   * @example
   * 2.0
   */
  dbVersion?: string;
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
   * The database engine type. Examples: **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The error code that is returned if the connectivity test fails.
   * 
   * @example
   * connect_network_error
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the connectivity test fails.
   * 
   * @example
   * Incorrect password.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The anomaly detection status. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled (default).
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The time when the data asset was created. This value is a UNIX timestamp. Unit: milliseconds.
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
   * The ID of the instance to which the data asset belongs.
   * 
   * @example
   * 12332
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the last full scan was complete. This value is a UNIX timestamp in milliseconds.
   * 
   * - Format: UNIX timestamp
   * 
   * - Unit: milliseconds
   * 
   * @example
   * 145600000
   */
  lastFinishedTime?: number;
  /**
   * @remarks
   * The time when the last scan started. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 145600000
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The name of the region in which the data asset is located.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The retention period of raw logs, in days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * The ID of the member account to which the data asset belongs.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The time when the next scan is scheduled to start. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1676620236000
   */
  nextStartTime?: number;
  /**
   * @remarks
   * The status of Optical Character Recognition (OCR). Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The ID of the parent asset, such as a bucket, DB, or **project**.
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
   * The status of the scan task. Valid values:
   * 
   * - **-1**: Invalid.
   * 
   * - **0**: Pending.
   * 
   * - **1**: Scanning.
   * 
   * - **2**: Paused.
   * 
   * - **3**: Completed.
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
   * The ID of the region in which the data asset is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The code of the service to which the data asset belongs. Examples: MaxCompute, OSS, ADS, OTS, and **RDS**.
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The number of sensitive data samples. Valid values: **0**, **5**, and **10**. Unit: entries.
   * 
   * @example
   * 5
   */
  samplingSize?: number;
  /**
   * @remarks
   * A list of security group IDs that are used by PrivateLink for agent-based auditing.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * Indicates whether auditing is supported. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  supportAudit?: boolean;
  /**
   * @remarks
   * Indicates whether data masking is supported. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  supportDatamask?: boolean;
  /**
   * @remarks
   * Indicates whether anomaly detection is supported. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  supportEvent?: boolean;
  /**
   * @remarks
   * Indicates whether OCR is supported. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  supportOcr?: boolean;
  /**
   * @remarks
   * Indicates whether sensitive data detection is supported. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
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
   * The total number of fields. This parameter is returned only when the data asset is a table.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The username of the data asset owner.
   * 
   * @example
   * tsts
   */
  userName?: string;
  /**
   * @remarks
   * A list of vSwitch IDs that are used by PrivateLink for agent-based auditing.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the data asset resides.
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
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data assets.
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
   * The total number of entries.
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

