// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentWorkLogResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, and ARTIFACT.
   * 
   * @example
   * REPLY
   */
  action?: string;
  /**
   * @remarks
   * The saved raw record content. Tool invocations and artifact metadata are represented as JSON strings.
   * 
   * @example
   * The data query for the current round is completed
   */
  detail?: string;
  /**
   * @remarks
   * The duration of this operation record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the node to which the record belongs. This is not the session ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event was recorded, in ISO 8601 format. If the source record has no time, an empty string is returned.
   * 
   * @example
   * 2026-10-14T08:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      detail: 'detail',
      duration: 'duration',
      nodeId: 'nodeId',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      detail: 'string',
      duration: 'number',
      nodeId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentWorkLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The agent operation records in reverse chronological order. If no records are saved, an empty list is returned.
   * 
   * @example
   * []
   */
  logs?: GetAgentWorkLogResponseBodyLogs[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of filtered operation log entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      logs: 'logs',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logs: { 'type': 'array', 'itemType': GetAgentWorkLogResponseBodyLogs },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

