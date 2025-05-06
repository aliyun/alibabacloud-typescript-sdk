// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListManagedRulesResponseBodyManagedRules } from "./ListManagedRulesResponseBodyManagedRules";


export class ListManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The managed rules.
   */
  managedRules?: ListManagedRulesResponseBodyManagedRules;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3E605AB-63D5-1EE0-BFA6-0BAC247B0461
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: ListManagedRulesResponseBodyManagedRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.managedRules && typeof (this.managedRules as any).validate === 'function') {
      (this.managedRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

