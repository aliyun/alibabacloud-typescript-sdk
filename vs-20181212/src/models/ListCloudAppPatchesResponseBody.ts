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
   * The upload status of the application. Valid values:
   * 
   * 1. Created
   * 
   * 2. Doing
   * 
   * 3. Success: A final state.
   * 
   * 4. Failed: A final state.
   * 
   * 5. Deleting
   * 
   * 6. DeleteFailed: A final state.
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
   * The time when the status was last updated.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of cloud application patches.
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

