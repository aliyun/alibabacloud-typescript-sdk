// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs, such as cg_101. If this parameter is specified, a group space task is created, and the caller must be a valid group member. If this parameter is left empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * Specifies whether to view only tasks created by yourself. This parameter takes effect only at the group level (at the personal level, tasks are always your own). If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * true
   */
  creatorOnly?: boolean;
  /**
   * @remarks
   * The keyword in the rule name for fuzzy matching.
   * 
   * @example
   * Sample keyword
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to return for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page.
   * 
   * @example
   * eHiB8vca1XDyBT0cNAmThA==
   */
  nextToken?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The page number for pagination. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * > The maximum number of entries per page is 30.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * Filters tasks by visibility scope. Multiple values can be selected. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaboration members), and PUBLIC (visible to all group members). If this parameter is not specified or an empty list is passed, no filtering is applied. This parameter takes effect only at the group level (when collaborationGroupId is specified) and is ignored at the personal level.
   * 
   * @example
   * ["PRIVATE"]
   */
  visibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      creatorOnly: 'creatorOnly',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
      visibilities: 'visibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      collaborationGroupId: 'string',
      creatorOnly: 'boolean',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

