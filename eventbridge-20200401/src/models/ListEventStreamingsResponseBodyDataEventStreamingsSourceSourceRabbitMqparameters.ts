// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * dbaudit-cn-7mz2hqolc06
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * liuyang
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RabbitMQ instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
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

