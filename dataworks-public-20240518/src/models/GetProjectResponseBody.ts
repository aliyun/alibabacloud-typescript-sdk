// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyProjectAliyunResourceTags extends $dara.Model {
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

export class GetProjectResponseBodyProject extends $dara.Model {
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
  aliyunResourceTags?: GetProjectResponseBodyProjectAliyunResourceTags[];
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
   * *   false
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
   * 28477242
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
   * 207947397706614299
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
      aliyunResourceTags: { 'type': 'array', 'itemType': GetProjectResponseBodyProjectAliyunResourceTags },
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

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the workspace.
   */
  project?: GetProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

