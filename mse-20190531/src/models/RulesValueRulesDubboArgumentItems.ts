// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RulesValueRulesDubboArgumentItems extends $dara.Model {
  operator?: string;
  nameList?: string[];
  datum?: string;
  cond?: string;
  divisor?: number;
  remainder?: number;
  rate?: number;
  index?: number;
  expr?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      nameList: 'nameList',
      datum: 'datum',
      cond: 'cond',
      divisor: 'divisor',
      remainder: 'remainder',
      rate: 'rate',
      index: 'index',
      expr: 'expr',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      datum: 'string',
      cond: 'string',
      divisor: 'number',
      remainder: 'number',
      rate: 'number',
      index: 'number',
      expr: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

