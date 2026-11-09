// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionByClientIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

