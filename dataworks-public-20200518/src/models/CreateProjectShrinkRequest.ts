// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. This parameter can be left empty.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disable the Develop role. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * Specifies whether to allow you to download the query result from DataStudio. Valid values:
   * 
   * *   **1** (default): allows you to download the query result from DataStudio.
   * *   **0**: does not allow you to download the query result from DataStudio.
   * 
   * @example
   * 1
   */
  isAllowDownload?: number;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * test_describe
   */
  projectDescription?: string;
  /**
   * @remarks
   * The name of the workspace. The name can contain only letters, digits, and underscores (_) and must start with a letter or digit.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The mode of the workspace. For more information about the differences between the modes of workspaces, see [Differences between workspaces in basic mode and workspaces in standard mode](https://help.aliyun.com/document_detail/85772.html).
   * 
   * Valid values:
   * 
   * *   **2** (default): basic mode
   * *   **3**: standard mode
   * 
   * @example
   * 3
   */
  projectMode?: number;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7pti3****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the workspace.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableDevelopment: 'DisableDevelopment',
      isAllowDownload: 'IsAllowDownload',
      projectDescription: 'ProjectDescription',
      projectIdentifier: 'ProjectIdentifier',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableDevelopment: 'boolean',
      isAllowDownload: 'number',
      projectDescription: 'string',
      projectIdentifier: 'string',
      projectMode: 'number',
      projectName: 'string',
      resourceManagerResourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

