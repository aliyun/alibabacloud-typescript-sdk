// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 33606503-c22c-4547-a51c-dda5e8d87962
   */
  accessChannelId?: string;
  /**
   * @example
   * PSTN
   */
  accessChannelType?: string;
  /**
   * @example
   * 18104560087
   */
  callee?: string;
  /**
   * @example
   * 09876543210,
   */
  caller?: string;
  dispositionCodesShrink?: string;
  dispositionReasonsShrink?: string;
  /**
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @example
   * 1582103299434
   */
  endTime?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  issueResolved?: boolean;
  /**
   * @example
   * 10
   */
  maxTalkTurns?: number;
  /**
   * @example
   * 1
   */
  minTalkTurns?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  sessionIdsShrink?: string;
  /**
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

