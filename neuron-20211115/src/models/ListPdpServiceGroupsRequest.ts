// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpServiceGroupsRequest extends $dara.Model {
  alias?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * DEV
   */
  envType?: string;
  /**
   * @example
   * SYSTEM
   */
  groupType?: string;
  ids?: number[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * gmt_create
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @example
   * INNER
   */
  orgType?: string;
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
   * @remarks
   * pbcId
   * 
   * @example
   * 64
   */
  pbcId?: number;
  /**
   * @example
   * 22
   */
  productId?: number;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 12312
   */
  repoId?: string;
  /**
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      enterpriseId: 'enterpriseId',
      env: 'env',
      envType: 'envType',
      groupType: 'groupType',
      ids: 'ids',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      orgType: 'orgType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      productId: 'productId',
      region: 'region',
      repoId: 'repoId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      enterpriseId: 'number',
      env: 'string',
      envType: 'string',
      groupType: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      orgType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'number',
      productId: 'number',
      region: 'string',
      repoId: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

