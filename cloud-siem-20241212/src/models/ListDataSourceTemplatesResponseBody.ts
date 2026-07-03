// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTemplatesResponseBodyDataSourceTemplates extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically discover new users. Valid values:
   * 
   * - enabled: enabled.
   * 
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  autoScanNew?: string;
  /**
   * @remarks
   * The time when the template was created.
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
   * custom
   */
  dataSourceFrom?: string;
  /**
   * @remarks
   * Indicates whether to automatically discover new data sources.
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
   * alibaba_cloud_actiontrail_event_ingestion
   */
  dataSourceRecognizer?: string;
  /**
   * @remarks
   * The ID of the data source template.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_ingestion
   */
  dataSourceTemplateId?: string;
  /**
   * @remarks
   * The name of the data source template.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_ingestion
   */
  dataSourceTemplateName?: string;
  /**
   * @remarks
   * The rule for matching the name of the Simple Log Service project.
   * 
   * @example
   * aliyun-cloudsiem-data-173326*******
   */
  logProjectPattern?: string;
  /**
   * @remarks
   * The list of log storage region IDs.
   */
  logRegionIds?: string[];
  /**
   * @remarks
   * The rule for matching the name of the Simple Log Service Logstore.
   * 
   * @example
   * audit-activity
   */
  logStorePattern?: string;
  /**
   * @remarks
   * The list of user IDs for batch data ingestion.
   */
  logUserIds?: string[];
  /**
   * @remarks
   * The time when the template was updated.
   * 
   * @example
   * 1733269771123
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
  /**
   * @remarks
   * The list of data source templates.
   */
  dataSourceTemplates?: ListDataSourceTemplatesResponseBodyDataSourceTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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

