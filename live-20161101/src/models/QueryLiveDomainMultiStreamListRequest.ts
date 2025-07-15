// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveDomainMultiStreamListRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * The end time must be later than the start time. The time range specified by the StartTime and EndTime parameters cannot exceed seven days. If the two parameters are not specified, data of the last 24 hours is queried by default.
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC. The time range specified by the StartTime and EndTime parameters cannot exceed seven days.
   * 
   * @example
   * 2024-12-01T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. This parameter is used for exact match.
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

