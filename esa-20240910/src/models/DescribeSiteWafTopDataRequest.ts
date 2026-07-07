// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteWafTopDataRequestFields extends $dara.Model {
  /**
   * @remarks
   * The query dimension.
   */
  dimension?: string[];
  /**
   * @remarks
   * The query metric value.
   * 
   * > For specific dimensions, see [Data analytics field description](https://help.aliyun.com/document_detail/2878520.html).
   * 
   * @example
   * Requests
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: { 'type': 'array', 'itemType': 'string' },
      fieldName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimension)) {
      $dara.Model.validateArray(this.dimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteWafTopDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query metrics.
   * 
   * This parameter is required.
   */
  fields?: DescribeSiteWafTopDataRequestFields[];
  /**
   * @remarks
   * The time granularity for querying data. Unit: seconds.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The number of top data entries to query.
   * 
   * @example
   * 5
   */
  limit?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * 
   * If this parameter is left empty, user-level data is queried.
   * 
   * @example
   * 1150376036*****
   */
  siteId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fields: 'Fields',
      interval: 'Interval',
      limit: 'Limit',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fields: { 'type': 'array', 'itemType': DescribeSiteWafTopDataRequestFields },
      interval: 'string',
      limit: 'string',
      siteId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

