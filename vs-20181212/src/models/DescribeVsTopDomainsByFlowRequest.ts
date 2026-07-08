// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsTopDomainsByFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The date format follows the ISO 8601 standard and uses UTC.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>
   * 
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of domain names to return. The default value is 20. Valid values: 1 to 100.
   * 
   * @example
   * 3
   */
  limit?: number;
  ownerId?: number;
  /**
   * @remarks
   * The start of the time range to query. The date format follows the ISO 8601 standard and uses UTC.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>The minimum data granularity is 5 minutes.<br>If you do not specify this parameter, data for the current month is queried.<br><br><br>
   * 
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      ownerId: 'number',
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

