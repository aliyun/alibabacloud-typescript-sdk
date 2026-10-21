// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequestDataSourceStores extends $dara.Model {
  /**
   * @remarks
   * The data source. Valid values:
   * - center
   * - custom
   * 
   * @example
   * custom
   */
  dataSourceStoreFrom?: string;
  /**
   * @remarks
   * The log storage ID.
   * 
   * @example
   * 1
   */
  dataSourceStoreId?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
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
   * The Simple Log Service Logstore name.
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
   * The data source. Valid values:
   * - center
   * - custom
   * 
   * @example
   * custom
   */
  dataSourceFrom?: string;
  /**
   * @remarks
   * The data source ID. This parameter is required and specifies the ID of the data source to update. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * ds-014frtpy28m5ct2eoyo1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source name.
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
   * - **zh** (default): Chinese.
   * - **en**: English. This parameter is required. If it is not provided, the service returns a 400 error.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
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
   * The Simple Log Service Logstore name.
   * 
   * @example
   * cn-rds-sqlaudit
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
   * The field used to sort the rule list. Valid values:
   * - GmtModified: Sort by modification time.
   * - Id: Sort by rule ID (default).
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The region where the data management center of the threat analysis service is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member account that the administrator switches to.
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

