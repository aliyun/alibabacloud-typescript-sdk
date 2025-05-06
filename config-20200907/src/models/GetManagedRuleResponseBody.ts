// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetManagedRuleResponseBodyManagedRule } from "./GetManagedRuleResponseBodyManagedRule";


export class GetManagedRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the managed rule.
   */
  managedRule?: GetManagedRuleResponseBodyManagedRule;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E6DDC09-87C1-5310-A924-3491EAAE6F90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRule: 'ManagedRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRule: GetManagedRuleResponseBodyManagedRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.managedRule && typeof (this.managedRule as any).validate === 'function') {
      (this.managedRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

