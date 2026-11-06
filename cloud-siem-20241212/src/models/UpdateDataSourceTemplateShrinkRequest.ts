// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceTemplateShrinkRequest extends $dara.Model {
  autoScanNew?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceTemplateId?: string;
  dataSourceTemplateName?: string;
  lang?: string;
  logProjectPattern?: string;
  logRegionIds?: string;
  logStorePattern?: string;
  logUserIdsShrink?: string;
  regionId?: string;
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

