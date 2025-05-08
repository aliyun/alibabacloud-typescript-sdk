// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafTemplateRulesResponseBodyRules } from "./ListWafTemplateRulesResponseBodyRules";


export class ListWafTemplateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned template rules.
   */
  rules?: ListWafTemplateRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafTemplateRulesResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

