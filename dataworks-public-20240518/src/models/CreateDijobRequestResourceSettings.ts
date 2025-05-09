// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestResourceSettingsOfflineResourceSettings } from "./CreateDijobRequestResourceSettingsOfflineResourceSettings";
import { CreateDIJobRequestResourceSettingsRealtimeResourceSettings } from "./CreateDijobRequestResourceSettingsRealtimeResourceSettings";
import { CreateDIJobRequestResourceSettingsScheduleResourceSettings } from "./CreateDijobRequestResourceSettingsScheduleResourceSettings";


export class CreateDIJobRequestResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The resource settings for batch synchronization.
   */
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource settings for real-time synchronization.
   */
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The resource settings for scheduling.
   */
  scheduleResourceSettings?: CreateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: CreateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: CreateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: CreateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  validate() {
    if(this.offlineResourceSettings && typeof (this.offlineResourceSettings as any).validate === 'function') {
      (this.offlineResourceSettings as any).validate();
    }
    if(this.realtimeResourceSettings && typeof (this.realtimeResourceSettings as any).validate === 'function') {
      (this.realtimeResourceSettings as any).validate();
    }
    if(this.scheduleResourceSettings && typeof (this.scheduleResourceSettings as any).validate === 'function') {
      (this.scheduleResourceSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

