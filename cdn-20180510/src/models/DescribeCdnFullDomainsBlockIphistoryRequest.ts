// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnFullDomainsBlockIPHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-24T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address or CIDR blocks to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.XXX.XXX.1,2.XXX.XXX.2
   */
  IPList?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-24T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      IPList: 'IPList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      IPList: 'string',
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

