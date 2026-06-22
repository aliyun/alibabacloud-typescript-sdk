// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemClientRuleTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rule types.
   */
  ruleTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleTypes: 'RuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleTypes)) {
      $dara.Model.validateArray(this.ruleTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

