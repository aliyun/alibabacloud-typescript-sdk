// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskIopsListRequest extends $dara.Model {
  /**
   * @remarks
   * The disk ID in the format of d-***********.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The end time in the format of yyyy-MM-dd HH:mm:ss. The time span between the start time and end time cannot exceed one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-14 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the format of yyyy-MM-dd HH:mm:ss.
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

