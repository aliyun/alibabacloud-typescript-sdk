// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyDataSourcesDataSourceReferences extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******。
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
  checkTime?: number;
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * center。
   */
  dataSourceStoreFrom?: string;
  /**
   * @example
   * di_xxxx_source_1。
   */
  dataSourceStoreId?: string;
  /**
   * @example
   * normal。
   */
  dataSourceStoreStatus?: string;
  /**
   * @example
   * LogStoreNotExist
   */
  dataSourceStoreStatusCode?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou。
   */
  logProjectName?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * audit-activity。
   */
  logStoreName?: string;
  /**
   * @example
   * 1733269771123。
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
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * center。
   */
  dataSourceFrom?: string;
  /**
   * @example
   * ds-scpfegri73oyoknbc90c。
   */
  dataSourceId?: string;
  /**
   * @example
   * AD_LOG。
   */
  dataSourceName?: string;
  /**
   * @example
   * true。
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot。
   */
  dataSourceRecognizer?: string;
  dataSourceReferences?: ListDataSourcesResponseBodyDataSourcesDataSourceReferences[];
  dataSourceStatus?: string;
  dataSourceStores?: ListDataSourcesResponseBodyDataSourcesDataSourceStores[];
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******。
   */
  dataSourceTemplateId?: string;
  /**
   * @example
   * custom。
   */
  dataSourceType?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou。
   */
  logProjectName?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * audit-activity。
   */
  logStoreName?: string;
  /**
   * @example
   * 173326*******。
   */
  logUserId?: number;
  /**
   * @example
   * 1733269771123。
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
  dataSources?: ListDataSourcesResponseBodyDataSources[];
  /**
   * @example
   * 50。
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****。
   */
  nextToken?: string;
  /**
   * @example
   * 1。
   */
  pageNumber?: number;
  /**
   * @example
   * 1。
   */
  pageSize?: number;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * 2。
   */
  totalCount?: number;
  /**
   * @example
   * 1。
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

