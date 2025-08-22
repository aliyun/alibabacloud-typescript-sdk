// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosAllEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The end time must be later than the start time. The maximum time range is 31 days.
   * 
   * @example
   * 2023-04-25T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the DDoS attack event to be queried. Valid values:
   * 
   *  *   **web-cc**: resource exhaustion attacks
   *  *   **cc**: connection flood attacks
   *  *   **traffic**: volumetric attacks
   * 
   * If you do not configure this parameter, DDoS attack events of all types are queried.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Value range: 1 to 10,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Valid values: 5, 10, and 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-27T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

