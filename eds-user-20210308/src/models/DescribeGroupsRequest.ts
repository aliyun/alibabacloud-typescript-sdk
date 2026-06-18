// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  businessChannel?: string;
  /**
   * @remarks
   * Specifies whether to exclude user groups that are already associated with a logon policy.
   */
  excludeAttachedLoginPolicyGroups?: boolean;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-16nf7xxh4o9gc****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  idpId?: string;
  /**
   * @remarks
   * The ID of a logon policy. If you specify this parameter, the call returns only user groups associated with the policy.
   */
  loginPolicyId?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  /**
   * @remarks
   * Specifies whether file approval is enabled.
   * 
   * @example
   * false
   */
  transferFileNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      businessChannel: 'BusinessChannel',
      excludeAttachedLoginPolicyGroups: 'ExcludeAttachedLoginPolicyGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      idpId: 'IdpId',
      loginPolicyId: 'LoginPolicyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      solutionId: 'SolutionId',
      transferFileNeedApproval: 'TransferFileNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      businessChannel: 'string',
      excludeAttachedLoginPolicyGroups: 'boolean',
      groupId: 'string',
      groupName: 'string',
      idpId: 'string',
      loginPolicyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      solutionId: 'string',
      transferFileNeedApproval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

