// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters Skills by creator ID.
   * 
   * @example
   * example-user
   */
  creatorId?: string;
  /**
   * @remarks
   * The number of entries per page for cursor-based pagination. Valid values: 1 to 100. Default value: `20`. If explicitly specified, cursor-based pagination takes precedence.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned by the server for the next page. Do not pass this parameter for the first query. For subsequent queries, use the value returned in the previous response.
   * 
   * @example
   * eyJzIjoiZDc3ZGRhYmE3MDMwYWM1NCIsInAiOjJ9.vkKVySx9G26993sTNLZqwGSmgciRsrRm2SgsjOMJoCQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for compatible page-number-based pagination. Pages start from 1. Default value: `1`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for compatible page-number-based pagination. Valid values: 1 to 100. Default value: `20`.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs a fuzzy match on the Skill name or description.
   * 
   * @example
   * review
   */
  q?: string;
  /**
   * @remarks
   * The query scope for Skills. Valid values: `SYSTEM` and `CUSTOM`. If omitted, both official and custom Skills are queried.
   * 
   * @example
   * CUSTOM
   */
  scope?: string;
  /**
   * @remarks
   * Filters Skills by visibility. Common values are `user` and `tenant`.
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

