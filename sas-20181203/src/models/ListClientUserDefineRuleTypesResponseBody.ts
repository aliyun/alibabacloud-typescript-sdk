// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientUserDefineRuleTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 340D7FC4-D575-1661-8ACD-CFA7BE57****
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the rule types that are supported.
   */
  userDefineRuleTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userDefineRuleTypes: 'UserDefineRuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userDefineRuleTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userDefineRuleTypes)) {
      $dara.Model.validateArray(this.userDefineRuleTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

