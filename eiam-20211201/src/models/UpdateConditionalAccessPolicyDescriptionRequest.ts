// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConditionalAccessPolicyDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * Idp client token.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
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
   * Description of the conditional access policy
   * 
   * This parameter is required.
   * 
   * @example
   * Test Description
   */
  description?: string;
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
      clientToken: 'ClientToken',
      conditionalAccessPolicyId: 'ConditionalAccessPolicyId',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conditionalAccessPolicyId: 'string',
      description: 'string',
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

