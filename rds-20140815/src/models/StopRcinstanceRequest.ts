// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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
   * The stop mode to use when stopping the instance. Valid values:
   * 
   *   - StopCharging: economical mode. When economical mode is enabled:
   *     - Computing resources are no longer billed.
   *     - System disk and data disk continue to be billed.
   *     - Because computing resources are revoked, the instance might fail to start due to insufficient inventory. In this case, try again later or change the instance type.
   * 
   *   - KeepCharging: normal stop mode. The instance continues to incur charges after it is stopped.
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

