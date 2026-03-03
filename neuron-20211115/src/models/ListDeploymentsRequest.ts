// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsRequest extends $dara.Model {
  excludeStatus?: string[];
  /**
   * @example
   * gmtCreated
   */
  orderBy?: string;
  /**
   * @example
   * desc
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeStatus: 'excludeStatus',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeStatus: { 'type': 'array', 'itemType': 'string' },
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeStatus)) {
      $dara.Model.validateArray(this.excludeStatus);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

