// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList extends $dara.Model {
  attachSeq?: number;
  attachTime?: string;
  policyId?: string;
  policyName?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachSeq: 'AttachSeq',
      attachTime: 'AttachTime',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachSeq: 'number',
      attachTime: 'string',
      policyId: 'string',
      policyName: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBodyPolicyAttachments extends $dara.Model {
  policyList?: GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList[];
  policyType?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      policyList: 'PolicyList',
      policyType: 'PolicyType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyList: { 'type': 'array', 'itemType': GetEffectivePolicyResponseBodyPolicyAttachmentsPolicyList },
      policyType: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The effective tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"costcenter\\":{\\"tag_value\\":[\\"Beijing\\",\\"Shanghai\\"],\\"tag_key\\":\\"CostCenter\\"}}}
   */
  effectivePolicy?: string;
  policyAttachments?: GetEffectivePolicyResponseBodyPolicyAttachments[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BB532282-94F5-5F56-877F-32D5E2A04F3F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      effectivePolicy: 'EffectivePolicy',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectivePolicy: 'string',
      policyAttachments: { 'type': 'array', 'itemType': GetEffectivePolicyResponseBodyPolicyAttachments },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyAttachments)) {
      $dara.Model.validateArray(this.policyAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

