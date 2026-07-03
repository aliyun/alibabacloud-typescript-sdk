// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyDataSourcesDataSourceReferences extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******
   */
  dataIngestionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyDataSourcesDataSourceStores extends $dara.Model {
  /**
   * @remarks
   * The time when the check was performed.
   * 
   * @example
   * 1733269771123
   */
  checkTime?: number;
  /**
   * @remarks
   * The time when the log storage was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The source of the data. Valid values:
   * 
   * - center
   * 
   * - custom
   * 
   * @example
   * center
   */
  dataSourceStoreFrom?: string;
  /**
   * @remarks
   * The ID of the log storage.
   * 
   * @example
   * di_xxxx_source_1
   */
  dataSourceStoreId?: string;
  /**
   * @remarks
   * The status of the log storage. Valid values:
   * 
   * - normal
   * 
   * - abnormal
   * 
   * @example
   * normal
   */
  dataSourceStoreStatus?: string;
  /**
   * @remarks
   * The status code of the log storage.
   * 
   * @example
   * LogStoreNotExist
   */
  dataSourceStoreStatusCode?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @remarks
   * The ID of the log storage region.
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
   * audit-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The time when the log storage was last updated.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      checkTime: 'CheckTime',
      createTime: 'CreateTime',
      dataSourceStoreFrom: 'DataSourceStoreFrom',
      dataSourceStoreId: 'DataSourceStoreId',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      dataSourceStoreStatusCode: 'DataSourceStoreStatusCode',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTime: 'number',
      createTime: 'number',
      dataSourceStoreFrom: 'string',
      dataSourceStoreId: 'string',
      dataSourceStoreStatus: 'string',
      dataSourceStoreStatusCode: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
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

export class ListDataSourcesResponseBodyDataSources extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The source of the data. Valid values:
   * 
   * - center
   * 
   * - custom
   * 
   * @example
   * center
   */
  dataSourceFrom?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * AD_LOG
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Indicates whether new Logstores are automatically discovered.
   * 
   * @example
   * true
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @remarks
   * The data source recognizer.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot
   */
  dataSourceRecognizer?: string;
  /**
   * @remarks
   * The list of data ingestion IDs that are associated with the data source.
   */
  dataSourceReferences?: ListDataSourcesResponseBodyDataSourcesDataSourceReferences[];
  /**
   * @remarks
   * The status of the data source. Valid values:
   * 
   * - unconfigured
   * 
   * - normal
   * 
   * - abnormal
   * 
   * @example
   * unconfigured
   */
  dataSourceStatus?: string;
  /**
   * @remarks
   * The list of Logstores.
   */
  dataSourceStores?: ListDataSourcesResponseBodyDataSourcesDataSourceStores[];
  /**
   * @remarks
   * The ID of the data source template.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******
   */
  dataSourceTemplateId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * custom
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @remarks
   * The ID of the log storage region.
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
   * audit-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The ID of the user who can access the data.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The time when the data source was last updated.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceFrom: 'DataSourceFrom',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceRecognizer: 'DataSourceRecognizer',
      dataSourceReferences: 'DataSourceReferences',
      dataSourceStatus: 'DataSourceStatus',
      dataSourceStores: 'DataSourceStores',
      dataSourceTemplateId: 'DataSourceTemplateId',
      dataSourceType: 'DataSourceType',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserId: 'LogUserId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSourceFrom: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceRecognizer: 'string',
      dataSourceReferences: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataSourcesDataSourceReferences },
      dataSourceStatus: 'string',
      dataSourceStores: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataSourcesDataSourceStores },
      dataSourceTemplateId: 'string',
      dataSourceType: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserId: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceReferences)) {
      $dara.Model.validateArray(this.dataSourceReferences);
    }
    if(Array.isArray(this.dataSourceStores)) {
      $dara.Model.validateArray(this.dataSourceStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data sources.
   */
  dataSources?: ListDataSourcesResponseBodyDataSources[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If a value is returned, it indicates that not all results have been returned. You can use this token in the next query to continue retrieving results.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataSources },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

