// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticSecurityPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the user policy belongs. This value is not returned for system default policies.
   * 
   * @example
   * 123456789012****
   */
  aliyunAccountUid?: string;
  /**
   * @remarks
   * The ID of the system default policy inherited by the user policy. This value is empty if no inheritance relationship is configured. This value is not returned for system default policies.
   * 
   * @example
   * sp-sys-default
   */
  basePolicyId?: string;
  /**
   * @remarks
   * The description of the security policy. The description of a system default policy is returned in the language of the request context.
   * 
   * @example
   * Read-only access policy for analytics
   */
  description?: string;
  /**
   * @remarks
   * The time when the security policy was created. The time is in the yyyy-MM-dd HH:mm:ss format and does not contain a time zone offset.
   * 
   * @example
   * 2026-10-13 14:30:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the security policy was last modified. The time is in the yyyy-MM-dd HH:mm:ss format and does not contain a time zone offset.
   * 
   * @example
   * 2026-10-13 14:35:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The business ID of the security policy. A system default policy ID starts with sp-sys-, and a user policy ID starts with sp-usr-.
   * 
   * @example
   * sp-sys-default
   */
  policyId?: string;
  /**
   * @remarks
   * The Policy Name of the security policy. The Policy Name of a system default policy is returned in the language of the request context.
   * 
   * @example
   * team-readonly-policy
   */
  policyName?: string;
  /**
   * @remarks
   * The current state of the security policy. Valid values:
   * - ON: Enabled.
   * - OFF: Disabled.
   * - ARCHIVED: Archived.
   * All system default policies returned by this operation are in the ON state.
   * 
   * @example
   * ON
   */
  policyStatus?: string;
  /**
   * @remarks
   * Specifies whether the policy is read-only. Valid values:
   * - true: The policy is a system default policy.
   * - false: The policy is a user policy of the current account.
   */
  readonly?: boolean;
  /**
   * @remarks
   * The tags of the system default policy. Multiple tags are separated by commas (,). This value is not returned for user policies.
   * 
   * @example
   * default,phase1
   */
  tags?: string;
  /**
   * @remarks
   * The identifier of the operator that last modified the policy. For a user policy, the operator ID is recorded first. If no operator ID is available, the UID of the current Alibaba Cloud account is recorded.
   * 
   * @example
   * system
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunAccountUid: 'AliyunAccountUid',
      basePolicyId: 'BasePolicyId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      readonly: 'Readonly',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAccountUid: 'string',
      basePolicyId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      policyId: 'string',
      policyName: 'string',
      policyStatus: 'string',
      readonly: 'boolean',
      tags: 'string',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgenticSecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security policies returned by this query. Enabled system default policies are placed at the beginning, followed by the user policies on the current page. You can use Readonly to distinguish between the two types of policies.
   */
  data?: ListAgenticSecurityPoliciesResponseBodyData[];
  /**
   * @remarks
   * The error code returned when the request fails. This parameter is empty when the request is successful.
   * 
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails. This parameter is empty when the request is successful.
   * 
   * @example
   * invalid policyStatus: ARCHIVED
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and trace this call.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of policies that meet the query conditions. The value is the sum of the number of all enabled system default policies and the number of user policies of the current account that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgenticSecurityPoliciesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

