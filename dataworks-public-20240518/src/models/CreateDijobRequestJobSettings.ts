// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestJobSettingsColumnDataTypeSettings } from "./CreateDijobRequestJobSettingsColumnDataTypeSettings";
import { CreateDIJobRequestJobSettingsCycleScheduleSettings } from "./CreateDijobRequestJobSettingsCycleScheduleSettings";
import { CreateDIJobRequestJobSettingsDdlHandlingSettings } from "./CreateDijobRequestJobSettingsDdlHandlingSettings";
import { CreateDIJobRequestJobSettingsRuntimeSettings } from "./CreateDijobRequestJobSettingsRuntimeSettings";


export class CreateDIJobRequestJobSettings extends $dara.Model {
  channelSettings?: string;
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: CreateDIJobRequestJobSettingsRuntimeSettings[];
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
      columnDataTypeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: CreateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsRuntimeSettings },
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

