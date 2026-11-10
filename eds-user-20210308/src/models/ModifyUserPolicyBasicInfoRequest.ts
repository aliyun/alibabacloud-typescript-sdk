// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserPolicyBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * deveoper-policy
   */
  name?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * up-89unlabdl****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      name: 'Name',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      name: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

