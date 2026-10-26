// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingColumnsRequest extends $dara.Model {
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
   * The current page number for the query. Pages start from 1.
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
   * The type of the database engine. It must be consistent with the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance identity of the database. You can obtain it from Items[].InstanceId in the response of ListDataMaskingInstances.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response description. Valid values: zh: Chinese; en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The filter for the column encryption status. Valid values: NotEncrypted: not encrypted; Success: encrypted successfully; Failed: encryption failed.
   * 
   * @example
   * NotEncrypted
   */
  maskingStatus?: string;
  /**
   * @remarks
   * The number of records to return per page. Keep other filter conditions consistent when querying the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the cloud service. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also provided, the two must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud service type. Valid values: 5: RDS; 8: POLARDB; 27: PolarDBX2. It must correspond to ProductCode if both are specified.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The compatible parameter for the list of product IDs. For the current column query, use a single ProductId or ProductCode. Call the operation separately to query multiple products.
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The ID of a single sensitivity level. You can obtain it from ListRiskLevels. The uppercase L in the parameter name must be preserved.
   * 
   * @example
   * 1
   */
  riskLeveLId?: number;
  /**
   * @remarks
   * The list of sensitivity level IDs. Separate multiple values with commas. Select the values from the response of ListRiskLevels corresponding to the same TemplateId.
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
   * The ID of the data classification template. You can obtain it from Items[].Id in the response of ListTemplates. It must be consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The list of detection model IDs. Separate multiple values with commas. Select the values from the response of ListIdentifyModels corresponding to the same TemplateId.
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

