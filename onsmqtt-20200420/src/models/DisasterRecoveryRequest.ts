// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisasterRecoveryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the instance to recover.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  recoveryInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recoveryInstanceId: 'RecoveryInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recoveryInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

