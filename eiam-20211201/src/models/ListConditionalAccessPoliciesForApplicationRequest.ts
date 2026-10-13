// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConditionalAccessPoliciesForApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application associated with the conditional access policies.
   * 
   * This parameter is required.
   * 
   * @example
   * app_11111
   */
  applicationId?: string;
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
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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

