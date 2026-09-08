// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsResponseBodyItems extends $dara.Model {
  creationTime?: number;
  dataAssetSourceId?: string;
  dataSourceName?: string;
  dataType?: string;
  engineType?: string;
  instanceName?: string;
  maskingStatus?: number;
  name?: string;
  productCode?: string;
  regionId?: string;
  revisionId?: number;
  revisionStatus?: number;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleId?: number;
  ruleName?: string;
  schemaName?: string;
  sensitive?: boolean;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataAssetSourceId: 'DataAssetSourceId',
      dataSourceName: 'DataSourceName',
      dataType: 'DataType',
      engineType: 'EngineType',
      instanceName: 'InstanceName',
      maskingStatus: 'MaskingStatus',
      name: 'Name',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schemaName: 'SchemaName',
      sensitive: 'Sensitive',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataAssetSourceId: 'string',
      dataSourceName: 'string',
      dataType: 'string',
      engineType: 'string',
      instanceName: 'string',
      maskingStatus: 'number',
      name: 'string',
      productCode: 'string',
      regionId: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      schemaName: 'string',
      sensitive: 'boolean',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBody extends $dara.Model {
  currentPage?: number;
  items?: ListColumnsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListColumnsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

