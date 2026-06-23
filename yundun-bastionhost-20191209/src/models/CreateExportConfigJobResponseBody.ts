// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportConfigJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration backup export task.
   * 
   * > You can call the GetExportConfigJob operation to obtain the details of this task. Make sure to record the task ID.
   * 
   * @example
   * 1
   */
  jobId?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
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

