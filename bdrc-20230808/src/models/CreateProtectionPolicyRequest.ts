// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtectionPolicyRequestSubProtectionPolicies extends $dara.Model {
  /**
   * @remarks
   * The configuration of the sub-protection policy.
   * 
   * @example
   * {\\"PlaybookUuid\\": \\"2093d1ea-0651-48a6-bea2-fa7157285dc1\\", \\"ParamType\\": \\"custom\\", \\"InputParams\\": \\"\\"}
   */
  config?: string;
  /**
   * @remarks
   * The type of the sub-protection policy.
   * 
   * This parameter is required.
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

export class CreateProtectionPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of associated resource categories.
   */
  boundResourceCategoryIds?: string[];
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
  subProtectionPolicies?: CreateProtectionPolicyRequestSubProtectionPolicies[];
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIds: 'BoundResourceCategoryIds',
      clientToken: 'ClientToken',
      protectionPolicyName: 'ProtectionPolicyName',
      protectionPolicyRegionId: 'ProtectionPolicyRegionId',
      subProtectionPolicies: 'SubProtectionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundResourceCategoryIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      protectionPolicyName: 'string',
      protectionPolicyRegionId: 'string',
      subProtectionPolicies: { 'type': 'array', 'itemType': CreateProtectionPolicyRequestSubProtectionPolicies },
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

