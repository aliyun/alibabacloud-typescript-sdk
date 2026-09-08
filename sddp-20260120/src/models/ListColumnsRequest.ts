// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
  currentPage?: number;
  dataAssetSourceId?: string;
  dataSourceName?: string;
  engineType?: string;
  instanceName?: string;
  lang?: string;
  name?: string;
  pageSize?: number;
  productCode?: string;
  riskLevelId?: number;
  ruleId?: number;
  tableName?: string;
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

