// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings } from "./GetDijobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings";
import { GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings } from "./GetDijobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings";
import { GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings } from "./GetDijobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings";


export class GetDIJobResponseBodyPagingInfoResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The resource used for batch synchronization.
   */
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource used for real-time synchronization.
   */
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The resource used for scheduling.
   */
  scheduleResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings,
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

