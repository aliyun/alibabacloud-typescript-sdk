// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBatchMediaProducingJobResponseBodyEditingBatchJob } from "./GetBatchMediaProducingJobResponseBodyEditingBatchJob";


export class GetBatchMediaProducingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the quick video production job.
   */
  editingBatchJob?: GetBatchMediaProducingJobResponseBodyEditingBatchJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      editingBatchJob: 'EditingBatchJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingBatchJob: GetBatchMediaProducingJobResponseBodyEditingBatchJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.editingBatchJob && typeof (this.editingBatchJob as any).validate === 'function') {
      (this.editingBatchJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

