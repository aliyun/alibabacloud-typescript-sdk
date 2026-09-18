// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters agents by the exact creator ID.
   * 
   * @example
   * example-user
   */
  creatorId?: string;
  /**
   * @remarks
   * The number of entries per page for cursor-based pagination. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token returned in the previous response.
   * 
   * @example
   * eyJwYWdlIjoyfQ.example
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for page number-based pagination. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for page number-based pagination. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. Matches the name, display name, or description.
   * 
   * @example
   * code review
   */
  q?: string;
  /**
   * @remarks
   * Filters agents by runtime label.
   * 
   * @example
   * qwen
   */
  requiredRuntime?: string;
  /**
   * @remarks
   * The query scope. Valid values: `SYSTEM` and `CUSTOM`.
   * 
   * @example
   * CUSTOM
   */
  scope?: string;
  /**
   * @remarks
   * Filters agents by visibility scope. Valid values: `user` and `tenant`.
   * 
   * @example
   * user
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      q: 'Q',
      requiredRuntime: 'RequiredRuntime',
      scope: 'Scope',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      q: 'string',
      requiredRuntime: 'string',
      scope: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

