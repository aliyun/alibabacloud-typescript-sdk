// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataConnectorsResponseBodyDataConnector extends $dara.Model {
  /**
   * @remarks
   * The configuration item ID of the collector access object in the multi-cloud configuration.
   * 
   * @example
   * cn-smbc-prod-cloudtrail.s3.cn-north-1.amazonaws.com.cn_AKIAX4AUG6AYSJO7FAG4
   */
  authConfigId?: string;
  /**
   * @remarks
   * The cloud product of the authentication configuration.
   * 
   * @example
   * salesForceRestAPI
   */
  authConfigProduct?: string;
  /**
   * @remarks
   * The cloud vendor of the authentication configuration.
   * 
   * @example
   * SALESFORCE
   */
  authConfigVendor?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-01T02:14:24Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The collector configuration information.
   * 
   * @example
   * {\\"endpoint\\":\\"csrm-sentinel.s3.cn-north-1.amazonaws.com.cn_AKIARGUYUGSX6A6VUXQJ\\",\\"bucket\\":\\"csrm-sentinel\\",\\"prefix\\":\\"AliTest/\\",\\"format\\":{\\"type\\":\\"JSON\\"},\\"encoding\\":\\"UTF-8\\"}
   */
  dataConnectorConfig?: string;
  /**
   * @remarks
   * The collector ID.
   * 
   * @example
   * dc-07423146117d77db266f78bc41f4fd80
   */
  dataConnectorId?: string;
  /**
   * @remarks
   * The data connector name.
   * 
   * @example
   * dc-***
   */
  dataConnectorName?: string;
  /**
   * @remarks
   * The connector status.
   * 
   * @example
   * enable
   */
  dataConnectorStatus?: string;
  /**
   * @remarks
   * The connector type.
   * 
   * @example
   * oss
   */
  dataConnectorType?: string;
  /**
   * @remarks
   * The destination data source ID. This parameter is required only for synchronization.
   * 
   * @example
   * ds-t3ywipile7gctobaunx0
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
   * 
   * @example
   * aliyun-cloudsiem-channel-1371069058301795-cn-shanghai
   */
  logProjectName?: string;
  /**
   * @remarks
   * The log storage region ID.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore name.
   * 
   * @example
   * ls-wecom-crontasklog-prod
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the SLS data import job associated with the collector.
   * 
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b****
   */
  slsIngestionJobName?: string;
  /**
   * @remarks
   * The status of the SLS data import job associated with the collector.
   * 
   * @example
   * running
   */
  slsIngestionJobState?: string;
  /**
   * @remarks
   * The source data type.
   * 
   * @example
   * s3
   */
  srcDataType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-01-04 22:31:54
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authConfigId: 'AuthConfigId',
      authConfigProduct: 'AuthConfigProduct',
      authConfigVendor: 'AuthConfigVendor',
      creationTime: 'CreationTime',
      dataConnectorConfig: 'DataConnectorConfig',
      dataConnectorId: 'DataConnectorId',
      dataConnectorName: 'DataConnectorName',
      dataConnectorStatus: 'DataConnectorStatus',
      dataConnectorType: 'DataConnectorType',
      destDataSourceId: 'DestDataSourceId',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      slsIngestionJobName: 'SlsIngestionJobName',
      slsIngestionJobState: 'SlsIngestionJobState',
      srcDataType: 'SrcDataType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigId: 'string',
      authConfigProduct: 'string',
      authConfigVendor: 'string',
      creationTime: 'number',
      dataConnectorConfig: 'string',
      dataConnectorId: 'string',
      dataConnectorName: 'string',
      dataConnectorStatus: 'string',
      dataConnectorType: 'string',
      destDataSourceId: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      slsIngestionJobName: 'string',
      slsIngestionJobState: 'string',
      srcDataType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataConnectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of collectors.
   */
  dataConnector?: ListDataConnectorsResponseBodyDataConnector[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
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
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataConnector: 'DataConnector',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataConnector: { 'type': 'array', 'itemType': ListDataConnectorsResponseBodyDataConnector },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataConnector)) {
      $dara.Model.validateArray(this.dataConnector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

