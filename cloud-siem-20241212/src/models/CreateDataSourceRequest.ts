// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestDataSourceStores extends $dara.Model {
  createTime?: number;
  dataSourceStoreFrom?: string;
  dataSourceStoreId?: string;
  dataSourceStoreStatus?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou。
   */
  logProjectName?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * actiontrail_management-events。
   */
  logStoreName?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceStoreFrom: 'DataSourceStoreFrom',
      dataSourceStoreId: 'DataSourceStoreId',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSourceStoreFrom: 'string',
      dataSourceStoreId: 'string',
      dataSourceStoreStatus: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      updateTime: 'number',
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
   * @example
   * center。
   */
  dataSourceFrom?: string;
  dataSourceIds?: string[];
  /**
   * @example
   * AD_LOG。
   */
  dataSourceName?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceRecognizer?: string;
  dataSourceReferences?: string[];
  dataSourceStores?: CreateDataSourceRequestDataSourceStores[];
  dataSourceTemplateId?: string;
  /**
   * @example
   * preset。
   */
  dataSourceType?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou。
   */
  logProjectName?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * mde_raw。
   */
  logStoreName?: string;
  /**
   * @example
   * 173326*******。
   */
  logUserId?: number;
  order?: string;
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
  updateTime?: number;
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
      updateTime: 'UpdateTime',
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
      updateTime: 'number',
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

