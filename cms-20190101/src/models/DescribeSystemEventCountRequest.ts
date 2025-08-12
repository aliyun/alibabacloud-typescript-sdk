// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventCountRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1635993921000
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the system event.
   * 
   * You can call the DescribeSystemEventMetaList operation to obtain the value of the response parameter `EventType`. The value of the EventType parameter indicates the types of system events that occurred for all cloud services in your Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * StatusNotification
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 17285****
   */
  groupId?: string;
  /**
   * @remarks
   * The level of the system event. Valid values:
   * 
   * *   Critical
   * *   Warn
   * *   Info
   * 
   * You can call the DescribeSystemEventMetaList operation to obtain the value of the response parameter `Level`. The value of the Level parameter indicates the levels of system events that occurred for all cloud services in your Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * The name of the system event.
   * 
   * You can call the DescribeSystemEventMetaList operation to obtain the value of the response parameter `Name`. The value of the Name parameter indicates the names of system events that occurred for all cloud services in your Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * Instance:StateChange
   */
  name?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * You can call the DescribeSystemEventMetaList operation to obtain the value of the response parameter `Product`. The value of the Product parameter indicates the names of all cloud services in which the system events of your Alibaba Cloud account occurred. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * ECS
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
   * ECS
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1635993541000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the system event.
   * 
   * You can call the DescribeSystemEventMetaList operation to obtain the value of the response parameter `Status`. The value of the Status parameter indicates the status of system events that occurred for all cloud services in your Alibaba Cloud account. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
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

