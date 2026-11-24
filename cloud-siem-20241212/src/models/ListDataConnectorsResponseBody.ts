// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataConnectorsResponseBodyDataConnector extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration item for the data connector access object in the multi-cloud configuration.
   * 
   * @example
   * cn-smbc-prod-cloudtrail.s3.cn-north-1.amazonaws.com.cn_AKIAX4AUG6AYSJO7FAG4
   */
  authConfigId?: string;
  /**
   * @remarks
   * The cloud service to which the authentication configuration belongs.
   * 
   * @example
   * salesForceRestAPI
   */
  authConfigProduct?: string;
  /**
   * @remarks
   * The cloud provider to which the authentication configuration belongs.
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
   * 1792515606000
   */
  creationTime?: number;
  /**
   * @remarks
   * The configuration information of the data connector.
   * 
   * @example
   * {\\"endpoint\\":\\"csrm-sentinel.s3.cn-north-1.amazonaws.com.cn_AKIARGUYUGSX6A6VUXQJ\\",\\"bucket\\":\\"csrm-sentinel\\",\\"prefix\\":\\"AliTest/\\",\\"format\\":{\\"type\\":\\"JSON\\"},\\"encoding\\":\\"UTF-8\\"}
   */
  dataConnectorConfig?: string;
  /**
   * @remarks
   * The data connector ID.
   * 
   * @example
   * dc-07423146117d77db266f78bc41f4fd80
   */
  dataConnectorId?: string;
  /**
   * @remarks
   * The name of the data connector.
   * 
   * @example
   * dc-***
   */
  dataConnectorName?: string;
  /**
   * @remarks
   * The enabled status of the data connector.
   * 
   * @example
   * enable
   */
  dataConnectorStatus?: string;
  /**
   * @remarks
   * The type of the data connector.
   * 
   * @example
   * oss
   */
  dataConnectorType?: string;
  /**
   * @remarks
   * The ID of the destination data source. This parameter is required only for synchronization.
   * 
   * @example
   * ds-t3ywipile7gctobaunx0
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
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
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * ls-wecom-crontasklog-prod
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) data import job for the data connector.
   * 
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b****
   */
  slsIngestionJobName?: string;
  /**
   * @remarks
   * The status of the Simple Log Service (SLS) data import job for the data connector.
   * 
   * @example
   * running
   */
  slsIngestionJobState?: string;
  /**
   * @remarks
   * The type of the source data source.
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
   * 1792515606000
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
   * The list of data connectors.
   */
  dataConnector?: ListDataConnectorsResponseBodyDataConnector[];
  /**
   * @remarks
   * The maximum number of entries returned in the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page.
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
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

