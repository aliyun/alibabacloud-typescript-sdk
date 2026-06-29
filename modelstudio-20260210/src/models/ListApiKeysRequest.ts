// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The API key ID for exact match.
   * 
   * @example
   * 3076140
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The keyword for fuzzy match against the description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve more results. You do not need to provide this parameter for the first query. For subsequent queries, use the token obtained from the previous response.
   * 
   * @example
   * w9Z+S5+TZyw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - DESC (default)
   * 
   * - ASC.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The field by which to sort results. Valid values:
   * 
   * - apiKeyId (default)
   * 
   * - gmtCreate.
   * 
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @remarks
   * The workspace ID for exact match.
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
      order: 'order',
      orderBy: 'orderBy',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      description: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderBy: 'string',
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

