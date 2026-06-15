// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushStatByAppRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The end time of the query. Specify the time in ISO 8601 format, YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity of the response. You can only query data for up to 31 days at daily granularity. Valid values:
   * 
   * - **DAY**: Query data at daily granularity.
   * 
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in ISO 8601 format, YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-25T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      endTime: 'EndTime',
      granularity: 'Granularity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      endTime: 'string',
      granularity: 'string',
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

