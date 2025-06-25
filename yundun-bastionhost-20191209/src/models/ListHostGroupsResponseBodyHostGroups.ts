// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsResponseBodyHostGroups extends $dara.Model {
  /**
   * @remarks
   * The remarks of the asset group.
   * 
   * @example
   * Description
   */
  comment?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The name of the asset group.
   * 
   * @example
   * Host group 1
   */
  hostGroupName?: string;
  /**
   * @remarks
   * The number of hosts in the asset group.
   * 
   * @example
   * 1
   */
  memberCount?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      memberCount: 'MemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      memberCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

