// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestJobSettingsColumnDataTypeSettings } from "./UpdateDijobRequestJobSettingsColumnDataTypeSettings";
import { UpdateDIJobRequestJobSettingsCycleScheduleSettings } from "./UpdateDijobRequestJobSettingsCycleScheduleSettings";
import { UpdateDIJobRequestJobSettingsDdlHandlingSettings } from "./UpdateDijobRequestJobSettingsDdlHandlingSettings";
import { UpdateDIJobRequestJobSettingsRuntimeSettings } from "./UpdateDijobRequestJobSettingsRuntimeSettings";


export class UpdateDIJobRequestJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel control settings for the synchronization task. You can configure special channel control settings for the following synchronization links: data synchronization between Hologres data sources and data synchronization from Hologres to Kafka.
   * 
   * 1.  Holo2Kafka
   * 
   * *   Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}
   * *   kafkaClientProperties: the parameters related to a Kafka producer, which are used when you read data from a Kafka data source.
   * *   keyColumns: the names of Kafka columns to which you want to write data.
   * *   writeMode: the writing format. Valid values: json and canal.
   * 
   * 2.  Holo2Holo
   * 
   * *   Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * *   conflictMode: the policy used to handle a conflict that occurs during data writing to Hologres. Valid values: replace and ignore.
   * *   writeMode: the mode in which you want to write data to Hologres. Valid values: replay and insert.
   * *   dynamicColumnAction: the mode in which you want to write data to dynamic columns in a Hologres table. Valid values: replay, insert, and ignore.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The data type mappings between source fields and destination fields.
   * 
   * >  "ColumnDataTypeSettings":[ { "SourceDataType":"Bigint", "DestinationDataType":"Text" } ]
   */
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The processing settings for DDL messages.
   * 
   * >  "DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
   */
  ddlHandlingSettings?: UpdateDIJobRequestJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings.
   */
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

