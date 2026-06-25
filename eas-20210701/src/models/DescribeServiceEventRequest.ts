// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range, in UTC. The default value is the current time.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - Normal: a normal event.
   * 
   * - Warning: a warning event.
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The name of the service instance. To obtain this name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-test-784xxxx85d-hhnd8
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of events to return per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The start time of the query range, in UTC. The default value is 7 days ago.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      instanceName: 'string',
      pageNum: 'string',
      pageSize: 'string',
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

