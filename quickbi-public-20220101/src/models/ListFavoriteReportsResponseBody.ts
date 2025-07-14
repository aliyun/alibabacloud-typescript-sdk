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

export class ListFavoriteReportsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of works queried.
   */
  data?: ListFavoriteReportsResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of rows per page set when requesting the interface.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFavoriteReportsResponseBodyResultData },
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

export class ListFavoriteReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the query result.
   */
  result?: ListFavoriteReportsResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful.
   * - false: The request failed.
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
      result: ListFavoriteReportsResponseBodyResult,
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

