// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The column name filter condition.
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
   * The name of the database.
   * 
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @remarks
   * The database engine type. The value must match the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance identity of the database instance. You can obtain the value from Items[].InstanceId in the response of ListDataMaskingInstances.
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
   * The column encryption status used for filtering. Valid values:
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
   * The ID of the model tag. This parameter is used to limit the data to those that match the specified model tag.
   * 
   * @example
   * 101
   */
  modelTagId?: string;
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
   * The code of the cloud product. Column encryption supports RDS, POLARDB, and PolarDBX2. If you also specify ProductId, the two values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud product type. Valid values: 5 (RDS), 8 (POLARDB), and 27 (PolarDBX2). If you specify both ProductId and ProductCode, the values must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The list of cloud product type IDs. Separate multiple values with commas (,). Valid values for column encryption: 5 (RDS), 8 (POLARDB), and 27 (PolarDBX2).
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The ID of the sensitivity level. You can obtain the value from the response of ListRiskLevels.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The list of sensitivity level IDs. Separate multiple values with commas (,). Select values from the response of ListRiskLevels that corresponds to the same TemplateId.
   * 
   * @example
   * 1,2
   */
  riskLevelIds?: string;
  /**
   * @remarks
   * The name of the table. For PostgreSQL or Oracle scenarios, retain the schema.table format obtained from the table list.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the classification and grading template. You can obtain the value from Items[].Id in the response of ListTemplates. The value must be consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The list of detection model IDs. Separate multiple values with commas (,). Select values from the response of ListIdentifyModels that corresponds to the same TemplateId.
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
      modelTagId: 'ModelTagId',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      productIds: 'ProductIds',
      riskLevelId: 'RiskLevelId',
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
      modelTagId: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      productIds: 'string',
      riskLevelId: 'number',
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

