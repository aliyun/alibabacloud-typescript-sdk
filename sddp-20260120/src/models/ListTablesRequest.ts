// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance identity of the cloud database instance. Set the value to the InstanceId value in the instance list.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @remarks
   * The name of the database. Set the value to the DbName value returned by the ListDataSources operation.
   * 
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The language of the response. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start position of the cursor-based pagination. Use the NextMarker value returned in the previous request for subsequent requests. Keep the value consistent with the original filter conditions.
   * 
   * @example
   * 0
   */
  marker?: number;
  /**
   * @remarks
   * The name filter.
   * 
   * @example
   * customer
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Keep other filter conditions consistent when you query the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the cloud service. Column encryption supports ApsaraDB RDS, PolarDB, and PolarDB-X 2.0. If you specify this parameter and ProductId at the same time, the values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud service type. Valid values: 5: ApsaraDB RDS. 8: PolarDB. 27: PolarDB-X 2.0. If you specify this parameter and ProductCode at the same time, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the sensitivity level. You can obtain the ID from the response of the ListRiskLevels operation.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the detection rule or model. Set the value to the ID of the corresponding detection rule in the target template.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain the ID from the Items[].Id parameter in the response of the ListTemplates operation. The value must be consistent with the selected sensitivity level and detection model.
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

