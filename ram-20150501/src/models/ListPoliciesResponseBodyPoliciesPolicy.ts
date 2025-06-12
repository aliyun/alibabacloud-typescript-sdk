// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesResponseBodyPoliciesPolicyTags } from "./ListPoliciesResponseBodyPoliciesPolicyTags";


export class ListPoliciesResponseBodyPoliciesPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of references to the policy.
   * 
   * @example
   * 3
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListPoliciesResponseBodyPoliciesPolicyTags;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      tags: ListPoliciesResponseBodyPoliciesPolicyTags,
      updateDate: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

