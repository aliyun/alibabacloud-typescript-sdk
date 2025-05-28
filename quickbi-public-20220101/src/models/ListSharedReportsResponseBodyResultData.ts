// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedReportsResponseBodyResultData extends $dara.Model {
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
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the work was modified.
   * 
   * @example
   * 1644373980000
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
   * test account
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
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * gfidm145-****-****-9426-8f93be23****
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
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
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
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
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

