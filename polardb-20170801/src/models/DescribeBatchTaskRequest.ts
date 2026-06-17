// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * pcb-xxx
   */
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

