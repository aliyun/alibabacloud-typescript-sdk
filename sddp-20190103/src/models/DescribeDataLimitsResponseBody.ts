// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitsResponseBodyItems extends $dara.Model {
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
   * Indicates whether automatic scanning is enabled. Valid values:
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  autoScan?: number;
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
   * The name of the data detection status.
   * 
   * @example
   * Connectivity detection status
   */
  checkStatusName?: string;
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
   * The database version.
   * 
   * @example
   * 2.0
   */
  dbVersion?: string;
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
   * The database type. Valid values: **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, **MongoDB**, and others.
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
   * The failure reason.
   * 
   * @example
   * Incorrect password.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The data leak prevention switch. Valid values:
   * - **0**: disabled.
   * - **1**: enabled (default).
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The creation time. Format: timestamp. Unit: milliseconds.
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
   * The instance ID of the asset to which the data asset table belongs.
   * 
   * @example
   * 12332
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the last full scan was completed.
   * - Format: timestamp
   * - Unit: milliseconds
   * 
   * @example
   * 145600000
   */
  lastFinishedTime?: number;
  /**
   * @remarks
   * The time when the last scan of the data asset started. Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The name of the region where the data resides.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The raw log storage duration. Unit: days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * The member accounts ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The next execution time. Format: timestamp. Unit: milliseconds.
   * 
   * @example
   * 1676620236000
   */
  nextStartTime?: number;
  /**
   * @remarks
   * The OCR status. Valid values:
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The parent ID of the asset to query. Valid values: **bucket**, **db**, **project**, and others.
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
   * The scan status. Valid values:
   * - **-1**: invalid.
   * - **0**: waiting.
   * - **1**: scanning.
   * - **2**: paused.
   * - **3**: completed.
   * 
   * @example
   * 3
   */
  processStatus?: number;
  /**
   * @remarks
   * The total number of tables or files.
   * 
   * @example
   * 100
   */
  processTotalCount?: number;
  /**
   * @remarks
   * The region where the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the product to which the data asset belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADS
   * - **4**: OTS
   * - **5**: RDS
   * - **6**: SELF_DB
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The product type code of the data source. Valid values: **MaxCompute**, **OSS**, **ADS**, **OTS**, **RDS**, and others.
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The sensitive data sampling size. Valid values: **0**, **5**, and **10**. Unit: entries.
   * 
   * @example
   * 5
   */
  samplingSize?: number;
  /**
   * @remarks
   * The list of security group IDs used by PrivateLink in agent-based auditing.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * Indicates whether auditing is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportAudit?: boolean;
  /**
   * @remarks
   * Indicates whether data masking is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportDatamask?: boolean;
  /**
   * @remarks
   * Indicates whether anomalous activity detection is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportEvent?: boolean;
  /**
   * @remarks
   * Indicates whether OCR is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportOcr?: boolean;
  /**
   * @remarks
   * Indicates whether scanning is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportScan?: boolean;
  /**
   * @remarks
   * The tenant alias.
   * 
   * @example
   * insta_gram
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the data asset table.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The username of the data owner.
   * 
   * @example
   * tsts
   */
  userName?: string;
  /**
   * @remarks
   * The list of vSwitch IDs used by PrivateLink in agent-based auditing.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The VPC ID to which the data asset belongs.
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
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of data assets.
   */
  items?: DescribeDataLimitsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
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

