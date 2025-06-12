// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies extends $dara.Model {
  /**
   * @remarks
   * The type of the entity to which the policy is attached.
   * 
   * Valid values:
   * 
   * *   RamUser: RAM user
   * *   RamRole: RAM role
   * *   ResourceDirectoryTarget: entity in a resource directory
   * *   RamGroup: RAM user group
   * 
   * @example
   * RamUser
   */
  attachedEntityType?: string;
  /**
   * @remarks
   * The authorization scope of the policy.
   * 
   * Valid values:
   * 
   * *   Account: Alibaba Cloud account
   * *   Folder: folder in the resource directory
   * *   ResourceGroup: resource group
   * 
   * @example
   * Account
   */
  attachedScope?: string;
  /**
   * @remarks
   * The effect of the policy.
   * 
   * Valid values:
   * 
   * *   Deny
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allow
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Deny
   */
  effect?: string;
  /**
   * @remarks
   * The identifier of the policy.
   * 
   * *   Control policy: the ID of the control policy
   * *   RAM policy: the name of the policy
   * 
   * @example
   * MyPolicyName
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * Valid values:
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The version number of the policy.
   * 
   * > Only custom policies have version numbers.
   * 
   * @example
   * v1
   */
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      attachedEntityType: 'AttachedEntityType',
      attachedScope: 'AttachedScope',
      effect: 'Effect',
      policyIdentifier: 'PolicyIdentifier',
      policyType: 'PolicyType',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedEntityType: 'string',
      attachedScope: 'string',
      effect: 'string',
      policyIdentifier: 'string',
      policyType: 'string',
      policyVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

