// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsRequestAliyunResourceTags } from "./ListProjectsRequestAliyunResourceTags";


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the workspaces belong. You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) and go to the Resource Group page to query the ID.
   * 
   * This parameter is used to query the information about workspaces that belong to a specific resource group.
   * 
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  aliyunResourceTags?: ListProjectsRequestAliyunResourceTags[];
  /**
   * @remarks
   * Specifies whether the development environment is enabled. Valid values:
   * 
   * *   true: The development environment is enabled. In this case, the development environment is isolated from the production environment in a workspace.
   * *   false: The development environment is disabled. In this case, only the production environment is used in a workspace.
   * 
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the Develop role is disabled. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  /**
   * @remarks
   * The IDs of the DataWorks workspaces.
   */
  ids?: number[];
  /**
   * @remarks
   * The names of the DataWorks workspaces.
   */
  names?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether scheduling of Platform for AI (PAI) tasks is enabled. Valid values:
   * 
   * *   true: Scheduling of PAI tasks is enabled. In this case, you can create a PAI node in a DataWorks workspace and configure scheduling properties for the node to implement periodic scheduling of PAI tasks.
   * *   false: Scheduling of PAI tasks is disabled.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @remarks
   * The status of the workspaces. Valid values:
   * 
   * *   Available
   * *   Initializing
   * *   InitFailed
   * *   Forbidden
   * *   Deleting
   * *   DeleteFailed
   * *   Frozen
   * *   Updating
   * *   UpdateFailed
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      ids: 'Ids',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsRequestAliyunResourceTags },
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      ids: { 'type': 'array', 'itemType': 'number' },
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceTags)) {
      $dara.Model.validateArray(this.aliyunResourceTags);
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

