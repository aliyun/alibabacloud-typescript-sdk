// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentifyModelsResponseBodyRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the recognition model.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The name of the recognition model or rule.
   * 
   * @example
   * Mobile phone number
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
   * @remarks
   * The request ID, which is active for locating this API invoke.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of recognition models or rules.
   */
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

