// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityCheckScheduleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The days on which the automatic configuration check runs. You can specify multiple days. Separate multiple days with commas (,). Valid values:
   * 
   * *   **1**: Monday
   * *   **2**: Tuesday
   * *   **3**: Wednesday
   * *   **4**: Thursday
   * *   **5**: Friday
   * *   **6**: Saturday
   * *   **7**: Sunday
   * 
   * This parameter is required.
   * 
   * @example
   * 4,5,6
   */
  daysOfWeek?: string;
  /**
   * @remarks
   * The time period during which the automatic configuration check ends. Valid values:
   * 
   * *   **0**: 00:00 to 06:00
   * *   **6**: 06:00 to 12:00
   * *   **12**: 12:00 to 18:00
   * *   **18**: 18:00 to 24:00
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
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
   * The time period during which the automatic configuration check starts. Valid values:
   * 
   * *   **0**: 00:00 to 06:00
   * *   **6**: 06:00 to 12:00
   * *   **12**: 12:00 to 18:00
   * *   **18**: 18:00 to 24:00
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

