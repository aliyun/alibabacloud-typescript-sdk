// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtectionPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of associated resource categories.
   */
  boundResourceCategoryIdsShrink?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * a1b2c3d4-****-****-****-a1b2c3d4f5e6
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the protection policy.
   * 
   * This parameter is required.
   * 
   * @example
   * My***Policy
   */
  protectionPolicyName?: string;
  /**
   * @remarks
   * The region ID of the protection policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  protectionPolicyRegionId?: string;
  /**
   * @remarks
   * The sub-protection policies.
   * 
   * This parameter is required.
   */
  subProtectionPoliciesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIdsShrink: 'BoundResourceCategoryIds',
      clientToken: 'ClientToken',
      protectionPolicyName: 'ProtectionPolicyName',
      protectionPolicyRegionId: 'ProtectionPolicyRegionId',
      subProtectionPoliciesShrink: 'SubProtectionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundResourceCategoryIdsShrink: 'string',
      clientToken: 'string',
      protectionPolicyName: 'string',
      protectionPolicyRegionId: 'string',
      subProtectionPoliciesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

