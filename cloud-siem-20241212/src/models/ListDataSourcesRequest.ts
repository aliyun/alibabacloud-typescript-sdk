// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesRequest extends $dara.Model {
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
   * The IDs of the data sources.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * alibaba_cloud_waf_alert_log
   */
  dataSourceName?: string;
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
   * The status of the Logstore. Valid values:
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
   * The IDs of the data source templates.
   */
  dataSourceTemplateIds?: string[];
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
   * audit-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The IDs of the users who can access the data.
   */
  logUserIds?: number[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set this parameter to the value of NextToken that is returned in the response to the previous query. Leave this parameter empty for the first query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - desc
   * 
   * - asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sorting field.
   * 
   * @example
   * UpdateTime
   */
  orderField?: string;
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
   * 5
   */
  pageSize?: string;
  /**
   * @remarks
   * The region where the Data Management Center of your threat analysis feature is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. You can use this parameter to switch the perspective to a member.
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
      dataSourceStatus: 'DataSourceStatus',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      dataSourceTemplateIds: 'DataSourceTemplateIds',
      dataSourceType: 'DataSourceType',
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserIds: 'LogUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceFrom: 'string',
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      dataSourceName: 'string',
      dataSourceStatus: 'string',
      dataSourceStoreStatus: 'string',
      dataSourceTemplateIds: { 'type': 'array', 'itemType': 'string' },
      dataSourceType: 'string',
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserIds: { 'type': 'array', 'itemType': 'number' },
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderField: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    if(Array.isArray(this.dataSourceTemplateIds)) {
      $dara.Model.validateArray(this.dataSourceTemplateIds);
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

