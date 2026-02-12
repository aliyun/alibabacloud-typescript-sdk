// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessagePageQueryByTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the BeginTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570723200000
   */
  beginTime?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the EndTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570809600000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 5 to 50. Default value: 20. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the PageSize parameter that you specified in the request for creating the query task.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the information about messages in a specified topic within a specified time range, this parameter is not required. This parameter is required in subsequent queries for messages on a specified page. You can obtain the task ID from the returned result of the first query.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the topic whose messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      pageSize: 'number',
      taskId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

