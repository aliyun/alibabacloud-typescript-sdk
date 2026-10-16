// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the target node. Valid values:
   * 
   * - Root ID: detaches the control policy from the Root resource folder.
   * - Resource folder ID: detaches the control policy from a resource folder.
   * - Member ID: detaches the control policy from a member.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

