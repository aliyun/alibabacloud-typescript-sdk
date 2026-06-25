// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersRequest extends $dara.Model {
  /**
   * @remarks
   * Username. Fuzzy match is supported.
   * 
   * @example
   * zhangsan
   */
  memberName?: string;
  /**
   * @remarks
   * Page number. Pages start at 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Roles used to filter members. Separate multiple roles with commas (,). Valid values:
   * 
   * - PAI.AlgoDeveloper: Algorithm developer
   * 
   * - PAI.AlgoOperator: Algorithm O\\&M engineer
   * 
   * - PAI.LabelManager: Annotation administrator
   * 
   * - PAI.MaxComputeDeveloper: MaxCompute developer
   * 
   * - PAI.WorkspaceAdmin: Workspace administrator
   * 
   * - PAI.WorkspaceGuest: Guest
   * 
   * - PAI.WorkspaceOwner: Workspace owner
   * 
   * @example
   * PAI.AlgoDeveloper
   */
  roles?: string;
  /**
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

