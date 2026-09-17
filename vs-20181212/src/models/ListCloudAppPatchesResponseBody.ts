// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppPatchesResponseBodyPatches extends $dara.Model {
  /**
   * @remarks
   * The ID of the patch package.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The name of the patch package.
   * 
   * @example
   * patch-1
   */
  patchName?: string;
  /**
   * @remarks
   * The relative path of the post-command within the application package. Only Windows-type applications are supported.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for the post-command execution, in seconds. Only Windows-type applications are supported.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The application upload status. Valid values:
   * 1. Created
   * 2. Doing
   * 3. Success: desired state.
   * 4. Failed: desired state.
   * 5. Deleting
   * 6. DeleteFailed: desired state.
   * 
   * @example
   * Doing
   */
  status?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Uploading
   */
  statusDescription?: string;
  /**
   * @remarks
   * The most recent time when the status was updated.
   * 
   * @example
   * 2024-09-23T02:12:28
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the patch was uploaded.
   * 
   * @example
   * 2025-07-24T14:45:36+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      patchId: 'PatchId',
      patchName: 'PatchName',
      postCommandPath: 'PostCommandPath',
      postCommandTimeoutSec: 'PostCommandTimeoutSec',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchId: 'string',
      patchName: 'string',
      postCommandPath: 'string',
      postCommandTimeoutSec: 'number',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppPatchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the query list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of patches for the cloud application.
   */
  patches?: ListCloudAppPatchesResponseBodyPatches[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patches: 'Patches',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      patches: { 'type': 'array', 'itemType': ListCloudAppPatchesResponseBodyPatches },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.patches)) {
      $dara.Model.validateArray(this.patches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

