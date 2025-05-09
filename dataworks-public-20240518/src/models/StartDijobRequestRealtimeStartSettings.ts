// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartDIJobRequestRealtimeStartSettingsFailoverSettings } from "./StartDijobRequestRealtimeStartSettingsFailoverSettings";


export class StartDIJobRequestRealtimeStartSettings extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use advanced parameters for failover settings when you create a task.
   * 
   * @deprecated
   */
  failoverSettings?: StartDIJobRequestRealtimeStartSettingsFailoverSettings;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1671516776
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      failoverSettings: 'FailoverSettings',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverSettings: StartDIJobRequestRealtimeStartSettingsFailoverSettings,
      startTime: 'number',
    };
  }

  validate() {
    if(this.failoverSettings && typeof (this.failoverSettings as any).validate === 'function') {
      (this.failoverSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

