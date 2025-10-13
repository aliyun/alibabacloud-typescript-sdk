// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  hasResource?: string;
  /**
   * @example
   * official=true,gpu=false
   */
  labels?: string;
  layoutMode?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * quotajradxh43rgb
   */
  parentQuotaId?: string;
  /**
   * @example
   * quota1ci8g793pgm,quotajradxh43rgb
   */
  quotaIds?: string;
  /**
   * @example
   * quotajradxh43rgb
   */
  quotaName?: string;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * status
   */
  sortBy?: string;
  /**
   * @example
   * Creating
   */
  statuses?: string;
  verbose?: boolean;
  /**
   * @example
   * 1.0
   */
  versions?: string;
  /**
   * @example
   * 21345,38727
   */
  workspaceIds?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      hasResource: 'HasResource',
      labels: 'Labels',
      layoutMode: 'LayoutMode',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentQuotaId: 'ParentQuotaId',
      quotaIds: 'QuotaIds',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      statuses: 'Statuses',
      verbose: 'Verbose',
      versions: 'Versions',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasResource: 'string',
      labels: 'string',
      layoutMode: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentQuotaId: 'string',
      quotaIds: 'string',
      quotaName: 'string',
      resourceType: 'string',
      sortBy: 'string',
      statuses: 'string',
      verbose: 'boolean',
      versions: 'string',
      workspaceIds: 'string',
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

