// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the model tag.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the model tag.
   * 
   * @example
   * Personal information
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
   * @remarks
   * The data type of the database column.
   * 
   * @example
   * varchar
   */
  dataType?: string;
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
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The business error code of the record or operation. This value can be empty if no error occurs. Evaluate this value together with ErrorMessage.
   * 
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error description of the record or operation.
   * 
   * @example
   * The instance is not in the running state
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the column record.
   * 
   * @example
   * column-example-001
   */
  id?: string;
  /**
   * @remarks
   * The instance identity of the database.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The column encryption status. Valid values:
   * - NotEncrypted: Not encrypted.
   * - Processing: Being processed.
   * - Success: Encryption succeeded.
   * - Failed: Encryption failed.
   * - Deleting: Being disabled.
   * - DeleteFailed: Disabling failed.
   * 
   * @example
   * Success
   */
  maskingStatus?: string;
  /**
   * @remarks
   * The list of matched model tags.
   */
  modelTags?: ListDataMaskingColumnsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data column.
   * 
   * @example
   * phone
   */
  name?: string;
  /**
   * @remarks
   * The cloud product code.
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
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the sensitivity level.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the matched detection rule.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched detection rule.
   * 
   * @example
   * Phone number
   */
  ruleName?: string;
  /**
   * @remarks
   * The table name.
   * 
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
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of records returned by the current query.
   */
  items?: ListDataMaskingColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of records per page for the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the current query scope.
   * 
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

