// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343502000
   */
  endTime?: number;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * 
   * > This parameter is required if Type is set to byGroup.
   * 
   * @example
   * group_name
   */
  group?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query range. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343501000
   */
  startTime?: number;
  /**
   * @remarks
   * The topic name.
   * > 
   * >- This parameter is required if Type is set to byTopic.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The type of client IP address to query. Valid values:
   * 
   * - byInstance: Queries the client IP addresses within a specified time range for the instance. 
   * - byTopic: Queries the client IP addresses within a specified time range for the topic.
   * - byGroup: Queries the client IP addresses within a specified time range for the group.
   * 
   * This parameter is required.
   * 
   * @example
   * byInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      group: 'string',
      instanceId: 'string',
      regionId: 'string',
      startTime: 'number',
      topic: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

