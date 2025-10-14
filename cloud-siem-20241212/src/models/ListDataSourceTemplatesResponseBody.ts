// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTemplatesResponseBodyDataSourceTemplates extends $dara.Model {
  /**
   * @example
   * enabled。
   */
  autoScanNew?: string;
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * custom。
   */
  dataSourceFrom?: string;
  /**
   * @example
   * true。
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion。
   */
  dataSourceRecognizer?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion。
   */
  dataSourceTemplateId?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion。
   */
  dataSourceTemplateName?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******。
   */
  logProjectPattern?: string;
  logRegionIds?: string[];
  /**
   * @example
   * audit-activity。
   */
  logStorePattern?: string;
  logUserIds?: string[];
  /**
   * @example
   * 2025-01-08 10:28:31
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoScanNew: 'AutoScanNew',
      createTime: 'CreateTime',
      dataSourceFrom: 'DataSourceFrom',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceRecognizer: 'DataSourceRecognizer',
      dataSourceTemplateId: 'DataSourceTemplateId',
      dataSourceTemplateName: 'DataSourceTemplateName',
      logProjectPattern: 'LogProjectPattern',
      logRegionIds: 'LogRegionIds',
      logStorePattern: 'LogStorePattern',
      logUserIds: 'LogUserIds',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScanNew: 'string',
      createTime: 'number',
      dataSourceFrom: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceRecognizer: 'string',
      dataSourceTemplateId: 'string',
      dataSourceTemplateName: 'string',
      logProjectPattern: 'string',
      logRegionIds: { 'type': 'array', 'itemType': 'string' },
      logStorePattern: 'string',
      logUserIds: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logRegionIds)) {
      $dara.Model.validateArray(this.logRegionIds);
    }
    if(Array.isArray(this.logUserIds)) {
      $dara.Model.validateArray(this.logUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTemplatesResponseBody extends $dara.Model {
  dataSourceTemplates?: ListDataSourceTemplatesResponseBodyDataSourceTemplates[];
  /**
   * @example
   * 1。
   */
  pageNumber?: string;
  /**
   * @example
   * 10。
   */
  pageSize?: string;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceTemplates: 'DataSourceTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceTemplates: { 'type': 'array', 'itemType': ListDataSourceTemplatesResponseBodyDataSourceTemplates },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceTemplates)) {
      $dara.Model.validateArray(this.dataSourceTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

