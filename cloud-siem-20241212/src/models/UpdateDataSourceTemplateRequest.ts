// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceTemplateRequest extends $dara.Model {
  autoScanNew?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceTemplateId?: string;
  dataSourceTemplateName?: string;
  lang?: string;
  logProjectPattern?: string;
  logRegionIds?: string;
  logStorePattern?: string;
  logUserIds?: string[];
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

