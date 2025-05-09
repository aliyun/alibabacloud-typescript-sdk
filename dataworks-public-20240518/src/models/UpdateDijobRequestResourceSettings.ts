// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestResourceSettingsOfflineResourceSettings } from "./UpdateDijobRequestResourceSettingsOfflineResourceSettings";
import { UpdateDIJobRequestResourceSettingsRealtimeResourceSettings } from "./UpdateDijobRequestResourceSettingsRealtimeResourceSettings";
import { UpdateDIJobRequestResourceSettingsScheduleResourceSettings } from "./UpdateDijobRequestResourceSettingsScheduleResourceSettings";


export class UpdateDIJobRequestResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The resource used for batch synchronization.
   */
  offlineResourceSettings?: UpdateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource used for real-time synchronization.
   */
  realtimeResourceSettings?: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The resource used for scheduling.
   */
  scheduleResourceSettings?: UpdateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: UpdateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: UpdateDIJobRequestResourceSettingsScheduleResourceSettings,
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

