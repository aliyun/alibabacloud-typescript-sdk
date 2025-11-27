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
   * 是否排除已关联登录策略的用户组。
   */
  excludeAttachedLoginPolicyGroups?: boolean;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-12341234****
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
   * 指定关联的登录策略筛选。
   */
  loginPolicyId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
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
   * Indicates whether the file approval feature is enabled.
   * 
   * @example
   * false
   */
  transferFileNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
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

