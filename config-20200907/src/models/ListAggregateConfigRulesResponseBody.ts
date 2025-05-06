// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigRulesResponseBodyConfigRules } from "./ListAggregateConfigRulesResponseBodyConfigRules";


export class ListAggregateConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried rules.
   */
  configRules?: ListAggregateConfigRulesResponseBodyConfigRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22EF8287-2C9A-4F1F-80A6-CEFA7612689D
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
      configRules: ListAggregateConfigRulesResponseBodyConfigRules,
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

