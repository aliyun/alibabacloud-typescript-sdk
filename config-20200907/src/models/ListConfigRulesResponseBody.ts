// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRulesResponseBodyConfigRules } from "./ListConfigRulesResponseBodyConfigRules";


export class ListConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rules.
   */
  configRules?: ListConfigRulesResponseBodyConfigRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC3A7E12-72E6-5CC9-A5C1-D8D8919829A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRules: 'ConfigRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRules: ListConfigRulesResponseBodyConfigRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRules && typeof (this.configRules as any).validate === 'function') {
      (this.configRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

