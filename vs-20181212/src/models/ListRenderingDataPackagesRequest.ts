// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingDataPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * 
   * - Package
   * 
   * - Baseline
   * 
   * @example
   * Baseline
   */
  category?: string;
  /**
   * @remarks
   * The ID of the data pack.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * The parameter for filtering by time range. Use UTC time in ISO8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-24T03:30:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number for the query list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The size of the data pack.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The parameter for filtering by time range. Use UTC time in ISO8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data pack. Valid values:
   * 
   * - available
   * 
   * - packing
   * 
   * - failed
   * 
   * - bonded
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

