// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirusFileStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the processing task. This parameter is returned when Operation is set to AdminQuarantine. An empty string is returned when Operation is set to AdminTrust. You can view the execution result on the user terminal device by using the TaskExecutionInfo parameter in the ListVirusFileStatuses operation.
   * 
   * @example
   * v1:1024773
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

