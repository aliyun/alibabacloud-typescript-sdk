// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current number of entries per page for cursor-based pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token. An empty string is returned if there are no more pages.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The current compatible page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current compatible number of entries per page.
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
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skill summaries. The structure of list items is not fixed in the current public contract. For common fields, refer to the supplementary description of response parameters.
   * 
   * @example
   * [{"skillId":"skill_example123","name":"code-review","official":false,"description":"Skill for code review","iconUrl":"https://example.com/icons/code-review.png","visibility":"user","status":"PUBLISHED","publishedVersion":2,"creatorId":"example-user","createdAt":1760000000000,"canModify":true,"canDelete":true}]
   */
  skills?: any[];
  /**
   * @remarks
   * The total number of skills that meet the current visibility and filter conditions.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      skills: 'Skills',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': 'any' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

