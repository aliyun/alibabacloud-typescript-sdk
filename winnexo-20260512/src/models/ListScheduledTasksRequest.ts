// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group (such as cg_101). If specified, a group task is created (the caller must be a valid group member). If left empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return only tasks created by the caller. This parameter takes effect only in the group dimension (in the personal dimension, only the caller\\"s own tasks are returned). If not specified, no filtering is applied.
   * 
   * @example
   * true
   */
  creatorOnly?: boolean;
  /**
   * @remarks
   * The keyword of the rule name, used for fuzzy match.
   * 
   * @example
   * SampleKeyword
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * string_value
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eHiB8vca1XDyBT0cNAmThA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > The maximum number of entries per page is 30.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID that takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * Filters by visibility. Valid values:
   * - PRIVATE: visible only to the creator and group owner.
   * - COLLABORATIVE: visible to specified collaborators.
   * - PUBLIC: visible to all group members.
   * 
   * If not specified or an empty list is passed, no filtering is applied. This parameter takes effect only in the group dimension (when collaborationGroupId is specified) and is ignored in the personal dimension.
   * 
   * @example
   * PRIVATE
   */
  visibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      creatorOnly: 'creatorOnly',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
      visibilities: 'visibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      creatorOnly: 'boolean',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
      visibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.visibilities)) {
      $dara.Model.validateArray(this.visibilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

