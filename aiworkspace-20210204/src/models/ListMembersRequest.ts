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
   * The page number of the workspace list. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The roles that are used to filter members. Multiple roles are separated by commas (,). Valid values:
   * 
   * *   PAI.AlgoDeveloper: algorithm developer
   * *   PAI.AlgoOperator: algorithm O\\&M engineer
   * *   PAI.LabelManager: labeling administrator
   * *   PAI.MaxComputeDeveloper: MaxCompute developer
   * *   PAI.WorkspaceAdmin: administrator
   * *   PAI.WorkspaceGuest: guest
   * *   PAI.WorkspaceOwner: owner
   * 
   * @example
   * PAI.AlgoDeveloper
   */
  roles?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

