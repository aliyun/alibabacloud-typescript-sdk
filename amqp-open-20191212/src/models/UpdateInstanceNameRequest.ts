// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance for which you want to update the name.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-zvp2ajsj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. No limits are imposed on the value. We recommend that you set this parameter to a maximum of 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-ZVp2ajsj****
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

