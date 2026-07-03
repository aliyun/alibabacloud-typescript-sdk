// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestDataSourceStores extends $dara.Model {
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
   * 1
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
   * actiontrail_management-events
   */
  logStoreName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceStoreFrom: 'DataSourceStoreFrom',
      dataSourceStoreId: 'DataSourceStoreId',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceStoreFrom: 'string',
      dataSourceStoreId: 'string',
      dataSourceStoreStatus: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $dara.Model {
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
   * A list of data source IDs.
   */
  dataSourceIds?: string[];
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
   * Specifies whether to automatically discover new data sources.
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
   * alibaba_cloud_waf_flow_log_1766185894104675
   */
  dataSourceRecognizer?: string;
  /**
   * @remarks
   * The IDs of associated data access instances.
   */
  dataSourceReferences?: string[];
  /**
   * @remarks
   * The list of Simple Log Service projects.
   */
  dataSourceStores?: CreateDataSourceRequestDataSourceStores[];
  /**
   * @remarks
   * The ID of the data source template.
   * 
   * @example
   * dst_alibaba_cloud_nas_audit_log_1358117679873357
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
   * preset
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * mde_raw
   */
  logStoreName?: string;
  /**
   * @remarks
   * The user ID for data ingestion.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - desc: descending.
   * 
   * - asc: ascending.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The region of the Management Hub. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose perspective the administrator assumes.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceFrom: 'DataSourceFrom',
      dataSourceIds: 'DataSourceIds',
      dataSourceName: 'DataSourceName',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceRecognizer: 'DataSourceRecognizer',
      dataSourceReferences: 'DataSourceReferences',
      dataSourceStores: 'DataSourceStores',
      dataSourceTemplateId: 'DataSourceTemplateId',
      dataSourceType: 'DataSourceType',
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserId: 'LogUserId',
      order: 'Order',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceFrom: 'string',
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      dataSourceName: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceRecognizer: 'string',
      dataSourceReferences: { 'type': 'array', 'itemType': 'string' },
      dataSourceStores: { 'type': 'array', 'itemType': CreateDataSourceRequestDataSourceStores },
      dataSourceTemplateId: 'string',
      dataSourceType: 'string',
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserId: 'number',
      order: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
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

