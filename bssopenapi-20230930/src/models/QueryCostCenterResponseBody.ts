// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCostCenterResponseBodyCostCenterDtoList } from "./QueryCostCenterResponseBodyCostCenterDtoList";


export class QueryCostCenterResponseBody extends $dara.Model {
  costCenterDtoList?: QueryCostCenterResponseBodyCostCenterDtoList[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterDtoList: 'CostCenterDtoList',
      currentPage: 'CurrentPage',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterDtoList: { 'type': 'array', 'itemType': QueryCostCenterResponseBodyCostCenterDtoList },
      currentPage: 'number',
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterDtoList)) {
      $dara.Model.validateArray(this.costCenterDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

