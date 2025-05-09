// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the workspace belongs. You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) and go to the Resource Group page to query the ID.
   * 
   * You must configure this parameter to specify an Alibaba Cloud resource group for the workspace that you want to create.
   * 
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  aliyunResourceTagsShrink?: string;
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
   * Specifies whether to enable the development environment. Valid values:
   * 
   * *   true : enables the development environment. In this case, the development environment is isolated from the production environment in the workspace.
   * *   false: disables the development environment. In this case, only the production environment is used in the workspace.
   * 
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the Develop role. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * Sora financial analysis
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * Limits:
   * 
   * *   The workspace name must be unqiue in a region.
   * *   The workspace name can contain letters, digits, and underscores (_), and must start with a letter.
   * *   The workspace name must be 3 to 28 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable scheduling of Platform for AI (PAI) tasks. Valid values:
   * 
   * *   true: enables scheduling of PAI tasks. In this case, you can create a PAI node in a DataWorks workspace and configure scheduling properties for the node to implement periodic scheduling of PAI tasks.
   * *   false: disables scheduling of PAI tasks.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      name: 'Name',
      paiTaskEnabled: 'PaiTaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

