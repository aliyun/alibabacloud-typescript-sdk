// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublishBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the release batch.
   * 
   * @example
   * 52370
   */
  batchId?: number;
  /**
   * @remarks
   * The name of the release batch.
   * 
   * @example
   * xxx
   */
  batchName?: string;
  /**
   * @remarks
   * The interval between two release batches.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The asset selection dimension. Valid values:
   * 
   * *   **0**: instance
   * *   **1**: machine group
   * *   **2**: VPC-based instance ID
   * 
   * @example
   * 0
   */
  operationBase?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      batchName: 'BatchName',
      interval: 'Interval',
      operationBase: 'OperationBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      batchName: 'string',
      interval: 'number',
      operationBase: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

