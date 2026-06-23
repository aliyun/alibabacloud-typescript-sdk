// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9n***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the vhost to create. The name must meet the following requirements:
   * 
   * - The name can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   * - The name must be 1 to 255 characters in length.
   * 
   * - The vhost name cannot be changed after creation. To use a different name, delete the vhost and create a new one.
   * 
   * This parameter is required.
   * 
   * @example
   * Demo
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

