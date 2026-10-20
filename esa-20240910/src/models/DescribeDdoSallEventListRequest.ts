// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The time span between the start time and the end time cannot exceed 31 days. If you do not specify this parameter, the current time is used as the end time.
   * 
   * @example
   * 2023-02-22T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the DDoS attack event to query. Valid values:
   * - **web-cc**: web resource exhaustion attacks.
   * - **cc**: connection flood attacks.
   * - **traffic**: volumetric traffic attacks.
   * 
   * If the Settings for this parameter are not specified, web resource exhaustion attack events are queried.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The page number. Valid values: **1** to **100000**.
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
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

