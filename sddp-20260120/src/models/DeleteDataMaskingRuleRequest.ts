// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataMaskingRuleRequestSubRuleList extends $dara.Model {
  columns?: string;
  dbName?: string;
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
  engineType?: string;
  instanceId?: string;
  lang?: string;
  productCode?: string;
  productId?: number;
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

