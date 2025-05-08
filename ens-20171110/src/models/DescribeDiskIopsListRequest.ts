// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskIopsListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk. Format: d-\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss. The time range specified by the StartTime and EndTime parameters cannot exceed one day for a query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-14 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-14 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'string',
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

