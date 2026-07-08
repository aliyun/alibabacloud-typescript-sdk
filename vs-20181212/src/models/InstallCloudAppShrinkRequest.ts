// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud application ID
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * Page number for paged queries of instance associations under the project. Paged queries default to reverse order by instance association time. This applies only when ProjectId is not empty. It limits the maximum number of instances for actions within the project, controlling the impact scope. Default is 1.
   * 
   * 1. PageNumber value range:
   *    a. Method one (recommended): Calculate the upper limit using the total number of instances associated with the project. The ListRenderingProjectInstances interface provides this count.
   *    b. Method two: Determine if PageNumber reaches the project\\"s upper limit by checking the interface return value. This avoids calculating the range. PageNumber reaches the upper limit if the interface returns any of these conditions:
   *    ⅰ. A 403 status code and error code 200301.
   *    ⅱ. The sum of \\`SuccessInstanceCount\\` and \\`FailedInstanceCount\\` is less than \\`PageSize\\`.
   * 
   * 2. Scenario examples:
   *    a. Full installation for project instances: If the number of project instances exceeds \\`PageSize\\` (default 100), invoke Install multiple times. Increment PageNumber by 1 for each call to complete the full installation. Get project instance installation progress using the ListCloudAppInstallations interface.
   *    b. New instance installation for a project: Start with \\`PageNumber=1\\`. Paged queries default to reverse order by instance association time. The \\`PageNumber=1\\` page shows the latest new instances.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Maximum number of instances selected for the project. This applies only when ProjectId is not empty. It limits the maximum number of instances for actions within the project, controlling the impact scope. Default is 100. The value range is 1-100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Patch package ID to install. This is only for Windows scenarios.
   * 
   * 1. Install \\`StablePatchId\\` by default.
   * 
   * 2. Enter \\`origin\\` to install the original version.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * List of cloud application service instance IDs
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

