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

