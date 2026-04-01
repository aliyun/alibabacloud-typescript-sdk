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

