// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryHistoryJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 16602
   */
  jobId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D356A34-D5A9-41CD-9915-837B7F9D8722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

