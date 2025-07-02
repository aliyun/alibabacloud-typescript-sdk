// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * amqp-cn-nif22u74****
   */
  instanceId?: string;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

