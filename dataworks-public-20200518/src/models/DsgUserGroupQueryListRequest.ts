// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupQueryListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the user group name. A fuzzy match is performed based on the keyword to search for the user group.
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
   * The page number.
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
   * The name of the compute engine. If you want to query the information about a MaxCompute user group, you need to configure this parameter.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

