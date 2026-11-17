// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current query. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance identity of the cloud database instance. Use the InstanceId from the instance list.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @remarks
   * The database name. Use the DbName returned by ListDataSources.
   * 
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The starting position for cursor-based pagination. Use the NextMarker returned in the previous request for subsequent requests. Keep it consistent with the original filter conditions.
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
   * The number of entries to return on each page. Keep other filter conditions consistent when querying the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also passed, the two values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud service type ID. Valid values:
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * If specified together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level ID. You can obtain the value from the returned list of ListRiskLevels.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The detection rule or model ID. Use the ID of the corresponding detection rule in the target template.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The data classification template ID. You can obtain the value from Items[].Id in the response of ListTemplates. Keep it consistent with the selected sensitivity level and detection model.
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

