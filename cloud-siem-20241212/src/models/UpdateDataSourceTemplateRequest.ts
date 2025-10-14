// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceTemplateRequest extends $dara.Model {
  /**
   * @example
   * enabled。
   */
  autoScanNew?: string;
  /**
   * @example
   * true。
   */
  dataSourceRecognizeEnabled?: boolean;
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
   * zh。
   */
  lang?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******。
   */
  logProjectPattern?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionIds?: string;
  /**
   * @example
   * audit-activity。
   */
  logStorePattern?: string;
  logUserIds?: string[];
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
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
      logUserIds: 'LogUserIds',
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
      logUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logUserIds)) {
      $dara.Model.validateArray(this.logUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

