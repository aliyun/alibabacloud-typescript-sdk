// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataMaskingRuleShrinkRequest extends $dara.Model {
  engineType?: string;
  instanceId?: string;
  lang?: string;
  productCode?: string;
  productId?: number;
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

