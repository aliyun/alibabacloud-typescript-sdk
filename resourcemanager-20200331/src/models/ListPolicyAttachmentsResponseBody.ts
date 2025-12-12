// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the permission policy is attached.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the permission policy.
   * 
   * @example
   * The description of the policy.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the permission policy. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which the permission policy is attached.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which the permission policy is attached. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBodyPolicyAttachments extends $dara.Model {
  policyAttachment?: ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      policyAttachment: 'PolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachment: { 'type': 'array', 'itemType': ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.policyAttachment)) {
      $dara.Model.validateArray(this.policyAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the permission policies.
   */
  policyAttachments?: ListPolicyAttachmentsResponseBodyPolicyAttachments;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyAttachments: ListPolicyAttachmentsResponseBodyPolicyAttachments,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.policyAttachments && typeof (this.policyAttachments as any).validate === 'function') {
      (this.policyAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

