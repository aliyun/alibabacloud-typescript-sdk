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
   * - true: The development environment is enabled for the workspace, which supports isolation between the development and production environments.
   * 
   * - false: Only the production environment is used.
   * 
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the development role is disabled. Valid values:
   * 
   * - false: The development role is enabled.
   * 
   * - true: The development role is disabled.
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
   * The workspace name.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the workspace owner, which is the Alibaba Cloud account ID.
   * 
   * @example
   * 207947397706614299
   */
  owner?: string;
  /**
   * @remarks
   * Indicates whether PAI task scheduling is enabled. Valid values:
   * 
   * - true: You can create Machine Learning Platform for AI (PAI) nodes in the DataWorks workspace and run them on a periodic schedule based on the node configurations.
   * 
   * - false: PAI task scheduling is disabled.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * - Available: The workspace is running normally.
   * - Initializing: The workspace is being initialized.
   * - InitFailed: The workspace failed to be initialized.
   * - Forbidden: The workspace is manually disabled.
   * - Deleting: The workspace is being deleted.
   * - DeleteFailed: The workspace failed to be deleted.
   * - Frozen: The workspace is frozen due to overdue payment.
   * - Updating: The workspace is being updated.
   * - UpdateFailed: The workspace failed to be updated.
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
   * The details of the workspace.
   */
  project?: GetProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A1****
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

