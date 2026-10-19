// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The cloud database instance identity. Set this to the InstanceId value from the instance list.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @remarks
   * The database name. Set this to the DbName value returned by ListDataSources.
   * 
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start position for cursor-based pagination. Use the NextMarker value returned from the previous request. Keep the original filter conditions consistent.
   * 
   * @example
   * 0
   */
  marker?: number;
  /**
   * @remarks
   * The name filter condition.
   * 
   * @example
   * customer
   */
  name?: string;
  /**
   * @remarks
   * The number of records per page. Keep other filter conditions consistent when querying the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If you also specify ProductId, the two values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type ID. Valid values:
   * 
   * - 5: ApsaraDB RDS.
   * - 8: PolarDB.
   * - 27: PolarDB-X 2.0.
   * 
   * If you specify both ProductId and ProductCode, the values must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level ID. You can obtain this value from the list returned by ListRiskLevels.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The detection rule or model ID. Set this to the Id of the corresponding detection rule within the target template.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The classification and grading template ID. You can obtain this value from Items[].Id returned by ListTemplates. Keep this value consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dataAssetSourceId: 'DataAssetSourceId',
      dataSourceName: 'DataSourceName',
      lang: 'Lang',
      marker: 'Marker',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dataAssetSourceId: 'string',
      dataSourceName: 'string',
      lang: 'string',
      marker: 'number',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

