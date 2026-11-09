// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisasterDowngradeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID to be downgraded.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxxx
   */
  downgradeInstanceId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT (MSMQ) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      downgradeInstanceId: 'DowngradeInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downgradeInstanceId: 'string',
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

