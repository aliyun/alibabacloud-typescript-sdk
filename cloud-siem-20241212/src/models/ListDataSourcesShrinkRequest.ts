// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the data source. Valid values:
   * - center
   * - custom
   * 
   * @example
   * center
   */
  dataSourceFrom?: string;
  /**
   * @remarks
   * The list of data source IDs.
   */
  dataSourceIdsShrink?: string;
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
   * - unconfigured
   * - normal
   * - abnormal
   * 
   * @example
   * unconfigured
   */
  dataSourceStatus?: string;
  /**
   * @remarks
   * The status of the Logstore. Valid values:
   * - normal
   * - abnormal
   * 
   * @example
   * normal
   */
  dataSourceStoreStatus?: string;
  /**
   * @remarks
   * The list of data source template IDs.
   */
  dataSourceTemplateIdsShrink?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * - preset
   * - custom
   * 
   * @example
   * custom
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If you do not specify this parameter, the service returns a 400 error "The specified Lang can not be empty.". Explicitly specify the language code.
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
   * The list of user IDs for data ingestion.
   */
  logUserIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of results to return in the current request.
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
   * The token used to retrieve the next page of results. If this is the first request or no subsequent requests are required, leave this parameter empty. If a subsequent request is required, set this parameter to the value of NextToken returned in the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc
   * - asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * UpdateTime
   */
  orderField?: string;
  /**
   * @remarks
   * The current page number.
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
   * The region where the data management center for threat analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceFrom: 'DataSourceFrom',
      dataSourceIdsShrink: 'DataSourceIds',
      dataSourceName: 'DataSourceName',
      dataSourceStatus: 'DataSourceStatus',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      dataSourceTemplateIdsShrink: 'DataSourceTemplateIds',
      dataSourceType: 'DataSourceType',
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserIdsShrink: 'LogUserIds',
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
      dataSourceIdsShrink: 'string',
      dataSourceName: 'string',
      dataSourceStatus: 'string',
      dataSourceStoreStatus: 'string',
      dataSourceTemplateIdsShrink: 'string',
      dataSourceType: 'string',
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

