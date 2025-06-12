// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * Query ECS instances in a specific region
   */
  description?: string;
  /**
   * @remarks
   * The document of the policy.
   * 
   * The document must be 1 to 6,144 characters in length.
   * 
   * For more information about policy elements and sample policies, see [Policy elements](https://help.aliyun.com/document_detail/93738.html) and [Overview of sample policies](https://help.aliyun.com/document_detail/210969.html).
   * 
   * @example
   * {"Statement": [{"Effect": "Allow","Action": "ecs:Describe*","Resource": "acs:ecs:cn-qingdao:*:instance/*"}],"Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * View-ECS-instances-in-a-specific-region
   */
  policyName?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

