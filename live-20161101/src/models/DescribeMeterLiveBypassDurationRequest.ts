// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterLiveBypassDurationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can view the application ID on the [Application Management](https://help.aliyun.com/document_detail/2355593.html) page of ApsaraVideo Real-time Communication.
   * 
   * This parameter is required.
   * 
   * @example
   * 4346289a-a790-4869-9e23-22766d5e****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. The query granularity must be ≥ 5 minutes and ≤ 31 days. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for querying data. Unit: seconds. Valid values:
   * 
   * - 300
   * - 3600
   * - 86400
   * 
   * If this parameter is not specified or set to an unsupported value, the default value 3600 is used.
   * 
   * @example
   * 86400
   */
  interval?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
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

