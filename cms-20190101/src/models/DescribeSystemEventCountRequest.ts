// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventCountRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the end time for the event query. Unit: milliseconds.
   * 
   * @example
   * 1635993921000
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * Call the DescribeSystemEventMetaList operation to obtain the value of the `EventType` response parameter, which provides the event types for all Alibaba Cloud services under the current Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * StatusNotification
   */
  eventType?: string;
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 17285****
   */
  groupId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * 
   * - Critical: critical.
   * 
   * - Warn: warning.
   * 
   * - Info: information.
   * 
   * Call the DescribeSystemEventMetaList operation to obtain the value of the `Level` response parameter, which provides the event levels for all Alibaba Cloud services under the current Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * The event name.
   * 
   * Call the DescribeSystemEventMetaList operation to obtain the value of the `Name` response parameter, which provides the event names for all Alibaba Cloud services under the current Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Instance:StateChange
   */
  name?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * Call the DescribeSystemEventMetaList operation to obtain the value of the `Product` response parameter, which provides the Alibaba Cloud service names for all events under the current Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * ECS
   */
  product?: string;
  regionId?: string;
  /**
   * @remarks
   * The keywords contained in the event content for searching. Valid values:
   * 
   * - To search for event content that contains both a and b, search for `a and b`.
   * 
   * - To search for event content that contains either a or b, search for `a or b`.
   * 
   * @example
   * ECS
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The timestamp of the start time for the event query. Unit: milliseconds.
   * 
   * @example
   * 1635993541000
   */
  startTime?: string;
  /**
   * @remarks
   * The event status.
   * 
   * Call the DescribeSystemEventMetaList operation to obtain the value of the `Status` response parameter, which provides the event statuses for all Alibaba Cloud services under the current Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Normal
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

