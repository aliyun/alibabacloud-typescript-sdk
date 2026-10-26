// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataMaskingRuleShrinkRequest extends $dara.Model {
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
  subRuleListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      subRuleListShrink: 'SubRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      subRuleListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

