// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsRequest extends $dara.Model {
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
  dispositionCodes?: string[];
  dispositionReasons?: string[];
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
  sessionIds?: string[];
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
      dispositionCodes: 'DispositionCodes',
      dispositionReasons: 'DispositionReasons',
      draftVersion: 'DraftVersion',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      issueResolved: 'IssueResolved',
      maxTalkTurns: 'MaxTalkTurns',
      minTalkTurns: 'MinTalkTurns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
      sessionIds: 'SessionIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      callee: 'string',
      caller: 'string',
      dispositionCodes: { 'type': 'array', 'itemType': 'string' },
      dispositionReasons: { 'type': 'array', 'itemType': 'string' },
      draftVersion: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      issueResolved: 'boolean',
      maxTalkTurns: 'number',
      minTalkTurns: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
      sessionIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dispositionCodes)) {
      $dara.Model.validateArray(this.dispositionCodes);
    }
    if(Array.isArray(this.dispositionReasons)) {
      $dara.Model.validateArray(this.dispositionReasons);
    }
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

