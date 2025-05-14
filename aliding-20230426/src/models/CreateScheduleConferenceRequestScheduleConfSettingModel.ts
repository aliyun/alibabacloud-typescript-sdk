// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting } from "./CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting";
import { CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSetting } from "./CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfVirtualExtraSetting";


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

