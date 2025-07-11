// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageProjectsInfoRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @example
   * totalStorage
   */
  orderColumn?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * odps_project
   */
  projectPrefix?: string;
  /**
   * @example
   * 1
   */
  recentDays?: number;
  /**
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
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

