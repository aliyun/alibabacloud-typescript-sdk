// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePipelineResponseBodyResult } from "./DescribePipelineResponseBodyResult";


export class DescribePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was updated.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD1***
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the queue. Valid values:
   * 
   * *   MEMORY: a traditional memory-based queue.
   * *   PERSISTED: disk-based ACKed queue (persistent queue).
   */
  result?: DescribePipelineResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribePipelineResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

