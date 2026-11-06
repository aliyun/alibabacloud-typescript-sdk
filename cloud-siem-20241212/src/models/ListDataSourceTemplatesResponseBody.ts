// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTemplatesResponseBodyDataSourceTemplates extends $dara.Model {
  autoScanNew?: string;
  createTime?: number;
  dataSourceFrom?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceRecognizer?: string;
  dataSourceTemplateId?: string;
  dataSourceTemplateName?: string;
  logProjectPattern?: string;
  logRegionIds?: string[];
  logStorePattern?: string;
  logUserIds?: string[];
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
  pageNumber?: string;
  pageSize?: string;
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

