// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance. Valid values:
   * 
   * -   **true**: Forcefully stops the instance.
   * 
   * -   **false** (default): Gracefully stops the instance.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-m5sc1271fv344a1r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stop mode of the instance. Valid values:
   * 
   *   - StopCharging: economical mode. After economical mode is enabled:
   *     - Billing for compute resources is suspended.
   *     - Billing for system cloud disks and data cloud disks continues.
   *     - Because compute resources are released, the instance may fail to start due to insufficient resources. Try again later or change the instance type. 
   * 
   *   - KeepCharging: standard mode. Billing continues after the instance is stopped.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStop: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

