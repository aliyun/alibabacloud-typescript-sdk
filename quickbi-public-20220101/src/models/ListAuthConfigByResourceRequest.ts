// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthConfigByResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only records that have permissions.
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
   * The ID of the resource to authorize.
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
   * - 0: user
   * - 1: user group
   * 
   * >Notice: Authorization records for organizations and workspaces are returned at the user granularity. Datasets and data sources can only be authorized to users.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The type of the authorization resource. Valid values:
   * 
   * - dashboard: dashboard
   * - screen: data screen
   * - report: electron
   * - ANALYSIS: ad hoc analysis
   * - dashboardOfflineQuery: self-service data retrieval
   * - dataForm: data form
   * - cube: dataset
   * - datasource: data source
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

