// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for the current cursor-based pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty string is returned if there is no next page.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number for compatible page-number-based pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for compatible page-number-based pagination.
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
   * The list of Skill summaries. The current public contract does not define a fixed structure for list items. For common fields, see "Supplementary description of response elements".
   * 
   * @example
   * [{"skillId":"skill_example123","name":"code-review","official":false,"description":"A Skill for performing code reviews","iconUrl":"https://example.com/icons/code-review.png","visibility":"user","status":"PUBLISHED","publishedVersion":2,"creatorId":"example-user","createdAt":1760000000000,"canModify":true,"canDelete":true}]
   */
  skills?: any[];
  /**
   * @remarks
   * The total number of Skills that match the current visibility and filter conditions.
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

