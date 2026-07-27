// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupQueryListRequest extends $dara.Model {
  /**
   * @remarks
   * A keyword for the user group name. The service performs a fuzzy search to find matching user groups.
   * 
   * @example
   * yun_group
   */
  name?: string;
  /**
   * @remarks
   * The owner of the user group.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the MaxCompute project to query for user groups.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  userGroupType?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      userGroupType: 'userGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      userGroupType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

