// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings } from "./GetDijobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings";
import { GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings } from "./GetDijobResponseBodyPagingInfoJobSettingsCycleScheduleSettings";
import { GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings } from "./GetDijobResponseBodyPagingInfoJobSettingsDdlHandlingSettings";
import { GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings } from "./GetDijobResponseBodyPagingInfoJobSettingsRuntimeSettings";


export class GetDIJobResponseBodyPagingInfoJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel control settings for the synchronization task. You can configure special channel control settings for the following synchronization links: data synchronization between Hologres data sources and data synchronization from Hologres to Kafka.
   * 
   * 1.  Holo2Kafka
   * 
   * *   Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}
   * *   kafkaClientProperties: the parameters related to a Kafka producer, which are used when you write data to a Kafka data source.
   * *   keyColumns: the names of Kafka columns to which data is written.
   * *   writeMode: the writing format. Valid values: json and canal.
   * 
   * 2.  Holo2Holo
   * 
   * *   Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * *   conflictMode: the policy used to handle a conflict that occurs during data writing to Hologres. Valid values: replace and ignore.
   * *   writeMode: the mode in which data is written to Hologres. Valid values: replay and insert.
   * *   dynamicColumnAction: the mode in which data is written to dynamic columns in a Hologres table. Valid values: replay, insert, and ignore.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The data type mappings between source fields and destination fields.
   */
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The DDL operation types. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
   * *   DropColumn
   * *   AddColumn
   */
  ddlHandlingSettings?: GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings.
   */
  runtimeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings[];
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
      columnDataTypeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings },
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

