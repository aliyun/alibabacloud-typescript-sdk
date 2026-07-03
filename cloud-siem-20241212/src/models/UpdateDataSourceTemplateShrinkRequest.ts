// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically discover new users.
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  autoScanNew?: string;
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
   * The language of the response message. Valid values:
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
   * The matching rule for the names of Simple Log Service projects.
   * 
   * @example
   * aliyun-cloudsiem-data-173326*******
   */
  logProjectPattern?: string;
  /**
   * @remarks
   * The list of IDs of log storage regions.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionIds?: string;
  /**
   * @remarks
   * The matching rule for the names of Simple Log Service Logstores.
   * 
   * @example
   * audit-activity
   */
  logStorePattern?: string;
  /**
   * @remarks
   * The list of user IDs for batch data access.
   */
  logUserIdsShrink?: string;
  /**
   * @remarks
   * The region where the Management Hub of threat analysis is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Assets are outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter lets an administrator switch to the perspective of the member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      autoScanNew: 'AutoScanNew',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceTemplateId: 'DataSourceTemplateId',
      dataSourceTemplateName: 'DataSourceTemplateName',
      lang: 'Lang',
      logProjectPattern: 'LogProjectPattern',
      logRegionIds: 'LogRegionIds',
      logStorePattern: 'LogStorePattern',
      logUserIdsShrink: 'LogUserIds',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScanNew: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceTemplateId: 'string',
      dataSourceTemplateName: 'string',
      lang: 'string',
      logProjectPattern: 'string',
      logRegionIds: 'string',
      logStorePattern: 'string',
      logUserIdsShrink: 'string',
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

