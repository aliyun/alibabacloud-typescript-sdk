// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 33606503-c22c-4547-a51c-dda5e8d87962
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * PSTN
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The callee\\"s number.
   * 
   * @example
   * 18104560087
   */
  callee?: string;
  /**
   * @remarks
   * The caller\\"s number.
   * 
   * @example
   * 09876543210,
   */
  caller?: string;
  /**
   * @remarks
   * The disposition codes.
   */
  dispositionCodesShrink?: string;
  /**
   * @remarks
   * The disposition reasons.
   */
  dispositionReasonsShrink?: string;
  /**
   * @remarks
   * Specifies whether to query a draft.
   * 
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The end of the time range to query. This value is a Unix timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1582103299434
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the issue was resolved.
   * 
   * @example
   * false
   */
  issueResolved?: boolean;
  /**
   * @remarks
   * The maximum number of conversational turns.
   * 
   * @example
   * 10
   */
  maxTalkTurns?: number;
  /**
   * @remarks
   * The minimum number of conversational turns.
   * 
   * @example
   * 1
   */
  minTalkTurns?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @remarks
   * The session IDs.
   * 
   * > The value is a JSON array of strings. Example: `["session-id-1","session-id-2"]`.
   */
  sessionIdsShrink?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a Unix timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1774858849987
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      callee: 'Callee',
      caller: 'Caller',
      dispositionCodesShrink: 'DispositionCodes',
      dispositionReasonsShrink: 'DispositionReasons',
      draftVersion: 'DraftVersion',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      issueResolved: 'IssueResolved',
      maxTalkTurns: 'MaxTalkTurns',
      minTalkTurns: 'MinTalkTurns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
      sessionIdsShrink: 'SessionIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      callee: 'string',
      caller: 'string',
      dispositionCodesShrink: 'string',
      dispositionReasonsShrink: 'string',
      draftVersion: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      issueResolved: 'boolean',
      maxTalkTurns: 'number',
      minTalkTurns: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
      sessionIdsShrink: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

