// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFileRequest extends $dara.Model {
  /**
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @example
   * 20251218205715
   */
  endTime?: string;
  /**
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @example
   * Task7
   */
  fileName?: string;
  /**
   * @example
   * startTime
   */
  orderBy?: string;
  /**
   * @example
   * asc
   */
  orderSort?: string;
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
  /**
   * @example
   * alltime
   */
  recordType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 20251218175715
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      fileName: 'FileName',
      orderBy: 'OrderBy',
      orderSort: 'OrderSort',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordType: 'RecordType',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endTime: 'string',
      endUserId: 'string',
      fileName: 'string',
      orderBy: 'string',
      orderSort: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordType: 'string',
      regionId: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

