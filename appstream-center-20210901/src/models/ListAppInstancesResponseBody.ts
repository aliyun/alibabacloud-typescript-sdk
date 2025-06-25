// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppInstancesResponseBodyAppInstanceModels } from "./ListAppInstancesResponseBodyAppInstanceModels";


export class ListAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The app instances.
   */
  appInstanceModels?: ListAppInstancesResponseBodyAppInstanceModels[];
  /**
   * @remarks
   * The page number of the returned page. We recommend that you configure this parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. The value cannot be greater than `100`. We recommend that you configure this parameter.
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
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceModels: 'AppInstanceModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceModels: { 'type': 'array', 'itemType': ListAppInstancesResponseBodyAppInstanceModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceModels)) {
      $dara.Model.validateArray(this.appInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

