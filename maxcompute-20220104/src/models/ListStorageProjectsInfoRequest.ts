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
   * The statistics collection date. The date is accurate to the day. The date must be in the `YYYYMMdd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The column to sort by. Valid values:
   * 
   * - totalStorage
   * 
   * - longTermStorage
   * 
   * - lowFreqStorage
   * 
   * - standardStorage
   * 
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
   * The number of days for year-over-year comparison.
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
   * The tenant ID. You can log on to the MaxCompute console and choose **Tenant Property** in the navigation pane on the left to view the tenant ID.
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

