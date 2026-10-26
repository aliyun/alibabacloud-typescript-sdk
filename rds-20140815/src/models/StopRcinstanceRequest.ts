// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force a shutdown. Valid values:
   * 
   * - **true**: Forces a shutdown.
   * 
   * - **false** (default): Performs a normal shutdown.
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
   * The stop mode configured when the instance is stopped. Valid values:
   * 
   *   - StopCharging: Economical mode. After economical mode is enabled:
   *     - Billing for compute resources is suspended.
   *     - Billing for the system cloud disk and data cloud disks continues.
   *     - Because compute resources are reclaimed, the instance may fail to start due to insufficient inventory. Try again later or change the instance type. 
   * 
   *   - KeepCharging: Standard mode. The instance continues to be billed after it is stopped.
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

