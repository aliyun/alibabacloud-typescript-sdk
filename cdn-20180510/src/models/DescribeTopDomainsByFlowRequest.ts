// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopDomainsByFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-12-23T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of domain names to query. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The value of StartTime must be in UTC. For example, if the local time is 00:00 on June 1, 2021, set StartTime to 2021-05-31T16:00:00Z.
   * 
   * @example
   * 2019-12-22T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
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

