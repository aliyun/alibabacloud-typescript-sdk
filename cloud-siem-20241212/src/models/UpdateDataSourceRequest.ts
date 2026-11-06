// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequestDataSourceStores extends $dara.Model {
  dataSourceStoreFrom?: string;
  dataSourceStoreId?: string;
  logProjectName?: string;
  logRegionId?: string;
  logStoreName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceStoreFrom: 'DataSourceStoreFrom',
      dataSourceStoreId: 'DataSourceStoreId',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceStoreFrom: 'string',
      dataSourceStoreId: 'string',
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

export class UpdateDataSourceRequest extends $dara.Model {
  dataSourceFrom?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceStores?: UpdateDataSourceRequestDataSourceStores[];
  lang?: string;
  logProjectName?: string;
  logRegionId?: string;
  logStoreName?: string;
  logUserId?: number;
  orderField?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceFrom: 'DataSourceFrom',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceStores: 'DataSourceStores',
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserId: 'LogUserId',
      orderField: 'OrderField',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceFrom: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceStores: { 'type': 'array', 'itemType': UpdateDataSourceRequestDataSourceStores },
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserId: 'number',
      orderField: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceStores)) {
      $dara.Model.validateArray(this.dataSourceStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

