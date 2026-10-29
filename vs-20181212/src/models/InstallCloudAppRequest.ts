// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The page number for the paged query of instance associations under the project. By default, the paged query is sorted by instance association time in descending order. This parameter takes effect only when ProjectId is not empty. It limits the maximum number of instances on which the operation is executed under the project to control the impact scope. Default value: 1.
   * 1. About the value range of PageNumber:
   *   a. [Recommended] Method 1: Calculate the upper limit based on the total number of instances associated with the project (you can call the ListRenderingProjectInstances operation to obtain the total number).
   *   b. Method 2: Determine whether PageNumber has reached the upper limit of the project based on the response. [Advantage: You do not need to calculate the value range.] If the response meets either of the following conditions, PageNumber has reached the upper limit:
   *     i. The response returns HTTP status code 403 and error code 200301.
   *     ii. The response returns SuccessInstanceCount + FailedInstanceCount < PageSize.
   * 2. Example scenarios:
   *   a. Full installation for instances under a project: If the number of instances in the project is greater than PageSize (default value: 100), you can call the Install operation multiple times by incrementing PageNumber by 1 each time to perform a full installation. You can call the ListCloudAppInstallations operation to query the installation progress of the instances.
   *   b. Installation for newly added instances under a project: Start with PageNumber=1. By default, the paged query is sorted by instance association time in descending order. The page with PageNumber=1 contains the most recently added instances.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of instances that can be selected under the project. This parameter takes effect only when ProjectId is not empty. It limits the maximum number of instances on which the operation is performed under the project to control the impact scope. Default value: 100. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The patch package ID to install. This parameter is supported only in Windows scenarios.
   * 1. By default, StablePatchId is installed.
   * 2. If you set the value to origin, the original version is installed.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  /**
   * @remarks
   * The project ID.
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
  renderingInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      renderingInstanceIds: 'RenderingInstanceIds',
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
      renderingInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstanceIds)) {
      $dara.Model.validateArray(this.renderingInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

