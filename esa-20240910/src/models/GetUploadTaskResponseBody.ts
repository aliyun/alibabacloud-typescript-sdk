// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the file upload task failed.
   * 
   * @example
   * invalid url
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A52****
   */
  requestId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * *   **INIT**: The task is being initialized.
   * *   **activacted**: The task is activated.
   * *   **running**: The task is running.
   * *   **success**: The task is successful.
   * *   **partial**: The task is partially successful.
   * *   **fail**: The task failed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

