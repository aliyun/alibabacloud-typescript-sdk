// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpRequest extends $dara.Model {
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343502000
   */
  endTime?: number;
  /**
   * @remarks
   * Consumer group ID.
   * 
   * > This parameter is required when Type is set to byGroup.
   * 
   * @example
   * group_name
   */
  group?: string;
  /**
   * @remarks
   * Instance ID.
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
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343501000
   */
  startTime?: number;
  /**
   * @remarks
   * Topic name.
   * 
   * > - This parameter is required when Type is set to byTopic.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The type of client IP query. You can choose from three methods.
   * 
   * - byInstance: Query client IPs for the instance within the specified time range.
   * 
   * - byTopic: Query client IPs for the topic within the specified time range.
   * 
   * - byGroup: Query client IPs for the group within the specified time range.
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

