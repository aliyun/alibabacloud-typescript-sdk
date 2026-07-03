// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequestDataSourceStores extends $dara.Model {
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
   * cn-rds-sqlaudit
   */
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
   * The ID of the data source.
   * 
   * @example
   * ds-014frtpy28m5ct2eoyo1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ActiontrailLog
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Specifies whether to automatically discover new Logstores.
   * 
   * @example
   * true
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @remarks
   * The list of Simple Log Service Logstores.
   */
  dataSourceStores?: UpdateDataSourceRequestDataSourceStores[];
  /**
   * @remarks
   * The language of the response messages. Valid values:
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
   * cn-rds-sqlaudit
   */
  logStoreName?: string;
  /**
   * @remarks
   * The user ID for data access.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The field to use for sorting the rule list. Valid values:
   * 
   * - GmtModified: Sorts the list by modification time.
   * 
   * - Id: Sorts the list by rule ID. This is the default value.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region based on the location of the assets. Valid values:
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
   * The user ID of the member whose perspective the administrator switches to.
   * 
   * @example
   * 173326*******
   */
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

