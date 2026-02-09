// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGameReviewByStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  reviewStatus?: string;
  sortMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reviewStatus: 'ReviewStatus',
      sortMode: 'SortMode',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      reviewStatus: 'string',
      sortMode: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

