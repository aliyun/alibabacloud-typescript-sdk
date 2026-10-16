// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachControlPolicyRequest extends $dara.Model {
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
   * The target node. Valid values:
   * 
   * - Root ID: attaches the control policy to the Root resource folder.
   * - Resource folder ID: attaches the control policy to a resource folder.
   * - Member ID: attaches the control policy to a member.
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

