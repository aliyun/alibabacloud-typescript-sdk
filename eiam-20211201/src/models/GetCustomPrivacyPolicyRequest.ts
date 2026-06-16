// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomPrivacyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom privacy policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pp_xxxxx
   */
  customPrivacyPolicyId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyId: 'CustomPrivacyPolicyId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyId: 'string',
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

