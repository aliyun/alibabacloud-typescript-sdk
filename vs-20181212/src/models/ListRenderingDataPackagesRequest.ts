// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingDataPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * - Package: package
   * - Baseline: baseline
   * 
   * @example
   * Baseline
   */
  category?: string;
  /**
   * @remarks
   * The ID of the data package.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * The start time of the time range filter. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-09-24T03:30:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The size of the data package.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The start time of the time range filter. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data package. Valid values:
   * - available: available for binding
   * - packing: in progress
   * - failed: failed
   * - bonded: bound
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dataPackageId: 'DataPackageId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      size: 'Size',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dataPackageId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

