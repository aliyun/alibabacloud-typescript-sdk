// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The column name filter.
   * 
   * @example
   * phone
   */
  columnName?: string;
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
   * The database name.
   * 
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @remarks
   * The database engine type. This value must match the EngineType of the target instance, for example, MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance identity of the database. You can obtain this value from Items[].InstanceId in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
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
   * The column encryption status filter. Valid values:
   * - NotEncrypted: Not encrypted.
   * - Success: Encryption succeeded.
   * - Failed: Encryption failed.
   * 
   * @example
   * NotEncrypted
   */
  maskingStatus?: string;
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
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two values must correspond.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type ID. Valid values:
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * 
   * This value must correspond to ProductCode if both are specified.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The compatible product ID list parameter. For column queries, use a single ProductId or ProductCode. Call the operation separately for each product when querying multiple products.
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The ID of a sensitivity level. You can obtain this value from the ListRiskLevels operation. The uppercase L in the parameter name must be preserved.
   * 
   * @example
   * 1
   */
  riskLeveLId?: number;
  /**
   * @remarks
   * The list of sensitivity level IDs, separated by commas. Select values from the ListRiskLevels response that corresponds to the same TemplateId.
   * 
   * @example
   * 1,2
   */
  riskLevelIds?: string;
  /**
   * @remarks
   * The table name. For PostgreSQL or Oracle scenarios, preserve the schema.table format obtained from the table list.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain this value from Items[].Id in the response of the ListTemplates operation. This value must be consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The list of detection model IDs, separated by commas. Select values from the ListIdentifyModels response that corresponds to the same TemplateId.
   * 
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

