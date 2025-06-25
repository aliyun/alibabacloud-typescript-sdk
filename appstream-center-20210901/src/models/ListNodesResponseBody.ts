// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyNodeModels } from "./ListNodesResponseBodyNodeModels";


export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The resource nodes.
   */
  nodeModels?: ListNodesResponseBodyNodeModels[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  perPageSize?: number;
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
   * The page number.
   * 
   * @example
   * 1
   */
  toPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeModels: 'NodeModels',
      perPageSize: 'PerPageSize',
      requestId: 'RequestId',
      toPage: 'ToPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeModels: { 'type': 'array', 'itemType': ListNodesResponseBodyNodeModels },
      perPageSize: 'number',
      requestId: 'string',
      toPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeModels)) {
      $dara.Model.validateArray(this.nodeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

