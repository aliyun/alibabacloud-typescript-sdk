// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The format is YYYY-MM-DD HH:mm:ss. If this parameter is not specified, the current time is used.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - Normal: normal events.
   * - Warning: abnormal events.
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The name of the service instance. For information about how to obtain the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-test-784xxxx85d-hhnd8
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the service event list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of events to display per page in a paged query. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The start time of the query in UTC. Default value: 7 days ago.
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

