// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-zvp2ajsj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. The name can be any string of up to 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp_test
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

