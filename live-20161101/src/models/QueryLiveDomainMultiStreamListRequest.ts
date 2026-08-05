// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveDomainMultiStreamListRequest extends $dara.Model {
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC time).
   * 
   * The end time must be later than the start time. The interval between the start time and end time cannot exceed 7 days. Default value: the last 24 hours.
   * 
   * @example
   * 2024-12-02T01:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query range. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC time). The interval between StartTime and EndTime must be within 7 days.
   * 
   * @example
   * 2024-12-01T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. This parameter is used for exact match filtering.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

