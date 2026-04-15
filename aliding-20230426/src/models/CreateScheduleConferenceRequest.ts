// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleConferenceRequestScheduleConfSettingModelAiAgentSummarySetting extends $dara.Model {
  /**
   * @example
   * 0
   */
  allowAllParticipantsStart?: number;
  /**
   * @example
   * 0
   */
  receiverType?: number;
  /**
   * @example
   * 0
   */
  restrictShareMinutesSummaryOnly?: number;
  /**
   * @example
   * disable
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      allowAllParticipantsStart: 'AllowAllParticipantsStart',
      receiverType: 'ReceiverType',
      restrictShareMinutesSummaryOnly: 'RestrictShareMinutesSummaryOnly',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAllParticipantsStart: 'number',
      receiverType: 'number',
      restrictShareMinutesSummaryOnly: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting extends $dara.Model {
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 0
   */
  restrictShareMinutesSummaryOnly?: number;
  static names(): { [key: string]: string } {
    return {
      isFollowHost: 'IsFollowHost',
      mode: 'Mode',
      recordAutoStart: 'RecordAutoStart',
      recordAutoStartType: 'RecordAutoStartType',
      restrictShareMinutesSummaryOnly: 'RestrictShareMinutesSummaryOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFollowHost: 'boolean',
      mode: 'string',
      recordAutoStart: 'number',
      recordAutoStartType: 'number',
      restrictShareMinutesSummaryOnly: 'number',
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
  /**
   * @example
   * true
   */
  enableWebAnonymousJoin?: boolean;
  /**
   * @example
   * false
   */
  hiddenOwnerNick?: boolean;
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
  /**
   * @example
   * 0
   */
  minutesOwnerUserId?: string;
  /**
   * @example
   * 1
   */
  minutesSummaryDiyTemplateVersion?: string;
  minutesSummaryTemplateId?: string;
  minutesSummaryTemplateType?: string;
  /**
   * @example
   * {}
   */
  moziConfExtensionAppSettings?: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings[];
  /**
   * @example
   * true
   */
  pushAllMeetingRecords?: boolean;
  /**
   * @example
   * true
   */
  pushCloudRecordCard?: boolean;
  /**
   * @example
   * true
   */
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
      hiddenOwnerNick: 'HiddenOwnerNick',
      joinBeforeHost: 'JoinBeforeHost',
      lockMediaStatusMicMute: 'LockMediaStatusMicMute',
      lockNick: 'LockNick',
      minutesOwnerUserId: 'MinutesOwnerUserId',
      minutesSummaryDiyTemplateVersion: 'MinutesSummaryDiyTemplateVersion',
      minutesSummaryTemplateId: 'MinutesSummaryTemplateId',
      minutesSummaryTemplateType: 'MinutesSummaryTemplateType',
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
      hiddenOwnerNick: 'boolean',
      joinBeforeHost: 'number',
      lockMediaStatusMicMute: 'number',
      lockNick: 'number',
      minutesOwnerUserId: 'string',
      minutesSummaryDiyTemplateVersion: 'string',
      minutesSummaryTemplateId: 'string',
      minutesSummaryTemplateType: 'string',
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
  /**
   * @example
   * {}
   */
  aiAgentSummarySetting?: CreateScheduleConferenceRequestScheduleConfSettingModelAiAgentSummarySetting;
  /**
   * @example
   * ["012345"]
   */
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
  /**
   * @example
   * {}
   */
  moziConfOpenRecordSetting?: CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting;
  /**
   * @example
   * {}
   */
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
      aiAgentSummarySetting: 'AiAgentSummarySetting',
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
      aiAgentSummarySetting: CreateScheduleConferenceRequestScheduleConfSettingModelAiAgentSummarySetting,
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
    if(this.aiAgentSummarySetting && typeof (this.aiAgentSummarySetting as any).validate === 'function') {
      (this.aiAgentSummarySetting as any).validate();
    }
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
  /**
   * @example
   * 预约会议设置
   */
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

