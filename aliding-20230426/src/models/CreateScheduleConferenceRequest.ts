// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting extends $dara.Model {
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

export class CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings extends $dara.Model {
  /**
   * @example
   * 0
   */
  autoOpenMode?: number;
  /**
   * @example
   * xxx
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

export class CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSetting extends $dara.Model {
  /**
   * @example
   * 2iPOLbpUNMLzB5LuwggiiqiPwiEiE
   */
  cloudRecordOwnerUserId?: string;
  /**
   * @example
   * 0
   */
  enableChat?: number;
  enableWebAnonymousJoin?: boolean;
  /**
   * @example
   * 0
   */
  joinBeforeHost?: number;
  /**
   * @example
   * 0
   */
  lockMediaStatusMicMute?: number;
  /**
   * @example
   * 0
   */
  lockNick?: number;
  minutesOwnerUserId?: string;
  moziConfExtensionAppSettings?: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings[];
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
      moziConfExtensionAppSettings: { 'type': 'array', 'itemType': CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings },
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

export class CreateScheduleConferenceRequestScheduleConfSettingModel extends $dara.Model {
  cohostUserIds?: string[];
  /**
   * @example
   * dingc02f685fa06381c44ac5d6980864d335
   */
  confAllowedCorpId?: string;
  /**
   * @example
   * 2iPOLbpUNMLzB5LuwggiiqiPwiEiE
   */
  hostUserId?: string;
  /**
   * @example
   * 0
   */
  lockRoom?: number;
  moziConfOpenRecordSetting?: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting;
  moziConfVirtualExtraSetting?: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSetting;
  /**
   * @example
   * 1
   */
  muteOnJoin?: number;
  /**
   * @example
   * 0
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
      moziConfOpenRecordSetting: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting,
      moziConfVirtualExtraSetting: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSetting,
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

export class CreateScheduleConferenceRequestTenantContext extends $dara.Model {
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

export class CreateScheduleConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687928400000L
   */
  endTime?: number;
  scheduleConfSettingModel?: CreateScheduleConferenceRequestScheduleConfSettingModel;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687924800000L
   */
  startTime?: number;
  tenantContext?: CreateScheduleConferenceRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 预约会议标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      scheduleConfSettingModel: 'ScheduleConfSettingModel',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      scheduleConfSettingModel: CreateScheduleConferenceRequestScheduleConfSettingModel,
      startTime: 'number',
      tenantContext: CreateScheduleConferenceRequestTenantContext,
      title: 'string',
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

