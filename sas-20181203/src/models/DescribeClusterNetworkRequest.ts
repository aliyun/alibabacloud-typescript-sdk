// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp of the query. Unit: milliseconds.
   * 
   * > The days between the start timestamp and the end timestamp cannot exceed **seven** days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656038940435
   */
  endTime?: number;
  /**
   * @remarks
   * The start timestamp of the query. Unit: milliseconds.
   * 
   * > The days between the start timestamp and the end timestamp cannot exceed **seven** days.
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

