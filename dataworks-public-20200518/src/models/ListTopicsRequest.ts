// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for discovery. Specify the time in UTC format (yyyy-MM-dd\\"T\\"HH:mm:ssZ).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-24T00:00:00+0800
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time for discovery. Specify the time in UTC format (yyyy-MM-dd\\"T\\"HH:mm:ssZ).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-25T23:00:00+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID associated with the event. This parameter is mutually exclusive with NodeId.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the node associated with the event. This parameter is mutually exclusive with InstanceId.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the event owner.
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE (ignored), NEW (newly discovered), FIXING (being processed), and RECOVER (recovered). Separate multiple event statuses with commas (,).
   * 
   * @example
   * IGNORE,NEW,FIXING,RECOVER
   */
  topicStatuses?: string;
  /**
   * @remarks
   * The type of the event. Valid values: SLOW (slow) and ERROR (error). Separate multiple event types with commas (,).
   * 
   * @example
   * ERROR,SLOW
   */
  topicTypes?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      topicStatuses: 'TopicStatuses',
      topicTypes: 'TopicTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      instanceId: 'number',
      nodeId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      topicStatuses: 'string',
      topicTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

