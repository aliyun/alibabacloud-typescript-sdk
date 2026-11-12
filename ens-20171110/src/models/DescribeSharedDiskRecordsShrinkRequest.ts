// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSharedDiskRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The shared disk IDs.
   */
  diskIdsShrink?: string;
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
   * The namespaces.
   */
  namespacesShrink?: string;
  /**
   * @remarks
   * The page number for the paging query.
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
   * The region IDs.
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * The SDG IDs.
   */
  sdgIdsShrink?: string;
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
      diskIdsShrink: 'DiskIds',
      endTime: 'EndTime',
      namespacesShrink: 'Namespaces',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIdsShrink: 'RegionIds',
      sdgIdsShrink: 'SdgIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIdsShrink: 'string',
      endTime: 'string',
      namespacesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdsShrink: 'string',
      sdgIdsShrink: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

