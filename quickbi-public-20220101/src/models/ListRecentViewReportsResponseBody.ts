// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentViewReportsResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Queries whether the user has collected the work.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * The timestamp when the work was created.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the work was modified.
   * 
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The query user has the editing rights of the work.
   * 
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @remarks
   * The query user has the permission to view the work.
   * 
   * @example
   * true
   */
  hasViewAuth?: boolean;
  /**
   * @remarks
   * The timestamp when the work was last accessed.
   * 
   * @example
   * 1642067498000
   */
  latestViewTime?: string;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Test report
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The UserID of the work owner.
   * 
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @remarks
   * The publication status of the work. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified and saved but not published.
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @remarks
   * The number of times the work was accessed.
   * 
   * @example
   * 7
   */
  viewCount?: number;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 523793cb-****-****-****-aa71c65ffa39
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      latestViewTime: 'LatestViewTime',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      viewCount: 'ViewCount',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      latestViewTime: 'string',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      viewCount: 'number',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Attention
   * 
   * @example
   * test
   */
  attention?: string;
  /**
   * @remarks
   * The list of queried works.
   */
  data?: ListRecentViewReportsResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * *   Default value: 10.
   * *   Maximum of 100 articles
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      attention: 'Attention',
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attention: 'string',
      data: { 'type': 'array', 'itemType': ListRecentViewReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The query results are returned.
   */
  result?: ListRecentViewReportsResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRecentViewReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

