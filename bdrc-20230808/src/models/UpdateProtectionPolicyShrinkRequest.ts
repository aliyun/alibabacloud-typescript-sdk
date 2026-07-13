// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProtectionPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of associated resource category IDs.
   */
  boundResourceCategoryIdsShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters. If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * a1b2c3d4-****-****-****-a1b2c3d4f5e6
   */
  clientToken?: string;
  /**
   * @remarks
   * The protection policy name.
   * 
   * @example
   * My***Policy
   */
  protectionPolicyName?: string;
  /**
   * @remarks
   * The list of enabled sub-protection policies.
   */
  subProtectionPoliciesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIdsShrink: 'BoundResourceCategoryIds',
      clientToken: 'ClientToken',
      protectionPolicyName: 'ProtectionPolicyName',
      subProtectionPoliciesShrink: 'SubProtectionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundResourceCategoryIdsShrink: 'string',
      clientToken: 'string',
      protectionPolicyName: 'string',
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

