// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsForUserResponseBodyHostGroups extends $dara.Model {
  /**
   * @remarks
   * The remarks of the host group.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The host group ID.
   * 
   * @example
   * １
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The name of the host group.
   * 
   * @example
   * group
   */
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

