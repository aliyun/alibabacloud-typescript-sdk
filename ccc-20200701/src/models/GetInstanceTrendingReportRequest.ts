// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportRequest extends $dara.Model {
  /**
   * @remarks
   * End UNIX timestamp. The default value is the current time. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1604725528000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Media type. The default value is Audio. Other valid values include Chat and Video.
   * 
   * @example
   * Audio
   */
  mediaType?: string;
  /**
   * @remarks
   * Start UNIX timestamp. The default value is the start time of the current day. The earliest allowed time is 180 days before the current time. The interval between the start time and end time cannot exceed 7 days. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1604639129000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
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

