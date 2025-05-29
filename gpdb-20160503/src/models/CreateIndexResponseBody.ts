// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexResponseBody extends $dara.Model {
  /**
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  jobId?: string;
  /**
   * @example
   * Successfully create job
   */
  message?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

