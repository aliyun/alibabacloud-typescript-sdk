// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDIJobRequestRealtimeStartSettingsFailoverSettings extends $dara.Model {
  /**
   * @remarks
   * The failover interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of failovers.
   * 
   * @example
   * 30
   */
  upperLimit?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      upperLimit: 'UpperLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      upperLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequestRealtimeStartSettings extends $dara.Model {
  /**
   * @remarks
   * The failover settings.
   */
  failoverSettings?: StartDIJobRequestRealtimeStartSettingsFailoverSettings;
  /**
   * @remarks
   * The timestamp of the start offset. Unit: seconds. If you do not configure this parameter, the offset is not reset by default.
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

export class StartDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11743
   */
  DIJobId?: number;
  /**
   * @remarks
   * Specifies whether to forcefully rerun all synchronization steps. If you do not configure this parameter, the system does not forcefully rerun the task.
   * 
   * @example
   * true
   */
  forceToRerun?: boolean;
  /**
   * @remarks
   * The settings for the start.
   */
  realtimeStartSettings?: StartDIJobRequestRealtimeStartSettings;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettings: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      forceToRerun: 'boolean',
      realtimeStartSettings: StartDIJobRequestRealtimeStartSettings,
    };
  }

  validate() {
    if(this.realtimeStartSettings && typeof (this.realtimeStartSettings as any).validate === 'function') {
      (this.realtimeStartSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

