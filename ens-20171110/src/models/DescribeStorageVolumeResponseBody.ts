// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageVolumeResponseBodyStorageVolumes } from "./DescribeStorageVolumeResponseBodyStorageVolumes";


export class DescribeStorageVolumeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned results.
   */
  storageVolumes?: DescribeStorageVolumeResponseBodyStorageVolumes[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageVolumes: 'StorageVolumes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      storageVolumes: { 'type': 'array', 'itemType': DescribeStorageVolumeResponseBodyStorageVolumes },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.storageVolumes)) {
      $dara.Model.validateArray(this.storageVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

