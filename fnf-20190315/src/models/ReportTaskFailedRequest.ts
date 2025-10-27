// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportTaskFailedRequest extends $dara.Model {
  /**
   * @remarks
   * The cause of the failure. The value must be 1 to 4,096 characters in length.
   * 
   * @example
   * emptyString
   */
  cause?: string;
  /**
   * @remarks
   * The error code for the failed task. The error code must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * nill
   */
  error?: string;
  /**
   * @remarks
   * The token of the task whose execution you want to report. The task token is passed to the called service, such as Message Service (MNS) or Function Compute. For MNS, the value of this parameter can be obtained from a message. For Function Compute, the value of this parameter can be obtained from an event. For more information, see [Service integration modes](https://help.aliyun.com/document_detail/2592915.html).
   * 
   * This parameter is required.
   * 
   * @example
   * emptyString
   */
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      taskToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

