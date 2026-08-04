// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPopTrafficStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the data. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1681293719
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The start time for the data. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1681035708
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      region: 'string',
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

