// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 0
   */
  marker?: number;
  /**
   * @example
   * customer
   */
  name?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: number;
  /**
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

