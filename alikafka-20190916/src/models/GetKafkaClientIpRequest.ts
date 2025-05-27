// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716343502000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * >  This parameter is required only if you set Type to byGroup.
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
   * The ID of the region where the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
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
   * 
   * > 
   * 
   * *   This parameter is required only if you set Type to byTopic.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The query method that you want to use to query the client IP addresses. Valid values:
   * 
   * *   byInstance: queries the IP addresses of the clients that are connected to the instance within a specific period of time.
   * *   byTopic: queries the IP addresses of the clients that are connected to a specific topic on the instance within a specific period of time.
   * *   byGroup: queries the IP addresses of the clients that are connected to a specific group on the instance within a specific period of time.
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

