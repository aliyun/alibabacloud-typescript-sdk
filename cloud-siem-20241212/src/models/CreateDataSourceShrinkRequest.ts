// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceShrinkRequestDataSourceStores extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      dataSourceStoreFrom: 'DataSourceStoreFrom',
      dataSourceStoreId: 'DataSourceStoreId',
      dataSourceStoreStatus: 'DataSourceStoreStatus',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceStoreFrom: 'string',
      dataSourceStoreId: 'string',
      dataSourceStoreStatus: 'string',
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

export class CreateDataSourceShrinkRequest extends $dara.Model {
  /**
   * @example
   * center。
   */
  dataSourceFrom?: string;
  dataSourceIdsShrink?: string;
  /**
   * @example
   * AD_LOG。
   */
  dataSourceName?: string;
  dataSourceRecognizeEnabled?: boolean;
  dataSourceRecognizer?: string;
  dataSourceReferencesShrink?: string;
  dataSourceStores?: CreateDataSourceShrinkRequestDataSourceStores[];
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
  static names(): { [key: string]: string } {
    return {
      dataSourceFrom: 'DataSourceFrom',
      dataSourceIdsShrink: 'DataSourceIds',
      dataSourceName: 'DataSourceName',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      dataSourceRecognizer: 'DataSourceRecognizer',
      dataSourceReferencesShrink: 'DataSourceReferences',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceFrom: 'string',
      dataSourceIdsShrink: 'string',
      dataSourceName: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      dataSourceRecognizer: 'string',
      dataSourceReferencesShrink: 'string',
      dataSourceStores: { 'type': 'array', 'itemType': CreateDataSourceShrinkRequestDataSourceStores },
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

