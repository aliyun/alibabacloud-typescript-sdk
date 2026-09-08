// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentifyModelsResponseBodyRuleList extends $dara.Model {
  /**
   * @example
   * 1001
   */
  id?: number;
  /**
   * @example
   * 手机号
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

export class ListIdentifyModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  ruleList?: ListIdentifyModelsResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': ListIdentifyModelsResponseBodyRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

