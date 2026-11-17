// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. If not specified, all agents are matched. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The maximum number of records per page. Default value: 50. Valid values: 1 to 100.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJvZmZzZXQiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The session ID. If not specified, all sessions are matched. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The source of the memory. Valid values:
   * - session_extraction: Extracted from session events.
   * - content_extraction: Extracted from text or messages.
   * - direct: Written directly.
   * 
   * @example
   * session_extraction
   */
  source?: string;
  /**
   * @remarks
   * The business team ID defined by the caller.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The memory content types. Specify the value as a JSON array string, such as ["skill"]. Valid values: semantic, skill, user_profile, and session_summary. If this parameter is omitted or set to [], all types are queried. The value auto is not supported. Keep the filter conditions consistent when you retrieve subsequent pages.
   * 
   * @example
   * ["semantic"]
   */
  types?: string;
  /**
   * @remarks
   * The start time for filtering by update time. The time must be in RFC 3339 format with a time zone.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  updatedAtFrom?: string;
  /**
   * @remarks
   * The end time for filtering by update time. The time must be in RFC 3339 format with a time zone.
   * 
   * @example
   * 2026-09-24T10:00:00Z
   */
  updatedAtTo?: string;
  /**
   * @remarks
   * The user ID. If not specified, all users are matched. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
   * 
   * @example
   * user-001
   */
  userId?: string;
  /**
   * @remarks
   * Specifies whether the memory is valid. Default value: true. If this parameter is omitted, only valid records are returned. If set to false, revoked records are returned.
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sessionId: 'sessionId',
      source: 'source',
      teamId: 'teamId',
      types: 'types',
      updatedAtFrom: 'updatedAtFrom',
      updatedAtTo: 'updatedAtTo',
      userId: 'userId',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sessionId: 'string',
      source: 'string',
      teamId: 'string',
      types: 'string',
      updatedAtFrom: 'string',
      updatedAtTo: 'string',
      userId: 'string',
      valid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

