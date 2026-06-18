// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * Exact search by API Key ID.
   * 
   * @example
   * 3076140
   */
  apiKeyId?: number;
  /**
   * @remarks
   * Fuzzy search by description keyword.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * Used to return more results. This parameter is not required for the first query. The token required for subsequent queries can be obtained from the returned results.
   * 
   * @example
   * w9Z+S5+TZyw=
   */
  nextToken?: string;
  /**
   * @remarks
   * Exact search by workspace ID.
   * 
   * @example
   * ws-ac3ef438bec22dc5
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      description: 'description',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      description: 'string',
      maxResults: 'number',
      nextToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

