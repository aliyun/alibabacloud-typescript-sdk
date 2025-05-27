// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1idd0z
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue in the Message Queue for RabbitMQ instance.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vhost name of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

