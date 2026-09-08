// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * 个人信息
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataMaskingColumnsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * varchar
   */
  dataType?: string;
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
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @example
   * 实例未处于运行状态
   */
  errorMessage?: string;
  /**
   * @example
   * column-example-001
   */
  id?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * Success
   */
  maskingStatus?: string;
  modelTags?: ListDataMaskingColumnsResponseBodyItemsModelTags[];
  /**
   * @example
   * phone
   */
  name?: string;
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
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @example
   * 手机号
   */
  ruleName?: string;
  /**
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      dbName: 'DbName',
      engineType: 'EngineType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      instanceId: 'InstanceId',
      maskingStatus: 'MaskingStatus',
      modelTags: 'ModelTags',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      dbName: 'string',
      engineType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      id: 'string',
      instanceId: 'string',
      maskingStatus: 'string',
      modelTags: { 'type': 'array', 'itemType': ListDataMaskingColumnsResponseBodyItemsModelTags },
      name: 'string',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataMaskingColumnsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListDataMaskingColumnsResponseBodyItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
      items: { 'type': 'array', 'itemType': ListDataMaskingColumnsResponseBodyItems },
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

