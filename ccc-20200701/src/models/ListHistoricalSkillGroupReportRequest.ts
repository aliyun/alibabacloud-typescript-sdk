// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalSkillGroupReportRequest extends $dara.Model {
  /**
   * @remarks
   * End time of the historical data to retrieve, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is the current time. The time precision for statistics is hourly, rounded down to the previous hour, and uses an open interval. For example, if the start time is 11:12:20 and the end time is 11:45:50, the aligned input time range becomes [11:00:00, 12:00:00), meaning greater than or equal to 11:00:00 and less than 12:00:00.
   * 
   * @example
   * 1532707199000
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
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * List of skill group IDs to query, provided as a JSON array string. Each array element is a skill group ID. This parameter is optional. The default value is empty, which means all skill groups in the current page are queried.
   * 
   * @example
   * ["skillgroup1@ccc-test", "skillgroup2@ccc-test2"]
   */
  skillGroupIdList?: string;
  /**
   * @remarks
   * Start time of the historical data to retrieve, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is 00:00:00 of the current day. The earliest allowed value is 180 days before the current time. The time precision for statistics is hourly, rounded down to the previous hour, and uses a closed interval.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
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

