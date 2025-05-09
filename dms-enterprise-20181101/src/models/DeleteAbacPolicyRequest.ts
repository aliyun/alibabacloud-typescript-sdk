// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAbacPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      abacPolicyId: 'AbacPolicyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyId: 'number',
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

