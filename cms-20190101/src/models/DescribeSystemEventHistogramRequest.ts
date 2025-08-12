// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventHistogramRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552220485596
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
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
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The event name.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the names of system events.
   * 
   * @example
   * BucketIngressBandwidth
   */
  name?: string;
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the abbreviations of service names.
   * 
   * @example
   * OSS
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
   * The start time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552209685596
   */
  startTime?: string;
  /**
   * @remarks
   * The event status.
   * 
   * >  You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the status of system events.
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

