// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUniqueDeviceStatRequest extends $dara.Model {
  /**
   * @remarks
   * Your app key.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The end time of the query, in ISO 8601 format. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-26T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for the query. Valid values:
   * 
   * - DAY
   * 
   * - MONTH
   * 
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The start time of the query, in ISO 8601 format. Format: YYYY-MM-DDThh:mm:ssZ.
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

