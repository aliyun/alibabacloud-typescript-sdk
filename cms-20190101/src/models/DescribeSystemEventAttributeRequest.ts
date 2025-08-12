// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * The value must be a UNIX timestamp. It is the number of seconds that have elapsed since 00:00:00 UTC, January 1, 1970.
   * 
   * @example
   * 1552221584949
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the system event.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the types of system events.
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
   * The level of the system event. Valid values:
   * 
   * *   CRITICAL: critical
   * *   WARN: warning
   * *   INFO: information
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The name of the system event.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the names of system events.
   * 
   * @example
   * BucketIngressBandwidth
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
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
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the abbreviations of service names.
   * 
   * @example
   * oss
   */
  product?: string;
  regionId?: string;
  /**
   * @remarks
   * The keywords that are used to search for the system event. Valid values:
   * 
   * *   If you want to search for the system event whose content contains a and b, set the value to `a and b`.
   * *   If you want to search for the system event whose content contains a or b, set the value to `a or b`.
   * 
   * @example
   * cms
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The value must be a UNIX timestamp. It is the number of seconds that have elapsed since 00:00:00 UTC, January 1, 1970.
   * 
   * @example
   * 1552199984949
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the system event.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the statuses of system events.
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

