// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageProjectsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The statistical date, in the YYYYMMdd format. Data is collected on a daily basis.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sort column. Valid values:
   * - totalStorage
   * - longTermStorage
   * - lowFreqStorage
   * - standardStorage
   * - recycleBinStorage
   * 
   * @example
   * totalStorage
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The prefix of the MaxCompute project name.
   * 
   * @example
   * odps_project
   */
  projectPrefix?: string;
  /**
   * @remarks
   * The number of days used for comparison.
   * 
   * @example
   * 1
   */
  recentDays?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID. You can view the tenant ID by logging on to the MaxCompute console and choosing **Tenant Management** > **Tenant Properties** in the left-side navigation pane.
   * 
   * @example
   * 28074710977****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectPrefix: 'projectPrefix',
      recentDays: 'recentDays',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectPrefix: 'string',
      recentDays: 'number',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

