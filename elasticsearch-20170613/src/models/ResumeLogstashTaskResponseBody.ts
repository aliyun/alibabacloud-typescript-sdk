// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeLogstashTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * InstanceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * The specified cluster does not exist. Check the cluster status and try again.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FA05123-745C-42FD-A69B-AFF48EF9****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. Valid values:
   * 
   * - true: The task is resumed.
   * - false: The task failed to be resumed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

