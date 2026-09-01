// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * > The difference between the start timestamp and end timestamp cannot exceed **7** days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656038940435
   */
  endTime?: number;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * > The difference between the start timestamp and end timestamp cannot exceed **7** days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656038740435
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

