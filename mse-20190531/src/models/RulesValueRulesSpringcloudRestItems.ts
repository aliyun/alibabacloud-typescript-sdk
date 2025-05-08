// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RulesValueRulesSpringcloudRestItems extends $dara.Model {
  datum?: string;
  operator?: string;
  nameList?: string[];
  cond?: string;
  divisor?: number;
  remainder?: number;
  /**
   * @example
   * 20
   */
  rate?: number;
  type?: string;
  name?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      datum: 'datum',
      operator: 'operator',
      nameList: 'nameList',
      cond: 'cond',
      divisor: 'divisor',
      remainder: 'remainder',
      rate: 'rate',
      type: 'type',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datum: 'string',
      operator: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      cond: 'string',
      divisor: 'number',
      remainder: 'number',
      rate: 'number',
      type: 'string',
      name: 'string',
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

