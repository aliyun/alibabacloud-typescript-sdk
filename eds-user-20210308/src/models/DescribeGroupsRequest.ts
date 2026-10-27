// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * Specifies whether to exclude user groups that are associated with logon policies.
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
  /**
   * @remarks
   * Filters user groups by the identity provider ID.
   * 
   * @example
   * idp-hlyexfvwert9m8****
   */
  idpId?: string;
  /**
   * @remarks
   * Specifies the ID of the associated logon policy for filtering.
   */
  loginPolicyId?: string;
  /**
   * @remarks
   * The page number for paging in the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging in the paged query Settings. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
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

