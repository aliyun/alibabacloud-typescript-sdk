// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallCloudAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application.
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The page number for instance associations in a project. By default, a paged query sorts results in descending order of instance association time. This parameter is valid only when ProjectId is not empty. It limits the maximum number of instances on which the action is executed in the project to control the impact scope of the action. Default value: 1.
   * 1. Valid values of PageNumber:
   *   a. [Recommended] Method 1: Calculate the upper limit based on the total number of instances associated with the project. You can call the ListRenderingProjectInstances operation to obtain the total number.
   *   b. Method 2: Determine whether PageNumber reaches the upper limit for the project based on the response. [Advantage: No need to calculate the valid value range]. PageNumber reaches the upper limit if the response meets any of the following conditions:
   *     i. The response returns HTTP status code 403 and error code 200301.
   *     ii. The sum of SuccessInstanceCount and FailedInstanceCount in the response is less than PageSize.
   * 2. Scenario example:
   *   a. Uninstall instances in a project in full: If the number of instances in the project is greater than PageSize (default value: 100), you can call the Uninstall operation multiple times and increment PageNumber by 1 each time to uninstall all instances. You can call the ListCloudAppInstallations operation to query the uninstallation progress of the instances in the project.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of selected instances in a project. This parameter is valid only when ProjectId is not empty. It limits the maximum number of instances on which the action is executed in the project to control the impact scope of the action. Default value: 100. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the patch package to uninstall. This parameter is supported only in Windows scenarios.
   * 1. By default, the StablePatchId is uninstalled.
   * 2. If you set this parameter to origin, the original version is uninstalled.
   * 3. If you set this parameter to all, all installed versions are uninstalled.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The list of cloud application service instance IDs.
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      projectId: 'string',
      renderingInstanceId: 'string',
      renderingInstanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

