// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access channel ID.
   * 
   * @example
   * 33606503-c22c-4547-a51c-dda5e8d87962
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The access channel type.
   * 
   * @example
   * Test
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 01080862792
   */
  caller?: string;
  /**
   * @remarks
   * The outbound campaign ID.
   * 
   * @example
   * 7607dae1-91ad-47ea-ad76-3d81ac34f729
   */
  campaignId?: string;
  /**
   * @remarks
   * Specifies whether the case is completed.
   * 
   * @example
   * true
   */
  caseCompleted?: boolean;
  /**
   * @remarks
   * The list of case IDs.
   */
  caseIdsShrink?: string;
  /**
   * @remarks
   * The list of disposition codes.
   */
  dispositionCodesShrink?: string;
  /**
   * @remarks
   * The list of disposition reasons.
   */
  dispositionReasonsShrink?: string;
  /**
   * @remarks
   * Specifies whether the version is a draft version.
   * 
   * @example
   * true
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1578995079000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a5fc6490-ef1e-4666-870a-07a4e586c414
   */
  instanceId?: string;
  /**
   * @remarks
   * The label search condition.
   */
  labelSearchShrink?: string;
  /**
   * @remarks
   * The maximum ringing duration.
   * 
   * @example
   * 2
   */
  maxRingingDuration?: number;
  /**
   * @remarks
   * The maximum talk time.
   * 
   * @example
   * 2
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum number of conversation turns.
   * 
   * @example
   * 2
   */
  maxTalkTurns?: number;
  /**
   * @remarks
   * The minimum ringing duration.
   * 
   * @example
   * 1
   */
  minRingingDuration?: number;
  /**
   * @remarks
   * The minimum talk time.
   * 
   * @example
   * 1
   */
  minTalkTime?: number;
  /**
   * @remarks
   * The minimum number of conversation turns.
   * 
   * @example
   * 1
   */
  minTalkTurns?: number;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 18512345678
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1578965079000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of case states.
   */
  statesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseCompleted: 'CaseCompleted',
      caseIdsShrink: 'CaseIds',
      dispositionCodesShrink: 'DispositionCodes',
      dispositionReasonsShrink: 'DispositionReasons',
      draftVersion: 'DraftVersion',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      labelSearchShrink: 'LabelSearch',
      maxRingingDuration: 'MaxRingingDuration',
      maxTalkTime: 'MaxTalkTime',
      maxTalkTurns: 'MaxTalkTurns',
      minRingingDuration: 'MinRingingDuration',
      minTalkTime: 'MinTalkTime',
      minTalkTurns: 'MinTalkTurns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      scriptId: 'ScriptId',
      startTime: 'StartTime',
      statesShrink: 'States',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      caller: 'string',
      campaignId: 'string',
      caseCompleted: 'boolean',
      caseIdsShrink: 'string',
      dispositionCodesShrink: 'string',
      dispositionReasonsShrink: 'string',
      draftVersion: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      labelSearchShrink: 'string',
      maxRingingDuration: 'number',
      maxTalkTime: 'number',
      maxTalkTurns: 'number',
      minRingingDuration: 'number',
      minTalkTime: 'number',
      minTalkTurns: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      scriptId: 'string',
      startTime: 'number',
      statesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

