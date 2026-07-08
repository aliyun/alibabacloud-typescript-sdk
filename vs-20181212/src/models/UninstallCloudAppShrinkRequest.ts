// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallCloudAppShrinkRequest extends $dara.Model {
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
   * Page number for paged queries of instance associations in the project. Results are sorted by association time in descending order. This parameter applies only when ProjectId is not empty. It limits the maximum number of instances affected by this operation to control impact scope. Default value: 1.
   * 
   * 1. Valid PageNumber range:
   *    a. Recommended method: Calculate the upper limit based on the total number of instances associated with the project. You can get this count using the ListRenderingProjectInstances API.
   *    b. Alternative method: Check the API response to determine whether PageNumber has reached the upper limit. This avoids manual calculation. PageNumber has reached the upper limit if either of the following occurs:
   *    ⅰ. The API returns HTTP status 403 and error code 200301.
   *    ⅱ. The sum of SuccessInstanceCount and FailedInstanceCount in the response is less than PageSize.
   * 
   * 2. Example scenario:
   *    a. Full uninstall across all project instances: If the project has more instances than PageSize (default 100), call UninstallCloudApp multiple times, incrementing PageNumber by 1 each time. Track uninstall progress using the ListCloudAppInstallations API.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Maximum number of instances selected in the project. This parameter applies only when ProjectId is not empty. It limits the maximum number of instances affected by this operation to control impact scope. Default value: 100. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the patch package to uninstall. Supported only on Windows.
   * 
   * 1. Default: uninstall the StablePatchId.
   * 
   * 2. Set to origin to uninstall the original version.
   * 
   * 3. Set to all to uninstall all installed versions.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
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
   * Cloud application instance ID
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * List of cloud application instance IDs
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

