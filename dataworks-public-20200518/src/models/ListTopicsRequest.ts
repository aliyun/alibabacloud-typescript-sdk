// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-24T00:00:00+0800
   */
  beginTime?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-25T23:00:00+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the node instance that triggers the events. You can configure either this parameter or the NodeId parameter.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the node that triggers the events. You can configure either this parameter or the InstanceId parameter.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the events.
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 30. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the events. Valid values: IGNORE, NEW, FIXING, and RECOVER. The value IGNORE indicates that the events are ignored. The value NEW indicates that the events are new events. The value FIXING indicates that the events are being processed. The value RECOVER indicates that the events are processed. You can specify multiple states. Separate them with commas (,).
   * 
   * @example
   * IGNORE,NEW,FIXING,RECOVER
   */
  topicStatuses?: string;
  /**
   * @remarks
   * The types of the events. Valid values: SLOW and ERROR. The value SLOW indicates that the running duration of the node in the current scheduling cycle is significantly longer than the average running duration of the node in previous scheduling cycles. The value ERROR indicates that the node fails to run. You can specify multiple types. Separate them with commas (,).
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

