// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppPatchesResponseBodyPatches extends $dara.Model {
  /**
   * @remarks
   * The ID of the patch.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The name of the patch.
   * 
   * @example
   * patch-1
   */
  patchName?: string;
  /**
   * @remarks
   * The relative path of the post-command in the application package. This parameter is supported only for Windows applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for executing the post-command, in seconds. This parameter is supported only for Windows applications.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The upload status of the application. Valid values:
   * - Created
   * - Doing
   * - Success: desired state
   * - Failed: desired state
   * - Deleting
   * - DeleteFailed: desired state
   * 
   * @example
   * Doing
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * Uploading
   */
  statusDescription?: string;
  /**
   * @remarks
   * The latest time when the status was updated. The time is in the YYYY-MM-DDTHH:mm:ss format.
   * 
   * @example
   * 2024-09-23T02:12:28
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the application was uploaded. The time is in the ISO 8601 standard and includes the time zone offset, in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
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
   * The page number of the returned list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Settings for the number of entries per page when paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The patch list of the cloud application.
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

