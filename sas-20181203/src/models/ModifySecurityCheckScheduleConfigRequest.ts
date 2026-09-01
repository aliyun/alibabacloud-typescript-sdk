// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityCheckScheduleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The detection cycle. You can specify multiple days. Separate multiple days with commas (,). Valid values:
   * 
   * - **1**: Monday
   * - **2**: Tuesday
   * - **3**: Wednesday
   * - **4**: Thursday
   * - **5**: Friday
   * - **6**: Saturday
   * - **7**: Sunday
   * 
   * This parameter is required.
   * 
   * @example
   * 4,5,6
   */
  daysOfWeek?: string;
  /**
   * @remarks
   * The end time of the detection. Valid values:
   * 
   * - **0**: The detection ends between 00:00 and 06:00.
   * - **6**: The detection ends between 06:00 and 12:00.
   * - **12**: The detection ends between 12:00 and 18:00.
   * - **18**: The detection ends between 18:00 and 24:00.
   * 
   * Unit: hours. The value is an on-the-hour value from 0 to 24 of the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  endTime?: number;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the detection. Valid values:
   * 
   * - **0**: The detection starts between 00:00 and 06:00.
   * - **6**: The detection starts between 06:00 and 12:00.
   * - **12**: The detection starts between 12:00 and 18:00.
   * - **18**: The detection starts between 18:00 and 24:00.
   * 
   * Unit: hours. The value is an on-the-hour value from 0 to 24 of the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      endTime: 'EndTime',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: 'string',
      endTime: 'number',
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
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

