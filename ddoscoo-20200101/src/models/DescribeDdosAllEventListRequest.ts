// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosAllEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The DDoS attack events occur before **EndTime** are queried. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1640966399
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the DDoS attack events you want to query. Valid values:
   * 
   * *   **web-cc**: resource exhaustion attacks
   * *   **cc**: connection flood attacks
   * *   **defense**: DDoS attacks that trigger traffic scrubbing
   * *   **blackhole**: DDoS attacks that trigger blackhole filtering
   * 
   * If you want to query multiple types of DDoS attack events, separate them with commas (,).
   * 
   * If you do not configure this parameter, DDoS attack events of all types are queried.
   * 
   * @example
   * defense
   */
  eventType?: string;
  ip?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The DDoS attack events occur after **StartTime** are queried. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609430400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

