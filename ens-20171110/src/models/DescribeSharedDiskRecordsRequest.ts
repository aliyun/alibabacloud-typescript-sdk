// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSharedDiskRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of shared disk IDs.
   */
  diskIds?: string[];
  /**
   * @remarks
   * The billing end time.
   * 
   * @example
   * 2019-10-30T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The page number used for paging in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of region IDs.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The list of SDG IDs.
   */
  sdgIds?: string[];
  /**
   * @remarks
   * The billing start time.
   * 
   * @example
   * 2019-05-21T10:22:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      endTime: 'EndTime',
      namespaces: 'Namespaces',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      sdgIds: 'SdgIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      sdgIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.sdgIds)) {
      $dara.Model.validateArray(this.sdgIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

