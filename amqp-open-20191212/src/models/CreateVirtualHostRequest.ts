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
   * The name of the vhost that you want to create. Valid values:
   * 
   * *   The name can contain letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slash (/), and at signs (@).
   * *   The name must be 1 to 255 characters in length.
   * *   After the vhost is created, you cannot change its name. If you want to change the name of a vhost, delete the vhost and create another vhost.
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

