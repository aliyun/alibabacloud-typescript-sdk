// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppPatchesResponseBodyPatches extends $dara.Model {
  /**
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @example
   * patch-1
   */
  patchName?: string;
  /**
   * @example
   * Doing
   */
  status?: string;
  /**
   * @example
   * Uploading
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-09-23T02:12:28
   */
  updateTime?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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

