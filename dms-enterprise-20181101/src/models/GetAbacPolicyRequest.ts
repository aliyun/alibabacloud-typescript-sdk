// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbacPolicyRequest extends $dara.Model {
  /**
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @example
   * policy_test
   */
  abacPolicyName?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      abacPolicyId: 'AbacPolicyId',
      abacPolicyName: 'AbacPolicyName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyId: 'number',
      abacPolicyName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

