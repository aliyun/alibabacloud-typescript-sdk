// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFavoriteReportsResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user has favorited the work.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * The timestamp when the work was favorited.
   * 
   * @example
   * 1640088615000
   */
  favoriteDate?: string;
  /**
   * @remarks
   * Timestamp of the work creation.
   * 
   * @example
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Timestamp of the work modification.
   * 
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the user has edit permission for the work.
   * 
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @remarks
   * Check if the user has the permission to view the work.
   * 
   * @example
   * true
   */
  hasViewAuth?: boolean;
  /**
   * @remarks
   * Name of the work.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Alibaba Cloud account name of the work owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * UserID of the work owner.
   * 
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @remarks
   * Publication status of the work. Value range:
   * - 0: Not published
   * - 1: Published
   * - 2: Saved with modifications, not published
   * - 3: Offline
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * Work ID.
   * 
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @remarks
   * Type of the work. Value range:
   * - DATAPRODUCT: Data Portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
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
   * 523793cb-****-****-****-aa71c65ffa39
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      favoriteDate: 'FavoriteDate',
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
      favoriteDate: 'string',
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

