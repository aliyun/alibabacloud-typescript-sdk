// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableConditionalAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Conditional Access Policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * cap_11111
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicyId: 'ConditionalAccessPolicyId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicyId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

