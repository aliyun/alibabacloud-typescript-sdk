// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters skills by the creator ID.
   * 
   * @example
   * example-user
   */
  creatorId?: string;
  /**
   * @remarks
   * The number of entries per page for cursor-based pagination. Valid values: 1 to 100. Default value: `20`. If this parameter is explicitly specified, cursor-based pagination takes precedence.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token returned by the server. Do not specify this parameter for the first query. For subsequent queries, use the value from the previous response.
   * 
   * @example
   * eyJzIjoiZDc3ZGRhYmE3MDMwYWM1NCIsInAiOjJ9.vkKVySx9G26993sTNLZqwGSmgciRsrRm2SgsjOMJoCQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The compatible page number parameter for page number-based pagination. Pages start from 1. Default value: `1`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The compatible number of entries per page for page number-based pagination. Valid values: 1 to 100. Default value: `20`.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs a fuzzy match on the skill name or description.
   * 
   * @example
   * review
   */
  q?: string;
  /**
   * @remarks
   * The query scope for skills. Valid values: `SYSTEM` and `CUSTOM`. If this parameter is omitted, both official and custom skills are queried.
   * 
   * @example
   * CUSTOM
   */
  scope?: string;
  /**
   * @remarks
   * Filters skills by visibility. Common values are `user` and `tenant`.
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

