// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * batch
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the workspace belongs. You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) and go to the resource group list page to obtain the ID.
   * 
   * This parameter is used to manage the DataWorks workspace that you create within the specified Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmzbn7****
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  aliyunResourceTags?: CreateProjectRequestAliyunResourceTags[];
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
   * - true: The development environment is enabled for the workspace, which supports isolation between the development and production environments.
   * 
   * - false: Only the production environment is used.
   * 
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the development role. Valid values:
   * 
   * - false: The development role is enabled. This is the default value.
   * 
   * - true: The development role is disabled.
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
   * The workspace name.
   * 
   * Constraints:
   * 
   * - The workspace name must be unique within the region.
   * 
   * - The name must start with a letter and can contain only letters, digits, and underscores (_).
   * 
   * - The name must be 3 to 28 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable PAI task scheduling. Valid values:
   * 
   * - true: You can create Machine Learning Platform for AI (PAI) nodes in the DataWorks workspace and run them on a periodic schedule based on the node configurations.
   * 
   * - false: PAI task scheduling is disabled.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
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
      aliyunResourceTags: { 'type': 'array', 'itemType': CreateProjectRequestAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
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

