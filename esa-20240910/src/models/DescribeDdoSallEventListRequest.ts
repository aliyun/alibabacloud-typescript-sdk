// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query.
   * 
   * The time must be in ISO 8601 format and in UTC. Format: `yyyy-MM-ddTHH:mm:ssZ`. The time range between `StartTime` and `EndTime` cannot exceed 31 days.
   * 
   * If this parameter is not specified, it defaults to the current time.
   * 
   * @example
   * 2023-02-22T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of DDoS attack events to query. Valid values:
   * 
   * - **web-cc**: A web resource exhaustion attack.
   * 
   * - **cc**: A connection-based attack.
   * 
   * - **traffic**: A traffic-based attack.
   * 
   * If you do not specify this parameter, the operation queries `web-cc` events by default.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The page number to return. Valid range: **1** to **100000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Valid values: **5**, **10**, and **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the site. You can obtain this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query.
   * 
   * The time must be in ISO 8601 format and in UTC. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-12T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
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

