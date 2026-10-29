// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * The value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970.
   * 
   * @example
   * 1552221584949
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * >For more information about valid values for the event type, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Exception
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12346
   */
  groupId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * 
   * - CRITICAL: critical.
   * - WARN: warning.
   * - INFO: information.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The event name.
   * 
   * >For more information about valid values for the event name, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * BucketIngressBandwidth
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The abbreviation of the product name.
   * 
   * >For more information about valid values for the product name abbreviation, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * oss
   */
  product?: string;
  regionId?: string;
  /**
   * @remarks
   * The keywords used to search event content. Valid values:
   * 
   * - If the event content you want to search for includes both a and b, you can search for `a and b`.
   * 
   * - If the event content you want to search for includes either a or b, you can search for `a or b`.
   * 
   * @example
   * cms
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The start time.
   * 
   * The value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970.
   * 
   * @example
   * 1552199984949
   */
  startTime?: string;
  /**
   * @remarks
   * The event status.
   * 
   * >For more information about valid values for the event status, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

