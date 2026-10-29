// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsTopDomainsByFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the data to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.<br>Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of domains to return. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 3
   */
  limit?: number;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the data to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.<br>The minimum data granularity is 5 minutes.<br>If you do not specify this parameter, data of the current month is queried by default.
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

