// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the column name.
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
   * The type of the database engine. The value must be consistent with the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The database instance identity. You can obtain the value from the Items[].InstanceId parameter in the response of the ListDataMaskingInstances operation.
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
   * - NotEncrypted: Unencrypted.
   * - Success: Encrypted successfully.
   * - Failed: Encryption failed.
   * 
   * @example
   * NotEncrypted
   */
  maskingStatus?: string;
  /**
   * @remarks
   * The ID of the model tag. This parameter is used to limit the data that matches the corresponding model tag.
   * 
   * @example
   * 101
   */
  modelTagId?: string;
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
   * The code of the cloud service. Column encryption supports RDS, PolarDB, and PolarDB-X 2.0. If this parameter is specified together with ProductId, the values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud service type. Valid values:
   * - 5: RDS.
   * - 8: PolarDB.
   * - 27: PolarDB-X 2.0.
   * If this parameter is specified together with ProductCode, the values must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The list of cloud service type IDs. Separate multiple values with commas (,). In column encryption scenarios, the valid values are 5 (RDS), 8 (PolarDB), and 27 (PolarDB-X 2.0).
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The ID of the sensitivity level. You can obtain the value from the response list of the ListRiskLevels operation.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The list of sensitivity level IDs. Separate multiple values with commas (,). Select the values from the response of the ListRiskLevels operation corresponding to the same TemplateId.
   * 
   * @example
   * 1,2
   */
  riskLevelIds?: string;
  /**
   * @remarks
   * The name of the table. In PostgreSQL or Oracle scenarios, retain the schema.table format obtained from the table list.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain the value from the Items[].Id parameter in the response of the ListTemplates operation. The value must be consistent with the selected sensitivity level and identification model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The list of identification model IDs. Separate multiple values with commas (,). Select the values from the response of the ListIdentifyModels operation corresponding to the same TemplateId.
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

