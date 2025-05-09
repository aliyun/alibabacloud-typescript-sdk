// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags } from "./ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags";


export class ListProjectsResponseBodyPagingInfoProjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the workspace belongs.
   * 
   * @example
   * rg-acfmzbn7pti3zfa
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  aliyunResourceTags?: ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags[];
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * Financial analysis group project data development
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the development environment is enabled. Valid values:
   * 
   * *   true: The development environment is enabled. In this case, the development environment is isolated from the production environment in the workspace.
   * *   false: The development environment is disabled. In this case, only the production environment is used in the workspace.
   * 
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Develop role is disabled. Valid values:
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
   * The display name of the workspace.
   * 
   * @example
   * Sora financial analysis
   */
  displayName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the workspace belongs.
   * 
   * @example
   * 123532153125
   */
  owner?: string;
  /**
   * @remarks
   * Indicates whether scheduling of PAI tasks is enabled. Valid values:
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
   * The status of the workspace. Valid values:
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
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceTags)) {
      $dara.Model.validateArray(this.aliyunResourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

