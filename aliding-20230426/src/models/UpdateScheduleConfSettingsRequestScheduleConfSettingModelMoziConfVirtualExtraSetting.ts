// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings } from "./UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings";


export class UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSetting extends $dara.Model {
  cloudRecordOwnerUserId?: string;
  /**
   * @example
   * 1
   */
  enableChat?: number;
  enableWebAnonymousJoin?: boolean;
  /**
   * @example
   * 1
   */
  joinBeforeHost?: number;
  /**
   * @example
   * 1
   */
  lockMediaStatusMicMute?: number;
  /**
   * @example
   * 1
   */
  lockNick?: number;
  minutesOwnerUserId?: string;
  moziConfExtensionAppSettings?: UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings[];
  pushAllMeetingRecords?: boolean;
  pushCloudRecordCard?: boolean;
  pushMinutesCard?: boolean;
  /**
   * @example
   * 1
   */
  waitingRoom?: number;
  static names(): { [key: string]: string } {
    return {
      cloudRecordOwnerUserId: 'CloudRecordOwnerUserId',
      enableChat: 'EnableChat',
      enableWebAnonymousJoin: 'EnableWebAnonymousJoin',
      joinBeforeHost: 'JoinBeforeHost',
      lockMediaStatusMicMute: 'LockMediaStatusMicMute',
      lockNick: 'LockNick',
      minutesOwnerUserId: 'MinutesOwnerUserId',
      moziConfExtensionAppSettings: 'MoziConfExtensionAppSettings',
      pushAllMeetingRecords: 'PushAllMeetingRecords',
      pushCloudRecordCard: 'PushCloudRecordCard',
      pushMinutesCard: 'PushMinutesCard',
      waitingRoom: 'WaitingRoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudRecordOwnerUserId: 'string',
      enableChat: 'number',
      enableWebAnonymousJoin: 'boolean',
      joinBeforeHost: 'number',
      lockMediaStatusMicMute: 'number',
      lockNick: 'number',
      minutesOwnerUserId: 'string',
      moziConfExtensionAppSettings: { 'type': 'array', 'itemType': UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings },
      pushAllMeetingRecords: 'boolean',
      pushCloudRecordCard: 'boolean',
      pushMinutesCard: 'boolean',
      waitingRoom: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moziConfExtensionAppSettings)) {
      $dara.Model.validateArray(this.moziConfExtensionAppSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

