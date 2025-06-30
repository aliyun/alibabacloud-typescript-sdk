// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestJobSettingsColumnDataTypeSettings } from "./UpdateDijobRequestJobSettingsColumnDataTypeSettings";
import { UpdateDIJobRequestJobSettingsCycleScheduleSettings } from "./UpdateDijobRequestJobSettingsCycleScheduleSettings";
import { UpdateDIJobRequestJobSettingsDdlHandlingSettings } from "./UpdateDijobRequestJobSettingsDdlHandlingSettings";
import { UpdateDIJobRequestJobSettingsRuntimeSettings } from "./UpdateDijobRequestJobSettingsRuntimeSettings";


export class UpdateDIJobRequestJobSettings extends $dara.Model {
  channelSettings?: string;
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: UpdateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: UpdateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: UpdateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  validate() {
    if(Array.isArray(this.columnDataTypeSettings)) {
      $dara.Model.validateArray(this.columnDataTypeSettings);
    }
    if(this.cycleScheduleSettings && typeof (this.cycleScheduleSettings as any).validate === 'function') {
      (this.cycleScheduleSettings as any).validate();
    }
    if(Array.isArray(this.ddlHandlingSettings)) {
      $dara.Model.validateArray(this.ddlHandlingSettings);
    }
    if(Array.isArray(this.runtimeSettings)) {
      $dara.Model.validateArray(this.runtimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

