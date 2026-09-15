// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. When paginating, keep workspaceId, agentId, searchText, sessionId, and maxResults unchanged.
   */
  nextToken?: string;
  /**
   * @remarks
   * When explicitly specified, this parameter cannot be empty or consist entirely of whitespace. The value can contain up to 36 characters and allows only hexadecimal characters and hyphens. This parameter can be used together with sessionId, combined with AND logic.
   * 
   * @example
   * 2f360
   */
  searchText?: string;
  /**
   * @remarks
   * When explicitly specified, this parameter cannot be empty or consist entirely of whitespace. The value must be valid UTF-8 of 1 to 128 bytes and cannot contain forward slashes (/), vertical bars (|), control characters, or format characters. The original case and leading/trailing spaces are preserved. This parameter can be used together with searchText, combined with AND logic.
   * 
   * @example
   * session-a
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchText: 'searchText',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchText: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

