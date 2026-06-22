// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetByBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The publish batch ID.
   * 
   * @example
   * 1371
   */
  batchId?: number;
  /**
   * @remarks
   * The page number of the current page to display in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The asset selection dimension. Valid values:
   * 
   * - **0**: machine instance
   * - **1**: machine group
   * - **2**: VPC-connected instance ID
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The maximum number of entries to display per page in a paged query.
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

