// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUpsertCollectionDataJobResponseBodyJob } from "./GetUpsertCollectionDataJobResponseBodyJob";


export class GetUpsertCollectionDataJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the vector data upload job.
   */
  job?: GetUpsertCollectionDataJobResponseBodyJob;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetUpsertCollectionDataJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

