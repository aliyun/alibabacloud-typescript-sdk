// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpLanesForServiceGroupRequest extends $dara.Model {
  /**
   * @example
   * 40
   */
  companyId?: number;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * yunmall
   */
  keyword?: string;
  laneIds?: number[];
  /**
   * @example
   * filter
   */
  operator?: string;
  /**
   * @example
   * gmtModified
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
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
   * 199
   */
  serviceGroupId?: number;
  /**
   * @example
   * 100
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      env: 'env',
      keyword: 'keyword',
      laneIds: 'laneIds',
      operator: 'operator',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      env: 'string',
      keyword: 'string',
      laneIds: { 'type': 'array', 'itemType': 'number' },
      operator: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      serviceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.laneIds)) {
      $dara.Model.validateArray(this.laneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

