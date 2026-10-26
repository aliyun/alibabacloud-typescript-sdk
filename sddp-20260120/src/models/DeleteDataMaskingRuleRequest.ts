// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataMaskingRuleRequestSubRuleList extends $dara.Model {
  /**
   * @remarks
   * The list of target column names. Separate multiple column names with commas (,).
   * 
   * @example
   * phone,email
   */
  columns?: string;
  /**
   * @remarks
   * The name of the target database.
   * 
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the target table.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      dbName: 'DbName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      dbName: 'string',
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

export class DeleteDataMaskingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine type. The value must be the same as the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The database instance identifier. You can obtain this value from the Items[].InstanceId field in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud service type identifier. Valid values: 5: RDS. 8: POLARDB. 27: PolarDBX2. If this parameter is specified together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The list of column encryption targets grouped by database and table.
   */
  subRuleList?: DeleteDataMaskingRuleRequestSubRuleList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      subRuleList: 'SubRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      subRuleList: { 'type': 'array', 'itemType': DeleteDataMaskingRuleRequestSubRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.subRuleList)) {
      $dara.Model.validateArray(this.subRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

