// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
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
   * The cloud database instance identity. Set this parameter to the InstanceId in the instance list.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @remarks
   * The name of the database. Set this parameter to the DbName returned by ListDataSources.
   * 
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the database engine. This parameter must be consistent with the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible parameter for the instance identity. DataAssetSourceId takes precedence. If both are specified, DataAssetSourceId is used.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceName?: string;
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
   * The filter condition for the column name.
   * 
   * @example
   * phone
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
   * The code of the cloud service. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The identifier of the sensitivity level. You can obtain this value from the return list of ListRiskLevels.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The identifier of the detection rule or model. Set this parameter to the ID of the corresponding detection rule in the target template.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the data table. In PostgreSQL or Oracle scenarios, retain the schema.table format obtained from the table list.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The identifier of the data classification and grading template. You can obtain this value from Items[].Id returned by ListTemplates. Keep this parameter consistent with the selected sensitivity level and detection model.
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
      engineType: 'EngineType',
      instanceName: 'InstanceName',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      tableName: 'TableName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dataAssetSourceId: 'string',
      dataSourceName: 'string',
      engineType: 'string',
      instanceName: 'string',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      tableName: 'string',
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

