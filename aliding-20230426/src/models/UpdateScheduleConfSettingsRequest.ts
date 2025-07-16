// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfOpenRecordSetting extends $dara.Model {
  isFollowHost?: boolean;
  /**
   * @example
   * grid
   */
  mode?: string;
  /**
   * @example
   * 0
   */
  recordAutoStart?: number;
  /**
   * @example
   * 0
   */
  recordAutoStartType?: number;
  static names(): { [key: string]: string } {
    return {
      isFollowHost: 'IsFollowHost',
      mode: 'Mode',
      recordAutoStart: 'RecordAutoStart',
      recordAutoStartType: 'RecordAutoStartType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFollowHost: 'boolean',
      mode: 'string',
      recordAutoStart: 'number',
      recordAutoStartType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings extends $dara.Model {
  /**
   * @example
   * 0
   */
  autoOpenMode?: number;
  /**
   * @example
   * xxxx
   */
  coolAppCode?: string;
  /**
   * @example
   * xxx
   */
  extensionAppBizData?: string;
  static names(): { [key: string]: string } {
    return {
      autoOpenMode: 'AutoOpenMode',
      coolAppCode: 'CoolAppCode',
      extensionAppBizData: 'ExtensionAppBizData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoOpenMode: 'number',
      coolAppCode: 'string',
      extensionAppBizData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class UpdateScheduleConfSettingsRequestScheduleConfSettingModel extends $dara.Model {
  cohostUserIds?: string[];
  /**
   * @example
   * ding********
   */
  confAllowedCorpId?: string;
  /**
   * @example
   * 012345
   */
  hostUserId?: string;
  /**
   * @example
   * 1
   */
  lockRoom?: number;
  moziConfOpenRecordSetting?: UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfOpenRecordSetting;
  moziConfVirtualExtraSetting?: UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSetting;
  /**
   * @example
   * 1
   */
  muteOnJoin?: number;
  /**
   * @example
   * 1
   */
  screenShareForbidden?: number;
  static names(): { [key: string]: string } {
    return {
      cohostUserIds: 'CohostUserIds',
      confAllowedCorpId: 'ConfAllowedCorpId',
      hostUserId: 'HostUserId',
      lockRoom: 'LockRoom',
      moziConfOpenRecordSetting: 'MoziConfOpenRecordSetting',
      moziConfVirtualExtraSetting: 'MoziConfVirtualExtraSetting',
      muteOnJoin: 'MuteOnJoin',
      screenShareForbidden: 'ScreenShareForbidden',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cohostUserIds: { 'type': 'array', 'itemType': 'string' },
      confAllowedCorpId: 'string',
      hostUserId: 'string',
      lockRoom: 'number',
      moziConfOpenRecordSetting: UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfOpenRecordSetting,
      moziConfVirtualExtraSetting: UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSetting,
      muteOnJoin: 'number',
      screenShareForbidden: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cohostUserIds)) {
      $dara.Model.validateArray(this.cohostUserIds);
    }
    if(this.moziConfOpenRecordSetting && typeof (this.moziConfOpenRecordSetting as any).validate === 'function') {
      (this.moziConfOpenRecordSetting as any).validate();
    }
    if(this.moziConfVirtualExtraSetting && typeof (this.moziConfVirtualExtraSetting as any).validate === 'function') {
      (this.moziConfVirtualExtraSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleConfSettingsRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleConfSettingsRequest extends $dara.Model {
  scheduleConfSettingModel?: UpdateScheduleConfSettingsRequestScheduleConfSettingModel;
  /**
   * @example
   * f6fb627e-a7e8-403e-b1f8-26e85450f4a9
   */
  scheduleConferenceId?: string;
  tenantContext?: UpdateScheduleConfSettingsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      scheduleConfSettingModel: 'ScheduleConfSettingModel',
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleConfSettingModel: UpdateScheduleConfSettingsRequestScheduleConfSettingModel,
      scheduleConferenceId: 'string',
      tenantContext: UpdateScheduleConfSettingsRequestTenantContext,
    };
  }

  validate() {
    if(this.scheduleConfSettingModel && typeof (this.scheduleConfSettingModel as any).validate === 'function') {
      (this.scheduleConfSettingModel as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

