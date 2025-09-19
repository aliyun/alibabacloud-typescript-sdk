// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetByBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the release batch.
   * 
   * @example
   * 1371
   */
  batchId?: number;
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Asset selection dimension. Values:
   * 
   * - **0**: Machine instance
   * - **1**: Machine group
   * - **2**: VPC instance ID
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The maximum number of items to return per page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      currentPage: 'CurrentPage',
      operationBase: 'OperationBase',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      currentPage: 'number',
      operationBase: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

