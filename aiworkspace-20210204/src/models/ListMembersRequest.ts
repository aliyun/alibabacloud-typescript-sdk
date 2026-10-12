// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The member name. Fuzzy match is supported.
   * 
   * @example
   * zhangsan
   */
  memberName?: string;
  /**
   * @remarks
   * The page number of the workspace list. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters members by role. Separate multiple roles with commas (,).
   * Valid values:
   * - PAI.AlgoDeveloper: Algorithm developer.
   * - PAI.AlgoOperator: Algorithm O&M.
   * - PAI.LabelManager: Labeling administrator.
   * - PAI.MaxComputeDeveloper: MaxCompute developer.
   * - PAI.WorkspaceAdmin: Administrator.
   * - PAI.WorkspaceGuest: Guest.
   * - PAI.WorkspaceOwner: Owner.
   * 
   * @example
   * PAI.AlgoDeveloper
   */
  roles?: string;
  /**
   * @remarks
   * The ID of the user to query.
   * 
   * @example
   * 2788******129
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roles: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

