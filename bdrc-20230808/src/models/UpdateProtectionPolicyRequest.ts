// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProtectionPolicyRequestSubProtectionPolicies extends $dara.Model {
  /**
   * @remarks
   * The sub-protection policy configuration.
   * 
   * @example
   * {\\"autoSnapshotPolicyId\\":\\"sp-123***7890\\"}
   */
  config?: string;
  /**
   * @remarks
   * The sub-protection policy type.
   * 
   * @example
   * ECS_AUTO_SNAPSHOT_POLICY
   */
  subProtectionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      subProtectionPolicyType: 'SubProtectionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      subProtectionPolicyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProtectionPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of associated resource category IDs.
   */
  boundResourceCategoryIds?: string[];
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
  subProtectionPolicies?: UpdateProtectionPolicyRequestSubProtectionPolicies[];
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIds: 'BoundResourceCategoryIds',
      clientToken: 'ClientToken',
      protectionPolicyName: 'ProtectionPolicyName',
      subProtectionPolicies: 'SubProtectionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundResourceCategoryIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      protectionPolicyName: 'string',
      subProtectionPolicies: { 'type': 'array', 'itemType': UpdateProtectionPolicyRequestSubProtectionPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.boundResourceCategoryIds)) {
      $dara.Model.validateArray(this.boundResourceCategoryIds);
    }
    if(Array.isArray(this.subProtectionPolicies)) {
      $dara.Model.validateArray(this.subProtectionPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

