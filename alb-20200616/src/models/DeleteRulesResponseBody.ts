// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7BED4F62-3E6E-5E4F-8C53-2D8CCE77F2ED
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
      jobId: 'string',
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

