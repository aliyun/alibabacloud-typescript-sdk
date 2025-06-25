// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels } from "./ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels";


export class ListNodeInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource types.
   */
  nodeInstanceTypeModels?: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceTypeModels: 'NodeInstanceTypeModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceTypeModels: { 'type': 'array', 'itemType': ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInstanceTypeModels)) {
      $dara.Model.validateArray(this.nodeInstanceTypeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

