// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecycleBinDeleteJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 8C****C54
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
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

