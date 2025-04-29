// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * API group description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * API group ID
   * 
   * @example
   * 8cc2a3cbe3394524b6e71be5db9b02a3
   */
  groupId?: string;
  /**
   * @remarks
   * API group name
   * 
   * @example
   * crm_custom_service
   */
  groupName?: string;
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * API Gateway plugin ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1f3bde29b43d4d53989248327ff737f2
   */
  pluginId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pluginId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

