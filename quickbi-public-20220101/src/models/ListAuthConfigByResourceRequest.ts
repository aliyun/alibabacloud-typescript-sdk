// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthConfigByResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the records that have permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasAuth?: boolean;
  /**
   * @remarks
   * The search keyword for the authorized object.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the resource to be authorized.
   * 
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * The query granularity. Valid values:
   * 
   * - 0: User.
   * - 1: User group.
   * 
   * >Notice: Authorization records for organizations and workspaces are returned at the user granularity. Datasets and data sources can only be authorized to users.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - dashboard: Dashboard.
   * - screen: Data screen.
   * - report: Workbook.
   * - ANALYSIS: Ad hoc analysis.
   * - dashboardOfflineQuery: Self-service data retrieval.
   * - dataForm: Data entry.
   * - cube: Dataset.
   * - datasource: Data source.
   * 
   * This parameter is required.
   * 
   * @example
   * REPORT
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      hasAuth: 'HasAuth',
      keyword: 'Keyword',
      resourceId: 'ResourceId',
      shareToType: 'ShareToType',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasAuth: 'boolean',
      keyword: 'string',
      resourceId: 'string',
      shareToType: 'number',
      worksType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

