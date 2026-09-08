// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingColumnsRequest extends $dara.Model {
  /**
   * @example
   * phone
   */
  columnName?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * NotEncrypted
   */
  maskingStatus?: string;
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
   * 5
   */
  productIds?: string;
  /**
   * @example
   * 1
   */
  riskLeveLId?: number;
  /**
   * @example
   * 1,2
   */
  riskLevelIds?: string;
  /**
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 1001,1002
   */
  templateRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      maskingStatus: 'MaskingStatus',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      productIds: 'ProductIds',
      riskLeveLId: 'RiskLeveLId',
      riskLevelIds: 'RiskLevelIds',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateRuleIds: 'TemplateRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      currentPage: 'number',
      dbName: 'string',
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      maskingStatus: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      productIds: 'string',
      riskLeveLId: 'number',
      riskLevelIds: 'string',
      tableName: 'string',
      templateId: 'number',
      templateRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

