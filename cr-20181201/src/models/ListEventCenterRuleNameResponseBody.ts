// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventCenterRuleNameResponseBodyRuleNames } from "./ListEventCenterRuleNameResponseBodyRuleNames";


export class ListEventCenterRuleNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of names of event notification rules.
   * 
   * @example
   * [{\\"RuleName\\": \\"mlf\\", \\"RuleId\\": \\"crecr-73q93pgljm1pc2fp\\"}]
   */
  ruleNames?: ListEventCenterRuleNameResponseBodyRuleNames[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleNames: { 'type': 'array', 'itemType': ListEventCenterRuleNameResponseBodyRuleNames },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

